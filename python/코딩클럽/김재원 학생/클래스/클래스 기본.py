# name = "보병"
# hp = 40
# damage = 5

# print(f"{name} 유닛을 생성했습니다.")
# print(f"체력 {hp}, 공격력 {damage}")

# 클래스 문법
# class 클래스명:
#    def 메서드명1():
#        실행할 명령

#    def 메서드명2():
#        실행할 명령


class Unit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage

        print(f"{name} 유닛을 생성했습니다.")
        print(f"체력 {hp}, 공격력 {damage}")


soldier1 = Unit("보병1", 40, 5)
soldier2 = Unit("보병2", 40, 5)
tank = Unit("탱크", 150, 35)
