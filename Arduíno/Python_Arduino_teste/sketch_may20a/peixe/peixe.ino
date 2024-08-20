#include <Servo.h>

int servoPin = 9;
Servo servoMotor;

void setup() {
  Serial.begin(9600);
  pinMode(servoPin, OUTPUT);
}

void loop() {
  if (Serial.available() > 0){
    char angulo = Serial.read();
     servoMotor.write(angulo);
     delay(15);
   
  }
}


