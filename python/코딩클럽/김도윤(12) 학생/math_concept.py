# 파이썬 내부에 정의 되어 있는 메서드(함수 혹은 예약어 혹은 명령어)

# abs(x) # x의 절대값 |100|
print(abs(-100))
# pow(x, y) # x를 y만큼 곱한 값 2**3 =8
print(pow(2, 3))

# max랑 min은 기억해주세용
# max()
print(max(1, 2, 3, 5, 3, 647, 457))
# min()
print(min(1, 2, 3, 5, 3, 647, 457))

# round()
print(round(3.14))  # (int) 결과는 3
print(round(4.678, 2))  # 결과는 4.68

# math 모듈
import math

result = math.floor(4.99)  # 내림 해주는 함수
print(result)

result = math.ceil(3.14)  # 올림 해주는 함수
print(result)

result = math.sqrt(16)
print(result)

# 모듈을 더 편하게 사용하는 방법
from math import *  # math라는 라이브러리에서 모든 기능을 가져온다.

result = floor(4.99)
