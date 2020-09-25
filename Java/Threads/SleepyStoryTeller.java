/**

* @author rosaguadalupeparedesjuarez

*/

public class SleepyStoryTeller extends Thread {

    private String tale;

    public SleepyStoryTeller(String s) {

        this.tale = s;

    }

    public void run() {

        String[] split = tale.split(" ");

        for(int i=0; i < split.length; i++) {

            System.out.println(split[i]);

            try {

                this.sleep(1000);

            }

            catch(InterruptedException ie) {

                ie.printStackTrace();

            }

        }

}

public static void main(String[] args) {

    SleepyStoryTeller teller = new SleepyStoryTeller ("From Edgar Allan Poe: She whom I loved in youth, and of whom I now pen calmly and distinctly these remembrances, was the sole daughter of the only sister of my mother long departed. Eleonora was the name of my cousin. We had always dwelled together, beneath a tropical sun, in the Valley of the Many-Colored Grass. No unguided footstep ever came upon that vale; for it lay away up among a range of giant hills that hung beetling around about it, shutting out the sunlight from its sweetest recesses. No path was trodden in its vicinity; and, to reach our happy home, there was need of putting back, with force, the foliage of many thousands of forest trees, and of crushing to death the glories of many millions of fragrant flowers. Thus it was that we lived all alone, knowing nothing of the world without the valley -- I, and my cousin, and her mother.");

    teller.start();

    }

}