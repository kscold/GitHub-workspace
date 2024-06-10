# 리스트가 있기 전
# 비효율적임
# subway1 = 10
# subway2 = 20
# subway3 = 25


# print(subway1, subway2, subway3)

# 리스트(배열) 사용
# 리스트를 만드는 방법
# subway = list()
# subway = []
subway = ["푸", "아이언맨", "헐크"]
#          0        1          2
print(subway)
print(subway[1])

# append() 항상 리스트 마지막에 요소(item)를 추가함
subway.append("김승찬")
subway.append("안녕")
print(subway)

# insert() 원하는 index 위치에 요소(item)를 추가함
# subway == ['푸', '아이언맨', '헐크', '김승찬', '안녕']
#             0         1         2        3        4
# append()와 insert는 print()와 동시에 사용하면 None이 나오기 때문에 동시에 사용하면 안됨
subway.insert(1, "김예준")
print(subway)

# pop() 원하는 마지막 요소(item) 혹은 index 요소(item)를 삭제 할 수 있음
# 특징: pop()의 경우 요소(item)를 삭제와 동시에 삭제하는 요소를 반환함
# print()와 동시에 사용할 수 있음
# subway == ['푸', '김예준', '아이언맨', '헐크', '김승찬', '안녕']
print(subway.pop())
print(subway)

print(subway.pop(3))
print(subway)

# clear() 모든 리스트의 요소(item)를 삭제함
# subway.clear()
# print(subway)

# count()는 리스트 안에 중복 값이 얼마나 있는지 확인할 수 있음
subway.append("푸")
print(subway)
# subway == ['푸', '김예준', '아이언맨', '김승찬', '푸']

print(subway.count("푸"))  # 지금 "푸"가 2개가 있으므로 2가 print됨

# 밑의 내용은 숫자 리스트에서만 사용 가능
num_list = [5, 2, 4, 3, 1]
print(num_list)

# sort()는 숫자일때만 사용할 수 있는 오름차순 정렬임
num_list.sort()
print(num_list)

# 내림차순 만드는 방법
# num_list.sort(reverse=True)  # 방법 1
# print(num_list)

num_list.reverse()  # 방법 2
print(num_list)

# extend()를 이용한 리스트 확장
# mix_list = ["푸", 20, True, [5, 2, 4, 3, 1]]
# print(mix_list)

mix_list = ["푸", 20, True]
num_list = [5, 2, 4, 3, 1]
mix_list.extend(num_list)
print(mix_list)
