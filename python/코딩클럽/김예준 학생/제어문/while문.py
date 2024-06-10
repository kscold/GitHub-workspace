# while문도 for문처럼 반복하는 문법이지만 조건을 기반으로 함
# while 문법
# while 조건:
#    실행할 명령

# for waiting_no in range(1, 6):  # [1, 2, 3, 4, 5]
#     print(f"대기번호: {waiting_no}")

waiting_no = 1
while waiting_no < 6:
    # 1 < 6 True  2 < 6 True 3 < 6 True 4 < 6 True 5 < 6 True 6 < 6 False
    print(f"대기번호: {waiting_no}")
    waiting_no += 1  # waiting_no = waiting_no + 1


customer = "토르"
index = 5

while index >= 1:  # 0 >= 1 False
    print(f"{customer}님, 커피 1잔을 시키셨군요.")
    index -= 1
    print(f"공짜 쿠폰까지 {index}번 남았어요.")
    if index == 0:
        print("커피를 공짜로 먹을 수 있습니다.")
