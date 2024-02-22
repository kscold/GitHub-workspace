# print("대기번호 : 1")
# print("대기번호 : 2")
# print("대기번호 : 3")
# print("대기번호 : 4")
# print("대기번호 : 5")

# for 변수 in 반복 대상:
#     실행할 명령

# list를 사용한 예시
list_num = [1, 2, 3, 4, 5]
for waiting_no in list_num:
    print(f"대기번호 : {waiting_no}")

# range를 사용한 예시
# range는 범위라는 뜻으로 정수의 정수 - 1 범위 만큼 반복
for waiting_no in range(1, 6):  # [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]
    print(f"대기번호 : {waiting_no}")
