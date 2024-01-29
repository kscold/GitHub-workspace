# subway1 = "당산역"
# subway2 = "합정역"
# subway3 = "홍대역"
# print(subway1, subway2, subway3)

# 자료구조
# () # 소괄호(함수(메서드))
# {} # 중괄호(딕셔너리)
# [] # 대괄호(리스트)

# 리스트에 들어 갈 수 있는 데이터들의 종류는 숫자, 문자, 불리언(True or False)
# 리스트에 사용할 수 있는 메서드
# append() 리스트 맨 뒤에 추가할 수 있는 명령어
# insert() 첫번째 매개변수에는 인덱스의 위치를 넣고 두번째 매개변수에는 넣고 싶은 데이터를 넣는 명령어
# index() 들어있는 데이터의 인덱스를 찾는 명령어
# pop() 가장 마지막에 들어간 데이터를 삭제해 주는 명령어
# clear() 리스트 안에 있는 모든 데이터를 삭제해 주는 명령어

subway = []  # [] ["김승찬"]
# subway = [100, "홍대역", 1]
#          0      1      2

subway.append("김승찬")  # "김승찬"을 맨 뒤에 넣어라
subway.append("김승찬")  # "김승찬"을 맨 뒤에 넣어라
subway.append("김승찬2")  # "김승찬"을 맨 뒤에 넣어라
# ["김승찬", "김승찬1", "김승찬2"]
#     0         1          2


subway.insert(1, "이한결")  # 원하는 위치에 넣을 수 있다.

print(subway)
# print(subway.index("이한결"))
# subway.pop()
# subway.clear()
print(subway.count("이한결"))


# 리스트는 보통 숫자로 만든다.
num_list = [5, 2, 4, 3, 1]
# num_list.sort()  # 오름차순 정렬
num_list.sort(reverse=True)  # 내림차순 정렬
print(num_list)

num_list2 = [3, 4, 5, 234, 23, 6236]
num_list.extend(num_list2)
num_list.sort()
print(num_list)
