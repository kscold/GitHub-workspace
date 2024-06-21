# 알고리즘
# 1. 6을 뽑기 전까지 while 문으로 무한 반복을 함
# 2. 랜덤 모듈을 사용해서 주사위 눈인 1부터 6까지를 뽑음
# 3. 뽑은 주사위 눈을 변수에 저장
# 4. 변수에 저장된 수가 6인지 확인
# 5. 6을 뽑으면 "뽑은 주사위 눈: 6 승리"라고 프린트하고 break함
# 6. 6을 뽑지 못하면 "뽑은 주사위 눈: 4 패배" 프린트하고 다시 반복함

# 입력 , 출력 , if문, while문 break문

from random import *

dice = randint(1, 6)

while dice != 6:  # 6 != 6 False
    print(f"뽑은 주사위 눈: {dice} 패배")
    dice = randint(1, 6)

print(f"뽑은 주사위 눈: {dice} 승리")
