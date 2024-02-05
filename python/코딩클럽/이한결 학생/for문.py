# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")
# print("대기번호: 5")

# for ~동안 반복해라
# 문법: for 변수 in 대상:

from random import *

role_count = int(input("주사위의 갯수: "))

for i in range(role_count):  # 주사위의 갯수만큼 반복
    result = randint(1, 6)  # 주사위의 눈은 1부터 6까지
    print(f"주사위{i+1}: {result}")

# for i in range(1, 11):  # 1부터 5까지 반복 1, 2 ,3, 4, 5
#     print(f"대기번호: {i}")
