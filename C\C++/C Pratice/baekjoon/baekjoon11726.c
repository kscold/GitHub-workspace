#include <stdio.h>

int d[1001];

int dp(int x) {
    if(x == 1) return 1; // n이 1일 때, 가장 작은 직사각형인 (2 * 1) 크기를 채우는 방법은 세로 타일 하나만 사용하는 경우
    if(x == 2) return 2;
    if(d[x] != 0) return d[x];
    return d[x] = (dp(x - 1) + dp(x - 2)) % 10007;
}

int main(void){
    int x;
    scanf("%d", &x); // 첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)
    printf("%d", dp(x)); // n을 dp에 대입 2 * n 크기의 직사각형을 채우는 방법의 수
}
