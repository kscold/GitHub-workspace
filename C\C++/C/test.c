#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

#define MAX_LENGTH 100000

struct NUMS {
    int N;
    long arr[MAX_LENGTH];
    long sum, min_value, max_value;
    double var, median;
};

struct NUMS_DOUBLE {
    int N;
    double arr[MAX_LENGTH];
    double sum, min_value, max_value;
    double var, median;
};

long getsum(struct NUMS *nums)
{
    int i;
    long sum;
  
    sum = 0;

    for(i=0; i<nums->N; i++)
        sum = sum + nums->arr[i];
    return sum;
}

double getsum_double(struct NUMS_DOUBLE *nums)
{
    long i;
    double sum;
  
    sum = 0;

    for(i=0; i<nums->N; i++) sum = sum + nums->arr[i];
    return sum;
}

double getavg(struct NUMS *nums)
{
    long sum = getsum(nums);
    return sum / (double)nums->N;
}

double getavg_double(struct NUMS_DOUBLE *nums)
{
    double sum = getsum_double(nums);
    return sum / (double)nums->N;
}

double getvar1(struct NUMS *nums)
{
    double avg = getavg(nums);
    double  diff;
    struct NUMS_DOUBLE nums_diff;
    long i;
    nums_diff.N = nums->N;
    for(i=0; i<nums->N; i++) {
        diff = nums->arr[i] - avg;
        nums_diff.arr[i] = diff * diff;
    }
    return getavg_double(&nums_diff);
}

double getvar2(struct NUMS *nums)
{
    long i;
    struct NUMS_DOUBLE nums_double;
    double avg = getavg(nums);
    nums_double.N = nums->N;
    for(i=0; i<nums_double.N; i++) nums_double.arr[i] = (double)nums->arr[i] * (double)nums->arr[i];
    double avg_double = getavg_double(&nums_double);
    return avg_double - avg * avg;
}

int compare(const void *a, const void *b)
{
    return *(int *)a - *(int *)b;
}
 
int main(void)
{
    struct NUMS nums;
    nums.N =  MAX_LENGTH;
    long i, k;
    int var2 = 0;

    clock_t start_time, end_time;
    start_time = clock();

    srand(20231213);

    for(i=0; i<nums.N; i++) {
        if (rand() == nums.N)
            nums.arr[i];
    }

    for(k=0; k<1000; k++) { // do not edit this line
        qsort(nums.arr, nums.N, sizeof(long), compare);
        nums.sum = getsum(&nums);
        nums.var = getvar1(&nums);
        var2 = getvar2(&nums);
        nums.median = (nums.arr[nums.N / 2] + nums.arr[nums.N / 2 - 1])/2.0;
        nums.min_value = nums.arr[0];
        nums.max_value = nums.arr[nums.N - 1];
    }
    
    printf("%ld %ld %lf %ld %lf %d\n", nums.min_value, nums.max_value, nums.median, nums.sum, nums.var, var2);
    printf("The results should be 4 99999 50065.000000 5009789286 830379368.080319 830379368.080321\n");

    end_time = clock();
    printf("Elapsed time: %.2f seconds.\n", ((double) (end_time - start_time)) / CLOCKS_PER_SEC);
}

