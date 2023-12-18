package scope;

public class For {
    public static void main(String[] args) {
        int sum = 0;
        int endNum = 3;

        for (int i = 0; i < endNum; i++) {
            sum = sum + i;
            System.out.println("i = " + i + " sum = " + sum);
        }

    }

//    public static void main(String[] args) {
//        int sum = 0;
//        int i = 0;
//        int endNum = 3;
//
//        while (i < endNum) {
//            sum = sum + i;
//            System.out.println("i = " + i + " sum = " + sum);
//            i++;
//        }
//    }
}
