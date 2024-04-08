# 명령어 만들기
# def 함수명():
#    실행할 명령


# def customSum(x, y):  # x = 1000 y = 5235
#     sum = x + y
#     return sum


# print(customSum(1000, 5235))
# print(customSum(4, 3))
# print(customSum(74, 525))


# ATM 은행 예시
# 계좌를 만드는 함수
def open_account():
    print("새로운 계좌를 만듭니다.")


# 입금(돈을 넣는)하는 함수
def deposit(balance, money):  # balance = 10000 , money = 2000
    print(f"{money}원 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money  # 10000 + 2000


# 출금(돈을 빼는)하는 함수
def withdraw(balance, money):
    if balance >= money:
        print(f"{money}원을 출금했습니다. 잔액은 {balance-money}원입니다.")
        return balance - money
    else:
        print(f"잔액이 부족합니다. 잔액은 {balance}원입니다.")
        return balance


def withdraw_night(balance, money):
    commission = 500
    print(f"업무 시간 외에 {money}원을 출금했습니다.")
    return commission, balance - money - commission


open_account()

balance = 10000  # 원래 가지고 있던 돈
print(f"원래 가지고 있던 돈은: {balance}원")

balance = deposit(balance, 2000)
print(f"입금 후의 돈은: {balance}원")

balance = withdraw(balance, 5000)
print(f"출금 후의 돈은: {balance}원")

balance = withdraw(balance, 10000)
print(f"출금 후의 돈은: {balance}원")

commission, balance = withdraw_night(balance, 5000)
print(f"밤에 출금하는 수수료는 {commission}원이고 출금 후의 돈은: {balance}원")
