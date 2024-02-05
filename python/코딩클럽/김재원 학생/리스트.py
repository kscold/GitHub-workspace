# subway1 = 10
# subway2 = 20
# subway3 = 30
# print(subway1, subway2, subway3)

subway = [10, 20, 30]
# print(subway)

# 값 추가 삽입 삭제는 어떻게??

subway.append("라이언")  # append는 항상 뒤에(추가)
subway.insert(1, "춘식이")

result = subway.pop(1)
print(result)

print(subway)
