print(abs(-5))  # abs()는 절대값
print(pow(4, 2))  # pow()는 제곱 4**2

# 많이 쓰이는 메서드(명령어)
# max() 안에 있는 요소들 중에 가장 큰 값(리스트 가능)
print(max(4, 2, 124, 643, 124, 65, 2))
print(min(4, 2, 124, 643, 124, 65, 2))  # min()은 요소들 중에 가장 작은 값

print(round(3.141592))  # 3
print(round(3.141592, 2))  # 3.14 round()는 소수점 자리를 표현할 수 있음

# import를 통해서 외부 라이브러리를 가져올 수 있음
import math

result = math.floor(4.99)
print(result)  # 4
result = math.ceil(3.14)
print(result)  # 4
result = math.sqrt(16)
print(result)  # 16의 루트

# import를 편하게 하는 방법
from math import *

result = sqrt(16)
print(result)  # 16의 루트
