# class is like a frame


# If you don't use class
# Each property is difficult to access
def unit(name, hp, damage):
    print(f"{name} 유닛을 생성했습니다.")
    print(f"체력 {hp}, 공격력 {damage}")


# If you use a class

# Class Grammar
# class name
#      def method name(self, parameter1, parameter2)
#          command to execute


class Unit:
    # The constructor method connects to the instance via the 'self' argument.
    def __init__(self, name, hp, damage):  # constructor method
        # Things like self.name are properties
        self.name = name
        self.hp = hp
        self.damage = damage
        print(f"{self.name} 유닛을 생성했습니다.")
        print(f"체력 {self.hp}, 공격력 {self.damage}")


# Unit("보병1", 40, 5) part is an object
# soiler1 variable is an instance
soiler1 = Unit("보병1", 40, 5)
soiler2 = Unit("보병2", 40, 5)
tank = Unit("탱크", 150, 35)

stealth1 = Unit("전투기", 80, 5)
print(f"유닛 이름 : {stealth1.name}, 공격력 : {stealth1.damage}")
# dir is a command that allows you to view the defined properties of a class.
# print(dir(stealth1))

stealth2 = Unit("업그레이된 전투기", 80, 5)
stealth2.cloaking = True  # overriding, Adding properties later
# print(dir(stealth2))
if stealth2.cloaking == True:
    print(f"{stealth2.name}는 현재 은폐 상태입니다.")
