for i, a in enumerate(['하나', '둘', '셋']):  # enumerates는 리스트를 튜플형태로 저장 따라서 이를 언패킹
    i += 1
    print(f"{i}, {a}")
    print(type(i), type(a))
