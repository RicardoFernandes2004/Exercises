// C++ code
//

int ledVermelho = 13;
int ledAmarelo = 12;
int ledVerde = 8;

void setup()
{
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(ledVerde, OUTPUT);

  
}

void loop()
{
  digitalWrite(ledVermelho, HIGH);
  delay(1000);
  digitalWrite(ledVermelho, LOW);
  delay(1000);
  digitalWrite(ledVerde, HIGH);
  delay(1000);
  digitalWrite(ledAmarelo, HIGH);
  delay(1000);
  digitalWrite(ledVerde, LOW);
  delay(1000);  
  digitalWrite(ledAmarelo, LOW);
  delay(1000);

}