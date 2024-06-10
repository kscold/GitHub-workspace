# 세트는 중복을 허용하지 않고 순서를 고려하지 않는 자료구조
# 세트를 만드는 방법
# my_set = {}
# my_set = set()

my_set = {1, 2, 3, 3, 3}
# my_set = [1, 2, 3, 3, 3]
print(my_set)

java = {"푸", "피글렛", "티거"}
python = set(["푸", "이요르"])

# &는 and라는 뜻으로 동시에 만족하는 것(교집합)
print(java & python)

# |는 or라는 뜻으로 모두 만족하는 것(합집합)
print(java | python)

# - 는 차집합으로 교집합을 포함한 만큼을 뺌
print(java - python)
print(python - java)

# 세트에 데이터를 추가하는 방법
python.add("피글렛")
print(python)

# 세트에 데이터를 삭제하는 방법
python.remove("피글렛")
print(python)
