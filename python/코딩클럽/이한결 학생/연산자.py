# # 산술연산자
# # +
# # -
# # * 곱하기
# # //(int) 나누기 /(float)  몫
# # ** 제곱
# # 2의 3제곱 2 * 2 * 2 = 8
# # 나머지 % 연산 나머지는

# # 비교연산자 <, >, <=, >=
# # True 혹은 False를 반환

# # 논리연산자 and, or, not
# # True 혹은 False를 반환
# # and는 둘 다 True
# # or은 둘 중에 하나만 True
# # not은 나온 결과에 반대

# # 연산자의 우선순위
# print(2 + 4 * 7)
# print((2 + 4) * 7)

# # 결과적인 실습
# print((3 > 0) and (3 > 5))  # false
# print((3 > 0) or (3 > 5))  # ture

# print(not (1 != 3))  # false

# # 복합 대입 연산자
# # +=
# # -=
# # *=
# # /=
# # **=
# # //=
# # %=

# number = 1  # 변수의 초기화
# number += 100
# print(number)

import math

result = math.sqrt(4.99)
print(result)

# 정의되어 있는 함수
print(abs(-100))

print(max(-100, 1000))
print(min(-100, 1000))
