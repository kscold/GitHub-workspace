# for문을 한줄로 표현하는 방법 (리스트 컴프리헨션)
# list1 = [1, 2, 3, 4, 5]
# print(list1)

# 리스트 컴프리헨션을 쓰지 않은 코드
# list2 = []
# for i in range(1, 6):  # 1, 2, 3, 4, 5
#     list2.append(i)
# print(list2)

# 리스트 컴프리헨션을 쓴 코드(파이썬에만 존재)
# list2 = [num for num in range(1, 6)]
# print(list2)

# students = ["아이언맨", "토르", "스파이더맨"]
# print(students)

# students = [len(i) for i in students]
# print(students)

# 많은 개발자들이 입력을 받을 때 사용하는 코드
# list3 = list(map(int, input().split()))
# print(list3)
