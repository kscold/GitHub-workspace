#include <stdio.h>

int main(void)
{
    // 2차원 문자 배열 이용
    int i;
    char num[3][5] = {"zero", "one", "two"}; // 행열 설정과 같음 [3]은 num[0], num[1], num[2]이고 [5]는 배열 크기 0~4까지
    for (i = 0; i < 3; ++i)
        printf("%s\n", num[i]);

    char *pnum0 = "zero"; // 포인터를 이용한 문자열 선연
    char *pnum1 = "one";
    char *pnum2 = "two";
    printf("%s\n", pnum0);
    printf("%s\n", pnum1);
    printf("%s\n", pnum2);

    char *pnum[3] = {"zero", "one", "two"}; // 포인터를 벼열로 묶기 문자열을 하나의 원소로 봄(하나 원소가 상수 영역임)
    for (i = 0; i < 3; ++i)
        printf("%s\n", pnum[i]);
}