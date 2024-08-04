# sum of numbers.py

# problem
# N numbers are written without spaces. Write a program that adds up all these numbers and prints them.

# input
# The number of numbers N (1 ≤ N ≤ 100) is given in the first line. N numbers are given in the second line without spaces.

# Print
# Outputs the sum of N numbers given as input.

# Example input 1
# 1
# 1
# Example output 1
# 1
# Example input 2
# 5
# 54321
# Example output 2
# 15
# Example input 3
# 25
# 7000000000000000000000000
# Example output 3
# 7
# Example input 4
# 11
# 10987654321
# Example output 4
# 46


n = int(input())  # 5
numbers = input()  # "54321"

sum = 0
for number in numbers:  #  ["5", "4", "3", "2", "1"]
    sum += int(number)

print(sum)
