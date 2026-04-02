public class JavaNPE {
    public static void main(String[] args) {
        Integer val = null;
        int result = val + 1; // Unboxing null
        System.out.println(result);
    }
}
