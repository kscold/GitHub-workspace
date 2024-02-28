# while 조건: # boolean True일때만 동작 if문과 비슷
#     실행할 명령

# for문을 이용한 예시
# for waiting_no in range(1, 5):  # [1, 2, 3, 4]
#     print(f"대기번호 : {waiting_no}")

# while문을 이용한 예시
a = 1  # 초기 변수에 값을 넣어줌
while a <= 10:
    # continue(건너뛰고 계속할꺼냐)나 break(종료한다)
    if a % 2 == 1:  # 홀수이면
        a += 1
        continue  # contiue를 만나면 건너뜀

    print(f"대기번호 : {a}")

    # 종료조건
    if a == 8:  # 8일 때
        break  # 바로 종료해줘

    a += 1  # waiting_no = waiting_no + 1


# index = 5

# while index >= 1:  # True 5 >= 1  4 >= 1 3 >= 1  2 >= 1  1 >= 1   0 >= 1 False
#     print("한결님 커피가 준비됐습니다.")
#     index -= 1  # index = index - 1
#     print(f"{index}번 남았어요.")

#     if index == 0:  # 즉, 0번 남았으면
#         print("커피를 폐기 처분합니다.")
