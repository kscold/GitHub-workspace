# 부모 클래스
class Unit:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp


# 자식 클래스(부모 클래스)
class AttackUnit(Unit):  # Unit 클래스를 상속한다.
    def __init__(self, name, hp, damage):
        Unit.__init__(self, name, hp)
        self.damage = damage

    def attack(self, location):
        print(
            f"{self.name} : {location} 방향 적군을 공격합니다. [공격력 {self.damage}]"
        )

    def damaged(self, damaged):
        print(f"{self.name} : {damaged}만큼 피해를 입었습니다.")
        self.hp -= damaged

        if self.hp <= 0:
            print(f"{self.name} : 파괴됐습니다.")

        print(f"{self.name} : 현재 체력은 {self.hp}입니다.")


class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print(f"{name} : {location} 방향으로 날라갑니다. [속도 {self.flying_speed}]")


class FlyableAttackUnit(AttackUnit, Flyable):  # 자식 부모
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, damage)
        Flyable.__init__(self, flying_speed)


interceptor = FlyableAttackUnit("전투기", 200, 6, 5)
interceptor.fly(interceptor.name, "3시")
