# def define 정의하다

# def 함수명():
#    실행할 명령

# def sum(x, y):  # 매개변수(paramiter)
#     return x + y

# print(sum(1, 2))  # 인자(argument)


def open_account():
    print("새로운 계좌를 개설합니다.")


# 은행에 돈 넣는 코드(입금)
def deposit(balance, money):  # balance = 10000,  money = 2000
    print(f"{money}원을 입급했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


def withdraw(balance, money):
    if balance >= money:
        print(f"{money}원을 출금했습니다. 잔액은 {balance-money}원입니다.")
        return balance - money
    else:
        print(f"잔액이 부족합니다. 잔액은 {balance}원입니다.")
        return balance


open_account()
balance = 10000  # 초기돈
print(f"원래 가지고 있던 돈은 {balance}원입니다.")
balance = deposit(balance, 2000)
print(f"입금된 돈은 {balance}원입니다.")

balance = withdraw(balance, 7000)
print(f"출금된 돈은 {balance}원입니다.")

balance = withdraw(balance, 7000)
print(f"출금된 돈은 {balance}원입니다.")
