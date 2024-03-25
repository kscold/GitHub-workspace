# continue와 break
# while문과 for문에는 continue와 break를 사용할 수 있음

# continue를 만나는 순간, 건너 뛰고 다음 반복을 실행
# break를 만나는 순간, 반복문을 탈출

absent = [2, 5]
no_book = [7]

for student in range(1, 11):  # [1,2,3,4,5,6,7,8,9,10] 출석번호가 10까지
    if student in absent:
        continue

    elif student in no_book:
        print(f"{student}번 학생은 책을 안가져왔으니 벌점입니다.")
        break

    print(f"{student}번 학생, 책을 읽어 보세요.")
