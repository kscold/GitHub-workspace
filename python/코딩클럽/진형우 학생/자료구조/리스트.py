# subway1 = 10
# subway2 = 20
# subway3 = 30
# ...
# print(subway1, subway2, subway3)

# 리스트는 자료형 상관없이 요소(item)을 넣을 수 있음

# 리스트 문법
# 리스트명 = [] 또는 리스트명 = list()

subway = [10, 20, 30, "핀"]
#         0   1   2
# 리스트 또한 인덱스 기반이기 때문에 슬라이싱까지 가능
print(subway[1:])

# append는 항상 마지막에 요소(item)를 추가함
subway.append("김승찬")
print(subway)

# insert는 첫번째 위치에 인덱스를 넣고 두번째 위치에 넣을 요소(item)을 넣음
subway.insert(1, 50)
print(subway)

# pop은 기본적으로 가장 마지막에 있는 데이터를 반환하고 터트려서 삭제함
print(subway.pop())
print(subway)

subway.pop(2)
print(subway)

# cler는 요소(item)을 전부 지움
# subway.clear()
# print(subway)

subway.pop()
subway.append(90)
print(subway)

# sort는 기본적으로 오름차순으로 정렬함, 숫자일때만 가능
subway.sort()
subway.reverse()
subway.sort(reverse=True)
# 내림차순으로 정렬하고 싶다면 sort(reverse=Trye)를 사용하거나
# 그냥 리스트 자체를 정렬하고 뒤집으면 됨
print(subway)

# 이차원 리스트
some_list = [[10, 11, 12], [20, 21, 22]]
#                0               1
#              0   1   2     0   1   2
print(some_list[0][1])

# 리스트 확장하기
# extend는 이차원 리스트로 넣는 것이 아니라 하나의 리스트로 합치고 싶을 때
mix_list = ["푸", 20, True]
num_list = [5, 2, 4, 3, 1]
mix_list.extend(num_list)
print(mix_list)
