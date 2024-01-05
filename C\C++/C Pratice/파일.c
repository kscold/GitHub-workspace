#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    
    char fileName[10];
    char buf[1];
    
    printf("파일 이름 입력");
    scanf("%s", fileName);
    
    FILE *fp = fopen(fileName, "w"); // 읽기 전용으로 파일 로드 읽을 때는 파일이 미리 존재, 쓸때에는 파일이 미리 존재하지 않아도 됨, 파일 포인터 반환
    
    if(fp == NULL){
        printf("파일 에러");
        return 1; // 성공적 종료
    }
    
    printf("파일 데이터 입력");
    scanf("%s", buf);
    
    fprintf(fp, "%s", buf);
    
    fclose(fp);
    
    return 0;
}


