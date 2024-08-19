# ATM을 모방해보는 예시


# 함수부분(명령어를 정의하는 부분)
def open_account():  # 인자, 매개변수, 반환값 없는 경우
    print("새로운 계좌를 개설합니다.")


# balance == 잔돈, moneu == 입금한 돈
def deposit(balance, money):  # balance = 1000, money = 4000
    print(f"{money}원을 입급했습니다. 잔액은 {balance + money}원입니다.")
    return balance + money


def withdraw(balance, money):
    if balance >= money:
        print(f"{money}원을 출금했습니다. 잔액은 {balance - money}원입니다.")
        return balance - money
    else:
        print(f"잔액이 부족합니다. 잔액은 {balance}원입니다.")
        return balance


from datetime import datetime


def withdraw_night(balance, money):
    now = datetime.now()
    commission = 100  # 수수료 100
    if now.hour >= 17:
        print(f"업무시간 외에 {money}원을 출금했습니다.")
        return commission, balance - money - commission
    else:
        print(f"{money}원을 출금했습니다.")
        return commission, balance - money


# 메인부분(함수를 사용하는 부분)
open_account()
balance = 1000
print("초기 자금:", balance)  # 1000
balance = deposit(balance, 4000)
print("입금된 자금:", balance)  # 5000
balance = withdraw(balance, 6000)
print("출금된 자금:", balance)  # 돈이 출금이 안됐기 때문에 5000
balance = withdraw(balance, 3000)
print("출금된 자금:", balance)  # 2000

commission, balance = withdraw_night(balance, 1000)
print(f"수수료는 {commission} 업무시간 외에 출금된 자금:", balance)  # 900
