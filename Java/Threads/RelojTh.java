public class RelojTh extends Thread {
    
	private int time, hora=0, min=0;  //Asignamos valores de tiempo iniciales
	private int stop = 120;         	//Tiempo de ejecución
    
	public RelojTh(int time) {
    	this.time = time;
	}
    
	@Override
	public void run() {
    	while(stop>=0){
    	if(time >= 60){
        	min++;
        	time =0;
    	}
    	if (min > 59 ){
        	hora++;
        	min=0;
    	}
    	if (hora >24){
        	hora=0;
        	min=0;
        	time=0;
    	}
   	 
    	System.out.println(hora + " : " + min + " : " + time);
    	try {
        	Thread.sleep(1000);
    	}
    	catch(InterruptedException e) {
        	e.printStackTrace();
    	}
    	time++;
    	stop--;
    	}
	}

	public static void main(String[] args) {
    	RelojTh t1 = new RelojTh(0);
    	t1.start();

	}
    
}
