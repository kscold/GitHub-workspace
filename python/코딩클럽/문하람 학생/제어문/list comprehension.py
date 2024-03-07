# 리스트 컴프리헨션을 안 쓴 코드
list = []
for i in range(1, 11):
    list.append(i)
print(list)

# 리스트 컴프리헨션을 쓴 코드(파이썬만 가능)
list = [i for i in range(1, 11)]
print(list)
