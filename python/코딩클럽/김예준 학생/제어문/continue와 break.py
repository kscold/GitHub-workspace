# continue는 반복문(for문, while문)에서 현재 상황을 건너 뛰고 다음 반복을 진행
# break는 반복문(for문, while문)에서 break를 만나는 순간 반복문을 중단시킴

# for문 안의 if문과 continue break를 사용하는 경우
absent = [2, 5]
no_book = [7]

for student in range(1, 11):  # student id가 1번부터 10번까지
    if student in absent:
        continue
    elif student in no_book:
        print(f"{student}번 학생은 책을 가지고 오지 않았으니 교무실로 따라오세요.")
        break

    print(f"{student}번 학생, 책을 읽어 보세요.")
