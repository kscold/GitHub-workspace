# def 함수명(매개변수(paramiter)):
#     실행할 문장

# 함수명(1) 인자(argument)


def open_account():
    print("새로운 계좌를 개설합니다.")


open_account()


def deposit(balance, money):
    print(f"{money}원을 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


balance = 10000  # 초기 잔액
balance = deposit(balance, 1000)
print(balance)
