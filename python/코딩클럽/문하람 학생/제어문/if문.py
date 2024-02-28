# if 조건: # 조건에는 항상 boolean True or False 들어가야 됨, 실행되는 기준은 True
# 실행항 명령

# weather = input()

# if weather == "비" or weather == "눈":
#     print("우산을 챙기세요.")
# elif weather == "미세먼지":
#     print("마스크를 챙기세요.")
# else:  # True
#     print("준비물이 필요 없어요.")

temp = int(input("오늘 기온은 어때요?"))

if 45 <= temp:  # True False
    print("기후가 이상해요")

elif 30 <= temp < 45:
    print("너무 더워요. 외출을 자제하세요.")

elif 10 <= temp and temp < 30:
    print("활동하기 좋은 날씨예요.")

elif 0 <= temp and temp < 10:
    print("외투를 챙기세요.")

else:
    print("너무 추워요. 나가지 마세요.")
