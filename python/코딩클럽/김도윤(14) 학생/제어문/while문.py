# 조건을 만족하는 동안에는 계속 반복
# while 조건:
#    실행할 명령


# for waiting_num in range(1, 6):  # [1, 2, 3, 4, 5]
#     print(f"대기번호: {waiting_num}")

# waiting_num = 1  # 초기값 정의
# while waiting_num != 6:  # 1 != 6 true 2 != 6 true 3 != 6 true ... 6 != 6 false
#     print(f"대기번호: {waiting_num}")
#     waiting_num += 1  # waiting_num = waiting_num + 1

cutomer = "김승찬"
index = 5

while index >= 1:  # 5 >= 1 true 4 >= 1 true 0 >= 1 false
    print(f"{cutomer}님 커피가 한잔 나왔습니다.")
    index -= 1  # index = indx - 1
    print(f"무료 쿠폰이 {index}번 남았어요.")
    if index == 0:
        print("이제 쿠폰이 없습니다.")
