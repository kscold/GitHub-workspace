# 클래스 상속은 다른 클래스에서 상속을 받아
# 더 추가적인 속성을 추가한 인스턴스를 생성 가능하게 함


# 일반 유닛
class Unit:  # 부모 클래스
    def __init__(self, name, hp):  # 생성자 메서드
        self.name = name
        self.hp = hp


class AttackUnit(Unit):  # 자식 클래스
    def __init__(self, name, hp, damage):
        Unit.__init__(self, name, hp)  # 부모 클래스의 __init__ 호출
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
