# 사전 dictionary

# 특징 key : value 로 매칭됨

# 딕셔너리 문법
# 딕셔너리명 = {key1 : value1, key2 : value2, ...}

cabinet = {3: "푸", 100: "피글렛"}
cabinet[10] = "김승찬"

print(cabinet)
print(cabinet[10])

# for문과 딕셔너리를 같이 사용할 때
for key in cabinet:
    print(key, cabinet[key])
