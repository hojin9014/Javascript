// JavaScript 기본 문법 예제

console.log("=== 1. 변수 선언 ===");
let language = "JavaScript";
const year = 1995;
var oldStyle = "var도 가능하지만 let, const를 더 많이 사용합니다.";
console.log(language);
console.log(year);
console.log(oldStyle);

console.log("\n=== 2. 자료형 ===");
let age = 20;
let isStudent = true;
let emptyValue = null;
let notAssigned;
console.log(typeof language); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(emptyValue); // null
console.log(notAssigned); // undefined

console.log("\n=== 3. 연산자 ===");
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log("\n=== 4. 조건문 ===");
if (age >= 20) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}

console.log("\n=== 5. 반복문 ===");
for (let i = 1; i <= 3; i++) {
  console.log("for문:", i);
}

let count = 1;
while (count <= 3) {
  console.log("while문:", count);
  count++;
}

console.log("\n=== 6. 함수 ===");
function add(x, y) {
  return x + y;
}

const multiply = (x, y) => x * y;

console.log(add(2, 3));
console.log(multiply(2, 3));

console.log("\n=== 7. 배열 ===");
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);

for (const fruit of fruits) {
  console.log("과일:", fruit);
}

console.log("\n=== 8. 객체 ===");
const user = {
  name: "Minsu",
  age: 25,
  greet() {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  }
};

console.log(user.name);
console.log(user.age);
user.greet();

console.log("\n=== 9. 템플릿 문자열 ===");
console.log(`이름: ${user.name}, 나이: ${user.age}`);

console.log("\n=== 10. 비교 연산 ===");
console.log(1 == "1");
console.log(1 === "1");

console.log("\n=== 11. 예외 처리 ===");
try {
  JSON.parse("{잘못된 json}");
} catch (error) {
  console.log("에러 발생:", error.message);
}
