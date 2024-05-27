# 변수의 종류는 크게 3가지
# 정수 숫자(intger) 변수 예) -1, 0, 1, 2, 3
# 실수 숫자(float) 변수 예) 1.1, 3.141597...
# 문자열(string) 변수 예) "문자"
# 불리언(boolean) 변수 예) True or False

# input() 한줄에 하나씩 입력을 받을 수 있음
a = int(input())  # 3
b = int(input())  # 4

# == 같다
# 7   -> "7"  -> "결과값: " + "7" == "결과값: 7"
print("결과값: " + str(a + b))


# map()과 input().split() 한줄에 여러개를 띄어쓰기 기준으로 입력을 받을 수 있음
a, b = map(int, input().split())
print(f"결과값: {a,b}")
