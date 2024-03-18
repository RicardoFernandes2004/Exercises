// C++ code
//

int led = 13;


void setup()
{
  pinMode(led, OUTPUT);


  
}

void loop()
{
  for(int x=0; x<3; x++){
  	digitalWrite(led, HIGH);
    delay(1000);
    digitalWrite(led, LOW);
    delay(1000);
  }
  delay(100);
  
  for(int x=0; x<3; x++){
  	digitalWrite(led, HIGH);
    delay(2000);
    digitalWrite(led, LOW);
    delay(1000);
  }
  delay(100);
  
  for(int x=0; x<3; x++){
  	digitalWrite(led, HIGH);
    delay(1000);
    digitalWrite(led, LOW);
    delay(1000);
  }
  delay(3000);
}