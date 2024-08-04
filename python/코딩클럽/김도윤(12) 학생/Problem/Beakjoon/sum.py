# sum.py
# problem
# Given n, write a program to find the sum from 1 to n.

# input
# The first line gives n (1 ≤ n ≤ 10,000).

# Print
# Prints the sum from 1 to n.

# Example input 1
# 3
# Example output 1
# 6

n = int(input())

b = 0

for i in range(1, n + 1):
    b = b + i

print(b)
