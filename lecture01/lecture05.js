// JavaScript에서 JSON 배우기
// 이 파일은 브라우저 콘솔에서 JSON의 개념과 사용 방법을 순서대로 확인하도록 작성되었습니다.

console.log("=== 1. JSON이란 무엇인가 ===");
console.log("JSON은 JavaScript Object Notation의 줄임말입니다.");
console.log("데이터를 저장하거나 주고받기 위한 텍스트 형식입니다.");
console.log("사람이 읽기 쉽고, 컴퓨터도 처리하기 쉬워서 많이 사용합니다.");

console.log("\n=== 2. JSON의 기본 모양 ===");
console.log("객체는 중괄호 {}, 배열은 대괄호 []를 사용합니다.");
console.log("문자열은 반드시 큰따옴표를 사용합니다.");
console.log("JSON의 key도 반드시 큰따옴표로 감싸야 합니다.");

const jsonText = `{
  "name": "Minsu",
  "age": 20,
  "isStudent": true,
  "skills": ["JavaScript", "HTML", "CSS"]
}`;

console.log("JSON 문자열 예시:");
console.log(jsonText);

console.log("\n=== 3. JavaScript 객체와 JSON의 차이 ===");
const jsObject = {
  name: "Minsu",
  age: 20,
  isStudent: true,
  skills: ["JavaScript", "HTML", "CSS"]
};

console.log("JavaScript 객체:", jsObject);
console.log("JSON은 문자열이고, JavaScript 객체는 코드에서 바로 다룰 수 있는 값입니다.");

console.log("\n=== 4. JSON.parse() 사용하기 ===");
const parsedData = JSON.parse(jsonText);
console.log("문자열 JSON -> JavaScript 객체 변환:", parsedData);
console.log("이름:", parsedData.name);
console.log("첫 번째 기술:", parsedData.skills[0]);

console.log("\n=== 5. JSON.stringify() 사용하기 ===");
const stringifiedData = JSON.stringify(jsObject);
console.log("JavaScript 객체 -> JSON 문자열 변환:", stringifiedData);

const prettyJson = JSON.stringify(jsObject, null, 2);
console.log("보기 좋게 정리된 JSON:");
console.log(prettyJson);

console.log("\n=== 6. JavaScript에서 JSON을 왜 사용하는가 ===");
console.log("1. 서버와 데이터를 주고받기 쉽습니다.");
console.log("2. 파일로 저장하기 좋습니다.");
console.log("3. localStorage 같은 브라우저 저장소에 넣기 편합니다.");
console.log("4. 여러 언어에서 공통으로 이해할 수 있습니다.");

console.log("\n=== 7. JSON의 장점 ===");
console.log("1. 문법이 단순해서 배우기 쉽습니다.");
console.log("2. 사람이 읽기 쉽습니다.");
console.log("3. 네트워크 통신에서 널리 사용됩니다.");
console.log("4. JavaScript와 특히 잘 어울립니다.");

console.log("\n=== 8. JSON에서 주의할 점 ===");
console.log("1. 문자열은 큰따옴표만 사용합니다.");
console.log("2. 함수는 넣을 수 없습니다.");
console.log("3. undefined는 JSON으로 표현되지 않습니다.");
console.log("4. 마지막 요소 뒤에 쉼표를 넣으면 안 됩니다.");

const dataWithFunction = {
  name: "Minsu",
  greet() {
    console.log("hello");
  },
  score: undefined
};

console.log("함수와 undefined가 있는 객체:", dataWithFunction);
console.log("JSON.stringify 결과:", JSON.stringify(dataWithFunction));
console.log("함수와 undefined는 JSON 문자열로 바꿀 때 제외됩니다.");

console.log("\n=== 9. .json 파일은 JavaScript에서 어떻게 사용하는가 ===");
console.log("가장 많이 쓰는 방법은 fetch()로 읽어온 뒤 response.json()을 사용하는 것입니다.");
console.log("예시 코드:");
console.log('fetch("sample.json")');
console.log("  .then((response) => response.json())");
console.log("  .then((data) => console.log(data));");

if (typeof fetch === "function") {
  if (location.protocol === "file:") {
    console.log("현재는 file:// 방식일 가능성이 있어 fetch로 .json 읽기가 제한될 수 있습니다.");
    console.log("Live Server 같은 로컬 서버로 열면 sample.json을 더 쉽게 읽을 수 있습니다.");
  } else {
    fetch("sample.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("sample.json에서 읽어온 데이터:", data);
      })
      .catch((error) => {
        console.log("sample.json 읽기 오류:", error.message);
      });
  }
}

console.log("\n=== 10. localStorage와 JSON ===");
const userSettings = {
  theme: "light",
  language: "ko",
  fontSize: 16
};

const savedText = JSON.stringify(userSettings);
console.log("저장할 JSON 문자열:", savedText);
console.log("보통 localStorage에는 문자열만 저장할 수 있어서 JSON으로 바꿔 저장합니다.");

console.log("\n=== 11. 한 줄 정리 ===");
console.log("JSON은 데이터를 저장하고 전달하기 위한 표준적인 텍스트 형식입니다.");
console.log("JavaScript에서는 JSON.parse()와 JSON.stringify()를 가장 많이 사용합니다.");
console.log("API 통신, 파일 저장, 브라우저 저장소에서 특히 자주 사용됩니다.");
