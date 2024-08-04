# Matrix addition.py

# Time Limit Memory Limit Submission Number of Correct Answers Proportion of Correct Answers

# problem
# Given two matrices A and B of size N*M, write a program to add the two matrices.

# input
# The sizes N and M of the matrices are given in the first line. Starting from the second line, M elements of matrix A are given sequentially in N lines. Next, M elements of matrix B are given to N lines in order. N and M are less than or equal to 100, and the elements of the matrix are integers whose absolute values ​​are less than or equal to 100.

# Print
# Outputs a matrix that adds matrices A and B to N lines starting from the first line. Each element of the matrix is ​​separated by a space.

# Example input 1
# 3 3
# 1 1 1
# 2 2 2
# 0 1 0
# 3 3 3
# 4 4 4
# 5 5 100
# Example output 1
# 4 4 4
# 6 6 6
# 5 6 100

n, m = map(int, input().split())  # n 행(row) m 열(column)

a = []
b = []
sum_matrix = [[0] * m for _ in range(n)]  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]] 로 초기화


for _ in range(n):
    a.append(list(map(int, input().split())))

for _ in range(n):
    b.append(list(map(int, input().split())))


for y in range(n):
    for x in range(m):
        sum_matrix[y][x] = a[y][x] + b[y][x]

for y in sum_matrix:
    for x in y:
        print(x, end=" ")
    print()

# a = [
# [1, 1, 1],
# [2, 2, 2],
# [0, 1, 0]
# ]
# b = [[3, 3, 3,], [2, 2, 2,],[5, 5, 100]]
# sum_matrix = [[4, 4, 4], [6, 6, 6],[5, 6, 100]]
