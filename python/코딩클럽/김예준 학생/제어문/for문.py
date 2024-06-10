# for문을 사용한 안한 경우
# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")

# for문을 사용한 경우
# for문의 문법
# for 변수 in 대상:
#    실행할 명령


# for waiting_no in [1, 2, 3, 4, 5]:
#     print(f"대기번호: {waiting_no}")

# range는 범위를 지정할 수 있는 메서드임
# range 문법
# range(start, end, interval) 한개만 설정해도되고, 두개만 설정해도 되고, 세개만 설정해도 됨

# for waiting_no in range(5):  # [0, 1, 2, 3, 4]
#     print(f"대기번호: {waiting_no}")

# for waiting_no in range(1, 10001):  # [1, 2, 3, 4, 5]
#     print(f"대기번호: {waiting_no}")

# for waiting_no in range(1, 6, 2):  # [1, 3, 5]
#     print(f"대기번호: {waiting_no}")


# for waiting_no in range(5, 0, -1):  # [5, 4, 3, 2, 1]
#     print(f"대기번호: {waiting_no}")


# 리스트 반복을 써야만 할때
orders = ["아이언맨", "토르", "스파이더맨"]
for order in orders:
    print(f"{order} 님, 커피가 준비됐습니다.")
