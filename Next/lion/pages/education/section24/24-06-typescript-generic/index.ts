// 1. 문자/숫자/불린 (primitive) 타입
// const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
//   return [arg3, arg2, arg1];
// };

// const result = getPrimitive("철수", 123, true);

// // 2. any 타입 => 그냥 자바스크립트랑 같음
// const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
//   console.log(arg1 * 1000);
//   return [arg3, arg2, arg1];
// };

// const result = getAny("철수", 123, true);

// 3. unknown타입
// const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
//   if (typeof arg1 === "number") console.log(arg1 * 1000); // 알려주면 타입이 정의됨 any보다 안전함
//   return [arg3, arg2, arg1];
// };

// const result = getUnknown("철수", 123, true);

// // 4. generic 타입
// const getGeneric = <MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType1, MyType2, MyType3] => {
//   return [arg1, arg2, arg3];
// };

// const result = getGeneric<string, string, number>("철수", 123, true); // <>에 타입을 지정해주면 강요함

// const [count, setCount] = useState<number>(0); // 사실 이런식으로 generic으로 되어 있음

// 4. generic 타입
// const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T1, T2, T3] => {
//   return [arg1, arg2, arg3];
// };

// const result = getGeneric2("철수", 123, true);

// 4. generic 타입
const getGeneric2 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result = getGeneric2("철수", 123, true);
