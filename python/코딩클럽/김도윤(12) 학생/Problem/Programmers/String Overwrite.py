# String overwrite.py

# Problem Description
# You are given the strings my_string, overwrite_string and the integer s.
# Please write a solution function that returns a string that changes the length of overwrite_string from index s of the string my_string to the string overwrite_string.

# Restrictions
# my_string and overwrite_string consist of numbers and alphabets.
# 1 ≤ length of overwrite_string ≤ length of my_string ≤ 1,000
# 0 ≤ s ≤ length of my_string - length of overwrite_string

# Input/output example
# my_string         overwrite_string    s   result
# "He11oWor1d"      "lloWorl"           2   "HelloWorld"
# "Program29b8UYP"  "merS123"           7   "ProgrammerS123"

# Input/Output Example Description
# Input/Output Example #1

# In my_string in Example 1, the part corresponding to the length of overwrite_string from index 2 is "11oWor1", and "HelloWorld", which is changed to "lloWorl", is returned.
# Input/Output Example #2

# In my_string in Example 2, the part corresponding to the length of overwrite_string from index 7 is "29b8UYP", and "ProgrammerS123", which is changed to "merS123", is returned.


def solution(my_string, overwrite_string, s):
    answer = my_string[:s] + overwrite_string + my_string[s + len(overwrite_string) :]
    return answer


print(solution("He11oWor1d", "lloWorl", 2))
print(solution("Program29b8UYP", "merS123", 7))
