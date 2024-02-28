# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")
# print("대기번호: 5")

# for ~동안 반복해라
# 문법: for 변수 in 대상:
# 형식
# for 변수 in 반복 대상:
#     실행할 명령
# range는 범위를 나타내주는 명령어 6 range(6) 0 1 2 3 4 5


for waiting_no in [1, 2, 3, 4]:
    print(f"대기번호 : {waiting_no}")

for waiting_no in range(1, 5):  # [1, 2, 3, 4]
    print(f"대기번호 : {waiting_no}")

for waiting_no in range(1, 11, 2):
    print(f"대기번호 : {waiting_no}")


orders = ["아이언맨", "토르", "스파이더맨"]  # 손님
for order in orders:  # for customer in ["아이언맨", "토르", "스파이더맨"]:
    print(f"{order}의 요청")


from random import *

role_count = int(input("주사위의 갯수: "))  # 2개 주사위를 입력

for i in range(1, role_count + 1):  # 주사위의 갯수만큼 반복 [1 2]
    result = randint(1, 6)
    print(f"주사위{i}: {result}")
