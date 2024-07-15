# Shooting Stars - 7.py

# Time Limit Memory Limit Submission Number of Correct Answers Proportion of Correct Answers

# problem
# Look at the example, infer the rule, and then take a star.

# input
# The first line gives N(1 ≤ N ≤ 100).

# Print
# Stars are output in order from the first line to the 2×N-1th line.

# Example input 1
# 5
# Example output 1
#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *

n = int(input())

for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))

for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))
