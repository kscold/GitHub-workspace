# 함수의 기본값 사용
def profile(name, age=13, main_lang="파이썬"):
    print(f"이름 : {name}\t나이 : {age}\t주 사용 언어 : {main_lang}")


profile("이한결")


# 키워드 인자를 사용하는 방법
profile(main_lang="스위프트", age=20, name="김승찬")


# 가변 인자
def profile2(name, age, *language):
    print(f"이름 : {name}\t나이 : {age}\t주 사용 언어 :", end=" ")
    for lang in language:  # ["파이썬", "자바", "자바스크립트"]
        print(lang, end=" ")
    print()


profile2("김승찬", 25, "파이썬", "자바", "자바스크립트", "C", "C++")
