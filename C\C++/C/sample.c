#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MATRIX_SIZE 10

struct Mat {
    int arr[MATRIX_SIZE][MATRIX_SIZE];
};

long answer[MATRIX_SIZE][MATRIX_SIZE] = {
    {1, 0, 0, 0, 0, 0, 0, 0, 0, 0},
    {0, 100000001, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000},
    {0, 200000000, 400000001, 600000000, 800000000, 1000000000, 1200000000, 1400000000, 1600000000, 1800000000},
    {0, 300000000, 600000000, 900000001, 1200000000, 1500000000, 1800000000, 2100000000, 2400000000, 2700000000},
    {0, 400000000, 800000000, 1200000000, 1600000001, 2000000000, 2400000000, 2800000000, 3200000000, 3600000000},
    {0, 500000000, 1000000000, 1500000000, 2000000000, 2500000001, 3000000000, 3500000000, 4000000000, 4500000000},
    {0, 600000000, 1200000000, 1800000000, 2400000000, 3000000000, 3600000001, 4200000000, 4800000000, 5400000000},
    {0, 700000000, 1400000000, 2100000000, 2800000000, 3500000000, 4200000000, 4900000001, 5600000000, 6300000000},
    {0, 800000000, 1600000000, 2400000000, 3200000000, 4000000000, 4800000000, 5600000000, 6400000001, 7200000000},
    {0, 900000000, 1800000000, 2700000000, 3600000000, 4500000000, 5400000000, 6300000000, 7200000000, 8100000001}};


void check_answer(struct Mat result, long answer[][MATRIX_SIZE])
{
    int i, j, correct;

    correct = 1;
    for(i=0; i<MATRIX_SIZE; i++) {
        for(j=0; j<MATRIX_SIZE; j++) {
            if (result.arr[i][j] != answer[i][j]) {
                printf("Wrong answer! at (%d, %d)\n", i, j);
                correct = 0;
                break;
            }
        }
        if (correct == 0) break;
    }
    if (correct) printf("Correct answer!\n");
}


struct Mat mat_add(struct Mat a, struct Mat b)
{
    int i, j, k;
    int result;
    struct Mat r;

    for(i=0; i<MATRIX_SIZE; i++) {
        for(j=0; j<MATRIX_SIZE; j++) {
            r.arr[i][j] = a.arr[i][j] + b.arr[i][j];
        }
    }
    return r;
}

void print_mat(struct Mat m)
{
    int i, j;
    for(i=0; i<MATRIX_SIZE; i++) {
        for(j=0; j<MATRIX_SIZE; j++) {
            printf("\t%ld", m.arr[i][j]);
        }
        printf("\n");
    }
}

int main()
{
    int i, j, k;
    struct Mat* mat[10000];
    struct Mat result;

    clock_t t;
    double time_taken;

    t = clock();

    for(k=0; k<10000; k++) {
        mat[k] = (struct Mat*)malloc(sizeof(struct Mat));
        for(i=0; i<MATRIX_SIZE; i++) {
            for(j=0; j<MATRIX_SIZE; j++) {
                mat[k]->arr[i][j] = i * j % 100;
            }
        }
    }

    for(i=0; i<MATRIX_SIZE; i++)
        for(j=0; j<MATRIX_SIZE; j++)
            result.arr[i][j] = 0;
    for(i=0; i<MATRIX_SIZE; i++) result.arr[i][i] = 1;

    for(i=0; i<10000; i++)
        for(j=0; j<10000; j++)
            result = mat_add(result, *mat[j]);

    printf("Result:\n");
    print_mat(result);

    check_answer(result, answer);

    t = clock() - t;

    time_taken = ((double)t)/CLOCKS_PER_SEC; // in seconds
    printf("Time to execute: %f seconds\n", time_taken);
}

