public class xd {

    // Split the str by commas
    static String[] getValues(String str) {
        return str.split("[,]", 0);
    }

    public static void main(String[] args) {
      int[] data = {1,2,3,4,5};
      int[] data2 = {10,11,12,13,14};

      int[][] rec = new int[data.length][2];

      for (int x=0; x < rec.length; x++) {
        for (int y=0; y < rec[x].length; y++) {
          if (y==1) {
            rec[x][y] = data2[x];  
          } else {
            rec[x][y] = data[x];
          }
        }
      }

      for (int x=0; x < rec.length; x++) {
        for (int y=0; y < rec[x].length; y++) {
          System.out.println("rec" + "["+x+"]"+"["+y+"]");
          System.out.println(rec[x][y]);
        }
      }
    }
}