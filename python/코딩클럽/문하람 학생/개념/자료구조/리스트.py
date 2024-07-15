# subway1 = 10
# subway2 = 20
# subway3 = 30
# print(subway1, subway2, subway3)

iceCream = []
iceCream.append("캔디바")
print(iceCream)
iceCream.append("보석바")
print(iceCream)

index = iceCream.index("캔디바")
iceCream.insert(index, "투게더")
print(iceCream)


# subway = list(10, 20, 30, 40)
subway = [10, 20, 30, 20]
#         0   1  2   3

print(subway[0])
print(subway.index(20))  # 리스트에서 인덱스 구하기

# append는 맨 뒤에 요소(item)를 추가하는 것
# insert는 원하는 인덱스 위치에 요소(item)를 추가하는 것

subway.append("곰돌이 푸")  # append는 항상 리스트 뒤에 추가
print(subway)
subway.insert(1, "학생1")  # 삽입 위치는 항상 인덱스
print(subway)

# 삭제하는 명령어 pop()
subway.pop()  # 아무값도 안넣을 시에 가장 마지막 요소(item)(끝)를 삭제
print(subway)
subway.pop(1)  # 특정 인덱스 값을 넣으면 인덱스의 요소를 삭제
print(subway)

# subway.clear()  # 한번에 삭제(한번에 리스트 다 비우기)
# print(subway)

# 정렬하는 방법
subway.sort()  # 처음 기준이 오름차순
print(subway)
subway.sort(reverse=True)  # 내림차순
print(subway)

# 리스트 두개의 값을 합친다.
# 리스트 확장
num_list = [5, 2, 4, 3, 1]
num_list.extend(subway)

print(num_list)
