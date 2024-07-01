from datetime import datetime

# 은행 ATM 시스템 실습


def open_account():
    # 지역(local)
    # 함수 부분
    print("새로운 계좌를 개설합니다.")


def deposit(balance, money):  # balance = 0, money = 1000
    print(f"{money}원을 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money  # 0 + 1000


def withdraw(balance, money):
    if balance >= money:
        print(f"{money}원을 출금했습니다. 잔액은 {balance-money}원입니다.")
        return balance - money
    else:
        print(f"잔액이 부족합니다. 잔액은 {balance}입니다.")
        return balance


def withdraw_night(balance, money):
    now = datetime.now()
    print("현재 시간은:" + str(now.hour))
    commission = 100

    if now.hour >= 9 and now.hour <= 17:  # 9시 ~ 17시
        return commission, balance - money
    else:
        print(f"업무 시간 외에 {money}원을 출금했습니다.")
        return commission, balance - money - commission


# 전역(global)
# 메인 부분
open_account()  # 함수명()를 통해 함수를 호출

balance = 2000
print(f"초기 자금: {balance}원")

balance = deposit(balance, 1000)
print(f"입금 후 자금: {balance}원")  # 3000

balance = withdraw(balance, 1500)  # 1500
print(f"출금 후 자금: {balance}원")

balance = withdraw(balance, 2000)  # 2000
print(f"출금 후 자금: {balance}원")

commission, balance = withdraw_night(balance, 1000)  # 1000
print(f"은행 업무시간 외 출금 후 자금: 수수료: {commission}, 출금: {balance}원")
