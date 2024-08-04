# Who didn't submit the assignment.py

# problem
# Professor M of University X is in charge of a programming class. There are 30 students in the classroom, and each student has an attendance number from 1 to 30 on the student list.

# Of the 28 students who submitted the special assignment given by the professor, write a program to find the attendance numbers of the 2 students who did not submit the assignment.

# input
# The input is a total of 28 lines, with the attendance number n (1 ≤ n ≤ 30) of each submitter (student) given one per line. There are no duplicate attendance numbers.

# Print
# The output is 2 lines. The first line prints the smallest attendance number of the student who did not submit it, and the second line prints the next attendance number.

# Example input 1
# 3
# 1
# 4
# 5
# 7
# 9
# 6
# 10
# 11
# 12
# 13
# 14
# 15
# 16
# 17
# 18
# 19
# 20
# 21
# 22
# 23
# 24
# 25
# 26
# 27
# 28
# 29
# 30
# Example output 1
# 2
# 8
# Example input 2
# 9
# 30
# 6
# 12
# 10
# 20
# 21
# 11
# 7
# 5
# 28
# 4
# 18
# 29
# 17
# 19
# 27
# 13
# 16
# 26
# 14
# 23
# 22
# 15
# 3
# 1
# 24
# 25
# Example output 2
# 2
# 8


datas = []
for _ in range(28):
    x = int(input())
    datas.append(x)

datas.sort()

for i in range(1, 31):
    if i in datas:
        continue
    print(i)
