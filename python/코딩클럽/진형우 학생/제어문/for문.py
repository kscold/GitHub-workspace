# print(1)
# print(2)
# print(3)
# print(4)
# print(5)

# for문은 반복을 할 때 사용하는 문법인데 주어진 범위만큼
# 반복을 계속 진행하는 문법

# 문법
# for 변수 in 반복 대상:
#     실행할 명령

waiting_nums = [1, 2, 3, 4, 5]
for num in waiting_nums:
    print(f"대기번호 : {num}")

# range(끝나는 범위)
# 만약 range의 매개변수가 하나면 0부터 시작해서 끝나는 범위 - 1까지 반복
for num in range(5):  # [0, 1, 2, 3, 4]
    print(num)

# range(시작 인덱스, 끝나는 범위)
# 만약 range의 매개변수가 두 개면 시작 인덱스부터 시작해서 끝나는 범위 - 1까지 반복
for num in range(1, 6):  # [1, 2, 3, 4, 5]
    print(num)

# range(시작 인덱스, 끝나는 범위, 간격)
# 만약 range의 매개변수가 세 개면
# 시작 인덱스부터 시작해서 끝나는 범위 - 1까지 간격 만큼 띄어서 반복
for num in range(1, 6, 2):  # [1, 3, 5]
    print(num)

for num in range(5, 0, -1):  # [5, 4, 3, 2, 1]
    print(num)


# 리스트로만 반복해야하는 경우(숫자로만 이루어진 경우가 아닐 때)

# 리스트를 직접적으로 반복시킬 때
orders = ["아이언맨", "토르", "스파이더맨"]
for order in orders:
    print(f"{order}님, 커피가 준비됐습니다.")

# 리스트를 인덱스로 참조하여 반복시킬 때
orders = ["아이언맨", "토르", "스파이더맨"]
#             0          1         2
for i in range(len(orders)):  # [0, 1, 2]
    print(f"{orders[i]}님, 커피가 준비됐습니다.")
