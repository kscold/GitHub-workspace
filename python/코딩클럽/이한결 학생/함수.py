# def define 정의하다

# def 함수명():
#    실행할 명령

# def sum(x, y):  # 매개변수(paramiter)
#     return x + y

# print(sum(1, 2))  # 인자(argument)


# 은행에 돈 넣는 코드
def deposit(balance, money):  # 입금
    print(f"{money}원을 입급했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


balance = 10000  # 초기돈
print(f"원래 가지고 있던 돈은 {balance}원입니다.")
balance = deposit(balance, 10000)
