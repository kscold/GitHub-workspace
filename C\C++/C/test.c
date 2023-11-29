#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MEM_CHUNK_SIZE 10000
#define MATRIX_SIZE 10
#define ZERO 0

struct Mat {
    long arr[MATRIX_SIZE][MATRIX_SIZE];
};

long answer[MATRIX_SIZE][MATRIX_SIZE] = {
    {1, ZERO, ZERO, ZERO, ZERO, ZERO, ZERO, ZERO, ZERO, ZERO},
    {ZERO, 100000001, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000},
    {ZERO, 200000000, 400000001, 600000000, 800000000, 1000000000, 1200000000, 1400000000, 1600000000, 1800000000},
    {ZERO, 300000000, 600000000, 900000001, 1200000000, 1500000000, 1800000000, 2100000000, 2400000000, 2700000000},
    {ZERO, 400000000, 800000000, 1200000000, 1600000001, 2000000000, 2400000000, 2800000000, 3200000000, 3600000000},
    {ZERO, 500000000, 1000000000, 1500000000, 2000000000, 2500000001, 3000000000, 3500000000, 4000000000, 4500000000},
    {ZERO, 600000000, 1200000000, 1800000000, 2400000000, 3000000000, 3600000001, 4200000000, 4800000000, 5400000000},
    {ZERO, 700000000, 1400000000, 2100000000, 2800000000, 3500000000, 4200000000, 4900000001, 5600000000, 6300000000},
    {ZERO, 800000000, 1600000000, 2400000000, 3200000000, 4000000000, 4800000000, 5600000000, 6400000001, 7200000000},
    {ZERO, 900000000, 1800000000, 2700000000, 3600000000, 4500000000, 5400000000, 6300000000, 7200000000, 8100000001}};


void check_answer(struct Mat *result, long answer[][MATRIX_SIZE])
{
    int i, j, correct;

    correct = 1;
    for(i=ZERO; i<MATRIX_SIZE; i++) {
        for(j=ZERO; j<MATRIX_SIZE; j++) {
            if (result->arr[i][j] != answer[i][j]) {
                printf("Wrong answer! at (%d, %d)\n", i, j);
                correct = ZERO;
                break;
            }
        }
        if (correct == ZERO) break;
    }
    if (correct) printf("Correct answer!\n");
}


struct Mat mat_add(struct Mat a, struct Mat b)
{
    struct Mat r;

    r.arr[ZERO][ZERO] = a.arr[ZERO][ZERO] + b.arr[0][0];
    r.arr[ZERO][1] = a.arr[ZERO][1] + b.arr[ZERO][1];
    r.arr[ZERO][2] = a.arr[ZERO][2] + b.arr[ZERO][2];
    r.arr[ZERO][3] = a.arr[ZERO][3] + b.arr[ZERO][3];
    r.arr[ZERO][4] = a.arr[ZERO][4] + b.arr[ZERO][4];
    r.arr[ZERO][5] = a.arr[ZERO][5] + b.arr[ZERO][5];
    r.arr[ZERO][6] = a.arr[ZERO][6] + b.arr[ZERO][6];
    r.arr[ZERO][7] = a.arr[ZERO][7] + b.arr[ZERO][7];
    r.arr[ZERO][8] = a.arr[ZERO][8] + b.arr[ZERO][8];
    r.arr[ZERO][9] = a.arr[ZERO][9] + b.arr[ZERO][9];

    r.arr[1][ZERO] = a.arr[1][ZERO] + b.arr[1][ZERO];
    r.arr[1][1] = a.arr[1][1] + b.arr[1][1];
    r.arr[1][2] = a.arr[1][2] + b.arr[1][2];
    r.arr[1][3] = a.arr[1][3] + b.arr[1][3];
    r.arr[1][4] = a.arr[1][4] + b.arr[1][4];
    r.arr[1][5] = a.arr[1][5] + b.arr[1][5];
    r.arr[1][6] = a.arr[1][6] + b.arr[1][6];
    r.arr[1][7] = a.arr[1][7] + b.arr[1][7];
    r.arr[1][8] = a.arr[1][8] + b.arr[1][8];
    r.arr[1][9] = a.arr[1][9] + b.arr[1][9];

