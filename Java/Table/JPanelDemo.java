import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;


public class JPanelDemo extends JFrame {
private String columnas[] = {"Auto", "Color", "Tipo"};
private Object celdas[][] = {{"Kia","Rojo", "C"},
    {"Toyota","Azul","C"},
    {"Lexus","Negro","B"},
    {"BMW","Verde","B"},
    {"Pagani", "Dorado", "A"},
    {"Ferrari", "Rojo", "A"}
};
private JTable tabla;

public JPanelDemo(){
    super("JTable Color");
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setLayout(new FlowLayout());
    setLocationRelativeTo(null);
    tabla = new JTable(celdas,columnas);
    RowsRenderer rr = new RowsRenderer(2);
    tabla.setDefaultRenderer(Object.class, rr);
    add(new JScrollPane(tabla));
    setVisible(true);
    pack();
}

public static void main(String[]args){
    JPanelDemo obj = new JPanelDemo();
}

}