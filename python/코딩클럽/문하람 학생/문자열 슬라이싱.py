# number = "010-6545-6502"
# 0 1 2 3 4 5 6 7 8 9 10 11 12 # 인덱스 index

# print(number.replace("6545", "****"))

# print("***-" + number[4:8] + "-****")


# jumin = "990229-1234567"

# print("연 : " + jumin[0:2])  # 0부터 2 직전까지(0, 1) 99
# print("월 : " + jumin[2:4])  # 2부터 4 직전까지(2, 3) 02
# print("일 : " + jumin[4:6])  # 4부터 6 직전까지(4, 5) 29

# 인덱스를 편하게 찾는 방법
python = "Python is Amazing"

find = python.find("Amazing")
print(find)

find = python.index("Amazing")
print(find)
# print(python.find("n", find + 1))
