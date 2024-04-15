# default parameter
def profile(name="Chan", age=25, main_lang="JavaScript"):
    print(f"name : {name}\tage : {age}\tmain language : {main_lang}")


profile()
profile("Charlie")
profile("Lucy", 23, "Java")

# keyword argument
profile(age=23, name="Lucy", main_lang="Java")


# variable argument
def profile2(name, age, *language):
    print(f"name : {name}\tage : {age}\tmain language : ", end="")
    for lang in language:
        print(lang, end=" ")
    print()


profile2("Lucy", 23, "Java", "JavaScript", "C", "C++")
