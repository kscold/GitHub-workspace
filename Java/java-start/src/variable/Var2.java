package variable;

public class Var2 {
    public static void main(String[] args) {
        // 정수
        byte b = 127; // -128 ~ 127
        short s = 32767; // -32,768 ~ 32,767
        int i = 2147483647; // -2,147,483,648 ~ 2,147,483,647 (약 20억)

        // -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
        long l = 9223372036854775807L; // 뒤에 대문자 L를 붙여주는 것을 권장

        //실수
        float f = 10.0f; // 실수는 뒤에 f를 붙여주는 것을 권장
        double d = 10.0;

    }
}