    r.arr[2][ZERO] = a.arr[2][ZERO] + b.arr[2][ZERO];
    r.arr[2][1] = a.arr[2][1] + b.arr[2][1];
    r.arr[2][2] = a.arr[2][2] + b.arr[2][2];
    r.arr[2][3] = a.arr[2][3] + b.arr[2][3];
    r.arr[2][4] = a.arr[2][4] + b.arr[2][4];
    r.arr[2][5] = a.arr[2][5] + b.arr[2][5];
    r.arr[2][6] = a.arr[2][6] + b.arr[2][6];
    r.arr[2][7] = a.arr[2][7] + b.arr[2][7];
    r.arr[2][8] = a.arr[2][8] + b.arr[2][8];
    r.arr[2][9] = a.arr[2][9] + b.arr[2][9];

    r.arr[3][ZERO] = a.arr[3][ZERO] + b.arr[3][ZERO];
    r.arr[3][1] = a.arr[3][1] + b.arr[3][1];
    r.arr[3][2] = a.arr[3][2] + b.arr[3][2];
    r.arr[3][3] = a.arr[3][3] + b.arr[3][3];
    r.arr[3][4] = a.arr[3][4] + b.arr[3][4];
    r.arr[3][5] = a.arr[3][5] + b.arr[3][5];
    r.arr[3][6] = a.arr[3][6] + b.arr[3][6];
    r.arr[3][7] = a.arr[3][7] + b.arr[3][7];
    r.arr[3][8] = a.arr[3][8] + b.arr[3][8];
    r.arr[3][9] = a.arr[3][9] + b.arr[3][9];

    r.arr[4][ZERO] = a.arr[4][ZERO] + b.arr[4][ZERO];
    r.arr[4][1] = a.arr[4][1] + b.arr[4][1];
    r.arr[4][2] = a.arr[4][2] + b.arr[4][2];
    r.arr[4][3] = a.arr[4][3] + b.arr[4][3];
    r.arr[4][4] = a.arr[4][4] + b.arr[4][4];
    r.arr[4][5] = a.arr[4][5] + b.arr[4][5];
    r.arr[4][6] = a.arr[4][6] + b.arr[4][6];
    r.arr[4][7] = a.arr[4][7] + b.arr[4][7];
    r.arr[4][8] = a.arr[4][8] + b.arr[4][8];
    r.arr[4][9] = a.arr[4][9] + b.arr[4][9];

    r.arr[5][ZERO] = a.arr[5][ZERO] + b.arr[5][ZERO];
    r.arr[5][1] = a.arr[5][1] + b.arr[5][1];
    r.arr[5][2] = a.arr[5][2] + b.arr[5][2];
    r.arr[5][3] = a.arr[5][3] + b.arr[5][3];
    r.arr[5][4] = a.arr[5][4] + b.arr[5][4];
    r.arr[5][5] = a.arr[5][5] + b.arr[5][5];
    r.arr[5][6] = a.arr[5][6] + b.arr[5][6];
    r.arr[5][7] = a.arr[5][7] + b.arr[5][7];
    r.arr[5][8] = a.arr[5][8] + b.arr[5][8];
    r.arr[5][9] = a.arr[5][9] + b.arr[5][9];

    r.arr[6][ZERO] = a.arr[6][ZERO] + b.arr[6][ZERO];
    r.arr[6][1] = a.arr[6][1] + b.arr[6][1];
    r.arr[6][2] = a.arr[6][2] + b.arr[6][2];
    r.arr[6][3] = a.arr[6][3] + b.arr[6][3];
    r.arr[6][4] = a.arr[6][4] + b.arr[6][4];
    r.arr[6][5] = a.arr[6][5] + b.arr[6][5];
    r.arr[6][6] = a.arr[6][6] + b.arr[6][6];
    r.arr[6][7] = a.arr[6][7] + b.arr[6][7];
    r.arr[6][8] = a.arr[6][8] + b.arr[6][8];
    r.arr[6][9] = a.arr[6][9] + b.arr[6][9];

