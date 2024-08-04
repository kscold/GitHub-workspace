# 딕셔너리는 key와 value 매칭이 되어 이루어져 있는 자료구조

# 문법
# 딕셔너리명 = {key1: value1, key2: value2, key3: value3}

# 빈 딕셔너리 생성하는 방법 딕셔너리명 = dict()

# 딕셔너리는 인덱스 기반이 아님 key 기반임, 접근은 똑같이 []
# 모든 자료형이 가능함
# key 유일해야 함
# value 겹쳐도 상관없음
cabinet = {3: "푸", 100: "피글렛"}

print(cabinet[100])

cabinet[10] = "김승찬"
print(cabinet)
cabinet.pop(3)
print(cabinet)


# 딕셔너리의 key 값들만 뽑고 싶을 때, 리스트로 변환도 가능
print(cabinet.keys())
key_list = list(cabinet.keys())
print(key_list)

# 딕셔너리의 value 값들만 뽑고 싶을 때, 리스트로 변환도 가능
print(cabinet.values())
value_list = list(cabinet.values())
print(value_list)

# 딕셔너리의 key와 value 값들을 동시에 뽑고 싶을 때
print(cabinet.items())
item_list = list(cabinet.items())
print(item_list)
