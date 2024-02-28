# subway1 = 10
# subway2 = 20
# subway3 = 30

# print(subway1, subway2, subway3)

# index를 이용한 String
var = "hello"
#      01234 index
print(var[0:3])


# 리스트 선언 방법
# subway = []
subway = [10, 20, 40, 60, 30, 80, 100, 90, 10]
# 0   1   2
subway.append("안녕")

# [10, 20, 30, "안녕"]
#   0   1   2    3

print(subway.index("안녕"))  # .index() method는 데이터 이름의 index를 찾아주는 명령어

subway.insert(1, "바뀐 값")
print(subway)

# subway.pop()  # 안에 index가 없으면 가장 마지막 요소를 삭제
subway.pop(subway.index(30))  # index가 있으므로 index에 위치한 요소를 삭제
print(subway)

# subway.clear()  # 리스트의 데이터를 전부 삭제

subway.pop(1)
subway.pop()

# 리스트 정렬하기
subway.sort()  # number일때, 기본적으로 오름차순으로 정렬
# subway.sort(reverse=True)  # 내림차순으로 정렬
subway.reverse()

print(subway)

# 리스트 안에 리스트도 만들 수 있음
# mix_list = [[5, 4, 2, 1], "푸", 20, True]
# print(mix_list[0][2])

# 리스트 2개를 합치기
num_list1 = [5, 2, 4, 3, 1]
num_list2 = [8, 3, 9, 2, 5]
num_list2.extend(num_list1)
num_list2.sort()
print(num_list2)
