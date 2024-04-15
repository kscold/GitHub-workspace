class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed

    def move(self, location):
        print("[지상 유닛 이동]")
        print(f"{self.name} : {location} 방향으로 이동합니다. [속도 {self.speed}]")


class AttackUnit(Unit):
    def __init__(self, name, hp, damage, speed):
        Unit.__init__(self, name, hp, speed)
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
        AttackUnit.__init__(self, name, hp, damage, 0)
        Flyable.__init__(self, flying_speed)

    # 오버라이딩한 코드(즉, 기존의 코드 업데이트)
    def move(self, location):
        print("[공중 유닛 이동]")
        self.fly(self.name, location)


# 기존의 move 코드를 사용하는 경우
hoverbike = AttackUnit("호버 바이크", 80, 20, 10)
hoverbike.move("11시")

# 업데이트(오버라이딩)된 move 코드를 사용하는 경우
spacecruiser = FlyableAttackUnit("우주 순양함", 500, 25, 3)
spacecruiser.move("9시")
