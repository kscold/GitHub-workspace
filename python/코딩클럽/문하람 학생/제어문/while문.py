# whlie 조건:
#     실행할 명령


# for waiting_no in range(1, 6):  # [1, 2, 3, 4 ,5] 따로 지정하지 않으면 0부터 시작
#     print(f"대기번호 : {waiting_no}")

# waiting_no = 1
# while waiting_no <= 5:  # 1 <= 5 True 2 <= 5 3 <=  ... 6 <= 5 False
#     print(f"대기번호 : {waiting_no}")
#     waiting_no += 1  # waiting_no = waiting_no + 1


customer_yes = "예"  # "예"라는 문자열을 입력했을 때 break 될 수 있도록 변수 초기화
person = None  # 변수 이름만 선언해놓음 비어있음

while person != customer_yes:  # None != "예" True "아니요" != "예" True
    print("김승찬님 커피를 가져가세죠")
    person = input("커피 가져가실래요: ")  # 아니요
