# Shooting Stars - 1.py

# problem
# The problem of putting 1 star in the first line, 2 stars in the second line, and N stars in the Nth line.

# input
# The first line gives N(1 ≤ N ≤ 100).

# Print
# Stars are printed in order from the first line to the Nth line.

# Example input 1
# 5
# Example output 1
# *
# **
# ***
# ****
# *****

n = int(input())

for i in range(1, n + 1):
    print("*" * i)
