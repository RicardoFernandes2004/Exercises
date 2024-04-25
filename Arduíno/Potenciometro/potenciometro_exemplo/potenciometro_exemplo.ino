#include <Servo.h>

int servoPin = 6;
int potPin = A0;
int potValor = 0;
int servoPos = 0;

Servo motor;


void setup() {
  // put your setup code here, to run once:
  pinMode(servoPin, OUTPUT);
  motor.attach(servoPin);
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  potValor = analogRead(potPin);
  servoPos = map(potValor, 0, 1023, 0, 180);
  motor.write((servoPos));
  Serial.print(("posição atual: "));
  Serial.println(servoPos);

}
