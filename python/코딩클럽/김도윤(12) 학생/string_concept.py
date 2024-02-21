# index는 list 자료형이나 혹은 문자열에서 사용을 할 수 있음
String = "안녕?"
#         0 1 2

# slice
print(String[2])


# 보안을 하는 예시
SeungChan = "010-6545-6502"
#            012345678910111213

# SeungChan = input("전화번호를 입력하세요!: ")

print(SeungChan[0:9] + "****")
print(SeungChan.count("0"))  # 문자열에서 나온 갯수를 찾는 메서드
print(len(SeungChan))  # 문자열 길이 즉, 인덱스의 갯수를 찾는 메서드
