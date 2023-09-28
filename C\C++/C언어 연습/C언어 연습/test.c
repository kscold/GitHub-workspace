#include <stdio.h>

int main(void)
{
    // 중요 ""은 문자열 ''은 문자
    //'A' 는 A와 같으며 "A"는 A \0과 같다.
    // NULL 문자는 개행 문자, 공백 문자, 탭 문자 직전까지 하나의 문자열로 인식하므로 Hello world 입력 시 Hello만 출력
    char str01[] = "This is a string"; // 크기를 지정하지 않은 문자열 변수 선언 17번째가 NULL
    char str02[7] = "string";          // 크기를 지정한 문자열 변수 선언
    //char str03[] = "Hello";            // 이 문자열과 밑에 문자들과 \0는 같다
    // 따라서 이 문자열을 저장하기 위해서는 Hello 문자열의 길이 5보다 1개 \0가 더 많은 6개가 필요
    //char str04[] = {'H', 'e', 'l', 'l', 'o', '\0'};
    printf("%c\n", str02[2]); // 문자 출력(배열 원소 전달) 0 1 2 r이 전달
    printf("%s\n", str02);    // 문자열 전달

    printf("문자열 str01에 저장되어 있는 문자열은 \"%s\"입니다.\n", str01);
    printf("문자열 str01에 저장되어 있는 문자열은 \"%s\"입니다.\n", str02);

    char str[8] = { 'h', 'e', 'l', 'l', 'o' }; // 하나 하나씩 문자 선언
    int i;
    for (i = 0; i < 5; i++)
        printf("%c", str[i]); // 이것을 더 편하게 사용하기 위해
    printf("\n");

    char str2[8] = "Hello"; // 한번에 배열 선언
    printf("%s\n", str2);   // 문자열은 %s로 받음

    // char str3[10] = "Hi Hello";
    // printf("%s\n", str3);
    // scanf("%s", str3); // 문자열을 받을 때에는 주소 값으로 안받아도 됨
    // // gets(str3); 문자열을 바로 입력받을 수 있음
    // printf("%s", str3);

    int str_len = 0;
    char str4[] = "string"; // 7번째가 널

    while (str4[str_len] != '\0') // NULL 문자가 나올 때까지 길이를 증가, NULL 문자와 같아지면 종료
    {
        str_len++;
    }
    printf("문자열의 길이 %d\n", str_len); // 문자열의 길이를 확인

    char* str5 = "Hello"; // 포인터를 이용한 배열 선언

    printf("%s!!\n", str5);

    // str5[0] ='h'; 포인터로 선언된 str5의 구성요소 문자는 변경 불가능 상수 영역이기 때문 프린트 자체는 가능 str5[0] 프린트하면 H
    // 반대로 char str[6] = "Hello"; 같이 선언된 문자열은 str = "world" 대체 불가능 다른 것은 가능
    str5 = "World"; // 포인터로 선언된 str5의 문자열로 대입은 가능, 그러나 중간요소를 변경하는 것은 불가능 상수영역이기 때문
    printf("%s\n", str5);

    // 중요! 문제
    char arr[6] = "Hello"; // 배열 선언 상수영역
    char* str6 = arr;      // 포인터로 연결, 상수영역을 변수영역으로 변경

    str6[0] = 'h'; // str6[0] 첫번째 요소를 h로 변경(원래 상수영역(배열)만 되고 변수 영역(포인터) 안되는데 연결해서 가능한 듯)
    printf("%s\n", str6);
    scanf("%s", str6); // str를 포인터이므로 받으만큼 배열 할당(변수영역이므로)
    printf("%s\n", str6);

    str6 = "World"; // str은 포인터이므로 World로 대치 이때 상수영역으로 바뀜
    printf("%s\n", str6);

    // str6[0] ='w'; 이 부분부터 오류 상수 영역을 건드리기 때문에
    // printf("%s\n", str6);
    // scanf("%s", str6);
    // printf("%s\n", str6);

    return 0;
}
