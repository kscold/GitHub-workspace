# while 조건:
#     실행할 명령

# 이론상으로 for문은 while문으로 while문은 for문으로 바꿀 수 있음

# for waiting_num in range(1, 6):  # [1, 2, 3, 4, 5]
#     print(f"대기번호: {waiting_num}")

waiting_num = 1  # init variable
while waiting_num != 6:  # 1 != 6 true , 2 != 6 true, 3 != 6 true, ...  6 != 6 false
    print(f"대기번호: {waiting_num}")
    waiting_num += 1  # waiting_num = waiting_num + 1


# while문 안에 if문을 적용한 예시
customer = "김승찬"
coffee = 5  # 5잔을 주문

while coffee >= 1:  # 5 >= 1 true
    print(f"{customer}님, 커피가 1잔이 준비 됐습니다.")
    coffee -= 1  # coffee = coffee - 1
    print(f"{coffee}번 남았어요.")
    if coffee == 0:  # 4 == 0 false
        print("커피가 모두 준비됐습니다. 가져가세요.")
