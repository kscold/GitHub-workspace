# import math # 이렇게 import하면 math.floor() 형식으로 접근해야 한다.
from math import *  # math(수학)라는 코너의 모든 기능을 가져다가 쓰겠다.

result1 = floor(4.99)  # 내림
result2 = ceil(3.14)  # 올림
# result = sqrt(16) # 루트
print(result1)
print(result2)

# 메서드(미리 정의되어 있는 함수)
# 숫자 처리 함수(파이썬 내부에 정의 math 라이브러리 없어도 됨)
print(abs(-100))  # 절대값 100
print(max(1, 2, 4, 5))  # 5
print(min(1, 2, 4, 5))  # 1
print(round(1.32463))  # 1
print(round(1.32463, 3))  # 1.325
