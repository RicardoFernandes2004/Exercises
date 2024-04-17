// C++ code
//
#include <Servo.h>

int servoPin = 9;
int botao = 2;
int estado = 0;
Servo servoMotor;

void setup(){
  
  pinMode(servoPin, OUTPUT);
  Serial.begin(9600);
  pinMode(botao, INPUT);
  digitalWrite(botao,HIGH);
  
  //Anexa objeto do tipo Servo ao pino do servo
  servoMotor.attach(servoPin);

}

void loop(){
  	estado = digitalRead(botao);
  if (estado == LOW) {
  servoMotor.write(0);
  delay(300);
  Serial.println("o angulo é: " + String(servoMotor.read()));
  
  servoMotor.write(90);
  delay(300);
  Serial.println("o angulo é: " + String(servoMotor.read()));
  
    servoMotor.write(180);
  delay(300);
  Serial.println("o angulo é: " + String(servoMotor.read()));
  }
  else{
  servoMotor.write(0);
  delay(300);
  }
}
    
    
	
  

// C++ code
//


