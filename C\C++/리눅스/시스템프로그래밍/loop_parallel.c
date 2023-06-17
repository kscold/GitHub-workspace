#include <stdio.h>
#include <stdlib.h>
#include <math.h>


int main(void)
{
    double *data;
    int data_size = 100000000;
    int i = 0;

    data = (double *)malloc(sizeof(double));

    for (i = 0; i < data_size; i++)
        data[i] = i;

#pragma omp parallel num_threads(2)
    {
        for (i = 0; i < data_size; i++)
            data[i] = sqrt(data[i]);
    }

    printf("data: %f, %f, %f, %f, %f\n", data[0], data[1], data[2], data[3], data[4]);

    free(data);
    return 0;
}