# 산술 연산자
# 특징: 값을 계산하고 값이 나옴
# + - * /(float, 실수) //(int, 정수) %(나머지) **(제곱)

print(1 + 1)
print(3 - 2)
print(5 * 2)
print(6 / 3)
print(6 // 3)
print(6 % 3)
print(2**10)

# 나머지 연산의 예시
num = int(input())

if num % 2 == 0:
    print("짝수")
elif num % 2 == 1:
    print("홀수")
