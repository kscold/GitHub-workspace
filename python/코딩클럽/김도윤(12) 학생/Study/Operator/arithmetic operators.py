# 산술 연산자 (특징: 값(value)으로 나온다.)
# +
# -
# *
# 몫을 구하는 것인데 / or // / 하나는 float 표현 // int 표현 1.4 3.14, 1/5 == 0.2
# % 나머지 연산

print(1 + 2)
print(1 - 2)
print(3 * 2)
print(3 / 2)
print(3 // 2)
print(7 % 2)

# 나머지 연산을 많이 사용하는 예시
var = int(input())
if var % 2 == 0:
    print("짝수")
elif var % 2 == 1:
    print("홀수")
