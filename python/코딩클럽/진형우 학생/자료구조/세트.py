# 중복을 허용하지 않고 index가 없는 자료구조

# 문법 세트명 = {} 또는 세트명 = set()

my_set = {1, 2, 3, 3, 3}
print(my_set)
print(type(my_set))

# 특정리스트를 세트 형변환해서 중복을 제거하는 예시
my_list = [1, 2, 3, 3, 3]
my_list2 = list(set(my_list))
print(my_list2)

# 세트의 집합 기능
java = {"푸", "피글렛", "티거"}
python = {"푸", "이요르"}

# 교집합(두 개의 집합 중에 공통인 부분)
# &는 and라는 뜻이고 둘 다 만족하는 부분만 표시됨
print(java & python)

# 합집합(두 개의 집합을 모두 포함)
# |는 or이라는 뜻이고 둘 다 포함하는 집합이 표시됨
print(java | python)

# 차집합(java 집합에서 python 집합을 뺀 부분)
print(java - python)

# 세트에 요소(item)을 추가하는 방법
my_set.add(4)
print(my_set)

# 세트에 요소(item)을 삭제하는 방법
my_set.remove(2)
print(my_set)
