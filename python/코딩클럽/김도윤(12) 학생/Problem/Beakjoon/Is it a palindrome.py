# Is it a palindrome.py

# problem
# A word consisting of only lowercase letters of the alphabet is given. At this time, write a program to check whether this word is a palindrome or not.

# A palindrome is a word that is the same when read forward and backward.

# level, noon are palindromes, and baekjoon, online, and judge are not palindromes.

# input
# The words are given in the first line. The length of the word is greater than or equal to 1, less than or equal to 100, and consists of only lowercase alphabet letters.

# Print
# If it is a palindrome, 1 is output on the first line, otherwise 0 is output.

# Example input 1
# level
# Example output 1
# 1
# Example input 2
# baekjoon
# Example output 2
# 0


def words_reverse(words):
    str_reverse = ""
    for word in words:
        str_reverse = word + str_reverse

    return str_reverse


words = input()

if words == words_reverse(words):
    print(1)
else:
    print(0)
