# 스코프(범위)

# global 키워드를 사용해서 변수를 연결한 방법
# 지역변수 == 전역변수, 똑같이 전역변수로 만듬
glasses = 10  # 전역변수 global variable


def rent(people):
    global glasses  # global 키워드가 붙지 않은 함수 안의 변수, 지역변수 local variable
    glasses = glasses - people
    print(f"[함수 내부] 남은 3D 안경 개수: {glasses}")


print(f"전체 3D 안경 개수: {glasses}")
rent(2)
print(f"남은 3D 안경 개수: {glasses}")


# 함수의 매개변수를 늘려서 변수를 연결한 방법
# 전역변수 -> 지연변수 -> 전역변수 변환
glasses = 10  # 전역변수 global variable


def rent_return(glasses, people):
    glasses = glasses - people
    print(f"[함수 내부] 남은 3D 안경 개수: {glasses}")
    return glasses


print(f"전체 3D 안경 개수: {glasses}")
glasses = rent_return(glasses, 2)
print(f"남은 3D 안경 개수: {glasses}")
