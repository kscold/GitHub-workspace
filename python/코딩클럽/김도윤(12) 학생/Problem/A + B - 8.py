# A+B - 8.py

# problem
# Write a program that takes two integers A and B as input and then outputs A+B.

# input
# The number of test cases T is given in the first line.

# Each test case consists of one line, and each line is given A and B. (0 < A, B < 10)

# Print
# Each test case is output in the format "Case #x: A + B = C". x is the test case number and starts from 1, and C is A+B.

# Example input 1
# 5
# 1 1
# 2 3
# 3 4
# 9 8
# 5 2
# Example output 1
# Case #1: 1 + 1 = 2
# Case #2: 2 + 3 = 5
# Case #3: 3 + 4 = 7
# Case #4: 9 + 8 = 17
# Case #5: 5 + 2 = 7

n = int(input())

for i in range(1, n + 1):
    a, b = map(int, input().split())
    print(f"Case #{i}: {a} + {b} = {a+b}")
