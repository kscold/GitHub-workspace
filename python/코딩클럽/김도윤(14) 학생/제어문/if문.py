# 프로그램에 조건을 거는 것
# True or False 가 if 조건에 들어가는데, 항상 True일 때만 실행한다.

# if 조건:
#    실행할 명령

weather = input()

if weather == "비" or weather == "눈":  # True일 때만 실행한다.
    print("우산을 챙기세요.")
elif weather == "미세먼지":
    print("마스크를 챙기세요.")
else:
    print("다시 실행해주세요.")

temp = int(input("오늘 기온은 어때요?"))

if 40 <= temp:
    print("지구 온난화")
elif 30 <= temp:
    print("너무 더워요.")
elif 10 <= temp and temp < 30:
    print("활동하기 좋은 날씨에요.")
elif 0 <= temp and temp < 10:
    print("외투를 챙기세요.")
elif -20 <= temp and temp < 0:
    print("너무 추워요.")
else:
    print("빙하기")
