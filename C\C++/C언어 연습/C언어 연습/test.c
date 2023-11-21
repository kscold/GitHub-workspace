#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Ʈ�� ��� ����
typedef struct TreeNode {
    char name[50];
    struct TreeNode* parent;
    struct TreeNode* left_child;
    struct TreeNode* right_sibling;
} TreeNode;

// �Լ� ����
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

// ���� ����
TreeNode* root = NULL;
TreeNode* queue[100];
int front = -1;
int rear = -1;

// ť ���� �Լ�
void enqueue(TreeNode* node) {
    if ((rear + 1) % 100 == front) {
        printf("Queue is full.\n");
        return;
    }

    if (front == -1)
        front = 0;

    rear = (rear + 1) % 100;
    queue[rear] = node;
}

TreeNode* dequeue() {
    if (front == -1) {
        printf("Queue is empty.\n");
        return NULL;
    }

    TreeNode* node = queue[front];
    if (front == rear) {
        // ť�� �ϳ��� ��Ҹ� �������� ��� ť �ʱ�ȭ
        front = rear = -1;
    }
    else {
        front = (front + 1) % 100;
    }

    return node;
}
// Ʈ�� ��� ���� �Լ�
TreeNode* createTreeNode(const char* name) {
    TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
    strcpy(newNode->name, name);
    newNode->parent = NULL;
    newNode->left_child = NULL;
    newNode->right_sibling = NULL;
    return newNode;
}

// Ʈ�� ��� ã�� �Լ�
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


// �ڼ� �� ��� �Լ�
int countDescendants(TreeNode* node) {
    int count = 0;
    TreeNode* child = node->left_child;
    while (child != NULL) {
        count += 1 + countDescendants(child);
        child = child->right_sibling;
    }
    return count;
}

// Ʈ�� ��� �Լ�
void printTree(TreeNode* root, int depth) {
    if (root == NULL)
        return;

    for (int i = 0; i < depth; i++)
        printf("  ");

    printf("%s (%d descendants)\n", root->name, countDescendants(root));
    printTree(root->left_child, depth + 1);
    printTree(root->right_sibling, depth);
}

// ���� ���� �Լ�
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

// �޸� ���� �Լ�
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

// ��� ���� �Լ�
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

// ������ ���� ��� (���� ��ȸ)
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

// ������ ���� ��� (���� ��ȸ)
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
    FILE* file = fopen("a.dat", "r");
    if (file == NULL) {
        printf("Error: Cannot open file.\n");
        return 1;
    }

    char name[50];
    while (fscanf(file, "%s", name) != EOF) {
        if (root == NULL) {
            root = createTreeNode(name);
        }
        else {
            insertNode(root, "Grandparent", name);
        }
    }
    fclose(file);

    int choice;
    do {
        printf("\n1. �߰� (���°� ������ ����)\n");
        printf("2. ���� ��� (Ư�� ������ ���ڵ��� ���� ��ȸ�Ͽ� ���)\n");
        printf("3. ���� ��� (Ư�� ������ ���µ��� ���� ��ȸ�Ͽ� ���)\n");
        printf("4. �躸�� ��� (��ü �躸���� ���������� ���)\n");
        printf("5. ���� ���� (���� �躸���� ���Ͽ� ����)\n");
        printf("6. ���� ��ȸ ��� (��ü ��带 ������ȸ)\n");
        printf("0. ����\n");

        printf("����: ");
        scanf("%d", &choice);

        switch (choice) {
        case 1: {
            char master[50], disciple[50];
            printf("������ �̸�: ");
            scanf("%s", master);
            printf("������ �̸�: ");
            scanf("%s", disciple);
            insertNode(root, master, disciple);
            break;
        }
        case 2: {
            char master[50];
            printf("Ư�� ������ ���� ��� (���� �̸�): ");
            scanf("%s", master);
            print_students_level_order(root, master);
            break;
        }
        case 3: {
            char disciple[50];
            printf("Ư�� ������ ���� ��� (���� �̸�): ");
            scanf("%s", disciple);
            print_masters_level_order(root, disciple);
            break;
        }
        case 4: {
            printf("�躸�� ���:\n");
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
            printf("�躸�� ���Ͽ� ����Ǿ����ϴ�.\n");
            break;
        }
        case 6: {
            printf("���� ��ȸ ���:\n");
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
            printf("���α׷��� �����մϴ�.\n");
            free_tree(root);
            break;
        }
        default:
            printf("�߸��� �����Դϴ�. �ٽ� �������ּ���.\n");
        }
    } while (choice != 0);

    return 0;
}
