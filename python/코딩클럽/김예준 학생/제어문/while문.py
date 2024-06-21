# while문도 for문처럼 반복하는 문법이지만 조건을 기반으로 함
# if문이랑 비슷하고 조건에는 bool 값이 들어가고 True일 때만 반복을 함
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


customer = input("이름을 입력해주세요: ")
start = 5

while (
    start >= 1
):  # 5 >= 1 True 4 >= 1 True 3 >= 1 True 2 >= 1 True 1 >= 1 True 0 >= 1 False
    print(f"{customer}님, 커피 1잔을 시키셨군요.")
    start -= 1
    print(f"공짜 쿠폰까지 {start}번 남았어요.")
    if start == 0:
        print("커피를 공짜로 먹을 수 있습니다.")
