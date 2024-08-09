# abs(x) x의 절대값(음수이던 양수이던 전부 양수로 바꿔준다.)
# pow(x, y) x의 y만큼 제곱한 값 2**3 = 8 == pow(2, 3)
# max() 가장 큰 값을 찾는거
# min() 가장 작은 값을 찾는거
# round(x, d) 소수점 반올림 매개변수(paramiter)


print(abs(-5))  # -5의 절대값 5
print(pow(4, 2))  # 4를 제곱한 값 16 2**3

print(max(5, 12, 234, 35, 6123, 345, 6342, 6))  # 5와 12 중 큰 값 12
print(min(5, 12))  # 5와 12 중 작은 값 5
print(round(3.14))  # 3.14를 소수점 이하 첫째 자리에서 반올림한 정수 3
print(round(4.678, 2))  # 4.678을 소수점 이하 셋째 자리에서 반올림한 값 4.68


# math 모듈
import math  # math라는 모듈을 가져다가 쓰겠다.

result = math.floor(4.99)  # 그냥 내림 4
print(result)
result = math.ceil(3.14)  # 그냥 올림 4
print(result)
result = math.sqrt(16)  # 제곱근(루트) 4
print(result)


from math import *

result = floor(4.99)  # 그냥 내림 4
print(result)
result = ceil(3.14)  # 그냥 올림 4
print(result)
result = sqrt(16)  # 제곱근(루트) 4
print(result)
