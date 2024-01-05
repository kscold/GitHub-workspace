#include<stdio.h>

void multiply_matrix(int m1[], int m2[], int m3[], int m, int n, int l)
{
    int i,j,k;
    for (i = 0; i < m; i++)
        for (j = 0; j < l; j++) {
            m3[i * l + j] = 0;
            for (k = 0; k < n; k++)
                m3[i * l + j] += m1[i * n + k] * m2[k * l + j];
        }
}



int main(void) {
    int r1=4,c1=2,r2=2,c2=3;
    
    
    int m1[4][2] = { {1, 2}, {3 ,4}, {5 ,6}, {7 ,8} };
    int m2[2][3] = { {1 ,2 ,3}, {2 ,3 ,4} };
    
    
    int m3[4][3] = {{0,0,0},{0,0,0},{0,0,0},{0,0,0}};
    
    multiply_matrix(m1, m2, m3,r1,c1,c2);
    
    
    
    for(int i=0;i<r1;i++){
        for(int j=0;j<c2;j++){
            printf("%d ",m3[i][j]);
        }
        printf("\n");
    }
    
    return 0;
}

