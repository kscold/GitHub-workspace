# 입력을 받을 때 사용하는 명령어 input()
# input()은 기본적으로 str 타입으로 입력 받음

a = input()

print(a)
print(type(a))

# 만약 정수로 받고 싶을 때
a = int(input())

print(a)
print(type(a))

# 만약 입력이 한줄에 띄어쓰기를 기준으로 입력을 받아야할 때
# map() split()를 활용함
a, b, c = map(int, input().split())
print(a, b, c)
