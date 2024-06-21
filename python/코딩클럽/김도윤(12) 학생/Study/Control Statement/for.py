# for 변수 in 반복대상:
#   실행할 명령

# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")
# print("대기번호: 5")

# 리스트로 반복한 예시
for waiting_num in [1, 2, 3, 4, 5]:
    print(f"대기번호: {waiting_num}")

# range() 메서드를 사용한 예시(특징 number에서만 사용가능)
# range(number) index 0부터 number - 1까지 반복
# range(5) # [0, 1, 2, 3, 4]

# range(startNum, number)
# range(1, 5) # [1, 2, 3, 4]

# range(startNum, number, interval)
# range(1, 5, 2) # [1, 3]

# range를 사용하는 경우는 number일때만
for waiting_num in range(1, 11):  # [1, 2, 3, 4, 5, ..., 10]
    print(f"대기번호: {waiting_num}")

# list를 사용하는 경우는 number만 있지 않고 boolean이나 string값이 있을 때
orders = ["아이언맨", "토르", "스파이더맨"]
for order in orders:
    print(f"{order}님 주문하신 음식이 나왔습니다.")
