# Min, Max.py

# problem
# N integers are given. At this time, write a program to find the minimum and maximum values.

# input
# The first line gives the number of integers N (1 ≤ N ≤ 1,000,000). The second line contains N integers separated by spaces. All integers are greater than or equal to -1,000,000 and less than or equal to 1,000,000.

# Print
# Prints the minimum and maximum values ​​of the N integers given in the first line, separated by a space.

# Example input 1
# 5
# 20 10 35 30 7
# Example output 1
# 7 35


n = int(input())
datas = list(map(int, input().split()))
print(min(datas), end=" ")
print(max(datas))

# datas.sort()
# print(datas[0], end=" ")
# print(datas[n - 1])
