# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")
# print("대기번호: 5")

# for ~동안 반복해라
# 반복할 대상이 명확할 때

# 문법: for 변수 in 대상:
# 형식
# for 변수 in 반복 대상:
#     실행할 명령
# range는 범위를 나타내주는 명령어 6 range(6) 0 1 2 3 4 5


for waiting_no in [1, 2, 3, 4]:
    print(f"대기번호 : {waiting_no}")

# range() 범위
# range()를 사용할 때는 숫자(int, float)일때만 가능
# range(숫자) 0부터 숫자 - 1까지 반복
# range(시작 숫자, 숫자) 시작숫자부터 숫자 - 1까지 반복
# range(시작 숫자, 숫자, 간격) 시작숫자부터 숫자 -1까지 간격만큼 반복

for waiting_no in range(1, 5):  # [1, 2, 3, 4]
    print(f"대기번호 : {waiting_no}")

for waiting_no in range(1, 11, 2):
    print(f"대기번호 : {waiting_no}")


# 리스트를 반복해야할 때는 문자나 boolean true or false일 때 사용
orders = ["아이언맨", "토르", "스파이더맨"]  # 손님
for order in orders:  # for customer in ["아이언맨", "토르", "스파이더맨"]:
    print(f"{order}의 요청")


# from random import *

# role_count = int(input("주사위의 갯수: "))  # 2개 주사위를 입력

# for i in range(1, role_count + 1):  # 주사위의 갯수만큼 반복 [1 2]
#     result = randint(1, 6)
#     print(f"주사위{i}: {result}")
