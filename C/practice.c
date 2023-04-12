#include <stdio.h>

typedef enum
{
    false,
    true
} boolean;                   // 전역변수
extern boolean lock = false; // 전역변수
extern int balance;

void main()
{
    while (lock == true)
        ;
    lock = true;
    balance = balance + 10; // 임계영역
    lock = false;
}