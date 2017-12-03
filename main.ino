
#define SEND_INTERVAL 1000

volatile int BPM;                   
volatile int Signal;                
volatile int IBI = 600;             
volatile boolean Pulse = false;     
volatile boolean QS = false;        
unsigned long int currentTime = 0;
unsigned long int elapsedTime = 0;

void setup()
{
  Serial.begin(9600);             
  interruptSetup();                 
}
//  Where the Magic Happens
void loop()
{
  currentTime = millis();
  if((currentTime - elapsedTime) > SEND_INTERVAL)
  {
    elapsedTime = currentTime;
    Serial.println(BPM);
    //Serial.print(",");
    //Serial.print(IBI);
    //Serial.print(",");
    //Serial.println(Signal);
  }
  delay(25);
}
