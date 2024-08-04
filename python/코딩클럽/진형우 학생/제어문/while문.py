# while문은 반복을 할 때 사용하는 문법인데 조건, 즉 bool값이 True일 때
# 반복을 계속 진행하는 문법

# 문법
# while 조건:
#    실행할 명령

# for num in range(1, 6):  # [1, 2, 3, 4, 5]
#     print(num)

i = 1
while 5 >= i:  # 5 >= 1 True 5 >= 2 True ... 5 >= 5 True 5 >= 6 False
    print(i)
    i += 1  # i = i + 1

i = 1
while True:
    print(i)
    i += 1
    if i == 6:
        break
