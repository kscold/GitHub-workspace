#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    //    int a = 100;
    //    int *ptr = &a; // ptr = 변수 a의 주소 값
    
    // int a[10]; // 정수 배열 , 배열의 이름은 a, 배열 a의 크기는 10
    
    int *p;
    p = (int*)malloc(sizeof(int)*10);
    
    p[0] = 12;
    *(p+1) =16;
    
    // 할당받은 배열을 자체적으로 키우는 것은 불가능
    int *array = (int *)malloc(4*sizeof(int)); // 크기는 16byte, 주소 0 ~ 3까지 숫자 4개를 담을 수 있음
    // (int *)는 정수 포인터임을 나타내는 유형 캐스트일 뿐 곱하기가 아님, 메모리를 잡아둠
    array[0] = 1;
    array[1] = 2;
    *(array+2) = 3;
    // array[5] = 4; // 메모리가 부족할 시레 오류가 날 수 있기 때문에
    
    
    int *tmp = (int *)malloc(8*sizeof(int));
    for(int i =0; i<4; i++)
        tmp[i] =array[i];
    
    //free(array); 메모리 해제, 어떤 프로그램이 메모리를 할당 받았지만, 할당 받은 메모리 주소를 아무도 가지고 있지 않게 되면 그 메모리 공간을 gabage라고 부른다. 이제 더이상 쓰지 않으므로 fee 해줌
    array = tmp; // 이런식으로 연결함
}


