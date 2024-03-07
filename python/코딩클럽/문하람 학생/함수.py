# define 정의하다. def
# def 함수명():
#     실행할 명령

# def two_func(x):  # 매개변수(paramiter)
#     return x**2 + 2 * x + 1

# print(two_func(2))  # 인자(argument)


def open_account():
    print("새로운 계좌를 개설합니다.")


open_account()


def deposit(balance, money):
    print(f"{money}원을 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


balance = 10000
print(f"현재 가지고 있는 돈: {balance}")
balance = deposit(balance, 40000)
print(f"{balance}원 입금 확인")
