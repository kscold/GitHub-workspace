# 슬라이싱

# seungChan = "010-6545-6502"
# 0 1 2 3 4 5 6 7 8 9 10 11 12
# seungChan = input()

# # 0 1 2 3 4
# # 인덱스(index)

# print(f"전화 번호는 {seungChan[0:9]}****")

문자 = "Hello"
#       01234

print(문자.lower())
print(문자.upper())
print(문자[0].isupper())  # H가 대문자면 True를 반환
print(문자[0].islower())  # H가 소문자가 아니기 때문에 False 반환
print(문자)
print(문자[1:3])

# 문자 = "한결안녕"  # 개행 \n
# # 0 1 2 3

# print(문자.replace("한결", "승찬"))  # 얘는 좀 많이 씀


python = "Python is Amazing"
# 012345
print(python.lower())  # 전체 소문자로 변환
print(python.upper())  # 전체 대문자로 변환
print(python[0].isupper())  # python[0] P # 인덱스 0에 있는 값이 대문자인지 확인
print(python[1:3])
print(python[0:3].islower())  # 인덱스 1부터 2에 있는 값이 소문자인지 확인
print(python.replace("Python", "Java"))  # Python을 Java로 바꾸기
