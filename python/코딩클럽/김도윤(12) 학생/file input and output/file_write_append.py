# The a attribute is an abbreviation for append and means continuation mode.
score_file = open("score.txt", "a", encoding="utf8")
score_file.write("Science: 80\n")
score_file.write("Coding: 100\n")

score_file.close()
