# number = input()
number = "010-6545-6502"
#      0 1 2 3 4 5 6 7 8 9 10 11 12

# print(number[0:9] + "****")

# print(number.replace("6502", "****"))
print(number.replace(number[0], str(int(number[0]) + 1)))  # "0"을 찾으면 "1"로 바꿔라

# find(찾는 문자, 시작 인덱스, 종료 인덱스) 비슷한 걸로 index가 있다.

python = "Python is Amazing"
find = python.find("n")
print(find)
find2 = python.find("n", find + 1)
print(find2)

print(python.count("P"))
