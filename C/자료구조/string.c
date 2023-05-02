#include <stdio.h>

int main(void)
{
    char str01[] = "This is a string"; // 크기를 지정하지 않은 문자열 변수 선언 17번째가 NULL
    char str02[7] = "string";          // 크기를 지정한 문자열 변수 선언

    printf("문자열 str01에 저장되어 있는 문자열은 \"%s\"입니다.\n", str01);
    printf("문자열 str01에 저장되어 있는 문자열은 \"%s\"입니다.\n", str02);

    char str[8] = {'h', 'e', 'l', 'l', 'o'}; // 하나 하나씩 문자 선언
    int i;
    for (i = 0; i < 5; i++)
        printf("%c", str[i]); // 이것을 더 편하게 사용하기 위해
    printf("\n");

    char str2[8] = "Hello"; // 한번에 배열 선언
    printf("%s\n", str2);   // 문자열은 %s로 받음

    char str3[10] = "Hi";
    printf("%s\n", str3);
    scanf("%s", str3); // 문자열을 받을 때에는 주소 값으로 안받아도 됨
    printf("%s", str3);

    int str_len = 0;
    char str4[] = "string"; //7번째가 널

    while (str4[str_len] != '\0') //NULL 문자가 나올 때까지 길이를 증가, NULL 문자와 같아지면 종료
    {
        str_len++;
    }
    printf("문자열의 길이 %d", str_len);  //문자열의 길이를 확인
}
