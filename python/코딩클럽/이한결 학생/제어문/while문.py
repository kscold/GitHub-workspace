# while 조건:
# boolean True일때만 동작 if문과 비슷
#     실행할 명령

# for문을 이용한 예시
for waiting_no in range(1, 5):  # [1, 2, 3, 4]
    print(f"대기번호 : {waiting_no}")

waiting_no = 1
while waiting_no != 5:  # 1 != 5 True 2 != 5 True 3 != 5 True ... 5 != 5 False
    print(f"대기번호 : {waiting_no}")  # 대기번호: 1 대기번호: 2 대기번호: 3
    waiting_no += 1  # waiting_no = waiting_no + 1
