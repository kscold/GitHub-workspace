python = "Python is Amazing"
#         012345678910111213141516
# 소문자로 바꾸는 메서드(영어만 가능)
print(python.lower())

# 대문자로 바꾸는 메서드(영어만 가능)
print(python.upper())

# 대문자인지 확인하는 메서드, boolean 값으로 나옴
print(python[0].isupper())

# 소문자인지 확인하는 메서드, boolean 값으로 나옴
print(python[1:5].islower())

# 특정 단어를 바꾸는 메서드
# 첫번째 선택한 단어를 2번째 적은 단어로 바꿈
print(python.replace("Python", "Java"))

# 인덱스를 찾는 방법
# 첫번째 n의 인덱스를 찾는 방법
index = python.index("n")
print(index)

# 두번째 n의 인덱스를 찾는 방법
index = python.index("n", index + 1)
print(index)

# 특정 문자가 몇번 나오는지 확인할 수 있는 방법
print(python.count("n"))

# 문자열의 길이를 측정하는 메서드
a = "안녕하세요"
print(len(a))
