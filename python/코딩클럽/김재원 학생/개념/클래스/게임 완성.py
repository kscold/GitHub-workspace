# 랜덤 모듈 임포트
from random import *


class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print(f"{name} 유닛을 생성했습니다.")

    def move(self, location):
        # print("[지상 유닛 이동]")
        print(f"{self.name} : {location} 방향으로 이동합니다. [속도 {self.speed}]")

    def damaged(self, damage):
        print(f"{self.name} : {damage}만큼 피해를 입었습니다.")
        self.hp -= damage
        print(f"{self.name} : 현재 체력은 {self.hp}입니다.")
        if self.hp <= 0:
            print(f"{self.name} : 파괴됐습니다.")


class AttackUnit(Unit):
    def __init__(self, name, hp, damage, speed):
        Unit.__init__(self, name, hp, speed)
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


class Soldier(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "보병", 40, 5, 1)

    def booster(self):
        if self.hp > 10:
            self.hp -= 10
            print(f"{self.name} : 강화제를 사용합니다. (HP 10 감소)")
        else:
            print(f"{self.name} : 체력이 부족해 기술을 사용할 수 없습니다.")


class Tank(AttackUnit):
    siege_developed = False

    def __init__(self):
        AttackUnit.__init__(self, "탱크", 150, 35, 1)
        self.siege_mode = False

    def set_siege_mode(self):
        if Tank.siege_developed == False:
            return

        if self.siege_mode == False:
            print(f"{self.name} : 시지 모드로 전환합니다. ")
            self.damage *= 2  # 공격력 2배 증가
            self.siege_mode = True  # 시지 모드를 True로 설정
        else:
            print(f"{self.name} : 시지 모드를 해제합니다.")
            self.damage //= 2
            self.siege_mode = False


class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print(f"{name} : {location} 방향으로 날아갑니다. [속도 {self.flying_speed}]")


class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, damage, 0)
        Flyable.__init__(self, flying_speed)

    def move(self, loaction):
        self.fly(self.name, loaction)


class Stealth(FlyableAttackUnit):
    def __init__(self):
        FlyableAttackUnit.__init__(self, "전투기", 80, 20, 5)
        self.cloaked = False  # 은페 모드

    def cloaking(self):
        if self.cloaked == True:
            print(f"{self.name} : 은폐 모드를 해제합니다.")
            self.cloaked = False
        else:
            print(f"{self.name} : 은폐 모드를 설정합니다.")
            self.cloaked = True


def game_start():
    print("[알림] 새로운 게임을 시작합니다.")


def game_over():
    print("Player : Good Game")
    print("[Player] 님이 게임에서 퇴장했습니다.")


game_start()

# 유닛을 생성
so1 = Soldier()
so2 = Soldier()
so3 = Soldier()

ta1 = Tank()
ta2 = Tank()

st1 = Stealth()

# 유닛 일괄 관리(생성된 모든 유닛 추가)
attack_units = []
attack_units.append(so1)
attack_units.append(so2)
attack_units.append(so3)
attack_units.append(ta1)
attack_units.append(ta2)
attack_units.append(st1)

# 모든 유닛 이동
for unit in attack_units:
    unit.move("1시")

# 모든 탱크 시지 모드 개발
Tank.siege_developed = True
print("[알림] 탱크 시즈 모드 개발이 완료되었습니다.")


# 공격 모드 준비(보병: 강화제, 탱크: 시지 모드, 전투기: 은폐 모드)
for unit in attack_units:
    if isinstance(unit, Soldier):
        unit.booster()  # 강화제 설정
    elif isinstance(unit, Tank):
        unit.set_siege_mode()  # 시지 모드 설정
    elif isinstance(unit, Stealth):
        unit.cloaking()  # 은폐 모드 설정

# 모든 유닛 공격
for unit in attack_units:
    unit.attack("1시")


# 모든 유닛 피해
for unit in attack_units:
    unit.damaged(randint(5, 20))

# 게임 종료
game_over()
