#include <stdio.h>
#include <pthread.h>
#define NUM_THREADS 4 // 스레드 지정

void *print_helloworld(void *arg) // 함수 선언의 void *는 함수가 모든 유형의 포인터를 인수로 받아들일 수 있다.
{
    printf("Hello World!!\n");
    return 0;
}

int main(void)
{
    int i = 0;
    pthread_t thread_arr[NUM_THREADS];

    for (i = 0; i < NUM_THREADS; i++)
        pthread_create(&thread_arr[i], NULL, print_helloworld, NULL); // 4개의 스레드 생성 및 화면 출력 실행
    for (i = 0; i < NUM_THREADS; i++)
        pthread_join(thread_arr[i], NULL); // 4개의 스레드의 실행 완료를 기다림 및 스레드 소멸
    return 0;
}
