#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 300
#define MAX_LINE_SIZE 256

struct Data {
    char FirstName[50];
    char SecondName[50];
    int Age;
    char Email[50];
    char CompanyName[50];
};

struct Data hashTable[TABLE_SIZE];

unsigned int hash1(char* email) {
    unsigned int hash = 0;
    while (*email) {
        hash = (hash << 5) + *email++;
    }
    return hash % TABLE_SIZE;
}

unsigned int hash2(char* email) {
    unsigned int hash = 0;
    while (*email) {
        hash = (hash << 7) + *email++;
    }
    return (hash % (TABLE_SIZE - 1)) + 1;
}

int insertData(struct Data newData) {
    unsigned int index, step, i;

    index = hash1(newData.Email);
    step = hash2(newData.Email);

    for (i = 0; i < TABLE_SIZE; i++) {
        if (hashTable[index].Email[0] == '\0') {
            hashTable[index] = newData;
            return 1;  // Data added successfully
        }
        index = (index + step) % TABLE_SIZE;
    }

    return 0;  // Unable to add data (hash table is full)
}

void deleteData(char* email, int age) {
    unsigned int index, step, i;

    index = hash1(email);
    step = hash2(email);

    for (i = 0; i < TABLE_SIZE; i++) {
        if (strcmp(hashTable[index].Email, email) == 0 && hashTable[index].Age == age) {
            printf("-> 데이터를 삭제했습니다.: %s,%s,%s,%d,%s\n", hashTable[index].FirstName, hashTable[index].SecondName,
                hashTable[index].Email, hashTable[index].Age, hashTable[index].CompanyName);
            hashTable[index].Email[0] = '\0';  // Mark as deleted
            return;
        }
        index = (index + step) % TABLE_SIZE;
    }

    printf("->삭제할 데이터가 없습니다.\n");
}

void searchData(char* email, int age) {
    unsigned int index, step, i;

    index = hash1(email);
    step = hash2(email);

    for (i = 0; i < TABLE_SIZE; i++) {
        if (strcmp(hashTable[index].Email, email) == 0 && hashTable[index].Age == age) {
            printf("-> 데이터를 찾았습니다.: %s,%s,%s,%d,%s\n", hashTable[index].FirstName, hashTable[index].SecondName,
                hashTable[index].Email, hashTable[index].Age, hashTable[index].CompanyName);
            return;
        }
        index = (index + step) % TABLE_SIZE;
    }

    printf("->데이터가 없습니다.\n");
}

int main(void) {
    FILE* file;
    char line[MAX_LINE_SIZE];
    char* token;
    char filename[256];
    char exename[256];

    // Initialize hash table
    for (int i = 0; i < TABLE_SIZE; i++) {
        hashTable[i].Email[0] = '\0';
    }

    // open file
    printf("C:> ");
    scanf("%s %s", exename, filename);
    file = fopen(filename, "r");
    if (file == NULL) {
        printf("->파일을 열 수 없습니다.\n");
        return 1;
    }

    // read file line by line
    while (fgets(line, MAX_LINE_SIZE, file) != NULL) {
        struct Data newData;
        // Parse comma separated data
        token = strtok(line, ",");
        strcpy(newData.FirstName, token);
        token = strtok(NULL, ",");
        strcpy(newData.SecondName, token);
        token = strtok(NULL, ",");
        strcpy(newData.Email, token);
        token = strtok(NULL, ",");
        newData.Age = atoi(token);
        token = strtok(NULL, ",");
        strcpy(newData.CompanyName, token);

        // Insert data into hash table
        insertData(newData);
    }
    // close file
    fclose(file);

    int choice;
    char email[50];
    int age;

    do {
        printf("무엇을 원하십니까? 1:삽입 2:삭제 3:검색 4:종료 -> ");
        scanf("%d", &choice);

        switch (choice) {
        case 1:
        {
            struct Data newData;  // 블록 내에서 변수 선언
            printf("\nFirst name: ");
            scanf("%s", newData.FirstName);
            fflush(stdin);
            printf("\nSecond name: ");
            scanf("%s", newData.SecondName);
            fflush(stdin);
            printf("\n이메일: ");
            scanf("%s", newData.Email);
            printf("\n나이: ");
            scanf("%d", &newData.Age);
            printf("\n회사명: ");
            scanf("%s", newData.CompanyName);
            insertData(newData);
            printf("->데이터를 추가하였습니다.\n");
            break;
        }
        case 2:
        {
            printf("\n이메일: ");
            scanf("%s", email);
            printf("\n나이: ");
            scanf("%d", &age);
            deleteData(email, age);
            break;
        }
        case 3:
        {
            printf("\n이메일: ");
            scanf("%s", email);
            printf("\n나이: ");
            scanf("%d", &age);
            searchData(email, age);
            break;
        }
        case 4:
        {
            printf("-> Bye~\n");
            break;
        }
        default:
            printf("->잘못된 입력입니다. 다시 작업을 선택해주세요.\n");
        }

    } while (choice != 4);

    return 0;
}
