# if 문 가정, 특징 boolean True or False인데, True일 때만 성립

# if 조건:
#   실행할 명령

# weather = input()

# if weather == "비" or weather == "우박" or weather == "눈":
#     print("우산을 챙기세요.")
# elif weather == "미세먼지":
#     print("마스크를 챙기세요.")
# else:
#     print("준비물이 필요없어요.")

temp = int(input("오늘 기온은 어때요? : "))

if 50 <= temp:
    print("지구 온도가 이상해요.")
elif 30 <= temp and temp < 50:
    print("너무 더워요.")
elif 10 <= temp and temp < 30:
    print("활동하기 좋은 날씨에요.")
elif 0 <= temp and temp < 10:
    print("조금 추워요.")
elif -20 <= temp and temp < 0:
    print("너무 추워요")
else:
    print("빙하기")

print("항상 마지막에 실행되는 프린트문입니다.")
