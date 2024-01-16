# 산술 연산자 == 값으로 나온다.
# + 더하기
# - 빼기
# * 곱하기
# / 몫을 구함 유리수 나누기 // 정수 나누기
# print(7 // 5)
# ** 제곱을 표현 2**3 = 8

# % 나머지를 구함
# 변수 = int(input())
# if 변수 % 2 == 1:  # True
#     print("홀수 입니다.")
# elif 변수 % 2 == 0:
#     print("짝수 입니다.")

# 비교 연산자
# True False 만 반환(boolean)
# >
# <
# >=
# <=

# 변수1 = 1001
# 변수2 = 999
# if 변수1 < 변수2:  # False
#     print("변수2가 더 큽니다.")
# elif 변수1 >= 변수2:
#     print("아니요, 변수1이 더 큽니다.")

# 논리 연산자
# True False 만 반환
# and 왼쪽 값과 오른쪽 값이 모두 참이면 참, 그리고
# or 왼쪽 값과 오른쪽 값이 하나라도 참이면 참, 또는
# not 값이 참이면 거짓, 거짓이면 참, 반대

# # True      # False
# print((3 > 0) and (3 > 5))  # False and는 그리고라는 뜻
# # True      # False
# print((3 > 0) or (3 > 5))  # True or는 또는 이라는 뜻
# # True
# print(not (1 != 3))  # False not은 나온 값의 반전

# == 같다
# != 같지 않다

# 복합 대입 연산자
# +=
# -=
# *=
# /=
# //=
# **=
# %=

# number = 2  # 변수를 선언
# # number = number + 1
# # number += 1

# # number = number * 2
# number *= 2

# print(number)


# 6. 다음과 같은 실행결과를 얻기 위해 가에 들어갈 코드로 알맞은 것은?
# num = 3
# 가
# print(num)
# 실행결과
# 6
# 답: 2번이다

# ① num += 2
# ② num *= 2
# ③ num + 3
# ④ num == 2

# 메서드(미리 정의되어 있는 함수)
# 숫자 처리 함수
# print(abs(-100))
# print(max(1, 2, 4, 5))
# print(min(1, 2, 4, 5))
# print(round(1.32463, 3))

from math import *  # math라는 책의 모든 기능을 가져다가 읽겠다.

result1 = floor(4.99)  # 내림
result2 = ceil(3.14)  # 올림
# result = sqrt(16) # 루트
print(result1)
print(result2)
