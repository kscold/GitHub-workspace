# 체중을 구하는 프로그램을 만드세요.

#     • 표준 체중: 키에 따른 평균 체중
#     • 성별에 따른 표준 체중 공식

#     남자: 키(m) × 키(m) × 22

#     여자: 키(m) × 키(m) × 21


#   조건
#   1. 표준 체중은 별도 함수로 계산한다. 단, 키는 미터(m) 단위로 받는다.
#   함수명: std_weight

#   전달값: 키(height), 성별(gender)
#   2. 실행결과에서 표준 체중은 소수점 이하 둘째 자리까지 표시한다.

# 실행결과
# 키 175cm 남자의 표준 체중은 67.38kg입니다.


def std_weight(height, gender):
    if gender == "남자":
        return height * height * 22
    else:
        return height * height * 21


height, gender = input().split()


weight = round(std_weight(float(height) / 100, gender), 2)
print(f"키 {height}cm {gender}의 표준 체중은 {weight}kg입니다.")
