library(data.table)
library(rvest)
lap_tables<-list(); races<-c()
### fe_web is the directory where I stored these locally; everything else should work with the zip file
for(w in list.files(pattern="Wikipedia.html")){
  race<-gsub(" - Wikipedia.html","",w,fixed = TRUE)
  race<-gsub(" ePrix","",race)
  lines<-readLines(w)
  race_dates<-c()
  try({
    race_date_lines<-lines[grep("Race details",lines)+1]
    if(length(race_date_lines)>0){
      for(i in 1:length(race_date_lines)){
        date_start<-regexpr('[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]',race_date_lines[i])[1]
        race_dates<-c(race_dates,substr(race_date_lines[i],date_start,date_start+9))
      }
    }
    race_date<-race_dates[1]
  })
  h<-minimal_html(paste(lines,collapse = " "))
  tables<-html_table(h,fill = TRUE)
  for(i in 1:length(tables)){
    if("Laps" %in% colnames(tables[[i]])){
      if(race %in% races){
        if(grepl("race ",race)){
          ### until Berlin there were only 1 & 2. Berlin 2020 was 3 pairs of races.
          this_number<-as.integer(substr(
            race,nchar(race),nchar(race)))+1
          this_race<-paste0(substr(race,1,nchar(race)-1),this_number)
          race<-this_race; race_date<-race_dates[this_number]
        } else {
        race<-paste(race,"race 2"); race_date<-race_dates[2]
        }
      }
      races<-c(races,race)
      tbl<-data.table(tables[[i]])
      tbl[,`:=`(race_name=race,race_date=race_date,rk_order=.I)]
      tbl<-tbl[substr(Laps,1,6)!="Source"]
      lap_tables[[length(lap_tables)+1]]<-tbl
    }
  }
}
lt<-rbindlist(lap_tables,fill = TRUE)

#######
####### CLEAN UP & EXTEND DATA
#######

if("Gap/Retired" %in% colnames(lt)){lt[,`Gap/Retired`:=NULL]} ### Inconsistent Column
setnames(lt,old=c("Pos.","No.","Time/Retired"),new=c("rank","car","time_retired"))
setnames(lt,old=colnames(lt),new=tolower(colnames(lt)))


### dates not in YYYY-MM-DD format
lt[race_name=="2016 Long Beach",race_date:="2016-04-02"]
lt[race_name=="2015 Long Beach",race_date:="2015-04-04"]
lt[race_name=="2015 Miami",race_date:="2015-03-14"]

### add season
lt[,season:=1]
lt[race_date>"2015-06-28",season:=season+1]
lt[race_date>"2016-07-03",season:=season+1]
lt[race_date>"2017-07-30",season:=season+1]
lt[race_date>"2018-07-15",season:=season+1]
lt[race_date>"2019-07-14",season:=season+1]
lt[race_date>"2020-10-01",season:=season+1]
races<-lt[,.(records=.N),.(race_date,season)]
races[,race_num:=frank(race_date),season]
lt<-merge(lt,races[,.(race_date,race_num)],"race_date")[order(race_date)]

### Team grouping using subjective, simplified naming (favoring current & works).
### Only Trulli hasn't continued in some form to a current (2020) team.
### Aguri/Techeetah, BMW-Andretti, Renault/Nissan, HWA/Mercedes.
teams<-lt[,.(car_races=.N
             ,races=uniqueN(race_name)
             ,seasons=uniqueN(season)
             ,first_season=min(season)
             ,last_season=max(season))
          ,team]
teams[,team_group:=""]
teams[team %in% c("Audi Sport ABT","ABT Schaeffler Audi Sport","Audi"),team_group:="Audi"]
teams[team %in% c("Andretti","Andretti Autosport","Amlin Andretti","Andretti-BMW"),team_group:="BMW-Andretti"]
teams[team %in% c("Virgin Racing","DS Virgin Racing","Virgin","Virgin-Citroën"
                  ,"Virgin-Citröen","Virgin-Audi")
      ,team_group:="Virgin"]
