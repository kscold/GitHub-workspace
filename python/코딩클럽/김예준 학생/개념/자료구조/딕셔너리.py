# 딕셔너리는 key와 value로 이루어진 자료구조
# key는 중복을 허용하지 않고 unique한 변하지 않는 값
# value 중복도 허용하고 모든 타입이 들어갈 수 있음
# 딕셔너리 만드는 방법
# cabinet = {key: value}
# cabinet = dict()

cabinet = {3: "푸", 100: "피글렛"}
print(cabinet)
print(cabinet[3])

cabinet[5] = "안녕"
print(cabinet)

# 딕셔너리의 key만 출력
print(cabinet.keys())
# 딕셔너리의 value만 출력
print(cabinet.values())
# 딕셔너리의 key, value 쌍으로 출력
print(cabinet.items())

# 딕셔너리의 모든 요소(item) 삭제
cabinet.clear()
print(cabinet)
