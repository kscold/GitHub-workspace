from random import *

# random()이라는 메서드는 0에서 1사이의 무작위 float 난수를 생성
# print(random())

# 실제 정수의 난수로 만드는 방법
# print(int(random() * 6) + 1)

print(randrange(1, 7))  # [1, 2, 3, 4, 5, 6]
# randint()를 제일 많이 쓸 예정
print(randint(1, 6))  # [1, 2, 3, 4, 5, 6]
