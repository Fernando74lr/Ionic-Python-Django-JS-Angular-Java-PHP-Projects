import java.util.*; 
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

public class queueTest {
  private static void printProcesses(AbstractQueue<Process> queue) {
    Process[] processes = queue.toArray(new Process[0]);
    System.out.println("P" + "\t" + "WT" + "\t" + "TAT" + "\t" + "BT" + "\t" + "AT");
    for (int i = 0; i < processes.length; i++) {
      processes[i].print();
    }
  }

  private static int getTotalBurstTime(AbstractQueue<Process> queue) {
    Process[] processes = queue.toArray(new Process[0]);
    int totalBurstTime = 0;
    for (int i = 0; i < processes.length; i++) {
      totalBurstTime = totalBurstTime + processes[i].burstTime;
    }

    return totalBurstTime;
  }

  private static void addWaitingTime(AbstractQueue<Process> queue) {
    Process[] processes = queue.toArray(new Process[0]);
    int totalBurstTime = 0;
    for (int i = 1; i < processes.length; i++) {
      if (processes[i].enabled == true) {
        processes[i].waitingTime = processes[i].waitingTime + 1;
      }
    }
  }


  private static void enableProcesses(AbstractQueue<Process> queue) {
    Process[] processes = queue.toArray(new Process[0]);
    for (int i = 0; i < processes.length; i++) {
      if (processes[i].enabled == false) {
        processes[i].enabled = true;
      }
    }
  }

  private static double getAverageWaitingTime(AbstractQueue<Process> queue) {
    double averageWaitingTime = 0;
    Process[] processes = queue.toArray(new Process[0]);
    for (int i = 0; i < processes.length; i++) {
      averageWaitingTime = averageWaitingTime + processes[i].waitingTime;
    }

    double length = processes.length;

    return averageWaitingTime / length;
  }

  private static double getAverageTurnAroundTime(AbstractQueue<Process> queue) {
    double averageTurnAroundTime = 0;
    Process[] processes = queue.toArray(new Process[0]);
    for (int i = 0; i < processes.length; i++) {
      averageTurnAroundTime = averageTurnAroundTime + processes[i].totalTime;
    }

    double length = processes.length;
    return averageTurnAroundTime / length;
  }

  public static void printAverageTimes(AbstractQueue<Process> finishedProcesses) {
    double averageWaitingTime = getAverageWaitingTime(finishedProcesses);
    System.out.println("AVERAGE WAITING TIME: " + averageWaitingTime);
    double averageTurnAroundTime = getAverageTurnAroundTime(finishedProcesses);
    System.out.println("AVERAGE TAR TIME: " + averageTurnAroundTime);
  }

  public static void registerProcesses(AbstractQueue<Process> processes, int n, Scanner entrada) {
    for(int i=0; i<n; i++) {
      System.out.println("Enter Name for process " + (i + 1));
      String name = entrada.nextLine();
      System.out.println("Enter Burst Time for process " + (i + 1));
      int burstTime = Integer.parseInt(entrada.nextLine());
      System.out.println("Enter Arrival Time for process " + (i + 1));
      int arrivalTime = Integer.parseInt(entrada.nextLine());
      processes.add(new Process(name, burstTime, arrivalTime));
    }
  }

  public static void printTitle(String title) {
    System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
      System.out.println(title);
      System.out.println("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
  }


  public static void printProcess(Process currentProcess, String title, int delay) {
    System.out.println(title);
    System.out.println("P" + "\t" + "WT" + "\t" + "TAT" + "\t" + "BT" + "\t" + "AT");
    currentProcess.print();
    System.out.println("\n");
    try {
      TimeUnit.MILLISECONDS.sleep(delay);
    } catch(Exception e) {
      System.out.println("NO SE PUDO HACER EL DELAY");
    }
  }

  public static void refillQuantum(Process currentProcess, AbstractQueue<Process> cpuQueue, int quantum, int originalQuantum) {
    cpuQueue.offer(currentProcess);
    quantum = originalQuantum;
  }

  public static void handleFinishedProcess(Process finishedProcess, AbstractQueue<Process> finishedProcesses, int quantum, int originalQuantum) {
    finishedProcess.totalTime = finishedProcess.originalBurstTime + finishedProcess.waitingTime;
    finishedProcesses.offer(finishedProcess);
    quantum = originalQuantum;
  }

  public static void main(String args[]) {
    Scanner entrada = new Scanner(System.in);
    int n = 0;
    int quantum = 0;
    System.out.println("Enter number of process:");
    n = Integer.parseInt(entrada.nextLine());
    System.out.println("Enter quantum:");
    quantum = Integer.parseInt(entrada.nextLine());
    int originalQuantum = quantum;
    AbstractQueue<Process> processes = new LinkedBlockingQueue<Process>(); 
    AbstractQueue<Process> cpuQueue = new LinkedBlockingQueue<Process>();
    AbstractQueue<Process> finishedProcesses = new LinkedBlockingQueue<Process>();  
    registerProcesses(processes, n, entrada);

    int totalBurstTime = getTotalBurstTime(processes);

    for (int i = 0; i <=  totalBurstTime; i++) {
      enableProcesses(cpuQueue);
      printTitle("TIME NUMBER " + i);
      if (processes.size() > 0) {
        Process top = processes.peek();
        if (top.arrivalTime == i) {
          printProcess(top, "ENTERING TO CPU IN TIME " + i, 1500);
          cpuQueue.offer(processes.poll());
        }
      }
      if (cpuQueue.size() > 0) {
        Process currentProcess = cpuQueue.peek();
        if (currentProcess.enabled == true) {
          printProcess(currentProcess, "CURRENT PROCESS IN CPU IN TIME " + i, 1500);
          currentProcess.burstTime = currentProcess.burstTime - 1;
          quantum = quantum - 1;
          addWaitingTime(cpuQueue);
          if (currentProcess.burstTime == 0) {
            Process finishedProcess = cpuQueue.poll();
            handleFinishedProcess(finishedProcess, finishedProcesses, quantum, originalQuantum);
          }
          if (quantum == 0) {
            Process currentProcessUnshifted = cpuQueue.poll();
            refillQuantum(currentProcessUnshifted, cpuQueue, quantum, originalQuantum);
          }
        }
      }
    }

    printProcesses(finishedProcesses);
    printAverageTimes(finishedProcesses);

    // queue.add(myProcess);
    // System.out.println("Queue contains" + queue.toString());
    // Process head = queue.peek();
    // getTotalBurstTime(queue);
    // head.burstTime = head.burstTime + 1;
    // System.out.println(head.burstTime);
    // System.out.println("Hola mundo");
  }
}