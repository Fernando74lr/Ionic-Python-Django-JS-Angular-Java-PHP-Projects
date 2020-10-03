/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 

public class SimpleCounter {
    
    private int c = 0;

    public synchronized void increment() {
        // recupera el valor, incrementa y guarda
        c++;
    }

    public synchronized void decrement() {
        // recupera el valor, decrementa y guarda
        c--;
    }

    public synchronized int value() {
        return c;
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        SimpleCounter sc = new SimpleCounter();
        Producer p = new Producer(sc);
        Consumer c = new Consumer(sc);
        p.start();
        c.start();
    }
    
    static class Producer extends Thread {
        private SimpleCounter counter;

        public Producer(SimpleCounter c) {
            counter = c;
        }

        @Override
        public void run() {
            System.out.println("Inicio del Thread Productor");
            for(int i = 0; i < 1000; i++) {
                synchronized(counter) {
                    counter.increment();
                    System.out.println("P:" + counter.value());
                }
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println("Fin del Thread Productor");
        }
    }
    
    static class Consumer extends Thread {
        private SimpleCounter counter;

        public Consumer(SimpleCounter c) {
            counter = c;
        }

        @Override
        public void run() {
            System.out.println("Inicio del Thread Consumidor");
            for(int i = 0; i < 3000; i++) {
                synchronized(counter) {
                    counter.decrement();
                    System.out.println("C:" + counter.value());
                }
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println("Fin del Thread Consumidor");
        }
    }
}

