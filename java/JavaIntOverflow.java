public class JavaIntOverflow {
    public static void main(String[] args) {
        int max = Integer.MAX_VALUE;
        int next = max + 1;
        if (next > max) {
            System.out.println("Greater");
        } else {
            System.out.println("Wait, what? " + next);
        }
    }
}
