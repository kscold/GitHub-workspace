class AttackUnit:  # 클래스(class)
    def __init__(self, name, hp, damage):  # 생성자 메서드
        # self에 연결된 변수들을 속성(property)
        self.name = name
        self.hp = hp
        self.damage = damage

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


flamethrower1 = AttackUnit("화염방사병", 50, 16)
flamethrower1.attack("5시")

flamethrower1.damaged(25)
flamethrower1.damaged(25)
