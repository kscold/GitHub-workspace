# if 조건: # 조건에는 항상 boolean True or False 들어가야 됨, 실행되는 기준은 True
#     실행항 명령

weather = input()

if weather == "비":
    print("비가 옵니다. 우산을 챙기세요.")
elif weather == "눈":
    print("눈이 옵니다. 우산을 챙기세요.")
else:
    print("우산을 챙길 필요가 없습니다.")
