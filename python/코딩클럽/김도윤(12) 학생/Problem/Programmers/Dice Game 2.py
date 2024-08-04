# Dice Game 2.py

# Problem Description
# There are three dice with numbers from 1 to 6 written on them.
# When the numbers that come out when rolling the three dice are a, b, and c, the points you get are as follows.

# If all three numbers are different, you get a + b + c points.
# If any two of the three numbers are the same and the other numbers are different, you get (a + b + c) × (a^2 + b^2 + c^2 ) points.
# If all three numbers are the same, you get (a + b + c) × (a^2 + b^2 + c^2 ) × (a^3 + b^3 + c^3 ) points.
# Please write a solution function that returns the points you get when three integers a, b, and c are given as parameters.

# Restrictions
# a, b, and c are integers greater than or equal to 1 and less than or equal to 6. Input/Output Example
# a b c result
# 2 6 1 9 (a + b + c)
# 5 3 3 473 (a + b + c) × (a^2 + b^2 + c^2 )
# 4 4 4 110592 (a + b + c) × (a^2 + b^2 + c^2 ) × (a^3 + b^3 + c^3 )

# Explanation of Input/Output Example
# Input/Output Example #1
# In Example 1, since all three dice numbers are different, we get 2 + 6 + 1 = 9 points. Therefore, 9 is returned.

# Input/Output Example #2
# In Example 2, since only two dice numbers are the same, we get (5 + 3 + 3) × (52 + 32 + 32 ) = 11 × 43 = 473 points.
# Therefore, 473 is returned.

# Input/Output Example #3
# In Example 3, since all three dice numbers are the same, we get (4 + 4 + 4) × (42 + 42 + 42 ) × (43 + 43 + 43 ) = 12 × 48 × 192 = 110,592 points.
# So it returns 110592.


def solution(a, b, c):
    if a != b and b != c and c != a:
        answer = a + b + c
    elif (a == b and a != c) or (b == c and b != a) or (c == a and c != b):
        answer = (a + b + c) * (a**2 + b**2 + c**2)
    elif a == b and b == c and c == a:
        answer = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    return answer


print(solution(2, 6, 1))
print(solution(5, 3, 3))
print(solution(4, 4, 4))
