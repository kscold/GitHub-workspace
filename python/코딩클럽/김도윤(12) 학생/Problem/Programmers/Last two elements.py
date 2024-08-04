# Last two elements.py

# Problem description
# Given a list of integers num_list, if the last element is greater than the previous element, complete the solution function so that it returns the value of subtracting the previous element from the last element, and if the last element is not greater than the previous element, it adds the value of doubling the last element.

# Restrictions
# 2 ≤ length of num_list ≤ 10
# 1 ≤ number of elements in num_list ≤ 9

# Input/Output Example
# num_list          result
# [2, 1, 6]         [2, 1, 6, 5]
# [5, 2, 1, 7, 5]   [5, 2, 1, 7, 5, 10]
# Input/Output Example Description

# Input/Output Example #1
# Since the last element 6 is greater than the previous element 1, it adds 6 - 1, which is 5, and returns it.

# Input/Output Example #2
# Since the last element, 5, is not greater than the previous element, 7, we add 10, which is twice 5, and return it.


def solution(num_list):
    if num_list[-1] > num_list[-2]:
        answer = num_list[-1] - num_list[-2]
        num_list.append(answer)
    else:
        answer = 2 * num_list[-1]
        num_list.append(answer)

    return num_list


print(solution([2, 1, 6]))
print(solution([5, 2, 1, 7, 5]))
