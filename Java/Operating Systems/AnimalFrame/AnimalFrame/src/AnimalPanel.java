
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.util.Random;
import javax.swing.JPanel;

// This is a test

public class AnimalPanel extends JPanel {
    private boolean isDay;
    
    public AnimalPanel(int width, int height) {
        //Create the panel
        super();
        //Sets the size of the panel
        Dimension d = new Dimension(width, height);
        // I want to force this size so I use preferred, min and max
        // and set the same size for all of them
        setPreferredSize(d);
        setMinimumSize(d);
        setMaximumSize(d);
        isDay = true;
    }
    
    public void toggle() {
        if(isDay)
            isDay = false;
        else 
            isDay = true;
    }

    @Override
    public void paint(Graphics g) {
        // Create a Random to add the snow
        Random rand = new Random();
        // Just for calling it with easier names
        int width = getWidth();
        int height = getHeight();
        
        Color mint = new Color(197, 255, 255);
        Color lightBlue = new Color(221, 232, 255);
        Color lighterBlue = new Color(232, 238, 249);
        Color orange = new Color(254, 76, 0);
        Color blue = new Color(129, 149, 232);
        

        if(isDay) {
            // CREATE A BACKGROUND IN LIGHT BLUE
            g.setColor(mint);
            g.fillRect(0, 0, width, height);
        }
        else {
            // CREATE A BACKGROUND IN BLACK
            g.setColor(Color.BLACK);
            g.fillRect(0, 0, width, height);
        }
        
        // CREATE THE ICE
        g.setColor(Color.WHITE);
        g.fillRect(0, 300, width, height - 300);
       
        // CREATE THE WATER
        g.setColor(blue);
        g.fillRect(0, 450, width, height - 450);
        
        // CREATE THE MOUNTAINS
        g.setColor(lighterBlue);
        int[] xPoints = {100, 500, 300};
        int[] yPoints = {350, 350, 100};
        g.fillPolygon(xPoints, yPoints, 3);
        int[] xPoints2 = {500, 900, 700};
        int[] yPoints2 = {325, 325, 100};
        g.fillPolygon(xPoints2, yPoints2, 3);
        int[] xPoints3 = {700, 1000, 850};
        int[] yPoints3 = {300, 300, 50};
        g.fillPolygon(xPoints3, yPoints3, 3);
        g.setColor(Color.WHITE);
        int[] xPoints4 = {-100, 300, 100};
        int[] yPoints4 = {350, 350, 50};
        g.fillPolygon(xPoints4, yPoints4, 3);
        int[] xPoints5 = {700, 1000, 850};
        int[] yPoints5 = {350, 350, 200};
        g.fillPolygon(xPoints5, yPoints5, 3);
        
        // CREATE THE ISLAND
        g.setColor(Color.WHITE);
        g.fillOval(150, 485, 600, 600);
                
        //CREATE THE PENGUIN
        // Feet
        g.setColor(orange);
        g.fillOval(275, 625, 50, 30);
        g.fillOval(365, 625, 50, 30);
        // Body
        g.setColor(Color.BLACK);
        g.fillOval(250, 400, 200, 250);
        g.setColor(Color.WHITE);
        g.fillOval(260, 427, 180, 220);
        // Eyes
        g.setColor(Color.BLACK);
        g.fillOval(335, 485, 10, 10);
        g.fillOval(365, 485, 10, 10);
        // Peak
        g.setColor(orange);
        int[] xPoints6 = {350, 360, 355};
        int[] yPoints6 = {495, 495, 505};
        g.fillPolygon(xPoints6, yPoints6, 3);
        // Wings
        g.setColor(Color.BLACK);
        int[] xPoints7 = {260, 260, 220};
        int[] yPoints7 = {500, 545, 560};
        g.fillPolygon(xPoints7, yPoints7, 3);
        int[] xPoints8 = {440, 440, 480};
        int[] yPoints8 = {500, 545, 560};
        g.fillPolygon(xPoints8, yPoints8, 3);
        
        // CREATE THE SNOW
        g.setColor(Color.WHITE);
        for(int i = 0; i < 100; i++) {
            g.fillOval(rand.nextInt(width), rand.nextInt(height), 10, 10);
        }
    }
    
}
