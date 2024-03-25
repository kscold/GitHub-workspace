# 매개변수 parameter
def profile(name, age=25, main_lang="자바스크립트"):
    print(f"이름 : {name}\t나이 : {age}\t주 사용 언어 : {main_lang}")


profile("찰리", 20, "파이썬")
profile("루시", 25, "자바")
profile(age=16, name="문하람")  # 키워드 인자


# 가변 인자
def profile2(name, age, *main_lang):
    print(f"이름 : {name}\t나이 : {age}\t주 사용 언어 :", end=" ")
    #  main_lang = ["파이썬", "자바", "C,", "C++", "C#", "자바스크립트", "스위프트"]
    for lang in main_lang:
        print(lang, end=" ")
    print()


profile2("찰리", 20, "파이썬", "자바", "C", "C++", "C#", "자바스크립트", "스위프트")
