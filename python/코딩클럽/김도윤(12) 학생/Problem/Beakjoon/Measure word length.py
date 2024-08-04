# Measure word length.py

# problem
# Write a program that takes as input a word consisting only of alphabets and outputs its length.

# input
# In the first line, words consisting of only lowercase and uppercase English letters are given. The maximum length of a word is 100.

# Print
# The first line outputs the length of the word given as input.

# Example input 1
# pulljima
# Example output 1
# 8

# s = input()
# print(len(s))


def length(word):
    count = 0
    for _ in word:
        count += 1
    return count


s = input()
print(length(s))
