# Sang-su.py

# problem
# Sang-geun's younger brother, Sang-su, is really bad at math. Sang-su has trouble reading numbers.
# For Sang-su, who is not good at math, Sang-geun gave a problem comparing the sizes of numbers.
# Sang-geun wrote two three-digit numbers on the blackboard.
# He then asked me to tell him which number the magnitude was greater.

# Sang-su reads numbers backwards differently than other people.
# For example, if you write 734 and 893 on the board, Sang-su reads these numbers as 437 and 398.
# Therefore, Sang-su would say that 437, which is the larger of the two numbers, is the larger number.

# Given two numbers, write a program that prints Sang-su's answer.

# input
# The first line gives the two numbers A and B that Sang-geun wrote on the blackboard.
# The two numbers are three-digit numbers that are not equal and do not contain zero.

# Print
# Print Sang-su's answer on the first line.

# Example input 1
# 734 893
# Example output 1
# 437
# Example input 2
# 221 231
# Example output 2
# 132
# Example input 3
# 839 237
# Example output 3
# 938

# 알고리즘
# 1. a와 b의 변수로 두 수를 map과 split를 사용해서 입력받음
# 2. a와 b를 문자열 int -> str로 바꿈 734 893 -> "734" "893"
# 3. str("734" "893")로 바꿨으면 reverse가 가능함("437" "398")
# 4. 뒤집은 문자열을 다시 int로 바꿈 str -> int
# 5. if문을 통해 더 큰 뒤집은 숫자를 프린트함


def reverse(target):
    reverse_str = ""
    for i in target:
        reverse_str = i + reverse_str

    return int(reverse_str)


a, b = map(str, input().split())


if reverse(a) > reverse(b):
    print(reverse(a))
else:
    print(reverse(b))
