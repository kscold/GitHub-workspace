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
for waiting_no in range(1, 6):  # [1, 2, 3, 4 ,5] 따로 지정하지 않으면 0부터 시작
    print(f"대기번호 : {waiting_no}")

for waiting_no in range(1, 6, 2):  # [1, 3 ,5]2, 3따로 지정하지 않으면 0부터 시작
    print(f"대기번호 : {waiting_no}")

for waiting_no in range(5, 0, -1):  # [1, 3 ,5]2, 3따로 지정하지 않으면 0부터 시작
    print(f"대기번호 : {waiting_no}")


# list를 이용한 반복을 사용해야되는 예시
orders = ["아이언맨", "토르", "스파이더맨"]
for order in orders:
    print(f"주문하신 분 : {order}")


# list와 마찬가지로 문자열도 반복 대상으로 설정하면 똑같이 한글자씩 반복할 수 있음
c = "hello"
for char in c:
    print(char)
