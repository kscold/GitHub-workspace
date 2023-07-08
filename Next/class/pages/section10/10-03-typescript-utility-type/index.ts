export interface IProfile{
    name: string
    age: number
    school: string
    hobby?:string
}

// interface IProfile2{ //이렇게 만들고 싶다.
//     name?: string
//     age?: number
//     school?: string
//     hobby?:string
// }


// 1. partial 타입
type aaa = Partial<IProfile> //따라서 IProfile2를 이렇게 바꿈


//2. Required 타입
type bbb = Required<IProfile> //전부 물음표을 뺌

//3. Pick 타입
type ccc = Pick<IProfile, 'name'|'age'> //원하는 것만 골라서 선언

//4. Omit 타입
type ddd = Omit<IProfile, "school"> //이것만 제외하고 선언

//5. Record 타입
type eee = "철수"|"영희"|"훈이" //Union 타입
let child1: eee = "철수" //철수, 영희, 훈이만 됨
let child2: string = "사과" //철수, 영희, 훈이, 사과, 바나나 다 됨

type fff = Record<eee, IProfile> //이렇게 하면 eee 레코드가 key값으로 바뀌고 key값마다 value로 들어간 객체가 생성됨

//6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile // "name" |"age"|"school"|"hobby" keyof IProfile에서 key값만 뽑아내는 것
let myprofile: ggg = "hobby"

// 7. type vs interface 차이 => 선언병합 => interface는 선언병합 가능 type은 불가능
export interface IProfile{ //candy가 더해짐
    candy: number //선언병합으로 추가됨 
}

//8. 배운것 응용
let profile: Partial<IProfile> ={
    candy: 10
}

