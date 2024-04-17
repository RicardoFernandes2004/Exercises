int sensor = A0;
int ldrrecebido = 0;
int verde = 11;
int vermelho = 10;
int amarelo = 12;
int buzina = 9;

    
void setup()
{
pinMode(sensor, INPUT);
pinMode(amarelo, OUTPUT); 
pinMode(verde, OUTPUT);
pinMode(vermelho, OUTPUT); 
pinMode(buzina, OUTPUT); 
Serial.begin(9600);
}

void loop()
{
ldrrecebido = analogRead (sensor);  
Serial.println(ldrrecebido);
delay(200);
  
if (ldrrecebido < 103) {
digitalWrite(vermelho, LOW);
  digitalWrite(verde, HIGH);
  digitalWrite(amarelo, LOW);
    digitalWrite(buzina, LOW);


}
  
else if (ldrrecebido >= 103 && ldrrecebido < 206) {
digitalWrite(amarelo, HIGH);
    digitalWrite(verde, LOW);
  digitalWrite(vermelho, LOW);
digitalWrite(buzina, HIGH);
delay(3000);
digitalWrite(buzina, LOW);
delay(1000);
 
}
  
else {
digitalWrite(verde, LOW);
digitalWrite(vermelho, HIGH);
digitalWrite(amarelo, LOW);

}
  
}