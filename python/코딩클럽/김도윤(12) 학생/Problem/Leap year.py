# Leap year.py
# Given a year, write a program that prints 1 if it is a leap year, and 0 otherwise.

# A leap year is when the year is a multiple of 4 but not a multiple of 100 or a multiple of 400.

# For example, 2012 is a leap year because it is a multiple of 4 but not a multiple of 100. The year 1900 is not a leap year because it is a multiple of 100 and not a multiple of 400. However, the year 2000 is a leap year because it is a multiple of 400.

# input
# The year is given in the first line. The year is a natural number greater than or equal to 1 and less than or equal to 4000.

# Print
# In the first line, 1 is output if it is a leap year, otherwise 0 is output.

# Example input 1
# 2000
# Example output 1
# 1
# Example input 2
# 1999
# Example output 2
# 0

a = int(input())


if (a % 4 == 0 and a % 100 != 0) or (a % 400 == 0):
    print(1)
else:
    print(0)
