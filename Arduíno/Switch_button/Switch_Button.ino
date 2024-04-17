// C++ code
//
int ledVermelho = 13;
int ledAmarelo = 12;
int ledVerde = 8;
int ledLaranja = 7;
int ledAzul = 4;
int botao = 2;
int estado = 0;

void setup()
{
	pinMode(ledVermelho, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(ledVerde, OUTPUT);
  pinMode(ledLaranja, OUTPUT);
  pinMode(ledAzul, OUTPUT);
  pinMode(botao, INPUT);
  digitalWrite(botao, HIGH);
  
}

void loop()
{
	estado = digitalRead(botao);
  if (estado == LOW) {
  digitalWrite(ledLaranja, HIGH);
  delay(1000);
  digitalWrite(ledLaranja,LOW);
  delay(1000);
  digitalWrite(ledAzul, HIGH);
  delay(1000);
  digitalWrite(ledAzul,LOW);
  delay(1000);
  }
  else{
  digitalWrite(ledVermelho, HIGH);
  delay(1000);
  digitalWrite(ledVermelho,LOW);
  delay(1000);
  digitalWrite(ledAmarelo, HIGH);
  delay(1000);
  digitalWrite(ledAmarelo,LOW);
  delay(1000);
  digitalWrite(ledVerde, HIGH);
  delay(1000);
  digitalWrite(ledVerde,LOW);
  delay(1000);   
  }
    
    
}