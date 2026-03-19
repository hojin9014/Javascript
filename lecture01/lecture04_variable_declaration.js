// JavaScript 변수 선언 자세히 배우기
// 이 파일은 브라우저 콘솔에서 순서대로 보면서 학습할 수 있도록 작성되었습니다.

console.log("=== 1. 변수란 무엇인가 ===");
console.log("변수는 값을 저장해 두는 이름표입니다.");
console.log("필요할 때 이름으로 값을 다시 꺼내 사용할 수 있습니다.");

let studentName = "Minsu";
const classroom = "JavaScript";
console.log("studentName:", studentName);
console.log("classroom:", classroom);

console.log("\n=== 2. 변수 선언 키워드: var, let, const ===");
var oldKeyword = "var";
let changeableValue = "let";
const fixedValue = "const";

console.log("var:", oldKeyword);
console.log("let:", changeableValue);
console.log("const:", fixedValue);
console.log("요즘은 보통 const를 먼저 쓰고, 값이 바뀌면 let을 사용합니다.");

console.log("\n=== 3. 재선언과 재할당 ===");
var score = 80;
var score = 90; // var는 같은 이름으로 다시 선언 가능
console.log("var score:", score);

let level = 1;
level = 2; // let은 재할당 가능
console.log("let level:", level);

const PI = 3.14;
console.log("const PI:", PI);
console.log("const는 재할당이 불가능합니다.");

try {
  eval("let level = 1; let level = 2;");
} catch (error) {
  console.log("let 재선언 오류:", error.message);
}

try {
  eval("const TAX;");
} catch (error) {
  console.log("const 선언 오류:", error.message);
}

console.log("\n=== 4. 스코프(scope) 차이 ===");
console.log("scope는 변수를 사용할 수 있는 범위입니다.");

if (true) {
  var varMessage = "var는 블록 밖에서도 접근됩니다.";
  let letMessage = "let은 블록 안에서만 접근됩니다.";
  const constMessage = "const도 블록 안에서만 접근됩니다.";

  console.log("블록 내부 var:", varMessage);
  console.log("블록 내부 let:", letMessage);
  console.log("블록 내부 const:", constMessage);
}

console.log("블록 외부 var:", varMessage);

try {
  console.log(letMessage);
} catch (error) {
  console.log("블록 외부 let 접근 오류:", error.message);
}

try {
  console.log(constMessage);
} catch (error) {
  console.log("블록 외부 const 접근 오류:", error.message);
}

console.log("\n=== 5. 호이스팅(hoisting) ===");
console.log("선언이 코드의 위로 끌어올려진 것처럼 동작하는 현상입니다.");

console.log("var before declaration:", hoistedVar);
var hoistedVar = "var는 선언만 먼저 처리되어 undefined가 나올 수 있습니다.";
console.log("var after declaration:", hoistedVar);

try {
  console.log(hoistedLet);
} catch (error) {
  console.log("let 호이스팅 주의:", error.message);
}
let hoistedLet = "let은 초기화 전 접근이 불가능합니다.";
console.log("let after declaration:", hoistedLet);

try {
  console.log(hoistedConst);
} catch (error) {
  console.log("const 호이스팅 주의:", error.message);
}
const hoistedConst = "const도 초기화 전 접근이 불가능합니다.";
console.log("const after declaration:", hoistedConst);

console.log("\n=== 6. const는 정말 안 바뀌는가 ===");
console.log("const는 변수 이름에 다른 값을 다시 넣지 못하게 막습니다.");
console.log("하지만 배열과 객체의 내부 내용은 수정할 수 있습니다.");

const fruits = ["apple", "banana"];
fruits.push("orange");
console.log("const 배열 수정:", fruits);

const user = {
  name: "Minsu",
  age: 20
};
user.age = 21;
console.log("const 객체 수정:", user);

try {
  user = { name: "Jisu" };
} catch (error) {
  console.log("const 객체 재할당 오류:", error.message);
}

console.log("\n=== 7. 실무에서의 권장 방식 ===");
console.log("1. 기본은 const 사용");
console.log("2. 값이 바뀔 예정이면 let 사용");
console.log("3. var는 오래된 코드가 아니면 피하는 편이 좋음");

console.log("\n=== 8. 한 줄 정리 ===");
console.log("var: 오래된 방식, 함수 스코프, 재선언 가능");
console.log("let: 블록 스코프, 재선언 불가, 재할당 가능");
console.log("const: 블록 스코프, 재선언 불가, 재할당 불가");
