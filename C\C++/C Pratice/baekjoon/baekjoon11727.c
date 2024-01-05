#include <stdio.h>

int D[1001];

int dp(int x){
    if(x == 1)
        return 1;
    if(x == 2)
        return 3;
    
    if(D[x] != 0)
        return D[x];
    
    return D[x] = (dp(x - 1) + 2 * dp(x - 2)) % 10007;
}


int main(void){
    int n;
    scanf("%d", &n);
    printf("%d", dp(n));
}
