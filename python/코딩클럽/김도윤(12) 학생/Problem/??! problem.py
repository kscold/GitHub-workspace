# problem
# When Junha signed up for the site, he was surprised to see that the ID joonas already existed. Junha expresses his surprise with ??! Write a program that expresses surprise when Junha is given an ID that already exists on the site he is trying to join.

# input
# In the first line, an ID that already exists on the site that Junha is trying to join is given. The ID consists of only lowercase alphabet letters and does not exceed 50 characters in length.

# Print
# Print Jun-ha's surprise in the first line. Surprises are indicated by adding ??! to the end of the ID.

# Example input 1
# joonas
# Example output 1
# joonas??!
# Example input 2
# baekjoon
# Example output 2
# baekjoon??!

word = input()
print(word + "??!")
print(f"{word}??!")
print(word, end="??!\n")
