# 변수 숫자(정수, 실수), 문자열, boolean
# 클래스를 쓰기 전에 코드는 너무 귀찮음
# name = "보병"
# hp = 40
# damage = 5

# print(f"{name} 유닛을 생성했습니다.")
# print(f"체력 {hp}, 공격령{damage}")


# tank_name = "탱크"
# tank_hp = 150
# tank_damage = 35

# print(f"{tank_name} 유닛을 생성했습니다.")
# print(f"체력 {tank_hp}, 공격령{tank_damage}")

# 클래스 문법
# class 클래스명:
#    def 메서드()
#       실행할 명령


# 클래스는 함수(명령어)들의 집합
class Unit:
    # 클래스를 호출하면 자동적으로 호출됨
    def __init__(self, name, hp, damage):  # 생성자 메서드(생성자 함수)
        self.name = name
        self.hp = hp
        self.damage = damage
        # self.cloaking = cloaking

        print(f"{self.name} 유닛을 생성했습니다.")
        print(f"체력 {self.hp}, 공격력{self.damage}")


solider1 = Unit("보병1", 40, 5)
solider2 = Unit("보병2", 40, 5)
tank = Unit("탱크", 150, 35)

stealth = Unit("전투기", 80, 5)
print(f"유닛 이름 : {stealth.name}, 공격력 :{stealth.damage}")
# print(dir(stealth))

stealth2 = Unit("업그레이드된 전투기", 80, 5)
stealth2.cloaking = True  # 은폐상태를 추가(오버라이딩) 업그레이드
# print(dir(stealth2))

if stealth2.cloaking == True:
    print(f"{stealth2.name}는 현재 은폐 상태입니다.")
