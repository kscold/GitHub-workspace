print("파이썬", "자바")
print("파이썬" + "자바")

# separator
# 내가 원하는 대로 구분을 줄 수 있음
print("파이썬", "자바", sep=", ")

print("파이썬", "자바", "자바스크립트", sep=" vs ")

# end
# 기본값은 end="\n"
# 문장 끝을 지정하는 것

print("파이썬", "자바", sep=", ", end=" +")
print("파이썬", "자바", sep=", ")

for i in range(1, 11):
    print(i, end=" ")


# 리스트를 하나의 문자열로 합치는 방법
eng = ["a", "b", "c", "d"]
print("".join(eng))
