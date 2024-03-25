# 파일에 데이터를 이어쓰기
score_file = open("score.txt", "a", encoding="utf8")
score_file.write("과학 : 80\n")
score_file.write("코딩 : 100\n")

score_file.close()
