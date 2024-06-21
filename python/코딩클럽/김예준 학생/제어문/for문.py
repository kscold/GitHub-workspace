# for문을 사용한 안한 경우
# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")

# for문을 사용하는 이유는 주어진 범위만큼 반복시키기가 편함
# for문을 사용한 경우
# for문의 문법
# for 변수 in 반복할 대상:
#    실행할 명령


# for waiting_no in [1, 2, 3, 4, 5]:
#     print(f"대기번호: {waiting_no}")

# range는 범위를 지정할 수 있는 메서드임
# range 문법
# range는 start를 지정하지 않으면 항상 0부터 시작이고 n - 1까지 반복함
# range(start, end, interval) 한개만 설정해도되고, 두개만 설정해도 되고, 세개만 설정해도 됨

# range(end) # 0부터 end - 1까지 반복 대상을 만듬
# for waiting_no in range(5):  # [0, 1, 2, 3, 4]
#     print(f"대기번호: {waiting_no}")

# range(start, end) # 1부터 end - 1까지 반복 대상을 만듬
# for waiting_no in range(1, 101):  # [1, 2, 3, 4, 5 ... 100]
#     print(f"대기번호: {waiting_no}")

# range(start, end, interval) # 1부터 end - 1까지 interval 만큼 띄어서 반복 대상을 만듬
# for waiting_no in range(1, 6, 2):  # [1, 3, 5]
#     print(f"대기번호: {waiting_no}")


# for waiting_no in range(5, 0, -1):  # [5, 4, 3, 2, 1]
#     print(f"대기번호: {waiting_no}")


# 리스트 반복을 써야만 할때, 문자열일 때
orders = ["아이언맨", "토르", "스파이더맨"]
for order in orders:
    print(f"{order} 님, 커피가 준비됐습니다.")


orders = ["아이언맨", "토르", "스파이더맨"]
# len은 문자열이 길이나 리스트의 갯수를 반환함
# print(len(orders)) # 3
for i in range(len(orders)):  # [0, 1, 2]
    print(f"{orders[i]} 님, 커피가 준비됐습니다.")
