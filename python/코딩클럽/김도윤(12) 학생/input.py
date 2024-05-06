var1 = input()
var2 = input()
print(f"문자 인식 결과 : {var1 + var2}")

var1 = int(var1)
var2 = int(var2)
print(f"숫자 인식 결과 : {var1 + var2}")

# map means to spread, and data received by space through input().split() is assigned to variables in int format.
a, b = map(int, input().split())
print(a, b)
