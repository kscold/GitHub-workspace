# set 특징 : 중복이 안되고 순서를 신경쓰지 않음
# 집합

java = {"푸", "피글렛", "티거"}
python = {"푸", "이요르"}

print(java & python)
print(java.intersection(python))

print(java | python)
print(java.union(python))

print(java - python)
print(java.difference(python))

python.add("피글렛")
print(python)

python.remove("피글렛")
print(python)

list = list(python)
print(list)
print(list[0])
