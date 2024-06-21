# 은행 ATM 시스템 실습


def open_account():
    # 지역(local)
    # 함수 부분
    print("새로운 계좌를 개설합니다.")


def deposit(balance, money):  # balance = 0, money = 10000
    print(f"{money}원이 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


# 전역(global)
# 메인 부분
open_account()  # 함수명()를 통해 함수를 호출

balance = 0
print(f"초기 자금: {balance}")
balance = deposit(balance, 1000)
print(f"입금 후 자금: {balance}")
