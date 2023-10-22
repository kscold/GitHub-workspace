import Swift

// 배열 numArray 내의 모든 수의 합을 sum에 저장하도록 line 4, 7에서 ???로 표시된 부분 구현
func addFunc(numArray: [Int], sum: inout Int) -> Void {
    sum = 0
    
    for num in numArray {
        sum += num
    }
}

// 변수 dataA와 변수 dataB를 사용하여 변수 dataC가 배열 [1,2,3,4,5,6]의 값을 갖도록 아래의 line 13, 14, 15에서 ???로 표시된 부분 구현
var dataA: Array<Int> = [1,2,3,4]
var dataB: Array<Int> = [3,4,5,6]
var dataC: Array<Int> = Array(Set(dataA + dataB)) // set를 사용해서 중복을 없애고 배열로 일시적 형변환을 하여 사용
var total: Int = 0

// 함수 addFunc를 통해 배열 dataC 내의 모든 수의 합을 변수 total에 저장하도록 line 19, 20에서 ???로 표시된 부분 구현
var addNum: ([Int], inout Int) -> Void = addFunc
addNum(dataC, &total)
print("Total: \(total)")
