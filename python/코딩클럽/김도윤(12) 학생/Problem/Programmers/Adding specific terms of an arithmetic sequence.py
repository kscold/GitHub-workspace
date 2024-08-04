# Adding specific terms of an arithmetic sequence.py
# Submission history
# Problem description
# Two integers a, d and a boolean array included of length n are given.
# In an arithmetic sequence where the first term is a and the common difference is d, when included[i] means the i + 1st term, please write a solution function that returns the sum of only the terms for which included is true from the 1st to the nth term of this arithmetic sequence.

# Restrictions
# 1 ≤ a ≤ 100
# 1 ≤ d ≤ 100
# 1 ≤ length of included ≤ 100
# At least one true exists in included.

# Input/Output Example
# a d included                                  result
# 3 4 [true, false, false, true, true]          37
# 7 1 [false, false, false, true, false, false] 10

# Input/Output Example Description
# Input/Output Example #1

# Example 1 has a and d as 3 and 4 respectively, and the length of included is 5.
# If we represent this in a table, it would look like this:


#                       1st term 2nd term 3rd term 4th term 5th term
# Arithmetic sequence       3         7       11      15       19
# included                 true     false    false   true     true

# Therefore, it returns 3 + 15 + 19 = 37, which is the sum of the 1st, 4th, and 5th terms that are true.

# Input/Output Example #2
# In Example 2, a and d are 7 and 1 respectively, and the length of included is 7.
# If we represent this in a table, it would look like this:

#                       1st term 2nd term 3rd term 4th term 5th term 6th term 7th term
# Arithmetic sequence       7        8        9        10       11      12      13
# included                false    false    false     true     false   false   false

# Therefore, since only the 4th term is true, it returns 10.


def solution(a, d, included):
    result = []
    length = len(included)
    for i in range(1, length + 1):
        if included[i - 1] == True:
            result.append(a + (i - 1) * d)
    answer = sum(result)

    return answer


print(solution(3, 4, [True, False, False, True, True]))
print(solution(7, 1, [False, False, False, True, False, False]))
