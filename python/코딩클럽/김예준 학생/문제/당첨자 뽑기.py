# 문제 파이썬 코딩 대회가 열립니다.
# 참석률을 높이기 위해 댓글 이벤트를 진행했습니다.
# 댓글 작성자 중에서 추첨을 통해 1명은 치킨 쿠폰, 3명은 커피 쿠폰을 주려고 합니다.
# 당첨자를 뽑는 추첨 프로그램을 작성하세요.

#   조건

#   1. 편의상 댓글은 20명이 작성했고, 아이디는 1~20이라고 가정한다.

#   2. 무작위로 추첨하되 중복은 허용하지 않는다.

#   3. random 모듈의 shuffle()과 sample() 함수를 활용한다.

#   4. 실행결과는 다음과 같이 표시하고 치킨 당첨자 1명, 커피 당첨자 3명을 뽑는다.

# 실행결과

# -- 당첨자 발표 --
# 치킨 당첨자 : 6
# 커피 당첨자 : [9, 3, 10]
# -- 축하합니다! --

# 힌트
# from random import *

# lst = [1, 2, 3, 4, 5]
# print(lst)
# shuffle(lst)
# print(lst)
# print(sample(lst, 1))

from random import *

users = list(range(1, 21))  # [1, 2, 3, 4, 5, 6, ... 20]
shuffle(users)

winners = sample(users, 4)

print("-- 당첨자 발표 --")
print(f"치킨 당첨자 : {winners[0]}")
print(f"커피 당첨자 : {winners[1:4]}")
print("-- 축하합니다! --")
