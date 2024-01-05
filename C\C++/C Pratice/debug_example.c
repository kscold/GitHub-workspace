
#include <stdio.h>
#include <string.h>
#include <string.h>

void reverseWords(char *s) {
    int n;
    int i, j;
    char c;
    
    n = strlen(s);
    
    // reverse by char
    for (i = 0; i < n / 2; i++) {
        c = s[i];
        s[i] = s[(n - 1) - i]; // 문자열 길이와 인덱스 번호의 차이는 1개만큼 차이가 나기 때문에 -1을 해줌
        s[(n - 1) - i] = c; // 위의 이유와 같음
    }
    
    // reverse by word
    int start = 0;
    int end = 0;
    for (j = 0; j < n + 1; j++) { // c언어 문자열은 null로 끝나기 때문에 +1 을 해주어야 마지막 문장까지 완벽하게 도달함
        if (s[j] == ' ' || j == n) {
            if (s[j] == ' ') end = j - 1; // 조건문에서 공백을 만났을 때 조건문이 실행되므로 공백을 가리키는 것이 아니라 -1을 하여 마지막 문자를 가리킴
            else end = j - 1; // 조건문에서 문자열이 끝날을 때 현재 for문은 개행문자를 가리키고 있으므로 -1을 하여 마지막 문자를 가리킴
            for (i = 0; i <= (end - start) / 2; i++) {
                c = s[start + i];
                s[start + i] = s[end - i];
                s[end - i] = c;
            }
            start = j + 1;
        }
    }
}

int main()
{
    char s[] = "This is an example for debugging practice";
    
    printf("before: %s\n", s);
    reverseWords(s);
    printf("after: %s\n", s);
    printf("correct result is: \'%s\'\n", "practice debugging for example an is This");
}
