# 이미 존재하는 score.txt 파일을 a(append) 이어쓰기 모드로 열고 변수에 연결
score_file = open("score.txt", "a", encoding="utf8")

score_file.write("과학 : 80\n")
score_file.write("코딩 : 100\n")

score_file.close()
