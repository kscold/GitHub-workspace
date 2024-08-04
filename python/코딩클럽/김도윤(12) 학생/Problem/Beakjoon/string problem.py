# string.py

# problem
# If a string is given as input, write a program that prints the first and last letters of the string.

# input
# The first line of input contains the number of test cases T (1 ≤ T ≤ 10). Each test case is given one string per line. The string consists of uppercase letters A~Z, there are no spaces between the letters, and the length of the string is less than 1000.

# Print
# For each test case, the first and last letters of the given string are output sequentially.

# Example input 1
# 3
# ACDKJFOWIEGHE
# O
# AB
# Example output 1
# AE
# OO
# AB

t = int(input())

for _ in range(t):
    s = input()
    print(s[0] + s[-1])