teams[team %in% c("Aguri","Amlin Aguri","team Aguri","Team Aguri"),team_group:="Techeetah"]
teams[team %in% c("e.dams-Renault","e.dams-Nissan","e.Dams-Renault","e.Dams-Nissan"
                  ,"Renault e.dams","Renault e.Dams"),team_group:="Nissan-Renault"]
teams[team %in% c("Venturi-Mercedes","Venturi Grand Prix","Venturi GP","Venturi"),team_group:="Venturi"]
teams[team %in% c("Trulli GP","Trulli"),team_group:="Trulli"]
teams[team %in% c("Techeetah-Renault","Techeetah-DS","Techeetah-Citroën"),team_group:="Techeetah"]
teams[team %in% c("NIO","NextEV TCR","NextEV NIO","NEXTEV TCR","China Racing"),team_group:="NIO-NextEV"]
teams[team %in% c("Porsche"),team_group:="Porsche"]
teams[team %in% c("HWA-Venturi","Mercedes"),team_group:="Mercedes"]
teams[team %in% c("Dragon-Penske","Dragon","Dragon Racing"),team_group:="Dragon"]
teams[team %in% c("Mahindra","Mahindra Racing"),team_group:="Mahindra"]
teams[team %in% c("Jaguar"),team_group:="Jaguar"]
### take a look
teams[order(team_group,first_season,last_season)]

### add Team_Group back to main data
lt<-merge(lt,teams[,.(team,team_group)],"team",all.x=TRUE)

### clean up driver names
lt[driver=="Salvador Duran",driver:="Salvador Durán"]
lt[driver=="Oriol Servia",driver:="Oriol Servià"]
lt[driver=="Nicolas Prost",driver:="Nico Prost"] ## both forms used frequently
lt[driver=="Nelson Piquet, Jr.",driver:="Nelson Piquet Jr."]
lt[driver=="Ma Qinghua",driver:="Ma Qing Hua"]
lt[driver=="Lucas Di Grassi",driver:="Lucas di Grassi"]
lt[driver=="Jean Eric Vergne",driver:="Jean-Éric Vergne"]

### add calculated column to extend points to most of the grid
### the grid size has varied from 18-24; to keep mostly constant
### we'll use top 17 for proxy/extended points, including DNFs
### this may be a better way of judging the slow from slowest (e.g. Ma)
### or it may be overly generous and the existing point system more useful
### it depends on your purpose, and it isn't clear what the goal is
#lt[,proxy_pts:=(18-pmin(18,rk_order))^2]  ## did not add this to the export; more for features, not raw data


### review races
lt[,.N,.(race_name,race_date,season,race_num)][order(race_date)]

### review final table, looking at pole-sitters
#lt[grid==1][order(race_date)
#            ,.(race_name,season,team_group,driver,proxy_pts,grid,rank,rk_order)]

lt<-merge(lt,data.table(rk_order=1:24,exp_pts=c(25,18,15,12,10,8,6,4,2,1,rep(0,14))),"rk_order",all.x=TRUE)
lt[,exp_pole:=ifelse(grid==1,3,0)]

### parse points. gets difficult due to the Wikipedia notes that get merged in, and we
###  do not have sufficient information to know fastest lap bonus, or occasionally pre-penalty pole
### but after the following manual parsing, the total points validated to the season pages
lt[,`:=`(exp_extra=0,pts_balance=0,final_points=0)]
lt[as.character(exp_pts+exp_pole)==points,`:=`(pts_balance=1,final_points=exp_pts+exp_pole)]
lt[pts_balance==0 & exp_pole==0 & exp_pts==0 & trimws(points) %in% c("","-","—")
   ,`:=`(pts_balance=1,final_points=0)]
lt[pts_balance==0 & exp_pole==0 & exp_pts==0 & is.na(points)
   ,`:=`(pts_balance=1,final_points=0)]
lt[pts_balance==0 & exp_pole==3 & exp_pts==0 & points %in% paste0("3",0:9)
   ,`:=`(pts_balance=1,final_points=3)]
lt[pts_balance==0 & exp_pole==3 & points %in% paste0(exp_pts,"+","3",0:9)
   ,`:=`(pts_balance=1,final_points=exp_pts+exp_pole)]
