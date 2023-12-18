public class Casting {

    public static void main(String[] args) {
        int intValue = 10;
        long longValue;
        double doubleValue;

        longValue = intValue;
        System.out.println("longValue = " + longValue);

        doubleValue = longValue;
        System.out.println("doubleValue = " + doubleValue);


        doubleValue = 20L; // 20을 long에 넣은 것
        System.out.println("doubleValue2 = " + doubleValue);

    }
}
