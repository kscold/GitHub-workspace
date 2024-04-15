# .txt 파일을 쓰기 모드 만들기

score_file = open("score.txt", "w", encoding="utf-8")
print("수학 : 0", file=score_file)
print("영어 : 50", file=score_file)

score_file.close()