lt[pts_balance==0 & exp_pole==3 & points %in% paste0(exp_pts+exp_pole,0:9)
   ,`:=`(pts_balance=1,final_points=exp_pts+exp_pole)]
lt[pts_balance==0 & exp_pole==0 & points %in% paste0(exp_pts,"+","1",0:9)
   ,`:=`(pts_balance=1,final_points=exp_pts+1,exp_extra=1)]
lt[pts_balance==0 & exp_pole==0 & exp_pts==0 & points %in% paste0("1",0:9)
   ,`:=`(pts_balance=1,final_points=1,exp_extra=1)]
lt[pts_balance==0 & exp_pole==0 & exp_pts==0 & points %in% paste0("2",0:9)
   ,`:=`(pts_balance=1,final_points=2,exp_extra=2)]
lt[pts_balance==0 & substr(points,1,9)=="25+3+1+11"
   ,`:=`(pts_balance=1,final_points=30,exp_extra=2)]
lt[pts_balance==0 & substr(points,1,7)=="15+3+11"
   ,`:=`(pts_balance=1,final_points=19,exp_extra=1)]
lt[pts_balance==0 & substr(points,1,7)=="18+3+15"
   ,`:=`(pts_balance=1,final_points=22,exp_extra=1)]
lt[pts_balance==0 & substr(points,1,5)=="25+3+"
   ,`:=`(pts_balance=1,final_points=28+as.numeric(substr(points,6,6))
                                    ,exp_extra=as.numeric(substr(points,6,6)))]
lt[pts_balance==0 & exp_pts==25 & points %in% c("25+22","271")
   ,`:=`(pts_balance=1,final_points=27,exp_extra=2)]
lt[pts_balance==0 & points %in% c("18+356","153","6{","—5","—6")
   ,`:=`(pts_balance=1,final_points=exp_pts+exp_pole)]
lt[pts_balance==0 & points %in% c("189","15+1+37")
   ,`:=`(pts_balance=1,final_points=exp_pts+exp_pole+1,exp_extra=1)]
lt[pts_balance==0 & points %in% c("15+24","14","141","121","82","42","2+334","1+1+18")
   ,`:=`(pts_balance=1,final_points=exp_pts+exp_pole+2,exp_extra=2)]
lt[pts_balance==0 & points=="8+35+16",`:=`(pts_balance=1,final_points=12,exp_extra=1)]
lt[pts_balance==1 & points=="2+31",`:=`(pts_balance=1,final_points=5,exp_extra=2)]
## Prost won pole, but received 10 place penalty for prior race; still earned pole points, but started 11th
lt[driver=="Nico Prost" & race_name=="2014 Putrajaya",`:=`(pts_balance=1,final_points=15,exp_pole=3)]
lt[driver=="Oriol Servià" & race_name=="2014 Putrajaya",`:=`(pts_balance=1,final_points=6,exp_pole=0)]
## Rowland won pole, but received penalty for prior race; still earned pole points, but started 3rd
lt[driver=="Oliver Rowland" & race_name=="2019 Monaco",`:=`(pts_balance=1,final_points=21,exp_pole=3)]
lt[driver=="Jean-Éric Vergne" & race_name=="2019 Monaco",`:=`(pts_balance=1,final_points=25,exp_pole=0)]

### Validations
### Season1,2,3,4,5,6,7 all pts match Season page
lt[season==7,.(.N,pts=sum(final_points)),driver][order(-pts)]
  ### remove validation column
lt[,pts_balance:=NULL]
lt[,points:=NULL]

### Further cleanup on column names, closer to posting data set
setnames(lt,old=c("exp_pts","exp_pole","exp_extra","rk_order","final_points")
         ,new=c("pts_rank","pts_pole","pts_bonus","rank_num","points"))

### Export
fwrite(lt[,.(season,race_num,race_name,race_date,driver,car,team,team_group,rank,rank_num,grid
             ,laps,time_retired,pts_rank,pts_pole,pts_bonus,points)]
       ,"formula_e_race_results.csv")
