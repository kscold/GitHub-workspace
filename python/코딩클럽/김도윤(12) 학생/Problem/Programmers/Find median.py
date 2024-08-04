# Find median.py

# Problem description
# The median is the value that is located in the center when the given values ​​are arranged in order of size.
# For example, the median of 1, 2, 7, 10, 11 is 7. Complete the solution function so that it returns the median when an integer array array is given as a parameter.

# Restrictions
# The length of the array is odd.
# 0 < array length < 100
# -1,000 < array elements < 1,000
# Input/output example
# array             result
# [1, 2, 7, 10, 11] 7
# [9, -1, 0]        0
# Input/output example explanation
# Input/output example #1

# Same as the main text.
# Input/output example #2
# When 9, -1, 0 are arranged in ascending order, they are -1, 0, 9, and the value located in the center is 0.


def solution(array):
    array.sort()
    index = len(array) // 2
    answer = array[index]
    return answer


print(solution([1, 2, 7, 10, 11]))
print(solution([9, -1, 0]))
