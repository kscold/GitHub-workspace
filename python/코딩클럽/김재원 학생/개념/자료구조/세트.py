# 리스트는 중복이 가능하다.
list = [0, 0, 0]
print(list.count(0))

# 세트(set)는 중복이 불가능하다.
# 종류만 볼 수 있다.
java = {"푸", "피글렛", "티거"}
python = {"푸", "이요르"}

python.add("김승찬")  # 추가
python.remove("이요르")  # 삭제

# 집합에서 동시에 만족하는 것을 검출(교집합)
print(java & python)
print(java.intersection(python))

# 집합에서 모두 만족하는 것을 검출(합집합)
print(java | python)
print(java.union(python))

# 집합에서 그 집할 뺀 값 (차집합)
print(java - python)
print(java.difference(python))
