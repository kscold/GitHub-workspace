# Sharing Pizza (1).py
# Submission History
# Problem Description
# Mussuk's Pizza Shop cuts pizza into seven pieces.
# Complete the solution function that returns the number of pizzas needed for everyone to eat at least one slice when the number of people sharing the pizza is n.

# Restrictions
# 1 ≤ n ≤ 100
# Input/Output Example
# n     result
# 7     1
# 1     1
# 15    3

# Input/Output Example Description
# Input/Output Example #1
# At least 1 plate is needed for 7 people to eat at least one slice each.

# Input/Output Example #2
# 1 person needs 1 plate to eat at least one slice.

# Input/Output Example #3
# At least 3 plates are needed for 15 people to eat at least one slice each.


def solution(n):
    if n % 7 == 0:
        answer = n // 7
    else:
        answer = (n // 7) + 1
    return answer


# from math import *


# def solution(n):  # 15
#     answer = ceil(n / 7)
#     return answer


print(solution(7))  # 1
print(solution(1))  # 1
print(solution(15))  # 3
