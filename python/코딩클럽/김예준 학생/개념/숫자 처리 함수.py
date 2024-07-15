# abs() 절대값을 구하는 메서드
# pow(x, y) x를 y만큼 거듭제곱한 값
# max() 가장 큰 값
# min() 가장 작은 값
# round(x, d) x를 반올림한 값, d는 표시할 소수점 자릿수

print(abs(-4))
print(pow(4, 2))  # 4 ** 2 == 16
print(max(4, 5, 1, 9, 3, 5))  # 9
print(min(4, 5, 1, 9, 3, 5))  # 1
print(round(3.141592, 2))  # 3.14

# math 라이브러리(모듈) 사용
# import math

# print(math.ceil(3.14))  # 올림
# print(round(3.14))  # 3
# print(math.floor(3.14))  # 3 내림
# print(math.sqrt(16))  # 4

# 모듈을 좀 더 편하게 사용하기 위한 방법
from math import *

print(ceil(3.14))  # 올림
print(round(3.14))  # 3
print(floor(3.14))  # 3 내림
print(sqrt(16))  # 4
