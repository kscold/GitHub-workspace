# A+B-3.py
# problem
# Write a program that takes two integers A and B as input and then outputs A+B.

# input
# The number of test cases T is given in the first line.

# Each test case consists of one line, and each line is given A and B. (0 < A, B < 10)

# Print
# A+B is output for each test case.

# Example input 1
# 5
# 1 1
# 2 3
# 3 4
# 9 8
# 5 2
# Example output 1
# 2
# 5
# 7
# 17
# 7
import sys

input = sys.stdin.readline

t = int(input())  # 5

result_list = []
for i in range(t):  # [0, 1, 2, 3, 4]
    a, b = map(int, input().split())
    result_list.append(a + b)

for result in result_list:
    print(result)
