# \n는 줄바꿈(개행) 문자를 나타냄
# print()의 end 속성은 기본적으로 \n임
print("안녕", end="하세요")
print("안녕", end="\n")

# 프린트의 기본 속성
# ,는 자동적으로 띄어쓰기
print("파이썬", "자바")
# +는 두 문자열을 붙이기
print("파이썬" + "자바")

# print()의 sep 속성을 통해 문자들 사이에 특정 문자를 넣을 수 있음
print("파이썬", "자바", sep=" vs ", end=" ! \n")

# "".join(리스트) 문법을 통해 리스트를 문자열로 바꿈
lang = ["P", "y", "t", "h", "o", "n"]
print("".join(lang))


# 리스트에서 for문을 돌면서 출력
scores = [100, 90, 80, 70]
for score in scores:  # [100, 90, 80, 70]
    print(score, end=" ")
print()

# 딕셔너리에서 for문을 돌면서 출력
scores = {"수학": 100, "영어": 90, "과학": 80, "국어": 70}
for key in scores:  #
    print(scores[key], end=" ")
print()

scores = {"수학": 100, "영어": 90, "과학": 80, "국어": 70}
for key, value in scores.items():  #
    print(key, value, sep=": ", end=" ")
print()

# 소수점 찍기
pi = 3.141592653589793
print(f"pi: {round(pi, 2)}")
print(f"pi: {pi:.2f}")
