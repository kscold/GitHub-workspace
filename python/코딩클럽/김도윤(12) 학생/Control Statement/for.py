# for 변수 in 반복대상:
#   실행할 명령

# print("대기번호: 1")
# print("대기번호: 2")
# print("대기번호: 3")
# print("대기번호: 4")
# print("대기번호: 5")

for waiting_num in [1, 2, 3, 4, 5]:
    print(f"대기번호: {waiting_num}")

for waiting_num in range(1, 101):  # randrange()
    print(f"대기번호: {waiting_num}")
