import Swift

//========================================================================
// quiz 1 (각 ??? 구현 : 1점 (총 10점))
//========================================================================
var str: String
var arr: Array<Any> // 또는 [Any]
var dic: Dictionary<Int, Any> // 또는 [Int : Any]
var tpl: (name: String, info: Array<Any>, score:[Int:Any])

str = "joe"
arr = [20000814, "abc@smu.ac.kr"]
dic = [1011: 99.3, 1012: "pass", 1013: "fail"]


// 변수 tpl이 튜플 (name: "joe", info: [20000814, "abc@smu.ac.kr"], score: [1011: 99.3, 1012: "pass", 1013: "fail"]"])의 값을 갖도록 line 6, 7, 8, 9에서 ???로 표시된 부분 구현
tpl = (name: str, info: arr, score: dic)

// 튜플 tpl이 (name: "joe", info: [20000814, "joe@smu.ac.kr"], score: [1011: 99.3, 1012: "pass", 1013: "fail"])와 같이 변형되도록 아래의 line 19에서 ???로 표시된 부분 구현
tpl.info[1] = "joe@smu.ac.kr"

// 튜플 tpl이 (name: "joe", info: [20000814, "joe@smu.ac.kr", "male"], score: [1011: 99.3, 1012: "pass", 1013: "fail"])와 같이 변형되도록 아래의 line 22에서 ???로 표시된 부분 구현
tpl.info.append("male")
// 혹은 tpl.info.insert("male", at: 2)

// 튜플 tpl이 (name: "joe", info: [20000814, "male"], score: [1011: 99.3, 1012: "pass", 1013: "fail"])와 같이 변형되도록 아래의 line 25에서 ???로 표시된 부분 구현
tpl.info.remove(at: 1)

// 튜플 tpl이 (name: "joe", info: [20000814, "male"], score: [1011: 99.3, 1012: "pass", 1013: "pass"])와 같이 변형되도록 아래의 line 28에서 ???로 표시된 부분 구현
tpl.score[1013] = "pass" // 1013의 key를 통해서 value값을 설정

// 튜플 tpl이 (name: "joe", info: [20000814, "male"], score: [1011: 99.3, 1012: "pass", 1013: "pass", 1014: 99.5])와 같이 변형되도록 아래의 line 31에서 ???로 표시된 부분 구현
tpl.score[1014] = 99.5 // 없었던 요소도 key와 value를 동시에 추가하므로 설정 가능
print("tpl: \(tpl)")

// 튜플 tpl이 (name: "joe", info: [20000814, "male"], score: [1011: 99.3, 1012: "pass", 1013: "pass"])와 같이 변형되도록 아래의 line 34에서 ???로 표시된 부분 구현
tpl.score.removeValue(forKey: 1014)

print("tpl: \(tpl)")
// 실행결과: tpl: (name: "joe", info: [20000814, "male"], score: [1013: "pass", 1012: "pass", 1011: 99.3])


