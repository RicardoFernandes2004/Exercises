#include <LiquidCrystal.h>
#include <DHT.h>

#define DHTPIN 2 
#define DHTTYPE DHT11 

DHT dht(DHTPIN, DHTTYPE);

LiquidCrystal lcd(8, 7, 6, 5, 4, 3);

int sensor = A0;
int ldrrecebido = 0;
int verde = 11;
int vermelho = 10;
int amarelo = 12;
int buzina = 9;

void setup() {
  pinMode(sensor, INPUT);
  pinMode(amarelo, OUTPUT); 
  pinMode(verde, OUTPUT);
  pinMode(vermelho, OUTPUT); 
  pinMode(buzina, OUTPUT); 
  Serial.begin(9600);
  dht.begin();
  lcd.begin(16, 2);
}

void loop() {
  ldrrecebido = analogRead(sensor);  
  Serial.println(ldrrecebido);
  delay(200);
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(t) || isnan(h)) {
    Serial.println("Failed to read from DHT");
  } else {
    Serial.print("Umidade: ");
    Serial.print(h);
    Serial.print(" %t");
    Serial.print("Temperatura: ");
    Serial.print(t);
    Serial.println(" *C");
  }

  if (ldrrecebido < 338) {
    digitalWrite(vermelho, LOW);
    digitalWrite(verde, HIGH);
    digitalWrite(amarelo, LOW);
    digitalWrite(buzina, LOW);
    lcd.clear();
    lcd.print("Lum: OK");
    lcd.setCursor(0, 1);
    lcd.print("Lum. =");
    lcd.print(ldrrecebido);
    lcd.setCursor(1, 0);
    delay(4000);
  } else if (ldrrecebido >= 338 && ldrrecebido < 676) {
    digitalWrite(amarelo, HIGH);
    digitalWrite(verde, LOW);
    digitalWrite(vermelho, LOW);
    digitalWrite(buzina, HIGH);
    delay(3000);
    digitalWrite(buzina, LOW);
    delay(1000);
    lcd.clear();
    lcd.print("Lum: ALERTA");
    lcd.setCursor(0, 1);
    lcd.print("Lum. =");
    lcd.print(ldrrecebido);
    lcd.setCursor(1, 0);
    delay(4000);
  } else {
    digitalWrite(verde, LOW);
    digitalWrite(vermelho, HIGH);
    digitalWrite(amarelo, LOW);
    digitalWrite(buzina, HIGH);
    lcd.clear();n 
    lcd.print("Lum: ALTA");
    lcd.setCursor(0, 1);
    lcd.print("Lum. =");
    lcd.print(ldrrecebido);
    lcd.setCursor(1, 0);
    delay(4000);
  }

  if (t < 10) {
    lcd.clear();
    lcd.print("Temp. BAIXA");
    lcd.setCursor(0, 1);
    lcd.print("Temp. =");
    lcd.print(t);
    lcd.setCursor(1, 0);
    delay(4000);
  } else if (t <= 13) {
    lcd.clear();
    lcd.print("Temperatura OK");
    lcd.setCursor(0, 1);
    lcd.print("Temp. =");
    lcd.print(t);
    lcd.setCursor(1, 0);
    delay(4000);
  } else {
    lcd.clear();
    lcd.print("Temp. ALTA");
    lcd.setCursor(0, 1);
    lcd.print("Temp. =");
    lcd.print(t);
    lcd.setCursor(1, 0);
    delay(4000);
  }

  if (h < 60) {
    lcd.clear();
    lcd.print("Umidade BAIXA");
    lcd.setCursor(0, 1);
    lcd.print("Umidade =");
    lcd.print(h);
    lcd.setCursor(1, 0);
    delay(4000);
  } else if (h <= 80) {
    lcd.clear();
    lcd.print("Umidade OK");
    lcd.setCursor(0, 1);
    lcd.print("Umidade =");
    lcd.print(h);
    lcd.setCursor(1, 0);
    delay(4000);
  } else {
    lcd.clear();
    lcd.print("Umidade ALTA");
    lcd.setCursor(0, 1);
    lcd.print("Umidade =");
    lcd.print(h);
    lcd.setCursor(1, 0);
    delay(4000);
  }
}
