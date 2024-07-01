# 매개변수를 사용하여 전역(global)변수를 지역(local)변수로 가져오는 방법
def rent(glasses, people):  # glasses = 10. people = 2
    # local
    glasses = glasses - people  # 10 - 2,    glasess = 8 지역 변수
    print(f"[함수 내부] 남은 3D 안경 개수 : {glasses}")
    return glasses


# global
glasses = 10  # 전역변수
print(f"전체 3D 안경 개수: {glasses}")
glasses = rent(glasses, 2)
print(f"남은 3D 안경 개수: {glasses}")


# global 키워드를 사용하서 전역변수를 지역변수로 가져오는 방법
def rent2(people):  # glasses = 10. people = 2
    # local
    global glasses
    glasses = glasses - people  # 10 - 2,    glasess = 8 지역 변수
    print(f"[함수 내부] 남은 3D 안경 개수 : {glasses}")


# global
glasses = 10  # 전역변수
print(f"전체 3D 안경 개수: {glasses}")
rent2(2)
print(f"남은 3D 안경 개수: {glasses}")
