# Comparing two numbers.py
# problem
# Given two integers A and B, write a program to compare A and B.

# input
# A and B are given in the first line. A and B are separated by a space.

# Print
# Print one of the following three things on the first line:

# If A is greater than B, '>' is output.
# If A is less than B, '<' is output.
# If A and B are the same, '==' is output.
# limit
# -10,000 ≤ A, B ≤ 10,000
# Example input 1
# 1 2
# Example output 1
# <
# Example input 2
# 10 2
# Example output 2
# >
# Example input 3
# 5 5
# Example output 3
# ==

a, b = map(int, input().split())

if a < b:
    print("<")

elif a > b:
    print(">")

else:
    print("==")
