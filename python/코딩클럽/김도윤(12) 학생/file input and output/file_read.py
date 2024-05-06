# Open the score.txt file in reading mode
# .read() Reads the entire data of score.txt.
score_file = open("score.txt", "r", encoding="utf8")
print(score_file.read())
score_file.close()

# .readline() reads the data in score.txt one line at a time
score_file = open("score.txt", "r", encoding="utf8")
print(score_file.readline(), end="")
print(score_file.readline(), end="")
score_file.close()

# .readlines() reads the data in score.txt one line at a time and stores it as a list.
score_file = open("score.txt", "r", encoding="utf8")
lines = score_file.readlines()
# lines = ['Math : 50\n', 'English : 100\n', 'Science: 80\n', 'Coding: 100']
for line in lines:
    print(line, end="")
print()

score_file.close()
