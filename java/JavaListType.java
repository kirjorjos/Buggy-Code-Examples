import java.util.*;

public class JavaListType {
    public static void main(String[] args) {
        List list = new ArrayList(); // Raw type
        list.add("Hello");
        list.add(10);
        
        for (Object obj : list) {
            String s = (String) obj; // Throws ClassCastException for 10
            System.out.println(s);
        }
    }
}
