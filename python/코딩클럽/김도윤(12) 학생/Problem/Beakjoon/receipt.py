# receipt

# Junwon went to Costco for the first time in his life last week. It was really cool. However, the amount is suspiciously high even though I haven't even put in a few items! Junwon looks at the receipt and tries to check if it was calculated correctly.

# written on the receipt,

# The price and quantity of each item purchased
# Total amount of items purchased
# Let's check whether the total amount calculated based on the price and number of items purchased matches the total amount written on the receipt.

# input
# The first line is the total amount written on the receipt.
# $X$ is given.

# The second line is the number of items purchased on the receipt.
# $N$ is given.

# after
# $N$ rows contain the prices for each item.
# $a$ and count
# $b$ is given with spaces in between.

# Print
# If the total amount calculated based on the price and number of items purchased matches the total amount written on the receipt, Yes is output. If they do not match, No is output.

# limit

# $1 ≤ X ≤ 1\,000\,000\,000$

# $1 ≤ N ≤ 100$

# $1 ≤ a ≤ 1\,000\,000$

# $1 ≤ b ≤ 10$
# Example input 1
# 260000
# 4
# 20000 5
# 30000 2
# 10000 6
# 5000 8
# Example output 1
# Yes
# The total amount calculated from the list of items to be purchased on the receipt is 20,000 × 5 + 30,000 × 2 + 10,000 × 6 + 5,000 × 8 = 260,000 won. This matches the total amount written on the receipt, which is 260,000 won.

# Example input 2
# 250000
# 4
# 20000 5
# 30000 2
# 10000 6
# 5000 8
# Example output 2
# No

x = int(input())
n = int(input())

for i in range(n):  # [0, 1, 2, 3]
    a, b = map(int, input().split())
    x = x - (a * b)

if x == 0:
    print("Yes")
else:
    print("No")
