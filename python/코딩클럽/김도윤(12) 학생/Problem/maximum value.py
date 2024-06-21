# maximum value.py

# problem
# Given 9 different natural numbers, write a program to find the maximum value among them and what number the maximum value is.

# For example, nine different natural numbers

# 3, 29, 38, 12, 57, 74, 40, 85, 61

# Given, the largest of these is 85, which is the 8th number.

# input
# From the first line to the ninth line, one natural number is given per line. The given natural number is less than 100.

# Print
# The maximum value is output on the first line, and the number of the maximum value is output on the second line.

# Example input 1
# 3
# 29
# 38
# 12
# 57
# 74
# 40
# 85
# 61
# Example output 1
# 85
# 8

datas = []
for i in range(1, 10):
    x = int(input())
    datas.append(x)

print(max(datas))
print(datas.index(max(datas)) + 1)
