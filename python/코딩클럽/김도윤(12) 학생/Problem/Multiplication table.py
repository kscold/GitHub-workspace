# multiplication table.py
# problem
# Write a program that takes N as input and outputs the Nth multiplication table. Just print it according to the output format.

# input
# N is given in the first line. N is greater than or equal to 1 and less than or equal to 9.

# Print
# It outputs from N*1 to N*9 in the same output format.

# Example input 1
# 2
# Example output 1
# 2 * 1 = 2
# 2 * 2 = 4
# 2 * 3 = 6
# 2 * 4 = 8
# 2 * 5 = 10
# 2 * 6 = 12
# 2 * 7 = 14
# 2 * 8 = 16
# 2 * 9 = 18

a = int(input())

for i in range(1, 10):
    print(f"{a} * {i} = {a * i}")
