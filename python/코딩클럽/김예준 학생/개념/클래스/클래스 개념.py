# 클래스는 함수들의 집합
# 클래스(class) 내부에 정의되어 있는 함수들을 메서드(method)라고 부름
# 함수 == 메서드 == 명령어


# 클래스를 사용하지 않는 버전
# name = "보병"
# hp = 40
# damage = 5

# print(f"{name} 유닛을 생성했습니다.")
# print(f"체력 {hp}, 공격력 {damage}")


# 클래스를 사용한 버전
# 클래스 문법
# class 클래스명:
#     def 메서드명1(self, 매개변수1, 매개변수2):
#         실행할 명령1


class Unit:  # 클래스(class)
    def __init__(self, name, hp, damage):  # 생성자 메서드
        # self에 연결된 변수들을 속성(property)
        self.name = name
        self.hp = hp
        self.damage = damage
        print(f"{self.name} 유닛을 생성했습니다.")
        print(f"체력 {self.hp}, 공격력 {self.damage}")


# soldier1 변수는 인스턴스(instance), Unit("보병1", 40, 5) 부분은 객체(object)
soldier1 = Unit("보병1", 40, 5)
soldier2 = Unit("보병2", 40, 5)
tank = Unit("탱크", 150, 35)

# print(dir(soldier1)) # 정의되어있는 속성들을 보고 싶으면 dir 키워드를 사용함

stealth1 = Unit("전투기", 80, 5)
print(f"유닛 이름 : {stealth1.name}, 공격력 : {stealth1.damage}")


stealth2 = Unit("업그레이드한 전투기", 80, 5)
# 클래스에 원래 정의되어 있던 속성에 추가적인 속성을 부여하는 것(오버라이딩)
stealth2.cloaking = True
print(dir(stealth2))

if stealth2.cloaking == True:
    print(f"{stealth2.name}는 현재 은폐 상태입니다.")
