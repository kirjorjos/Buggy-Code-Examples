public class JavaFinallyReturn {
    public static int getValue() {
        try {
            return 1;
        } finally {
            return 2; // Overwrites try return
        }
    }

    public static void main(String[] args) {
        System.out.println(getValue()); // Prints 2
    }
}
