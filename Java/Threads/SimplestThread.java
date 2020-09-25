
public class SimplestThread extends Thread {
    
    private String name;
    
    public SimplestThread(String name) {
        this.name = name;
    }
    
    @Override
    public void run() {
        /*for(int i = 0; i < 5000; i++)
            System.out.println("I'm " + name);*/
        System.out.println("Inicia " + name);
        try {
            Thread.sleep(4000);
        }
        catch(InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Fin de " + name);
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        // Create Objects.
        SimplestThread t1 = new SimplestThread("Thread 1");
        SimplestThread t2 = new SimplestThread("Thread 2");
        SimplestThread t3 = new SimplestThread("Thread 3");
        SimplestThread t4 = new SimplestThread("Thread 4");
        SimplestThread t5 = new SimplestThread("Thread 5");

        // Set Priorities.
        t1.setPriority(Thread.MAX_PRIORITY); // 10 by default
        t2.setPriority(3);
        t3.setPriority(Thread.NORM_PRIORITY); // 5 by default
        t4.setPriority(7); 
        t5.setPriority(Thread.MIN_PRIORITY); // 1 by default
        
        // Initialize Threads.
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();

        System.out.println("\nFin del main");
    }
    
}
