# 문자열 슬라이싱을 인덱스(index)를 기준으로 문자열(str)을 자를 수 있음
# 인덱스는 항상 0부터 시작함
# text = "안녕하세요"
# #       0 1 2 3 4

# print(text)
# print(text[0:2])  # 원하는 범위 만큼 자르기

# number = "010-6545-6502"
#         0123456789101112
number = input()

print(number[0:9] + "****")
