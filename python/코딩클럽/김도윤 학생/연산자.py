# 산술 연산자
# + 더하기
# - 빼기
# * 곱하기
# / 몫을 구함 유리수 나누기 // 정수 나누기
# ** 제곱을 표현 2**3 = 8
# % 나머지를 구함


변수 = int(input())
if 변수 % 2 == 1:  # True
    print("홀수 입니다.")
else:
    print("짝수 입니다.")

# 비교 연산자
# True False 만 반환
# >
# <
# >=
# <=

변수1 = 1001
변수2 = 999
if 변수1 < 변수2:  # True
    print("변수2가 더 큽니다.")
else:
    print("아니요, 변수1이 더 큽니다.")


# 논리 연산자
# True False 만 반환
# and 왼쪽 값과 오른쪽 값이 모두 참이면 참, 그리고
# or 왼쪽 값과 오른쪽 값이 하나라도 참이면 참, 또는
# not 값이 참이면 거짓, 거짓이면 참, 반대

# True      # False
print((3 > 0) and (3 > 5))  # False
# True      # False
print((3 > 0) or (3 > 5))  # True
# True
print(not (1 != 3))  # False

# ==
# !=
