package simplestoryteller;

/**
 *
 * @author rosaguadalupeparedesjuarez
 */
public class SimpleStoryTeller {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws InterruptedException {
        // Tiempo de espera antes de interrumpir el loop (1 hora)
        //long patience = 1000 * 60 * 60;
        // Tiempo de espera antes de interrumpir el loop (8 segundos)
        long patience = 1000 * 8;
        threadMessage("Let's the story begin ->", "Main");
        long startTime = System.currentTimeMillis();
        Thread t = new Thread(new StoryTellerLoop());
        t.start();
        threadMessage("Waiting for the story to end...", "Main");
        while(t.isAlive()) {
            threadMessage("Still waiting...", "Main");
            // esperar un segundo a que termine el Thread
            t.join(1000);
            long currentTime = System.currentTimeMillis();
            if(currentTime - startTime > patience && t.isAlive()) {
                threadMessage("I'm done waiting!!", "Main");
                t.interrupt();
                // Esperar a que termine
                t.join();
            } 
        }
        threadMessage("Finally!!", "Main");
    }
    
    public static void threadMessage(String message, String name) {
        System.out.format("%s: %s%n", name, message);
    }
    
    private static class StoryTellerLoop implements Runnable {
        @Override
        public void run() {
            String poem[] = {
                "From Edgar Allan Poe:",
                "She whom I loved in youth,",
                "and of whom I now pen calmly and distinctly these remembrances,",
                "was the sole daughter of the only sister of my mother long departed."
            };
            try {
                for(int i = 0; i < poem.length; i++) {
                    threadMessage(poem[i], "Story Teller");
                    // Pause for 4 seconds
                    Thread.sleep(4000);
                }
            }
            catch(InterruptedException e) {
                threadMessage("I wasn't done!", "Story Teller");
            }
        }
    }
    
}
