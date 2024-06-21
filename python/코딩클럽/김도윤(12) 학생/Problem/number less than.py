# number less than.py

# problem
# We are given a sequence A consisting of N integers and an integer X.
# At this time, write a program that prints all numbers smaller than X in A.

# input
# N and X are given in the first line. (1 ≤ N, X ≤ 10,000)

# In the second line, N integers forming sequence A are given. All given integers are greater than or equal to 1 and less than or equal to 10,000.

# Print
# Numbers smaller than There is at least one number smaller than X.

# Example input 1
# 10 5
# 1 10 4 9 2 3 8 5 7 6
# Example output 1
# 1 4 2 3

n, x = map(int, input().split())
datas = list(map(int, input().split()))

for data in datas:
    if data < x:
        print(data, end=" ")
