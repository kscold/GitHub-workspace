# if문은 조건에 boolean값이 들어가는데 항상 True 반응한다.

# weather = input("오늘 날씨는 어때요? ")

# if weather == "비" or weather == "눈":
#     print("우산을 챙기세요.")
# elif weather == "미세먼지":
#     print("마스크를 챙기세요")
# else:
#     print("준비물이 필요 없어요")


# temp = int(input("오늘 기온 어때요?"))

# if 45 <= temp:
#     print("기후가 이상해요.")
# elif 30 <= temp < 50:
#     print("너무 더워요.")
# elif 10 <= temp and temp < 30:
#     print("활동하기 좋은 날씨에요.")
# elif 0 <= temp < 10:
#     print("외투를 챙기세요.")
# elif -20 <= temp < 0:
#     print("외투를 챙기세요.")
# else:
#     print("빙하기")

from random import *

diceCount = int(input("주사위 갯수를 입력하세요:"))

result = 0
for i in range(1, diceCount + 1):
    dice = randint(1, 6)
    print(f"주사위 {i}의 값: {dice}")
    result += dice

    if diceCount >= 2:
        print(f"주사위의 합:{result}")
