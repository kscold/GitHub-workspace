# Factorial 2.py

# problem
# Integer N is given larger than 0. At this time, write a program that prints N!

# input
# The first line is given integer N (0 ≤ n ≤ 20).

# output of power
# Print n! On the first line.

# Example input 1
# 10
# Example Output 1
# 3628800

# Example input 2
# 0
# Example Output 2
# 1


def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)


n = int(input())
print(factorial(n))
