
  int trigger = 13;
  int echo = 12;
  float dist = 0;



void setup() {
  // put your setup code here, to run once:
  
  pinMode(trigger,OUTPUT);
  pinMode(echo, INPUT);
  Serial.begin(9600);

  

}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(trigger,LOW);
  delayMicroseconds(5);
  digitalWrite(trigger,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger,LOW);

  dist = pulseIn(echo,HIGH);
  dist = dist/58;

  Serial.println(dist);

}
