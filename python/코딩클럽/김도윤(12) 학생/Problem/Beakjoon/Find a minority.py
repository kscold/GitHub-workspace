# Find a minority.py

# problem
# Write a program that finds and prints how many of the numbers given.

# input
# The first line is given the number N. N is less than 100.
# Next, N is given, and the number is less than 1,000 natural numbers.

# output of power
# Print a small number of the numbers given.

# Example input 1
# 4
# 1 3 5 7
# Example Output 1
# 3

# 소수의 정의 1과 자기 자신으로만 나누어 지는 수
n = int(input())
datas = list(map(int, input().split()))
count = 0

for data in datas:  # [1, 3, 4, 5, 7]
    if data == 1:  # 1은 소수가 아니기 때문
        continue

    # data = 4
    for i in range(2, data):  # [2, 3]
        if data % i == 0:
            break
    else:
        count += 1
print(count)
