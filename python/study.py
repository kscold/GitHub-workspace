for i, a in enumerate(['하나', '둘', '셋']):  # enumerates는 리스트를 튜플형태로 저장 따라서 이를 언패킹
    i += 1
    print(f"{i}, {a}")
    print(type(i), type(a))
    # 시작 인덱스를 변경하고 싶으면 이 방법도 있지만

for i, a in enumerate(['하나', '둘', '셋'], start=1):  # 이렇게 스타트 인덱스를 지정해주면 됨
    print(f"{i}, {a}")
    print(type(i), type(a))
