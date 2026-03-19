// JavaScript 암시적 형변환(묵시적 형변환)
// 이 파일은 브라우저 콘솔에서 형변환이 어떻게 일어나는지 단계적으로 확인하도록 작성되었습니다.

console.log("=== 1. 암시적 형변환이란 무엇인가 ===");
console.log("암시적 형변환과 묵시적 형변환은 같은 뜻입니다.");
console.log("JavaScript가 연산이나 비교를 처리하기 위해 값을 자동으로 다른 자료형으로 바꾸는 것을 말합니다.");

console.log("\n=== 2. 문자열로 형변환되는 경우 ===");
console.log('"10" + 5 =', "10" + 5);
console.log('5 + "10" =', 5 + "10");
console.log('true + "입니다" =', true + "입니다");
console.log("+ 연산자는 문자열이 하나라도 있으면 문자열 연결로 동작할 수 있습니다.");

console.log("\n=== 3. 숫자로 형변환되는 경우 ===");
console.log('"10" - 3 =', "10" - 3);
console.log('"10" * 2 =', "10" * 2);
console.log('"20" / 4 =', "20" / 4);
console.log('Number(true) =', Number(true));
console.log('Number(false) =', Number(false));
console.log("- , * , / 같은 연산은 문자열도 숫자로 바꿔 계산하려고 합니다.");

console.log("\n=== 4. 불리언으로 형변환되는 경우 ===");
console.log("Boolean(1) =", Boolean(1));
console.log('Boolean("hello") =', Boolean("hello"));
console.log("Boolean(0) =", Boolean(0));
console.log('Boolean("") =', Boolean(""));
console.log("Boolean(null) =", Boolean(null));
console.log("Boolean(undefined) =", Boolean(undefined));
console.log("0, 빈 문자열, null, undefined, NaN은 false처럼 취급됩니다.");

console.log("\n=== 5. truthy / falsy 예제 ===");
let userName = "";

if (userName) {
  console.log("이름이 있습니다.");
} else {
  console.log("빈 문자열은 falsy라서 조건문에서 false처럼 동작합니다.");
}

let loginCount = 3;

if (loginCount) {
  console.log("0이 아닌 숫자는 truthy라서 true처럼 동작합니다.");
}

console.log("\n=== 6. 비교 연산에서의 암시적 형변환 ===");
console.log('1 == "1" ->', 1 == "1");
console.log('1 === "1" ->', 1 === "1");
console.log("0 == false ->", 0 == false);
console.log('"" == false ->', "" == false);
console.log("null == undefined ->", null == undefined);
console.log("== 는 비교 전에 자동 형변환이 일어날 수 있고, === 는 자료형까지 함께 비교합니다.");

console.log("\n=== 7. 헷갈리기 쉬운 예제 ===");
console.log("[] + [] =", [] + []);
console.log("[] + 1 =", [] + 1);
console.log("[1, 2] + 3 =", [1, 2] + 3);
console.log("배열도 상황에 따라 문자열로 바뀌기 때문에 예상과 다른 결과가 나올 수 있습니다.");

console.log("\n=== 8. 왜 주의해야 하는가 ===");
console.log("암시적 형변환은 편리할 때도 있지만, 버그를 만들기 쉽습니다.");
console.log("특히 + 연산자와 == 비교는 결과를 헷갈리게 만들 수 있습니다.");

console.log("\n=== 9. 실무에서의 권장 방식 ===");
console.log("1. 비교할 때는 가능하면 === 를 사용합니다.");
console.log("2. 필요한 경우 Number(), String(), Boolean()으로 명시적으로 변환합니다.");
console.log('3. 사용자 입력값은 보통 문자열이므로 숫자 계산 전에 Number("값") 형태로 바꿉니다.');

const inputValue = "15";
console.log('Number("15") + 5 =', Number(inputValue) + 5);
console.log('"15" + 5 =', inputValue + 5);

console.log("\n=== 10. 한 줄 정리 ===");
console.log("암시적 형변환은 JavaScript가 값을 자동으로 바꾸는 동작입니다.");
console.log("편리하지만 예상하지 못한 결과를 만들 수 있으므로, 중요한 곳에서는 명시적 형변환과 === 사용이 더 안전합니다.");
