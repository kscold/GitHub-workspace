# .txt 파일을 이어쓰기 모드로 만들기
score_file = open("score.txt", "a", encoding="utf-8")

score_file.write("과학 : 80 \n")
score_file.write("코딩 : 100 \n")

score_file.close()
