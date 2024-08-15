class AttackUnit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage

    def attack(self, location):
        print(
            f"{self.name} : {location} 방향 적군을 공격합니다. [공격력 {self.damage}]"
        )

    def damaged(self, damage):
        print(f"{damage}만큼 피해를 입었습니다.")
        self.hp -= damage
        print(f"{self.name} : 현재 체력은 {self.hp}입니다.")
        if self.hp <= 0:
            print(f"{self.name} : 파괴됐습니다.")


flamethrower1 = AttackUnit("화염방사병", 50, 16)  # 객체 생성, 체력 50, 공격력 16
flamethrower1.attack("5시")  # 5시 방향으로 공격 명령’

flamethrower1.damaged(25)  # 남은 체력 25
flamethrower1.damaged(25)  # 남은 체력 25
