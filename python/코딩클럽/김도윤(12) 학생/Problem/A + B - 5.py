# A+B - 5.py

# problem
# Write a program that takes two integers A and B as input and then outputs A+B.

# input
# The input consists of several test cases.

# Each test case consists of one line, and each line is given A and B. (0 < A, B < 10)

# There are two zeros at the end of the input.

# Print
# A+B is output for each test case.

# Example input 1
# 1 1
# 2 3
# 3 4
# 9 8
# 5 2
# 0 0
# Example output 1
# 2
# 5
# 7
# 17
# 7

while True:
    a, b = map(int, input().split())

    if a == 0 and b == 0:
        break

    print(a + b)
