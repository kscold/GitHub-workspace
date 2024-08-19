class AttackUnit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage

    # Can be created with additional methods, in the case of methods, the first parameter is always self
    def attack(self, location):
        print(
            f"{self.name}: Attacks enemies in the direction of {location}. [Attack power {self.damage}]"
        )

    def damaged(self, damage):
        print(f"{damage} damage taken.")
        self.hp -= damage
        print(f"{self.name} : Current health is {self.hp}.")
        if self.hp <= 0:
            print(f"{self.name} : destroyed.")


flamethrower1 = AttackUnit("Flamethrower", 50, 16)
# Create an object, health 50, attack power 16
flamethrower1.attack("5 o'clock")  # Attack command in the 5 o'clock direction

flamethrower1.damaged(25)  # Remaining health 25
flamethrower1.damaged(25)  # destroyed
