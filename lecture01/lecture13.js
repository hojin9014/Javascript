// JavaScript 예외처리 자세히 배우기
// 이 파일은 브라우저 콘솔에서 에러와 예외처리의 흐름을 단계적으로 이해하도록 작성되었습니다.

console.log("=== 1. 예외처리란 무엇인가 ===");
console.log("예외처리는 프로그램 실행 중 발생할 수 있는 에러를 안전하게 다루는 방법입니다.");
console.log("에러가 발생했을 때 프로그램이 갑자기 멈추지 않도록 대비하는 것이 목적입니다.");

console.log("\n=== 2. 에러(error)와 예외(exception) ===");
console.log("보통 JavaScript에서는 실행 중 문제가 생기면 에러 객체가 만들어집니다.");
console.log("이 에러를 잡아서 처리하는 과정을 예외처리라고 부릅니다.");
console.log("즉, 예외처리는 에러를 무시하는 것이 아니라, 예상 가능한 문제를 관리하는 것입니다.");

console.log("\n=== 3. 왜 예외처리가 필요한가 ===");
console.log("1. 프로그램이 중간에 멈추는 일을 줄일 수 있습니다.");
console.log("2. 사용자에게 더 친절한 안내를 보여줄 수 있습니다.");
console.log("3. 어떤 문제가 발생했는지 로그로 남기기 쉽습니다.");
console.log("4. 복구 가능한 상황에서는 다음 동작으로 자연스럽게 넘어갈 수 있습니다.");

console.log("\n=== 4. try...catch 기본 구조 ===");
console.log("try 블록에는 에러가 날 수 있는 코드를 넣습니다.");
console.log("catch 블록에는 에러가 발생했을 때 실행할 코드를 넣습니다.");

try {
  console.log("try 블록 실행 시작");
  JSON.parse("{잘못된 JSON}");
  console.log("이 문장은 실행되지 않습니다.");
} catch (error) {
  console.log("catch 블록이 에러를 잡았습니다.");
  console.log("에러 메시지:", error.message);
}

console.log("try...catch 덕분에 에러가 나도 아래 코드가 계속 실행됩니다.");

console.log("\n=== 5. try 블록에서 에러가 없으면 ===");
try {
  const data = JSON.parse('{"name":"Minsu","age":20}');
  console.log("정상 파싱 결과:", data);
} catch (error) {
  console.log("이 문장은 실행되지 않습니다.");
}

console.log("에러가 없으면 catch는 실행되지 않습니다.");

console.log("\n=== 6. catch의 error 객체 ===");
try {
  console.log(notDefinedVariable);
} catch (error) {
  console.log("error.name:", error.name);
  console.log("error.message:", error.message);
}

console.log("catch의 매개변수 error에는 에러 정보가 들어 있습니다.");

console.log("\n=== 7. finally 란 무엇인가 ===");
try {
  console.log("작업을 시작합니다.");
  throw new Error("강제로 만든 에러");
} catch (error) {
  console.log("catch에서 처리한 메시지:", error.message);
} finally {
  console.log("finally는 에러 발생 여부와 상관없이 항상 실행됩니다.");
}

console.log("정리 작업, 로딩 종료, 파일 닫기 같은 코드에 finally를 자주 사용합니다.");

console.log("\n=== 8. throw 로 직접 에러 만들기 ===");
function checkAge(age) {
  if (age < 0) {
    throw new Error("나이는 0보다 작을 수 없습니다.");
  }

  return "정상적인 나이입니다.";
}

try {
  console.log(checkAge(20));
  console.log(checkAge(-3));
} catch (error) {
  console.log("직접 만든 에러 처리:", error.message);
}

console.log("throw는 개발자가 의도적으로 에러를 발생시킬 때 사용합니다.");

console.log("\n=== 9. 문자열도 throw 할 수 있지만 ===");
try {
  throw "문자열 에러";
} catch (error) {
  console.log("잡힌 값:", error);
}

console.log("기술적으로는 문자열도 throw 할 수 있지만, 보통은 Error 객체를 사용하는 것이 더 좋습니다.");

console.log("\n=== 10. Error 객체를 사용하는 이유 ===");
try {
  throw new Error("Error 객체 예제");
} catch (error) {
  console.log("name:", error.name);
  console.log("message:", error.message);
}

console.log("Error 객체는 name, message 같은 공통 정보를 담고 있어서 관리하기 쉽습니다.");

console.log("\n=== 11. 조건 검사와 예외처리 ===");
function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }

  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0));
} catch (error) {
  console.log("나눗셈 에러:", error.message);
}

console.log("\n=== 12. 사용자 입력 검증 예제 ===");
function parseScore(input) {
  const score = Number(input);

  if (Number.isNaN(score)) {
    throw new Error("숫자로 변환할 수 없는 값입니다.");
  }

  if (score < 0 || score > 100) {
    throw new Error("점수는 0에서 100 사이여야 합니다.");
  }

  return score;
}

try {
  console.log('점수 변환 결과:', parseScore("85"));
  console.log('점수 변환 결과:', parseScore("hello"));
} catch (error) {
  console.log("입력값 에러:", error.message);
}

console.log("\n=== 13. 여러 종류의 에러 이름 보기 ===");
try {
  JSON.parse("{broken}");
} catch (error) {
  console.log("JSON.parse 에러 이름:", error.name);
}

