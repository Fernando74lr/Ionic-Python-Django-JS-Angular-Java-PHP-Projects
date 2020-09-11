public class Process {
  String name;
  int burstTime;
  int originalBurstTime;
  int arrivalTime;
  int waitingTime;
  int totalTime;
  boolean enabled;
  public Process (String name, int burstTime, int arrivalTime) {
    this.name = name;
    this.burstTime = burstTime;
    this.originalBurstTime = burstTime;
    this.arrivalTime = arrivalTime;
    this.totalTime = 0;
    this.waitingTime = 0;
    this.enabled = false;
  }

  public void print() {
    System.out.println(this.name + "\t" + this.waitingTime + "\t" + this.totalTime + "\t" + this.burstTime + "\t" + this.arrivalTime);
  }
}