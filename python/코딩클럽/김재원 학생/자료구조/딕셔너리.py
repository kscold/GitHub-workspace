# 사전 key : value 한 쌍
# key로 접근이 가능

cabinet = {3: "푸", 100: "피글렛"}
print(cabinet)
print(cabinet[3])

print(cabinet.get(3))

# 딕셔너리에 새로운 값을 추가하는 방법
cabinet["안녕"] = "스폰지밥"
print(cabinet)
print(cabinet["안녕"])
# print(cabinet.get(5, "스폰지밥"))

print(3 in cabinet)
print(cabinet.keys())

print(cabinet.values())

print(cabinet.items())

cabinet.clear()
print(cabinet)
