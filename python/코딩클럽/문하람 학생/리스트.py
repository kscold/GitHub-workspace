# # subway1 = 10
# # subway2 = 20
# # subway3 = 30
# # print(subway1, subway2, subway3)

# subway = [10, 20, 30, 20]

# # print(subway.index(20)) # 리스트에서 인덱스 구하기
# subway.append("곰돌이 푸")  # append는 항상 리스트 뒤에 추가
# subway.insert(1, "학생1")  # 삽입

# subway.pop()  # 가장 마지막에 추가된 요소를 삭제
# # subway.clear() # 한번에 삭제

# list_number = [23, 325, 235, 1, 4352, 532, 32, 23, 5, 2, 6, 235, 436]
# # list_number.sort()  # 정렬을 해주는 함수인데 문자열(str)은 사용이 불가(오름차순)
# list_number.sort(reverse=True)
# print(list_number)

# 리스트 확장
mix_list = ["푸", 20, True]
num_list = [5, 2, 4, 3, 1]
num_list.extend(mix_list)
print(mix_list)
print(num_list)
