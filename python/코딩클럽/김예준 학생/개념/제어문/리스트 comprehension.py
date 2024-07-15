# 하나씩 선언해서 만드는 방법 비효율적임 range가 크면 사실상 못만듬
students = [1, 2, 3, 4, 5]
print(students)

# for 문을 이용해서 리스트에 추가하는 방법(효율적)
students = []
for i in range(1, 6):
    students.append(i)
print(students)

# 파이썬에서만 가능한 list comprehension을 이용해서 리스트에 추가하는 방법(매우 효율적)
students = [i for i in range(1, 6)]  # [1, 2, 3, 4, 5]
print(students)
