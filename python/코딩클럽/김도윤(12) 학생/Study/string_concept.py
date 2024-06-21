# Index can be used in list data type or string
string = "Hello?"
#         012345

# slice
print(string[2])


# Example of security
seungchan = "010-6545-6502"
#            012345678910111213

# seungchan = input("Enter your phone number!: ")

print(seungchan[0:9] + "****")
print(seungchan.count("0"))  # Method to find the number in a string
print(len(seungchan))
# Method to find the string length, that is, the number of indices
