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


words = input()  # Mississipi
words = words.upper()  # MISSISSIPI
set_lists = list(set(words))  # {"M","S", "I", "P"} -> ["M","S", "I", "P"]

set_list_count = []  # [1, 4, 4, 1]

for set_list in set_lists:
    set_list_count.append(words.count(set_list))  # MISSISSIPI.count("P")

if set_list_count.count(max(set_list_count)) > 1:
    print("?")
else:
    print(set_lists[set_list_count.index(max(set_list_count))])

# ZZA
# set_lists =  ["Z", "A"]
# set_list_count = [2, 1]
# Z
