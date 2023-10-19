import Swift



//  튜플 변수 선언 및 초기화
var personA: (String, Int, Double) // unnamed

var personB: (name: String, age: Int, height: Double) // named

personA = ("joe", 10, 150.23)
personB = (name: "joe", age: 10, height: 150.23)
personB = ("joe", 12, 150.23) // 이렇게 해도 튜플은 오류 안남

print(personB)
