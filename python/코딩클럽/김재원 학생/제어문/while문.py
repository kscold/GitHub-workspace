# while 조건:
#     실행할 명령


# for waiting_no in [1, 2, 3, 4]:
#     print(f"대기번호 : {waiting_no}")

waiting_no = 1
while waiting_no <= 10:  # 5 <= 4 False
    # continue 이 반복 건너뛰기
    # break 반복 끝내기

    if waiting_no % 2 == 0:  # 짝수일 때 실행하는 조건 2 1
        waiting_no += 1
        continue

    # if waiting_no == 8:  # 짝수일 때 실행하는 조건 2
    #     break

    print(f"대기번호 : {waiting_no}")  # 1 3 5 6 7 8 9
    waiting_no += 1  # waiting_no = waiting_no - 1
