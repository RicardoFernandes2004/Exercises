int led1 = 8;
int led2 = 9;

void setup() {
pinMode(led1, OUTPUT);
pinMode(led2, OUTPUT);
Serial.begin(9600);

}

void loop() {
  if (Serial.available() > 0){
    char letra = Serial.read();
    if (letra == 'a'){
      digitalWrite(led1, HIGH);
    }
    else if(letra == 'b'){
      digitalWrite(led1, LOW);
    }
     else if(letra == 'c'){
      digitalWrite(led2, HIGH);
    }
     else if(letra == 'd'){
      digitalWrite(led2, LOW);
    }
  }
}


