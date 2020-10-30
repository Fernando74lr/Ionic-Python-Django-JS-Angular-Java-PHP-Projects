public class Test {

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
}
