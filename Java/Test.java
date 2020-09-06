/*public class Test {

    // Split the str by commas
    static String[] getValues(String str) {
        return str.split("[,]", 0);
    }

    public static void main(String[] args) {
        // Get values
       String [] res = getValues("32,45,24,13");
       
       // Print result
       for(int i=0; i<res.length; i++) {
          System.out.println(res[i]);
       }
    }
}*/

import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.border.TitledBorder;
public class Test {
   public static void main(String[] args) {
      JFrame frame = new JFrame();
      JPanel panel = new JPanel();
      panel.setBorder(BorderFactory.createTitledBorder(
         BorderFactory.createEtchedBorder(), "ODI Rankings", TitledBorder.CENTER, TitledBorder.TOP));
         String[] duration = {"6","3","2","4"};
         String[] time = {"0","1","3","5"};
         String[] labels = {"P0","P1","P3","P5"};
   
         
         int suma = 0;
         
         for (int x=0; x < duration.length; x++) {
             suma = suma + Integer.parseInt(duration[x]);
         }
        System.out.println("SUMA: " + suma);

            String[][] rec = new String[duration.length][2];

        
          
          for (int x=0; x < rec.length; x++) {
           for (int y=0; y < rec[x].length; y++) {
             if (y==1) {
               rec[x][y] = time[x];
             } else {
               rec[x][y] = duration[x];
             }
           }
         }

      String[] header = { "Process", "Time"};
      JTable table = new JTable(rec, header);
      panel.add(new JScrollPane(table));
      frame.add(panel);
      frame.setSize(550, 400);
      frame.setVisible(true);
   }

}