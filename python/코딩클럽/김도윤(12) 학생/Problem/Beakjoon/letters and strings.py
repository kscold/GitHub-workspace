# letters and strings.py

# problem
# word
# S and integers
# Given i,
# S's Write a program that prints the ith letter.

# input
# Words consisting of only lowercase and uppercase English letters on the first line
# S is given. The maximum length of a word is
# It is 1,000.

# integer on second line
# i is given. (1 <= i <= |S|)

# Print

# S's Prints the ith character.

# Example input 1
# Sprout
# 3
# Example output 1
# r
# Example input 2
# shiftpsh
# 6
# Example output 2
# p
# Example input 3
# Baekjoon
# 4
# Example output 3
# k

s = input()
i = int(input())

print(s[i - 1])
