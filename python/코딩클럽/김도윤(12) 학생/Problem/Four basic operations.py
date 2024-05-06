# problem
# Two natural numbers A and B are given. At this time, write a program that outputs A+B, A-B, A*B, A/B (share), and A%B (remainder).

# input
# Two natural numbers A and B are given. (1 ≤ A, B ≤ 10,000)

# Print
# Prints A+B on the first line, A-B on the second line, A*B on the third line, A/B on the fourth line, and A%B on the fifth line.

# Example input 1
# 7 3
# Example output 1
# 10
# 4
# 21
# 2
# 1

a, b = map(int, input().split())
print(a + b)
print(a - b)
print(a * b)
print(a // b)
print(a % b)
