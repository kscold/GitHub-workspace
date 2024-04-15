# 파일 내용을 읽어서 콘솔창에 프린트하기
score_file = open("score.txt", "r", encoding="utf-8")
print(score_file.read())

score_file.close()
