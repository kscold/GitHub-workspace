# if 뒤에는 bool으로 나오는 조건이 필요함
# True일 때에만 if문의 block이 실행이 됨
# 특징: 조건은 항상 마지막에 :을 붙여주어야 함

# 문자열 if문
# weather = input()

# if weather == "비" or weather == "눈":
#     # tab으로 공백이 들어가 있는 부분이 제어문임
#     print("우산을 챙기세요.")

# elif weather == "미세먼지":
#     print("마스크를 챙기세요.")

# elif weather == "맑음":
#     print("나가서 노세요.")

# else:
#     print("준비물이 필요가 없어요.")

# # 메인문
# print("항상 마지막에 실행되는 프린트 문입니다.")

# 정수 if문
temp = int(input())

if 30 <= temp and temp < 50:
    print("너무 더워요. 외출을 자제해주세요.")

elif 10 <= temp and temp < 30:
    print("활동하기 좋은 날씨에요.")

elif 0 <= temp and temp < 10:
    print("외투를 챙기세요.")

elif -30 <= temp and temp < 0:
    print("너무 추워요. 나가지 마세요.")

else:
    print("기온이 이상해요.")
