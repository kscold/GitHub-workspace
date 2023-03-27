import UIKit

var isChecked: Bool = false
isChecked = true
//참 거짓

var temperature: Int = -100
temperature = 100
//32비트 일반 정수

var cakes: UInt = 100
//64비트 양의 정수
//cakes = -100 음의 값이므로 안들어감

var pi: Float = 3.14
pi = 314
//32비트 유리수

var pi2: Double = 3.14
pi2 = 314
//64비트 유리수

var sampleCharacter: Character = "A"
sampleCharacter = "가"
//문자 하나 형태

var sampeString: String = "Hi"
sampeString = "안녕하세요"
//문자열 형태

var test = 100
type(of: test)
//타입 추론 선언 후 타입함수로 Int

var testString = "타입추론"
type(of: testString)
//타입 추론 선언 후 타입함수 String

var sampleAny: Any = "any"
sampleAny = 10000
sampleAny = 3.14
//Any 함수로 어느타입이든지 들어 갈 수 있음

var sampleInt: Int? = nil
//var sampleInt: Int = nil 은 오류 ? 필수 널 값을 줄 때 형식
type(of: sampleInt)
//타입 추론 + Int 는 nil 값

var sampleString: String? = nil
type(of: sampleString)
//var sampleString: String = nil 은 오류 ? 필수
//타입 추론 + String은 nil 값
