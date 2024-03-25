# subway1 = 10
# subway2 = 20
# subway3 = 30

# print(subway1)
# print(subway2)
# print(subway3)

# subway = []  # 빈 리스트
subway = [10, 20, 30]  # 데이터가 들어있는
#         0   1   2


# 요소(item)를 추가
subway.append(20)
subway.append("초록 거북이 등껍질")

# [10, 20, 30, '바나나', '거북이 등껍질']
#  0    1   2     3          4

subway.append("빨간 거북이 등껍질")


# [10, 20, 30, 20, '초록 거북이 등껍질', '빨간 거북이 등껍질']
# 0    1    2   3         4                       5
print(subway)

indexVar = subway.index(20, subway.index(20) + 1)  # indexVar = 3

subway.insert(indexVar, "삽입 데이터")

print(subway)

# 요소(item)를 삭제
subway.pop()
subway.pop()
subway.pop(subway.index("삽입 데이터"))


print(subway)

# subway.clear() # 요소를 전부 삭제하는 명령어
# print(subway)

# print(subway.count(50))  # 같은 요소가 몇개인지 확인해주는 명령어

# subway.sort()  # 오름차순 정렬
subway.sort(reverse=True)  # 내림차순 정렬
# subway.reverse()
print(subway)

# 두개의 리스트를 하나의 리스트로 합치기
list1 = [10, 20, 40, 45, 23]
list2 = [60, 90]


list1.extend(list2)
list1.sort()
list1.reverse()
print(list1)
