# 코딩을 할 때 특정을 조건을 만족할 때 동작하도록 만들기 위해 if문을 사용함

# if문의 특징은 조건이 항상 True일때만 동작함 -> 조건에는 boolean 값만 사용 가능

# if 문 문법

# if 조건:
#    실행할 명령

# if문부터는 block이라는 개념이 나옴
# block은 tap키를 눌렀을 때(공백 4개)로 구분되는 부분임

# 여러개 조건을 걸어야할 때에는 or와 and도 사용하지만
# elif와 else를 같이 사용함

# weather = input()

# if weather == "비" or weather == "눈":
#     print("우산을 챙기세요.")
# elif weather == "미세먼지":
#     print("마스크를 챙기세요.")
# else:
#     print("준비물이 필요 없어요.")


# 체온계 예시(숫자 비교)
temp = int(input())


if 30 <= temp and temp < 50:
    print("너무 더워요. 외출을 자제하세요.")
elif 10 <= temp and temp < 30:
    print("활동하기 좋은 날씨에요.")
elif 0 <= temp and temp < 10:
    print("외투를 챙기세요.")
elif -20 <= temp and temp < 0:
    print("너무 추워요. 나가지 마세요.")
else:
    print("온도가 이상합니다.")
