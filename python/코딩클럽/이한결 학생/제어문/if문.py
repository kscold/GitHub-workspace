# if 만약 ~ 라면

# 기본 예시
# weather = input()

# if weather == "비" or weather == "눈":
#     print("우산을 챙기세요")
# elif weather == "미세먼지":
#     print("마스크를 챙기세요")
# else:
#     print("준비물이 필요 없어요")

# 온도를 입력받는 예시
# temp = int(input("오늘 기온은 어때요? "))

# if 30 <= temp:  # 만약 30도 이상이면
#     print("너무 더워요. 외출을 자제해주세요")
# elif 10 <= temp and temp < 30:  # 10도 이상 30도 미만
#     print("활동하기 좋은 날씨에요")
# elif 0 <= temp and temp < 10:  # 0도 이상 10도 미만
#     print("외투를 챙기세요")
# else:
#     print("너무 추워요. 나가지 마세요")

# if 조건:
# else: # 조건이 없어도 된다.


# 랜덤 예시
# from random import *

# result = randint(1, 10)
# print(result)
# if result == 5:
#     print("당첨입니다.")
# else:
#     print("다시뽑아 보세요.")


# 문제
# total = 2  # 총 인원
# if total <= 4:  # True
#     print("추가 비용 없음")
# else:  # elif total > 4:
#     print("1인당 만 원")

# print("감사합니다.")

# 문제 2
temp = float(input())

if temp >= 39:  # True
    print("고열입니다.")
elif temp >= 37:
    print("미열입니다.")
elif temp <= 36 and temp >= 35.5:  # 35.5 < x < 36
    print("정상입니다.")
else:
    print("체온이 너무 낮아요")
