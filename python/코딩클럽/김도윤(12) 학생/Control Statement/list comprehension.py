# 리스트 컴프리헨션(list comprehension)을 사용하지 않은 코드
list = []
for i in range(1, 11):
    list.append(i)
print(list)

# 리스트 컴프리헨션(list comprehension)을 사용한 코드
list = [i for i in range(1, 11)]
print(list)
