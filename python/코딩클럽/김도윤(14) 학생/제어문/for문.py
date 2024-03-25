# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")
# print("대기번호: 5")

# 문법
# for 변수 in 대상:
#    실행할 명령

# 제한된 범위내에서 반복하기 좋음

# 리스트를 반복할때(boolean이나 문자열)
for waiting_num in [1, 2, 3, 4, 5]:
    print(f"대기번호: {waiting_num}")

# 숫자를 반복할 때
for waiting_num in range(1, 6):  # [1, 2, 3, 4, 5]
    print(f"대기번호: {waiting_num}")

# range()
# range(숫자) 0부터 숫자 - 1까지 반복
# range(시작숫자, 숫자) 시작숫자부터 숫자 - 1까지 반복
# range(시작숫자, 숫자, 간격) 시작숫자부터 숫자 - 1까지 간격만큼 반복

orders = ["아이언맨", "토르", "스파이더맨"]
#             0            1          2
for order in orders:  # ["아이언맨", "토르", "스파이더맨"]
    print(f"주문하신 분: {order}")
