# subway1 = 10
# subway2 = 20
# subway3 = 30
# print(subway1, subway2, subway3)


subway = [15, 50, 30, 10, 40]
# print(subway)

# 값 추가 삽입 삭제는 어떻게??

subway.append("라이언")  # append는 항상 뒤에(추가)
subway.insert(1, "춘식이")

result = subway.pop(1)  # 인덱스를 지정해서 사용할 수도 있다.
subway.pop()  # 아무 매개변수가 없으면 맨 뒤의 요소를 삭제
# print(f"없앤 요소는: {result}")

subway.sort()  # 기본적으로 오름차순
subway.reverse()  # 뒤집기만 실행
# subway.sort(reverse=True)  # 내림차순

index = subway.index(30)
# subway.insert(index, "30번이 있던 자리입니다.")

subway.append(30)
print(f"30이 나온 횟수는: {subway.count(30)}")

append_list = [12, 5, 23, 5, 6, 8, 10] * 2


subway.extend(append_list)
append_list.extend(subway)


# print(append_list)
append_list.sort()
print(append_list)
