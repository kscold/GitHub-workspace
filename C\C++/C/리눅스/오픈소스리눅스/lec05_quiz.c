#include <stdio.h>
#include <string.h>
#include <errno.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>

int main(int argc, char **argv) //int argc, char argv[]와 똑같음
{
    FILE *fp;
    int cnt;
    size_t nread, nwrite;
    char buffer[1024];

    fp = fopen(argv[1], "r");

    if(fp == NULL)
    {
        fprintf(stderr, "file open error: %s \n", argv[1]);
        exit(1);
    }    

    cnt = atoi(argv[2]);

    while(cnt > 0)
    {   
		if(fseek(fp, 0, SEEK_SET == -1))
            exit(1);
                      
		while((nread = fread(buffer, sizeof(char) , 1024, fp)) > 0)
		{
			if((nwrite = fwrite(buffer, sizeof(char), nread, fp)) != nread)
				printf("file write error!\n");
		}
        cnt--;      
    }
    
    fclose(fp);
    
    return 0;
}
