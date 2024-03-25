# for문에서 continue와 break를 사용한 예시
absent = [2, 5]
no_book = 7

for stduent in range(1, 11):  # 1 2 3
    if stduent in absent:  # 5 in [2, 5] True
        continue
    elif stduent == no_book:
        print(f"{stduent}번 학생은 교무실로 따라와요.")
        break

    print(f"{stduent}번 학생, 책을 읽어 보세요.")


# while문에서 ontinue와 break를 사용한 예시
# 1부터 10까지 숫자 중에서 2 4 6 만 프린트 되게 만드는 예시
i = 1
while i <= 10:  # 1 <= 10 True 2 <= 10 True 3 <= 10 4 <=10

    if i % 2 == 1:  # 1 % 2 == 1 True 3 % 2 == 1 True
        i += 1  # i = 4
        continue

    if i == 8:
        break

    print(f"{i}")
    i += 1
