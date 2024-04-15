# 지역 변수(local)

# 틀린 방법
# glasses = 10  # 초기의 10개의 3D 안경


# def rent(people):
#     glasses = glasses - people
#     print(f"[함수 내부] 남은 3D 안경 개수: {glasses}")


# print(f"전체 3D 안경 개수: {glasses}")
# rent(2)
# print(f"남은 3D 안경 개수: {glasses}")


# 매개변수를 전역변수를 넘겨서 지역변수들을 연결하는 방법
glasses = 10  # 초기의 10개의 3D 안경


def rent(people, 넘어간안경변수):  # people = 2, 넘어간안경변수 = glasses = 10
    넘어간안경변수 = 넘어간안경변수 - people
    print(f"[함수 내부] 남은 3D 안경 개수: {넘어간안경변수}")
    return 넘어간안경변수


print(f"전체 3D 안경 개수: {glasses}")
glasses = rent(2, glasses)
print(f"남은 3D 안경 개수: {glasses}")

# 전역 변수(global)
# global 키워드를 이용한 방법
glasses = 10  # 초기의 10개의 3D 안경


def rent(people):
    global glasses
    glasses = glasses - people
    print(f"[함수 내부] 남은 3D 안경 개수: {glasses}")


print(f"전체 3D 안경 개수: {glasses}")
rent(2)
print(f"남은 3D 안경 개수: {glasses}")
