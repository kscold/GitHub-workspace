# define 정의하다.
# 명령어 만들기
# def 함수명(매개변수(parameter)):
#     실행할 문장

# 함수명(1) 인자(argument)


def open_account():
    print("새로운 계좌를 개설합니다.")


def deposit(balance, money):
    print(f"{money}원을 입금했습니다. 잔액은 {balance+money}원입니다.")
    return balance + money


def withdraw(balance, money):
    if balance >= money:  # 잔액이 출금 금액보다 크면
        print(f"{money}원을 출금했습니다. 잔액은 {balance-money}원입니다.")
        return balance - money
    else:
        print(f"잔액이 부족합니다. 잔액은 {balance}원입니다.")
        return balance


def withdraw_night(balance, money):  # 수수료
    commission = 100  # 수수료 100원
    print(f"업무 시간 외에 {money}원을 출금했습니다.")
    return commission, balance - money - commission


open_account()
balance = 0  # 초기 잔액
balance = deposit(balance, 1000)  # 1000원을 입급
balance = withdraw(balance, 2000)  # 2000원을 출금
balance = withdraw(balance, 500)  # 500원을 출금

commission, balance = withdraw_night(balance, 400)  # 수수료 부과
print(f"수수료 {commission}원이며, 잔액은 {balance}원입니다.")


# 함수 호출
# 기본값을 지정하기
def profile1(name="김승찬", age=25, main_lang="파이썬"):
    print(f"이름: {name}\t나이: {age}\t주 사용 언어: {main_lang}")


profile1("찰리", 20, "파이썬")
profile1("루시", 25, "자바")
profile1("사람1")
# 매개변수의 순서를 지키지 않고 명시적으로 호출(키워드 인자)
profile1(name="사람2", main_lang="자바스크립트", age=20)
profile1()


# 가변인자
def profile2(name, age, *languages):
    print(f"이름: {name}\t나이: {age}\t주 사용 언어: ", end="")
    for language in languages:  # ["파이썬", "자바", "C", "C++", "자바스크립트"]
        print(f"{language}", end=" ")
    print()  # 줄바꿈을 위해서


profile2("사람3", 20, "파이썬", "자바", "C", "C++", "자바스크립트")
profile2("사람4", 25, "코틀린", "스위프트")
