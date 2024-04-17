// C++ code
//
#include <Servo.h>

int led = 12;
int trigger = 7;
int echo = 8;
float dist = 0;
int servoPin = 9;
Servo servoMotor;

void setup(){
  
  pinMode(led,OUTPUT);
  pinMode(servoPin, OUTPUT);
  Serial.begin(9600);
  pinMode(trigger,OUTPUT);
  pinMode(echo, INPUT);
  
  //Anexa objeto do tipo Servo ao pino do servo
  servoMotor.attach(servoPin);

}

void loop(){
  
  digitalWrite(trigger,LOW);
  delayMicroseconds(5);
  digitalWrite(trigger,HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger,LOW);

	dist = pulseIn(echo, HIGH);
	dist = dist/58;
  Serial.println("Distancia = " + String(dist) + "cm");
  
  if (dist <= 100){
	
    digitalWrite(led,HIGH);
    servoMotor.write(90);
  	
  }
  else {
    digitalWrite(led,LOW);
    delay(3000);
    servoMotor.write(0);
  	
  }
    
}

  