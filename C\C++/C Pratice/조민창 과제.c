#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 트리 노드 정의
typedef struct TreeNode {
    char name[50];
    struct TreeNode* parent;
    struct TreeNode* left_child;
    struct TreeNode* right_sibling;
} TreeNode;

// 함수 선언
TreeNode* createTreeNode(const char* name);
TreeNode* findTreeNode(TreeNode* root, const char* name);
void insertNode(TreeNode* root, const char* masterName, const char* discipleName);
int countDescendants(TreeNode* node);
void printTree(TreeNode* root, int depth);
void save(TreeNode* root, FILE* file);
void free_tree(TreeNode* root);
void enqueue(TreeNode* node);
TreeNode* dequeue();
void print_students_level_order(TreeNode* root, const char* masterName);
void print_masters_level_order(TreeNode* root, const char* discipleName);

// 전역 변수
TreeNode* root = NULL;
TreeNode* queue[100];
int front = -1;
int rear = -1;

// 큐 관련 함수
void enqueue(TreeNode* node) {
    if (rear == 99) {
        printf("Queue is full.\n");
        return;
    }
    if (front == -1)
        front = 0;
    rear = rear + 1;
    queue[rear] = node;
}

TreeNode* dequeue() {
    if (front == -1 || front > rear) {
        printf("Queue is empty.\n");
        return NULL;
    }
    TreeNode* node = queue[front];
    front = front + 1;
    return node;
}

// 트리 노드 생성 함수
TreeNode* createTreeNode(const char* name) {
    TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
    strcpy(newNode->name, name);
    newNode->parent = NULL;
    newNode->left_child = NULL;
    newNode->right_sibling = NULL;
    return newNode;
}

// 트리 노드 찾기 함수
TreeNode* findTreeNode(TreeNode* root, const char* name) {
    if (root == NULL)
        return NULL;

    if (strcmp(root->name, name) == 0)
        return root;

    TreeNode* foundNode = findTreeNode(root->left_child, name);
    if (foundNode == NULL)
        foundNode = findTreeNode(root->right_sibling, name);

    return foundNode;
}

// 노드 삽입 함수
void insertNode(TreeNode* root, const char* masterName, const char* discipleName) {
    TreeNode* masterNode = findTreeNode(root, masterName);
    if (masterNode == NULL) {
        printf("Error: Master not found.\n");
        return;
    }

    TreeNode* discipleNode = createTreeNode(discipleName);
    discipleNode->parent = masterNode;
    discipleNode->right_sibling = masterNode->left_child;
    masterNode->left_child = discipleNode;
}

// 자손 수 계산 함수
int countDescendants(TreeNode* node) {
    int count = 0;
    TreeNode* child = node->left_child;
    while (child != NULL) {
        count += 1 + countDescendants(child);
        child = child->right_sibling;
    }
    return count;
}

// 트리 출력 함수
void printTree(TreeNode* root, int depth) {
    if (root == NULL)
        return;

    for (int i = 0; i < depth; i++)
        printf("  ");

    printf("%s (%d descendants)\n", root->name, countDescendants(root));
    printTree(root->left_child, depth + 1);
    printTree(root->right_sibling, depth);
}

// 파일 저장 함수
void save(TreeNode* root, FILE* file) {
    if (root == NULL)
        return;

    fprintf(file, "%s\n", root->name);

    TreeNode* child = root->left_child;
    while (child != NULL) {
        save(child, file);
        child = child->right_sibling;
    }
}

// 메모리 해제 함수
void free_tree(TreeNode* root) {
    if (root == NULL)
        return;

    TreeNode* child = root->left_child;
    while (child != NULL) {
        TreeNode* nextChild = child->right_sibling;
        free_tree(child);
        child = nextChild;
    }

    free(root);
}

// 스승의 제자 출력 (레벨 순회)
void print_students_level_order(TreeNode* root, const char* masterName) {
    TreeNode* masterNode = findTreeNode(root, masterName);
    if (masterNode == NULL) {
        printf("Error: Master not found.\n");
        return;
    }

    enqueue(masterNode);
    while (front != -1) {
        TreeNode* currentNode = dequeue();
        printf("%s\n", currentNode->name);

        TreeNode* child = currentNode->left_child;
        while (child != NULL) {
            enqueue(child);
            child = child->right_sibling;
        }
    }
}

// 제자의 스승 출력 (레벨 순회)
void print_masters_level_order(TreeNode* root, const char* discipleName) {
    TreeNode* discipleNode = findTreeNode(root, discipleName);
    if (discipleNode == NULL) {
        printf("Error: Disciple not found.\n");
        return;
    }

    TreeNode* masterNode = discipleNode->parent;
    while (masterNode != NULL) {
        printf("%s\n", masterNode->name);
        masterNode = masterNode->parent;
    }
}

int main() {
    FILE* file = fopen("family_tree.txt", "r");
    if (file == NULL) {
        printf("Error: Cannot open file.\n");
        return 1;
    }

    char name[50];
    while (fscanf(file, "%s", name) != EOF) {
        if (root == NULL) {
            root = createTreeNode(name);
        } else {
            insertNode(root, "Grandparent", name);
        }
    }
    fclose(file);

    int choice;
    do {
        printf("\n1. 추가 (스승과 제자의 관계)\n");
        printf("2. 제자 출력 (특정 스승의 제자들을 레벨 순회하여 출력)\n");
        printf("3. 스승 출력 (특정 제자의 스승들을 레벨 순회하여 출력)\n");
        printf("4. 계보도 출력 (전체 계보도를 계층적으로 출력)\n");
        printf("5. 파일 저장 (현재 계보도를 파일에 저장)\n");
        printf("6. 레벨 순회 출력 (전체 노드를 레벨순회)\n");
        printf("0. 종료\n");

        printf("선택: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: {
                char master[50], disciple[50];
                printf("스승의 이름: ");
                scanf("%s", master);
                printf("제자의 이름: ");
                scanf("%s", disciple);
                insertNode(root, master, disciple);
                break;
            }
            case 2: {
                char master[50];
                printf("특정 스승의 제자 출력 (스승 이름): ");
                scanf("%s", master);
                print_students_level_order(root, master);
                break;
            }
            case 3: {
                char disciple[50];
                printf("특정 제자의 스승 출력 (제자 이름): ");
                scanf("%s", disciple);
                print_masters_level_order(root, disciple);
                break;
            }
            case 4: {
                printf("계보도 출력:\n");
                printTree(root, 0);
                break;
            }
            case 5: {
                FILE* saveFile = fopen("saved_tree.txt", "w");
                if (saveFile == NULL) {
                    printf("Error: Cannot open file for saving.\n");
                    break;
                }
                save(root, saveFile);
                fclose(saveFile);
                printf("계보가 파일에 저장되었습니다.\n");
                break;
            }
            case 6: {
                printf("레벨 순회 출력:\n");
                enqueue(root);
                while (front != -1) {
                    TreeNode* currentNode = dequeue();
                    printf("%s\n", currentNode->name);

                    TreeNode* child = currentNode->left_child;
                    while (child != NULL) {
                        enqueue(child);
                        child = child->right_sibling;
                    }
                }
                break;
            }
            case 0: {
                printf("프로그램을 종료합니다.\n");
                free_tree(root);
                break;
            }
            default:
                printf("잘못된 선택입니다. 다시 선택해주세요.\n");
        }
    } while (choice != 0);

    return 0;
}

