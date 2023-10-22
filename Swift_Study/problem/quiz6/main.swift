import Swift

struct LevelStruct {
    static var level: Int = 0 {
        didSet {
            // 저장 타입 프로퍼티 level의 변경되기 전의 값을 화면에 출력하기 위해 line 7에서 ???로 표시된 부분 구현
            print("Level change: \(oldValue) to \(Self.level)")
        }
    }
    
    static var accessLevel: Int { // static으로 저장타입 프로퍼티이기 때문에 인스턴스로 접근할 수 없고, 구조체 자체로 접근을 해야한다.
        get {
            return Self.level
        }
        
        set(newLevel) {
            // set 메서드의 매개변수 newLevel의 값을 저장 타입 프로퍼티 level의 값으로 설정하기 위해 line 18에서 ???로 표시된 부분 구현
            Self.level = newLevel
        }
    }

    // jumpLevel 메서드의 매개변수 to의 값을 통해 구조체 내의 저장 타입 프로퍼티 level의 값을 변경하기 위해 line 23, 26에서 ???로 표시된 부분 구현
    mutating func jumpLevel(to: Int) {
        print("Jump to \(to)")
        
        Self.level = to
        
        // jumpLevel 메서드의 매개변수 to의 값을 통해 변경된 저장 타입 프로퍼티 level의 값이 음수인 경우 함수 reset을 호출하도록 line 29, 30에서 ???로 표시된 부분 구현
        if Self.level  < 0 {
            self.reset()
        }
    }
    
    // reset 메서드를 통해 구조체 내의 저장 타입 프로퍼티 level의 값을 0으로 변경하기 위해 line 35에서 ???로 표시된 부분 구현
    mutating func reset() {
        print("Reset!")
        Self.level = 0
    }
}

var levelInstance: LevelStruct = LevelStruct()

// 인스턴스 levelInstance를 통해 jumpLevel 메서드를 호출하기 위해 line 44에서 ???로 표시된 부분 구현
levelInstance.jumpLevel(to: -1)
// 구조체 LevelStruct의 연산 타입 프로퍼티 accessLevel를 통해 저장 타입 프로퍼티 level의 값을 10으로 설정하기 위해 line 46에서 ???로 표시된 부분 구현
LevelStruct.accessLevel = 10
// 구조체 LevelStruct의 연산 타입 프로퍼티 accessLevel를 통해 저장 타입 프로퍼티 level의 값을 화면에 출력하기 위해 line 48에서 ???로 표시된 부분 구현
print("current level: \(LevelStruct.accessLevel)")

