#include <stdio.h>
#include <time.h>

#define MATRIX_SIZE 10

struct Mat
{
    int arr[MATRIX_SIZE][MATRIX_SIZE];
};

int main()
{
    int i, j;
    struct Mat m;
    struct Mat r;

    clock_t t;
    double time_taken;

    t = clock();
    printf("Before:\n");
    for (i = 0; i < MATRIX_SIZE; i++)
    {
        for (j = 0; j < MATRIX_SIZE; j++)
        {
            m.arr[i][j] = i * MATRIX_SIZE + j;
            printf("\t%d", m.arr[i][j]);
        }
        printf("\n");
    }

    printf("After:\n");
    for (i = 0; i < 39999999; i++)
    {
        r.arr[9][0] = m.arr[0][0];
        r.arr[8][0] = m.arr[0][1];
        r.arr[7][0] = m.arr[0][2];
        r.arr[6][0] = m.arr[0][3];
        r.arr[5][0] = m.arr[0][4];
        r.arr[4][0] = m.arr[0][5];
        r.arr[3][0] = m.arr[0][6];
        r.arr[2][0] = m.arr[0][7];
        r.arr[1][0] = m.arr[0][8];
        r.arr[0][0] = m.arr[0][9];

        r.arr[9][1] = m.arr[1][0];
        r.arr[8][1] = m.arr[1][1];
        r.arr[7][1] = m.arr[1][2];
        r.arr[6][1] = m.arr[1][3];
        r.arr[5][1] = m.arr[1][4];
        r.arr[4][1] = m.arr[1][5];
        r.arr[3][1] = m.arr[1][6];
        r.arr[2][1] = m.arr[1][7];
        r.arr[1][1] = m.arr[1][8];
        r.arr[0][1] = m.arr[1][9];

        r.arr[9][2] = m.arr[2][0];
        r.arr[8][2] = m.arr[2][1];
        r.arr[7][2] = m.arr[2][2];
        r.arr[6][2] = m.arr[2][3];
        r.arr[5][2] = m.arr[2][4];
        r.arr[4][2] = m.arr[2][5];
        r.arr[3][2] = m.arr[2][6];
        r.arr[2][2] = m.arr[2][7];
        r.arr[1][2] = m.arr[2][8];
        r.arr[0][2] = m.arr[2][9];

        r.arr[9][3] = m.arr[3][0];
        r.arr[8][3] = m.arr[3][1];
        r.arr[7][3] = m.arr[3][2];
        r.arr[6][3] = m.arr[3][3];
        r.arr[5][3] = m.arr[3][4];
        r.arr[4][3] = m.arr[3][5];
        r.arr[3][3] = m.arr[3][6];
        r.arr[2][3] = m.arr[3][7];
        r.arr[1][3] = m.arr[3][8];
        r.arr[0][3] = m.arr[3][9];

        r.arr[9][4] = m.arr[4][0];
        r.arr[8][4] = m.arr[4][1];
        r.arr[7][4] = m.arr[4][2];
        r.arr[6][4] = m.arr[4][3];
        r.arr[5][4] = m.arr[4][4];
        r.arr[4][4] = m.arr[4][5];
        r.arr[3][4] = m.arr[4][6];
        r.arr[2][4] = m.arr[4][7];
        r.arr[1][4] = m.arr[4][8];
        r.arr[0][4] = m.arr[4][9];

        r.arr[9][5] = m.arr[5][0];
        r.arr[8][5] = m.arr[5][1];
        r.arr[7][5] = m.arr[5][2];
        r.arr[6][5] = m.arr[5][3];
        r.arr[5][5] = m.arr[5][4];
        r.arr[4][5] = m.arr[5][5];
        r.arr[3][5] = m.arr[5][6];
        r.arr[2][5] = m.arr[5][7];
        r.arr[1][5] = m.arr[5][8];
        r.arr[0][5] = m.arr[5][9];

        r.arr[9][6] = m.arr[6][0];
        r.arr[8][6] = m.arr[6][1];
        r.arr[7][6] = m.arr[6][2];
        r.arr[6][6] = m.arr[6][3];
        r.arr[5][6] = m.arr[6][4];
        r.arr[4][6] = m.arr[6][5];
        r.arr[3][6] = m.arr[6][6];
        r.arr[2][6] = m.arr[6][7];
        r.arr[1][6] = m.arr[6][8];
        r.arr[0][6] = m.arr[6][9];

        r.arr[9][7] = m.arr[7][0];
        r.arr[8][7] = m.arr[7][1];
        r.arr[7][7] = m.arr[7][2];
        r.arr[6][7] = m.arr[7][3];
        r.arr[5][7] = m.arr[7][4];
        r.arr[4][7] = m.arr[7][5];
        r.arr[3][7] = m.arr[7][6];
        r.arr[2][7] = m.arr[7][7];
        r.arr[1][7] = m.arr[7][8];
        r.arr[0][7] = m.arr[7][9];

        r.arr[9][8] = m.arr[8][0];
        r.arr[8][8] = m.arr[8][1];
        r.arr[7][8] = m.arr[8][2];
        r.arr[6][8] = m.arr[8][3];
        r.arr[5][8] = m.arr[8][4];
        r.arr[4][8] = m.arr[8][5];
        r.arr[3][8] = m.arr[8][6];
        r.arr[2][8] = m.arr[8][7];
        r.arr[1][8] = m.arr[8][8];
        r.arr[0][8] = m.arr[8][9];

        r.arr[9][9] = m.arr[9][0];
        r.arr[8][9] = m.arr[9][1];
        r.arr[7][9] = m.arr[9][2];
        r.arr[6][9] = m.arr[9][3];
        r.arr[5][9] = m.arr[9][4];
        r.arr[4][9] = m.arr[9][5];
        r.arr[3][9] = m.arr[9][6];
        r.arr[2][9] = m.arr[9][7];
        r.arr[1][9] = m.arr[9][8];
        r.arr[0][9] = m.arr[9][9];
        
        
        m = r;
    }

    for (i = 0; i < MATRIX_SIZE; i++)
    {
        for (j = 0; j < MATRIX_SIZE; j++)
        {
            printf("\t%d", r.arr[i][j]);
        }
        printf("\n");
    }

    t = clock() - t;

    time_taken = ((double)t) / CLOCKS_PER_SEC; // in seconds
    printf("Time to execute: %f seconds\n", time_taken);
}