try {
  null.toString();
} catch (error) {
  console.log("null 접근 에러 이름:", error.name);
}

console.log("상황에 따라 SyntaxError, ReferenceError, TypeError 같은 이름이 나올 수 있습니다.");

console.log("\n=== 14. 중첩된 try...catch ===");
try {
  try {
    throw new Error("안쪽 에러");
  } catch (error) {
    console.log("안쪽 catch:", error.message);
    throw new Error("바깥으로 다시 전달한 에러");
  }
} catch (error) {
  console.log("바깥 catch:", error.message);
}

console.log("catch 안에서 다시 throw 하면 바깥쪽에서 한 번 더 처리할 수 있습니다.");

console.log("\n=== 15. 함수 안에서 에러를 던지고 밖에서 처리하기 ===");
function findUser(userId) {
  if (userId !== 1) {
    throw new Error("사용자를 찾을 수 없습니다.");
  }

  return { id: 1, name: "Minsu" };
}

try {
  const foundUser = findUser(2);
  console.log("찾은 사용자:", foundUser);
} catch (error) {
  console.log("사용자 조회 실패:", error.message);
}

console.log("실무에서는 함수 안에서 에러를 던지고, 그 함수를 사용하는 쪽에서 처리하는 패턴이 많습니다.");

console.log("\n=== 16. finally의 실전 느낌 ===");
let isLoading = true;
console.log("로딩 시작:", isLoading);

try {
  throw new Error("네트워크 문제를 가정한 에러");
} catch (error) {
  console.log("요청 실패:", error.message);
} finally {
  isLoading = false;
  console.log("로딩 종료:", isLoading);
}

console.log("\n=== 17. 비동기 코드와 catch 개념 맛보기 ===");
Promise.resolve("성공")
  .then((value) => {
    console.log("Promise 성공:", value);
    return Promise.reject(new Error("Promise 실패 예제"));
  })
  .catch((error) => {
    console.log("Promise catch:", error.message);
  })
  .finally(() => {
    console.log("Promise finally도 마지막에 실행됩니다.");
  });

console.log("Promise에서는 try...catch 대신 .catch()를 자주 사용합니다.");

console.log("\n=== 18. 예외처리를 남용하면 안 되는 이유 ===");
console.log("예외처리는 정말 예외적인 상황을 다룰 때 사용해야 합니다.");
console.log("단순한 조건 분기는 if 문으로 먼저 처리하는 편이 더 읽기 쉽습니다.");

console.log("\n=== 19. 좋은 예외처리 습관 ===");
console.log("1. 에러 메시지를 구체적으로 작성합니다.");
console.log("2. 어디서 처리할지 역할을 나눕니다.");
console.log("3. 사용자 입력, 네트워크 요청, JSON 파싱 같은 위험한 부분을 주의합니다.");
console.log("4. 무조건 숨기지 말고, 필요한 로그는 남기는 것이 좋습니다.");

console.log("\n=== 20. 실전 예제 1: 안전한 JSON 읽기 ===");
function safeParseJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    console.log("JSON 파싱 실패:", error.message);
    return null;
  }
}

console.log("정상 JSON:", safeParseJson('{"title":"JavaScript"}'));
console.log("잘못된 JSON:", safeParseJson("{title:JavaScript}"));

console.log("\n=== 21. 실전 예제 2: 회원가입 입력 검사 ===");
function validateSignupForm(username, password) {
  if (!username) {
    throw new Error("사용자 이름을 입력해야 합니다.");
  }

  if (password.length < 8) {
    throw new Error("비밀번호는 8자 이상이어야 합니다.");
  }

  return "회원가입 입력값이 정상입니다.";
}

try {
  console.log(validateSignupForm("minsu", "1234"));
} catch (error) {
  console.log("회원가입 에러:", error.message);
}

try {
  console.log(validateSignupForm("minsu", "12345678"));
} catch (error) {
  console.log("회원가입 에러:", error.message);
}

console.log("\n=== 22. 실전 예제 3: 은행 출금 처리 ===");
function withdraw(balance, amount) {
  if (amount <= 0) {
    throw new Error("출금 금액은 0보다 커야 합니다.");
  }

  if (amount > balance) {
    throw new Error("잔액이 부족합니다.");
  }

  return balance - amount;
}

try {
  console.log("출금 후 잔액:", withdraw(50000, 10000));
  console.log("출금 후 잔액:", withdraw(50000, 70000));
} catch (error) {
  console.log("출금 처리 에러:", error.message);
}

console.log("\n=== 23. 자주 하는 실수 ===");
console.log("1. catch에서 에러를 잡고 아무 처리도 하지 않으면 원인 파악이 어려워집니다.");
console.log("2. try 블록에 너무 많은 코드를 넣으면 어디서 에러가 났는지 찾기 어려워집니다.");
console.log("3. throw 없이 그냥 문자열만 반환하면 진짜 에러 상황과 구분이 어려울 수 있습니다.");

console.log("\n=== 24. 한 줄 정리 ===");
console.log("예외처리는 에러가 발생했을 때 프로그램을 더 안전하고 예측 가능하게 동작하게 만드는 중요한 기술입니다.");
console.log("try...catch...finally, throw, Error 객체를 이해하면 실무 코드의 안정성을 크게 높일 수 있습니다.");
