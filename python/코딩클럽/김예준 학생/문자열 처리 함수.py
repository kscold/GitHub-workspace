# 특징은 문자열을 담은 변수에 .찍고 사용함
# lower() 문자열을 소문자로 변환
# upper() 문자열을 대문자로 변환
# islower() 문자열이 소문자인지 확인
# isupper() 문자열이 대문자인지 확인
# replace() 문자열 바꾸기
# index() 찾는 문자열의 인덱스(없으면 오류 발생)
# find() 찾는 문자열의 인덱스(없음면 -1 반환)
# count() 문자열이 나온 횟수

python = "Python is Amazing"
#         0123456789101112131415
print(python.lower())
print(python.upper())
print(python[0].isupper())
print(python[1:3].islower())  # yt

print(python.replace("Python", "Java"))

# .index()와 .find()는 인덱스(index)를 찾음
# 첫번째 n의 인덱스를 찾음
python_find = python.find("n")
print(python_find)

# 두번째 n의 인덱스를 찾음
python_find = python.find("n", python_find + 1)
print(python_find)

# Java라는 문자열이 없으므로 실패, -1이 나옴
python_find = python.find("Java")
print(python_find)

# n이 몇번 나왔는지 확인
python_count = python.count("n")
print(python_count)
