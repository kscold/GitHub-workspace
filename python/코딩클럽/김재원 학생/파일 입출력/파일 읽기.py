# 파일 읽기 (score.txt 파일을 읽고 싶음)
score_file = open("score.txt", "r", encoding="utf8")
print(score_file.read())  # read() 파일 전체를 읽어 오기
print(score_file.readline(), end="")
# readline()은 한 줄씩 읽어오고 커서는 자동으로 다음 줄로 이동
score_file.close()


score_file = open("score.txt", "r", encoding="utf8")

while True:
    line = score_file.readline()
    if "영어" in line:
        continue

    if not line:
        break
    print(line, end="")

score_file.close()

# readlines()는 자동적으로 리스트를 만들어줌
score_file = open("score.txt", "r", encoding="utf8")
lines = score_file.readlines()
print(lines)
score_file.close()