    r.arr[7][ZERO] = a.arr[7][ZERO] + b.arr[7][ZERO];
    r.arr[7][1] = a.arr[7][1] + b.arr[7][1];
    r.arr[7][2] = a.arr[7][2] + b.arr[7][2];
    r.arr[7][3] = a.arr[7][3] + b.arr[7][3];
    r.arr[7][4] = a.arr[7][4] + b.arr[7][4];
    r.arr[7][5] = a.arr[7][5] + b.arr[7][5];
    r.arr[7][6] = a.arr[7][6] + b.arr[7][6];
    r.arr[7][7] = a.arr[7][7] + b.arr[7][7];
    r.arr[7][8] = a.arr[7][8] + b.arr[7][8];
    r.arr[7][9] = a.arr[7][9] + b.arr[7][9];

    r.arr[8][ZERO] = a.arr[8][ZERO] + b.arr[8][ZERO];
    r.arr[8][1] = a.arr[8][1] + b.arr[8][1];
    r.arr[8][2] = a.arr[8][2] + b.arr[8][2];
    r.arr[8][3] = a.arr[8][3] + b.arr[8][3];
    r.arr[8][4] = a.arr[8][4] + b.arr[8][4];
    r.arr[8][5] = a.arr[8][5] + b.arr[8][5];
    r.arr[8][6] = a.arr[8][6] + b.arr[8][6];
    r.arr[8][7] = a.arr[8][7] + b.arr[8][7];
    r.arr[8][8] = a.arr[8][8] + b.arr[8][8];
    r.arr[8][9] = a.arr[8][9] + b.arr[8][9];

    r.arr[9][ZERO] = a.arr[9][ZERO] + b.arr[9][ZERO];
    r.arr[9][1] = a.arr[9][1] + b.arr[9][1];
    r.arr[9][2] = a.arr[9][2] + b.arr[9][2];
    r.arr[9][3] = a.arr[9][3] + b.arr[9][3];
    r.arr[9][4] = a.arr[9][4] + b.arr[9][4];
    r.arr[9][5] = a.arr[9][5] + b.arr[9][5];
    r.arr[9][6] = a.arr[9][6] + b.arr[9][6];
    r.arr[9][7] = a.arr[9][7] + b.arr[9][7];
    r.arr[9][8] = a.arr[9][8] + b.arr[9][8];
    r.arr[9][9] = a.arr[9][9] + b.arr[9][9];

    return r;
}

void print_mat(struct Mat m)
{
    int i, j;
    for(i=ZERO; i<MATRIX_SIZE; i++) {
        for(j=ZERO; j<MATRIX_SIZE; j++) {
            printf("\t%ld", m.arr[i][j]);
        }
        printf("\n");
    }
}


int main()
{
    int i, j, k;
    struct Mat* mat[MEM_CHUNK_SIZE];
    struct Mat result;

    clock_t t;
    double time_taken;

    t = clock();


    for(k=0; k<MEM_CHUNK_SIZE ; k++) {
        mat[k] = (struct Mat*)malloc(sizeof(struct Mat));
        for(i=0; i<MATRIX_SIZE; i++) {
            for(j=0; j<MATRIX_SIZE; j++) {
                mat[k]->arr[i][j] = i * j % 100;
            }
        }
    }

    for(i=ZERO; i<MATRIX_SIZE; i++){
        result.arr[i][0] = ZERO;
        result.arr[i][1] = ZERO;
        result.arr[i][2] = ZERO;
        result.arr[i][3] = ZERO;
        result.arr[i][4] = ZERO;
        result.arr[i][5] = ZERO;
        result.arr[i][6] = ZERO;
        result.arr[i][7] = ZERO;
        result.arr[i][8] = ZERO;
        result.arr[i][9] = ZERO;
    }
        
    
    for(i=ZERO; i<MATRIX_SIZE; i++) result.arr[i][i] = 1;

    for(i=ZERO; i<MEM_CHUNK_SIZE; i++)
        for(j=ZERO; j<MEM_CHUNK_SIZE; j++)
            result = mat_add(result, *mat[j]);

    printf("Result:\n");
    print_mat(result);

    check_answer(&result, answer);

    t = clock() - t;

    time_taken = ((double)t)/CLOCKS_PER_SEC; // in seconds
    printf("Time to execute: %f seconds\n", time_taken);
}
