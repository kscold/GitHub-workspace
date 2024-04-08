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

# 객체(현실세계의 사물을 코딩으로 표현하기 위한 타입) 지향

# bool, int, float, str
# {"이름": "김승찬", "나이": 25}


class Unit:  # 일반 유닛
    def __init__(self, name, hp, damage):  # 생성자 메서드
        self.name = name
        self.hp = hp
        self.damage = damage

        print(f"{name} 유닛을 생성했습니다.")
        print(f"체력 {hp}, 공격력 {damage}")


class AttackUnit:  # 공격 유닛
    def __init__(self, name, hp, damage):  # 생성자 메서드
        self.name = name
        self.hp = hp
        self.damage = damage

        print(f"{name} 유닛을 생성했습니다.")
        print(f"체력 {hp}, 공격력 {damage}")

    def attack(self, location):
        print(
            f"{self.name} : {location} 방향 적군을 공격합니다. [공격력 {self.damage}]"
        )

    def damaged(self, damage):
        print(f"{self.name} : {damage}만큼 피해를 입었습니다.")
        self.hp -= damage
        print(f"{self.name} : 현재 체력은 {self.hp}입니다.")

        if self.hp <= 0:
            print(f"{self.name} : 파괴됐습니다.")


soldier1 = Unit("보병1", 40, 5)
soldier2 = Unit("보병2", 40, 5)
tank = Unit("탱크", 150, 35)
stealth1 = Unit("전투기", 80, 5)

stealth2 = Unit("업그레이드한 전투기", 80, 5)

stealth2.cloaking = True  # 오버라이딩

if stealth2.cloaking == True:
    print(f"{stealth2.name}는 현재 은폐 상태입니다.")

flamethrower1 = AttackUnit("화염방사병", 50, 16)
flamethrower1.attack("5시")

flamethrower1.damaged(soldier1.damage)


# if stealth1.cloaking == True:  # 오버라이딩을 안했기 때문에 에러
#     print(f"{stealth1.name}는 현재 은폐 상태입니다.")
# print(dir(stealth1))

# print(dir(stealth2)) # object(객체) 속성 확인하는 명령어 dir
