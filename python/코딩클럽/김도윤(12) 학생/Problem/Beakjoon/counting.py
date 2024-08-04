# counting.py

# problem
# Given a total of N integers, write a program to find the number of integers v.

# input
# The first line gives the number of integers N (1 ≤ N ≤ 100). In the second line, integers are separated by spaces. The third line gives the integer v we are trying to find. The integer and v given as input are greater than or equal to -100 and less than or equal to 100.

# Print
# In the first line, the number of v's among the N integers given as input is output.

# Example input 1
# 11
# 1 4 1 2 4 2 4 2 3 4 4
# 2
# Example output 1
# 3
# Example input 2
# 11
# 1 4 1 2 4 2 4 2 3 4 4
# 5
# Example output 2
# 0

n = int(input())
data = list(map(int, input().split()))
v = int(input())

# count = 0
# for i in data:
#     if i == v:
#         count += 1
#     else:
#         continue
# print(count)

print(data.count(v))
