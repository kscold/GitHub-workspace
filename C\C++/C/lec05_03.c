#include <stdio.h>
#include <unistd.h>
#include <fcntl.h>

int main()
{
    int fdin, fdout;
    ssize_t nread, nwirte;
    char buffer[1024];

    fdin = open("fdin.txt", O_RDONLY);
    fdout = open("fdout.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644);

    printf("file descriptor: %d\n", fdin);
    printf("file descriptor: %d\n", fdout);
}