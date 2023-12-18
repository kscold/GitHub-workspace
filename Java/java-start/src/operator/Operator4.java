package operator;

public class Operator4 {

    public static void main(String[] args) {
        int sum3 = 2 * 2 + 3 * 3;
        int sum4 = (2 * 2) + (3 * 3); // 위와 같은 식이지만 가로로 묶어주는 것이 우선순위 가시성에서 유리하다.
        System.out.println(sum3);
        System.out.println(sum4);
    }
}
