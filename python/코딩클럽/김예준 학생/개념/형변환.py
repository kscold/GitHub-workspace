# 아래의 경우 문자열은 더하기가 잘 되지만
# 숫자는 계산이 되지 않음
# a = input()
# b = input()

# print(a + b)

# 형변환이란 타입을 임시적으로 바꾸는 것
# int() float() str() bool()
# 주의할 점: 파이썬은 꼭 같은 타입끼리만 계산이 가능

# a = int(input())
# b = int(input())

# print(a + b)

# print(int("1"))  # int("1") == 1
# print(int("안녕"))  # int("안녕") == ? 오류!

a = int(input())
b = int(input())
print("결과는 " + str(a + b) + "입니다.")
