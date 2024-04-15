# 명령어 만들기
# define
# def 함수명(parameter):
#    실행할 명령


# def customSum(x, y):  # x = 2 y = 5
#     sum = x + y  # 2 + 5 = 7 ,  sum = 7
#     return sum


# print(customSum(2, 5))


# ATM 은행 예시
# 계좌를 만드는 함수
def open_account():
    print("새로운 계좌를 만듭니다.")


# Function to deposit (put money)
def deposit(balance, money):  # balance = 10000 , money = 2000
    print(f"I deposited {money} won. The balance is {balance+money} won.")
    return balance + money  # 10000 + 2000


# Withdrawal function
def withdraw(balance, money):  # balance = 12000, money = 5000
    if balance >= money:  # 12000 >= 5000 True
        print(f"I withdrew {money} won. The balance is {balance-money} won.")
        return balance - money  # 12000 - 5000 = 7000 return 7000
    else:
        print(f"Your balance is insufficient. The balance is {balance} won.")
        return balance


# When money is withdrawn outside of working hours
def withdrawal_night(balance, money):
    commission = 500
    print(f"I withdrew {money} outside of business hours.")
    return commission, balance - money - commission


# Main part to use
open_account()

balance = 10000  # Original money (init value)
print(f"The money I originally had was: {balance} won")

balance = deposit(balance, 2000)
print(f"Money after deposit: {balance} won")

balance = withdraw(balance, 5000)
print(f"Money after withdrawal: {balance} won")

balance = withdraw(balance, 10000)
print(f"Money after withdrawal: {balance} won")

commission, balance = withdrawal_night(balance, 5000)
print(
    f"The commission for withdrawal at night is {commission} won and the money after withdrawal is: {balance} won."
)
