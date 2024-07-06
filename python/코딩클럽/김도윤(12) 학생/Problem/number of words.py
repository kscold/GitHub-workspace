# number of words.py

# problem
# A string consisting of English uppercase and lowercase letters and spaces is given. How many words are in this string? Write a program to find this. However, if a word appears multiple times, all occurrences must be counted.

# input
# A string consisting of English uppercase and lowercase letters and spaces is given in the first line. The length of this string should not exceed 1,000,000. Words are separated by a single space, and there are no consecutive spaces. Additionally, strings can start or end with a space.

# Print
# Prints the number of words in the first line.

# Example input 1
# The Curious Case of Benjamin Button
# Example output 1
# 6
# Example input 2
# The first character is a blank
# Example output 2
# 6
# Example input 3
# The last character is a blank
# Example output 3
# 6

a = list(map(str, input().split()))
print(len(a))
