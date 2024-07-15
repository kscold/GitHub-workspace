# 변수의 종류
# 문자열(string) "" ''
# 정수(intger) -1 0 1, 2, 3
# 실수(float) 1.1, 3.14...
# 불리언(boolean) True or False

# input() == str(input())
var1 = int(input())
var2 = int(input())

print(f"결과는 : {var1 + var2}")


# 한줄에 띄어쓰기 기준으로 입력을 받는 방법 map()과 split()을 사용

a, b = map(int, input().split())
print(a, b)

# 한줄에 띄어쓰기 기준으로 입력을 받아서 바로 리스트로 만드는 방법

a = list(map(int, input().split()))
print(a)
