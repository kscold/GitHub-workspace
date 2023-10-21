import Swift

class Person {
    var height: Float = 0.0
    var weight: Float = 0.0
    
    init() { // 기본 생성자 재정의
        self.height = 10.0
        self.weight = 20.0
    }
    deinit { // 소멸자 재정의
        print("Person class instance is deinitialized")
    }
}

var aPerson: Person? = Person()
print(aPerson) // 실행 결과: Optional(__lldb_expr_13.Person)

//aPerson.height = 1.0 // 에러 발생: aPerson를 unwrapping해야 height에 접근 가능
//print(aPerson.height) // 에러 발생: aPerson를 unwrapping해야 height에 접근 가능

if let bPerson = aPerson { // optional unwrapping
    bPerson.height = 0.0
    print(bPerson.height) // 실행 결과: 0.0
}

var cPerson: Person! = Person() // implicitly unwrapped optional

cPerson.height = 1.0
print(cPerson.height) // 실행 결과: 1.0
