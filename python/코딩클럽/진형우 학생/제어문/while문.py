# while문은 반복을 할 때 사용하는 문법인데 조건, 즉 bool값이 True일 때
# 반복을 계속 진행하는 문법

# 문법
# while 조건:
#    실행할 명령

# for num in range(1, 6):  # [1, 2, 3, 4, 5]
#     print(num)

# 조건으로 while문을 끊기게 만들 때
i = 1
while 5 >= i:  # 5 >= 1 True 5 >= 2 True ... 5 >= 5 True 5 >= 6 False
    print(i)
    i += 1  # i = i + 1

# 조건은항상 True로 만들고 중간에 if문을 걸어서 끊기게 만들 때
i = 1
while True:
    print(i)
    i += 1
    if i == 6:
        break

customer = "토르"
index = 5

while index >= 1:
    print(f"{customer}님, 커피가 준비됐습니다.")
    index -= 1
    print(f"{index}번 남았어요.")
    if index == 0:
        print("커피를 폐기 처분합니다.")
