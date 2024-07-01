# 기본 인자(default arguments)
def profile(name="승찬", age=25, main_lang="JavaScript"):  # 매개변수(paramaters)
    print(f"이름: {name}\t나이: {age}\t주 사용 언어: {main_lang}\t")


profile()  # 인자(arguments)
profile("예준", 15, "Python")


# 키워드 인자
def profile2(name, age, main_lang):
    print(f"이름: {name}\t나이: {age}\t주 사용 언어: {main_lang}\t")


profile2(main_lang="Java", age=25, name="승찬")


# 가변 인자
# 가변인자의 특징 마지막 매개변수에만 사용할 수 있음
def profile3(name, age, *main_lang):
    print(f"이름: {name}\t나이: {age}\t주 사용 언어:", end=" ")
    for lang in main_lang:
        print(lang, end=" ")
    print()


profile3("승찬", 25, "JavaScript", "Python", "Java", "C", "C++")


# 함수안에서 함수 호출
def add(item):
    print(item, "붓기")


def americano():
    add("뜨거운 물")
    add("에스프레소")


print("아메이카노 만드는 법")
americano()
