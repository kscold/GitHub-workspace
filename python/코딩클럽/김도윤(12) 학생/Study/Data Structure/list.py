# subway1 = 10
# subway2 = 20
# subway3 = 30

# print(subway1, subway2, subway3)

# index를 이용한 String
# var = "hello"
#      01234 index
# print(var[0:3])


# 리스트 선언 방법
# subway = []
subway = [10, 20, 40, 60, 30, 80, 100, 90, 10]
#          0   1   2  3   4   5   6    7    8


# list item add
subway.append("안녕")
print(subway)

# [10, 20, 40, 60, 30, 80, 100, 90, 10, "안녕"]
#   0   1   2   3  4   5    6   7   8   9

# .index() method는 데이터 이름의 index를 찾아주는 명령어
print(subway.index("안녕"))

subway.insert(subway.index("안녕"), "항상 안녕 앞의 값")
print(subway)

# item delete
subway.pop()  # 안에 index가 없으면 가장 마지막 요소를 삭제
subway.pop(
    subway.index("항상 안녕 앞의 값")
)  # index가 있으므로 index에 위치한 요소를 삭제

# subway.clear()  # all list item del

print(subway)

# 리스트 정렬하기(only number)
subway.sort()  # number일 때(int, float), 기본적으로 오름차순으로 정렬
# subway.sort(reverse=True)  # 내림차순으로 정렬
subway.reverse()

print(subway)

# 리스트 안에 리스트도 만들 수 있음
# 만약 리스트를 합치는데 append를 쓰는 경우
# num_list1 = [5, 2, 4, 3, 1]
# num_list2 = [8, 3, 9, 2, 5]
# num_list1.append(num_list2)
# print(num_list1)
# print(num_list1[5][0])  # 이차원 리스트가 만들어져서 안됨

# 리스트 2개를 합치기(확장) extend
num_list1 = [5, 2, 4, 3, 1]
num_list2 = [8, 3, 9, 2, 5]
num_list1.extend(num_list2)
num_list1.sort()
print(num_list1)


# How to select the last element(item)
numbers = [1, 2, 3, 4, 5]
#         -5 -4 -3 -2 -1
print(numbers[-1])
print(numbers[-2])
