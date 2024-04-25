# The default value of the end attribute is \n(\n means line break),
# but it can be modified according to user convenience.
print("hello", end="? ")

# The sep attribute allows you to enter the string you want to insert between strings.
print("Python", "Java", "JavaScript", sep=", ", end=" the end\n")

var1 = "hello"
var2 = "!"

# format
print("{0}{1}".format(var1, var2))
# f
print(f"{var1}{var2}")

# It is better to express decimal points using the format method.
# format
print("{0:.2f}".format(5 / 3))
# f
print(f"{round(5/3,2)}")
