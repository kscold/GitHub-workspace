# abs(x) x의 절댓값
# pow(x, y)
# max()
# min()
# round(x, d)

print(abs(-5))  # -5의 절대값 5
print(pow(4, 2))  # 4를 제곱한 값 4**2 == 16

print(max(5, 12, 345, 2345, 23, 4623))  # 5와 12 중 큰 값 12
print(min(5, 12))  # 5와 12 중 작은 값 5

print(round(3.14))  # 3.14를 소수점 이하 첫째 자리에서 반올림한 정수 3
print(round(4.678, 2))  # 4.678을 소수점 이하 셋째 자리에서 반올림한 값 4.68

# math 모듈
import math

# math.을 함께 작성
result = math.floor(4.99)
print(result)  # 4.99의 내림
result = math.ceil(3.14)
print(result)  # 3.14의 올림
result = math.sqrt(16)
print(result)  # 16의 제곱근 루트

from math import *

result = floor(4.99)
print(result)  # 4.99의 내림
result = ceil(3.14)
print(result)  # 3.14의 올림
result = sqrt(16)
print(result)  # 16의 제곱근
