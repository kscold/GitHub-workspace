# def define 정의하다

# def 함수명():
#    실행할 명령


# def sum(x, y):  # 매개변수(paramiter)
#     return x + y


# print(sum(1, 2))  # 인자(argument)
# print(sum(100, 324234))  # 인자(argument)


def open_account():
    print("새로운 계좌를 개설합니다.")


# 은행에 돈 넣는 코드(입금)
def deposit(balance, money):  # balance = 10000,  money = 2000
    print(f"{money}원을 입급했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


# 은행에 돈 빼는 코드(출금)
def withdraw(balance, money):  # balance = 5000, money = 70000
    if balance >= money:
        print(f"{money}원을 출금했습니다. 잔액은 {balance-money}원입니다.")
        return balance - money
    else:  # balance < money
        print(f"잔액이 부족합니다. 잔액은 {balance}원입니다.")
        return balance


from datetime import datetime


def withdraw_night(balance, money):
    # 밤시간에 출금하면 수수료 # balance = 5000, money = 500
    now = datetime.now()
    comission = 100  # 수수료 100
    if now.hour >= 19:
        print(f"업무 시간 외에 {money}원을 출금했습니다.")
        return comission, balance - money - comission
    else:
        return 0, withdraw(balance, money)


open_account()

balance = 10000  # 초기돈
print(f"원래 가지고 있던 돈은 {balance}원입니다.")

balance = deposit(balance, 2000)  # balance = 12000
print(f"입금된 돈은 {balance}원입니다.")

balance = withdraw(balance, 7000)  # balacne = 5000
print(f"출금된 돈은 {balance}원입니다.")

comission, balance = withdraw_night(balance, 500)
print(f"수수료 {comission}원이며, 잔액은 {balance}원입니다.")
