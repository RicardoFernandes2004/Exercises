// C++ code
//
int trigger = 7;
int echo = 8;
float dist = 0;
int ledVermelho = 13;
int ledAmarelo = 4;
int ledVerde = 12;

void setup()
{
pinMode(trigger,OUTPUT);
pinMode(ledVermelho, OUTPUT);
pinMode(ledAmarelo, OUTPUT);
pinMode(ledVerde, OUTPUT);
pinMode(echo, INPUT);
Serial.begin(9600);
}

void loop()
{
digitalWrite(trigger,LOW);
delayMicroseconds(5);
digitalWrite(trigger,HIGH);
delayMicroseconds(10);
digitalWrite(trigger,LOW);

dist = pulseIn(echo,HIGH);
dist = dist/58;
  
  if (dist >= 50){
	digitalWrite(ledVerde,HIGH);
  	digitalWrite(ledAmarelo,LOW);
    digitalWrite(ledVermelho,LOW);
  }
    else if (dist < 50 && dist >=20){
    digitalWrite(ledAmarelo,HIGH);
  	digitalWrite(ledVerde,LOW);
    digitalWrite(ledVermelho,LOW);
    }
  else {
    digitalWrite(ledVermelho,HIGH);
    digitalWrite(ledVerde,LOW);
    digitalWrite(ledAmarelo,LOW);
  }
  }
    
