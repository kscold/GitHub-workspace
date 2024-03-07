# 문제 당신은 Cocoa 서비스를 이용하는 택시기사입니다.
# 손님이 총 50명일 때, 조건을 만족하는 총 탑승객 수를 구하는 프로그램을 작성하세요.

# 조건

#   1. 손님별 운행 소요시간은 5~50분에서 난수로 정한다.

#   2. 운행 소요시간 5~15분인 손님만 매칭한다.

#   3. 실행결과는 다음 형태로 출력하되, 매칭되면 [O], 매칭되지 않으면 []로 표시한다.
# 실행결과

# [O] 1번째 손님 (소요시간 : 15분)
# [ ] 2번째 손님 (소요시간 : 50분)
# [O] 3번째 손님 (소요시간 : 5분)
# ...
# [ ] 50번째 손님 (소요시간 : 16분)
# 총 탑승객 : 2명

# for문으로 만든 코드
from random import *

count = 0
for i in range(1, 51):  # 1, 2, 3, 4 .... 50
    time = randrange(5, 51)  # 5분부터 50분까지 랜덤으로 뽑음
    if 5 <= time <= 15:
        print(f"[O] {i}번째 손님 (소요시간 : {time}분)")
        count += 1  # count = count + 1
    else:  # 16분 부터 50분까지 손님
        print(f"[ ] {i}번째 손님 (소요시간 : {time}분)")

print(f"총 탑승객 : {count}명")

# while문으로 만든 코드
from random import *

count = 0
init_range = 1
while init_range <= 50:
    time = randrange(5, 51)  # 5분부터 50분까지 랜덤으로 뽑음
    if 5 <= time <= 15:
        print(f"[O] {init_range}번째 손님 (소요시간 : {time}분)")
        count += 1  # count = count + 1
    else:  # 16분 부터 50분까지 손님
        print(f"[ ] {init_range}번째 손님 (소요시간 : {time}분)")

    init_range += 1

print(f"총 탑승객 : {count}명")
