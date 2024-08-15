# continue와 break는 가장 가까운 반복문 for문이나 while문을 기준으로 건너뛰거나 종료함
# 거의 반복문 속에서 if문과 함께 쓰임

absent = [2, 5]
no_book = [7]

for student in range(1, 11):  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    if student in absent:  # [2, 5]
        continue  # 다음 학생으로 넘어가기
    elif student in no_book:
        print(f"오늘 수업은 여기까지. {student}번 학생은 교무실로 따라와요.")
        break
    print(f"{student}번 학생, 책을 읽어 보세요.")
