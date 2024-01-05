#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 100

int main(void){
    char *words[100];
    int n = 0;
    char buffer[BUFFER_SIZE];
    
    while (n<4 && scanf("%s", buffer) != EOF){
        words[n] = strdup(buffer); // 계속 새로운 주소를 가리키기 때문에 가장 마지막에 주소만 가리키게 되면 마지막 주소만 4번 나옴, string.h에 있음 그러나 이 함수가 없으면 만들어서 사용해야함
        n++;
    }
    
    for (int i=0;i<4;i++)
        printf("%s\n", words[i]);
}
