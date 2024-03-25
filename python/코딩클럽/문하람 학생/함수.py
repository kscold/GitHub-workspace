# define 정의하다. def
# 명령어 만들기
# def 함수명():
#     실행할 명령


# 반환하고 싶은 값이 있다면 return을 사용하고 없다면 안써도 됨


# def plus(x, y):  # 매개변수(parameter) 파라미터 100 101
#     return x + y  # 100 + 101 == 201


# a = 100
# b = 101
# print(plus(a, b))  # 인자(argument) 아규먼트


# 함수를 이용해서 ATM기 만드는 예시
def open_account():
    print("새로운 계좌를 개설합니다.")


def deposit(balance, money):  # 돈을 입금하는 함수 10000, 40000
    print(f"{money}원을 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money  # 50000


def withdraw(balance, money):  # 돈을 출금하는 함수 50000, 30000
    if balance >= money:  # 원래가지고 있는 돈이 출금하는 돈보다 더 크면 50000 >= 30000
        print(f"{money}원을 출금했습니다. 잔액은 {balance-money}원입니다.")
        return balance - money  # 50000 - 30000 == 20000
    else:  # 원래가지고 있는 돈보다 출금하는 돈이 더 크면 balace < money
        print(f"잔액이 부족합니다. 잔액은 {balance}입니다.")
        return balance


def withdraw_night(balance, money):  # 20000 10000
    commission = 1000  # 수수료 1000원 설정
    print(f"업무 시간 외에 {money}원을 출금했습니다.")
    return commission, balance - money - commission  # 20000 - 10000 - 1000


open_account()
balance = 10000  # 원래 가지고 있던 돈
print(f"현재 가지고 있는 돈: {balance}")

# 입금
balance = deposit(balance, 40000)
print(f"{balance}원 입금 확인")  # 50000원 입금 확인

# 출금
balance = withdraw(balance, 60000)  # else문이 실행됨
balance = withdraw(balance, 30000)  # if문이 실행됨
print(f"{balance}원 출금 확인")  # 20000원 출금 확인

# 수수료
commission, balance = withdraw_night(balance, 10000)
print(f"수수료 {commission}원이며, 잔액은 {balance}원입니다.")
