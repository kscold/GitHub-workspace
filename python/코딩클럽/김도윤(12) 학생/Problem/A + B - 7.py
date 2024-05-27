# A + B - 7.py
# problem
# Write a program that takes two integers A and B as input and then outputs A+B.

# input
# The number of test cases T is given in the first line.

# Each test case consists of one line, and each line is given A and B. (0 < A, B < 10)

# Print
# For each test case, print "Case #x: ", then print A+B. Test case numbers start from 1.

# Example input 1
# 5
# 1 1
# 2 3
# 3 4
# 9 8
# 5 2
# Example output 1
# Case #1: 2
# Case #2: 5
# Case #3: 7
# Case #4: 17
# Case #5: 7

n = int(input())  # 5

for i in range(1, n + 1):  # (1,6) [1, 2, 3, 4, 5]
    a, b = map(int, input().split())
    print(f"Case #{i}: {a+b}")
