# while 조건: # boolean True일때만 동작 if문과 비슷
#     실행할 명령


index = 5

while index >= 1:  # True 5 >= 1  4 >= 1 3 >= 1  2 >= 1  1 >= 1   0 >= 1 False
    print("한결님 커피가 준비됐습니다.")
    index -= 1  # index = index - 1
    print(f"{index}번 남았어요.")

    if index == 0:  # 즉, 0번 남았으면
        print("커피를 폐기 처분합니다.")
