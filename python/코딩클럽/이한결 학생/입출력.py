# 입력을 받을 때에 명령어는 input()를 사용한다.
# input() 명령어는 기본적으로 문자열(str)("")을 받는다.
# 그래서 숫자(정수)로 받을려면 int(input())으로 만들어 주어야 한다.

var1 = int(input())
var2 = int(input())

print(f"결과는 : {var1+var2}")

# map()을 사용해서도 입력을 받을 수 있는데 map은 뿌려주다라는 뜻이다.
# map()과 input().split()을 사용하면 한줄로 여러 값을 입력할 수 있다.
# 이 입력 기준은 공백(space바) 기준으로 받는다.

var1, var2 = map(int, input().split())

print(f"결과는 : {var1+var2}")
