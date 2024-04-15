# 부모 클래스
class Unit:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp


# 자식 클래스
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


flamethrower1 = AttackUnit("화염방사병", 50, 16)
flamethrower1.attack("5시")

flamethrower1.damaged(25)
flamethrower1.damaged(25)
