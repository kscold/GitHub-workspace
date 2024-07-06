# word study.py

# problem
# Given a word with an alphabet case, write a program to find which alphabet is most commonly used in this word. However, there is no distinction between uppercase and lowercase letters.

# input
# In the first line, words consisting of upper and lower case letters of the alphabet are given. The length of the given words does not exceed 1,000,000.

# Print
# On the first line, the most frequently used alphabet in this word is printed in capital letters. However, if there are multiple most used alphabets, ? is output.

# Example input 1
# Mississipi
# Example output 1
# ?
# Example input 2
# zZa
# Example output 2
# Z
# Example input 3
# z
# Example output 3
# Z
# Example input 4
# baaa
# Example output 4
# A


words = input()
words = words.upper()
set_list = list(set(words))

set_count = []
for i in set_list:
    set_count.append(words.count(i))

if set_count.count(max(set_count)) > 1:
    print("?")
else:
    print(set_list[set_count.index(max(set_count))])
