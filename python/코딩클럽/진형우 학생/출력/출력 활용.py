# 문자열끼리는 더할 수 있음
print("ab" + "ab")  # abab

# 문자열(str)과 정수(int)는 곱할 수 있음
print("ab" * 5)  # ababababab

print("ab", "ab")  # ab ab


# 다른 보간법(3가지)
# 1번째 %
print("나는 %d살 입니다." % 20)
print("나는 %s을 좋아합니다." % "파이썬")

# 2번째 format()
print("나는 {}살 입니다.".format(20))
print("나는 {0}색과 {1}색을 좋아합니다.".format("파란", "빨간"))

# 3번째 f"{}"
age = 20
print(f"나는 {age}살 입니다.")
