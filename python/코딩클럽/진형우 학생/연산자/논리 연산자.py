# 수식이나 조건 등이 참인지 거짓인지 판단할 때 사용
# 종류: and(그리고) or(또는, A이거나 B) not(반전)
# 특징: bool 형식으로 나옴 True False

# 양쪽 다 True여야지 True
#      True        False  =  False
print((3 > 0) and (3 > 5))
#      True        False  =  True
print((3 > 0) or (3 > 5))
#          True = False
print(not (1 != 3))
