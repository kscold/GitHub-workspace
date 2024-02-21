from random import *

print(random())  # 범위는 0부터 1전까지, float 형태로 표현

print(int(random() * 45) + 1)

print(randrange(1, 46))  # range는 범위가 목표 범위에 -1을 해주어야됨

print(randint(1, 45))  # 우리는 앞으로 randint라는 메서드만 쓰겠다.


#  주사위를 뽑는 예시(보드 게임할 때 만들 수 있는 코드)
diceCount = int(input("주사위 갯수를 입력해주세요"))

for i in range(diceCount):
    print(randint(1, 6))
