#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define BUFFER_SIZE 20

int read_line( char str[], int limit);

int main(void){
    char buffer[BUFFER_SIZE];
    
    while(1){
        printf("$ ");
        // scanf("%s", buffer); // scanf는 공백기준으로 자르기 때문에 우리가 원하는 결과가 나오지 않음
        // 따라서 gets를 사용 줄바꿈 문자가 나올 때까지 사용 그러나 안정하지 않음
        // gets(buffer);
        // 따라서 fgets를 사용하면 더 안전함
        // fgets(buffer, BUFFER_SIZE, stdin); // 키보드 표준입력으로 설정함, 추가적으로 정의해놓은 사이즈를 넘지 못함 fgets가 현재 줄바꿈 문자까지 버퍼에 저장하고 있으므로
        // buffer[strlen(buffer) - 1]='\0'; // 따라서 마지막 문장에 NULL charictor를 넣어서 끝마침 그래도 버퍼 사이즈를 넘어가면 우리가 원하는 값이 나오지 않으므로 직접함수를 만들어서 사용하는 게 좋음
        int len = read_line(buffer, BUFFER_SIZE);// 이렇게 만들면 문자를 입력받는 함수가 없어도 사용가능
        
        printf("%s:%d\n", buffer, len);
    }
    return 0;
}

int read_line(char str[], int limit){
    int ch, i = 0;
    
    while((ch = getchar()) != '\n')
        if(i < limit)
            str[i++] = ch;
    
    str[i] = '\0';
    return i;
}
