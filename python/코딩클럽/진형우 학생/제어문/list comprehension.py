# 일일이 넣은 방식(안좋음)
student = [1, 2, 3, 4, 5]
print(student)

# 리스트 컴프리헨션을 사용하지 않은 예시(일반적인 리스트 메서드와 for문 사용)
student = []
for i in range(1, 6):
    student.append(i)
print(student)

# 리스트 컴프리헨션을 사용한 예시
student = [i for i in range(1, 6)]  # [1, 2, 3, 4, 5]
print(student)

names = ["Iron man", "Thor", "Spider Man"]
print(names)
len_names = [name.upper() for name in names]
print(len_names)
