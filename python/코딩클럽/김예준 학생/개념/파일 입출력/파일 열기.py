# score.txt 파일을 w(write) 쓰기모드로 utf8형식을 지원하는 파일을 만들고 변수 연결
score_file = open("score.txt", "w", encoding="utf8")

# 기본적인 파일을 세팅하는 방식
print("수학 : 0", file=score_file)
print("영어 : 50", file=score_file)

score_file.close()
