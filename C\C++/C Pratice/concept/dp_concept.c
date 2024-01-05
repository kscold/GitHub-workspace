#include <stdio.h>

// 피보나치 수열을 구할려면 다이나믹 프로그래밍을 사용해서 구하는 것이 좋음 밑의 노드 값 두 개를 합쳐 상위 노드값을 구하기 때문에 첫번째 항과 두번째 항 모두 1로 시작을 함

int d[100];

int dp(int x){
    if (x == 1) return 1; // 기본 첫번째 항 (노드 1)
    
    if (x == 2) return 1; // 기본 두번째 항 (노드 2)
    
    if (d[x] != 0) return d[x]; // 한번 탐색한 데이터는 저장하기 위해서 만듬
    
    return d[x] = dp(x - 1) + dp(x - 2);
    
}

int main(void){
    printf("%ld", dp(50));
}
