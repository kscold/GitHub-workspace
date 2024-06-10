# input()은 기본적으로 문자열(str)을 받음

# a = input()  # 안녕 -> "안녕"
# print(a)  # 안녕
# print(type(a))


# # 숫자(int)로 입력 받을 때에는 int(input())으로 사용함
# a = int(input())
# b = int(input())
# print(a + b)

# 한줄에 여러개의 데이터를 공백으로 받아야할 때
a, b, c = map(int, input().split())
print(a + b + c)
