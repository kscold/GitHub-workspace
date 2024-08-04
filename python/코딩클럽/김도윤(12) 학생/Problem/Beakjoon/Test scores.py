# Test scores.py
# problem
# Write a program that takes test scores as input and outputs A for 90 to 100 points, B for 80 to 89 points, C for 70 to 79 points, D for 60 to 69 points, and F for the remaining scores.

# input
# The test score is given in the first line. The test score is an integer greater than or equal to 0 and less than or equal to 100.

# Print
# Print test scores.

# Example input 1
# 100
# Example output 1
# A

score = int(input())

if 90 <= score and score <= 100:
    print("A")

elif 80 <= score and score <= 89:
    print("B")

elif 70 <= score and score <= 79:
    print("C")

elif 60 <= score and score <= 69:
    print("D")

else:
    print("F")
