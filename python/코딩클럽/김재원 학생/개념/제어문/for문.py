print("대기번호 : 1")
print("대기번호 : 2")
print("대기번호 : 3")
print("대기번호 : 4")

# for 변수 in 반복 대상:
#     실행할 명령

for waiting_no in [1, 2, 3, 4]:
    print(f"대기번호 : {waiting_no}")

for waiting_no in range(1, 11):  # [1, 2, 3, 4] randrange(1, 11) randint(1, 10)
    print(f"대기번호 : {waiting_no}")

orders = ["아이언맨", "토르", "스파이더맨"]
for order in orders:
    print(f"고객님 : {order}")
