# 함수는 반복되는 로직을 단순화하고 어떤 값을 넣었을 때 또 어떤 값으로 나오게 되는 마법 상자
# 함수는 명령어 만들기

# 함수 문법
# def는 define이라는 뜻
# def 함수명():
#     실행할 명령
#     return 반환값 (옵션)


# 매개변수(parameter) x나 y같이 변수인데 값을 매개(연결)하는 변수
# def plus(x, y):  # x = 4 y = 3
#     sum = x + y  # sum = 4 + 3, == 7
#     print(f"결과는 : {sum}")


# # 인자(argument) 3이나 4처럼 실제 값이 들어가서 매개변수에 대입되는 값
# plus(4, 3)

# # 인자랑 매개변수의 순서와 갯수는 꼭 맞추어 주어야 함

# for i in range(5):
#     a = int(input())
#     b = int(input())
#     plus(a, b)


def math(x):
    return x**2 + 2 * x + 1


print(math(2))
