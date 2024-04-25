# score.txt

# Code to save the score.txt file using a print statement
score_file = open("score.txt", "w", encoding="utf8")
print("Math : 50", file=score_file)
print("English : 100", file=score_file)
score_file.close()
