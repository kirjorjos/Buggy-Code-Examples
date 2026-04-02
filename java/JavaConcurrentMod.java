import java.util.*;

public class JavaConcurrentMod {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
        for (String s : list) {
            if (s.equals("B")) {
                list.remove(s); // Throws exception
            }
        }
    }
}
