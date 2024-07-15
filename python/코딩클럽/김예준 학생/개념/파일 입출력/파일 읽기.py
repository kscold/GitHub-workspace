# 이미 존재하는 score.txt 파일을 r(read) 읽기 전용으로 열고 변수 연결
score_file = open("score.txt", "r", encoding="utf8")

print(score_file.read())

score_file.close()
