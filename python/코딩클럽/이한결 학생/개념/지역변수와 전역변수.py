# 지역변수를 넘겨줄 때 매개변수를 이용하는 방법
glasses = 10  # 전역 변수(global)


def rent(people, glasses):
    # 지역 변수(local)
    glasses = glasses - people
    print(f"[함수 내부] 남은 3D 안경 개수: {glasses}")
    return glasses


print(f"전체 3D 안경 개수: {glasses}")
glasses = rent(2, glasses)
print(f"남은 3D 안경 개수: {glasses}")


# global이라는 명령어를 사용하는 방법
glasses = 10  # 전역 변수(global)


def rent(people):
    # 지역 변수(local)
    global glasses
    glasses = glasses - people
    print(f"[함수 내부] 남은 3D 안경 개수: {glasses}")


print(f"전체 3D 안경 개수: {glasses}")
rent(2)
print(f"남은 3D 안경 개수: {glasses}")
