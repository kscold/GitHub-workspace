# 변수 = "안녕?"
# # 0 1 2
# print(변수[1])

# 문자열 슬라이싱(자르다)
# 인덱스(숫자)
# phoneNumber = input()
# phoneNumber = "010-6545-6502"  # string str
# #             012345678901011
# print(phoneNumber[0:9] + "****")  # range(0,3)

python = "Python is Amazing"
#         0123456789

print(python.lower())  # 영어에서만
print(python.upper())  # 영어에서만
# "Python is Amazing" 문자열의 0번째 인덱스 P가 대문자니? True
print(python[0].isupper())
# "Python is Amazing" 문자열의 1부터 5까지 인덱스 ython이 소문자니? True
print(python[1:6].islower())

# 첫번째 데이터는 있는 단어 선택, 두번째는 바꿀 단어 선택 여기서 제일 중요!
print(python.replace("Python", "Java"))

python = "Python is Amazing"

# find()는 만족하는 첫번째 데이터의 인덱스가 뭔지 물어보는 명령어
find = python.find("n")
print(find)  # 5

# find() 안에 두번째 데이터를 넣으면 그 인덱스 이상부터 만족하는 데이터의 인덱스를 찾음
find = python.find("n", find + 1)
print(find)

index = python.index("n")
print(index)
index = python.index("n", index + 1)
print(index)
index = python.index("n", 2, 6)
print(index)
