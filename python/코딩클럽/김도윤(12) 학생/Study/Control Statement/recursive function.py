# The recursive function is a technique that can be repeated without using the for statement or while statement.

# Examples without recursive functions(for statement)
for i in range(3, -1, -1):
    if i == 0:
        print("Fire!")
    else:
        print(i)


# Examples with recursive functions(use Def actively)
def cout_down(n):  # n = 3
    if n == 0:
        print("Fire!")
    else:
        print(n)
        cout_down(n - 1)


cout_down(3)
