#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    // 문자열은 char 타입의 배열이 각 칸마다 문자 하나씩 저장되는 것
    // 배열의 맨 마지막에는 null character("\0")가 저장되어 있어 문자열의 끝을 표시할 수 있다.
    // 문자열 생성의 차이 str[]은 배열 안의 값은 바꿀 수 있지만 str이 전혀 다른 배열을 가리키도록 할 수 없다.
    // *str은 배열 안의 값은 바꿀 수 있지만, str이 전혀 다른 새로운 문자열을 가리킬 수 있다.(=str=tmp)
    
    // 포인터 변수 들 간의 치환문
    char buffer[100];
    
    char *words[100];
    int n = 0;
    
    //    while({
    //        words[n] = buffer;
    //    }
    //    //입력 aaa, bbb, ccc
    //    //출력 ccc, ccc, ccc
    //
    //    while(){
    //        words[n] = strdup(buffer); // string.h 에 있으며 하나의 문자열을 받아 복제본을 만들어 복제본의 주소를 리턴할 수 있는 strdup를 사용(약간 객체 느낌)
    //    }
    //    //입력 aaa, bbb, ccc
    //    //출력 aaa, bbb, ccc
    
    
    // 단어 3개 입력받기
    
    printf("입력");
    scanf("%s", buffer);
    
    while(n < 100){
        words[n] = strdup(buffer);
        
        if(n == 2)
            break;
        
        scanf("%s", buffer);
        n++;
        
    }
    
    for(int i =0; i<=n; i++){
        printf("Word %d: %s\n", i ,words[i]);
        free(words[i]);
    }
    
    return 0;
}


