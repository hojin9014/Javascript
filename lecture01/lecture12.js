// JavaScript 객체 자세히 배우기
// 이 파일은 브라우저 콘솔에서 객체의 개념을 아주 자세하게 이해하도록 작성되었습니다.

console.log("=== 1. 객체란 무엇인가 ===");
console.log("객체(object)는 여러 값을 하나로 묶어서 관리하는 자료형입니다.");
console.log("이름표(key)와 실제 값(value)을 한 쌍으로 저장합니다.");
console.log("예를 들어 사람의 이름, 나이, 취미를 하나의 묶음으로 표현할 수 있습니다.");

console.log("\n=== 2. 객체를 왜 사용하는가 ===");
console.log("서로 관련 있는 데이터를 한 곳에 모아 둘 수 있습니다.");
console.log("배열은 순서 중심이지만, 객체는 의미 있는 이름으로 값을 관리하기 좋습니다.");
console.log("사용자 정보, 상품 정보, 게시글 정보처럼 현실의 대상을 표현할 때 자주 사용합니다.");

console.log("\n=== 3. 객체 기본 문법 ===");
const user = {
  name: "Minsu",
  age: 20,
  isStudent: true
};

console.log("user 객체:", user);
console.log("객체는 중괄호 {} 로 만들고, 각 값은 key: value 형태로 작성합니다.");

console.log("\n=== 4. property(속성)란 무엇인가 ===");
console.log("객체 안에 들어 있는 각각의 key: value 쌍을 property(속성)라고 합니다.");
console.log("예를 들어 user 객체의 name, age, isStudent는 모두 속성입니다.");
console.log("name 속성 값:", user.name);
console.log("age 속성 값:", user.age);
console.log("isStudent 속성 값:", user.isStudent);

console.log("\n=== 5. 객체의 값에는 어떤 자료형이 들어갈 수 있는가 ===");
const product = {
  title: "노트북",
  price: 1200000,
  inStock: true,
  tags: ["electronics", "computer"],
  spec: {
    cpu: "i7",
    memory: "16GB"
  },
  showTitle() {
    console.log(`상품명은 ${this.title}입니다.`);
  }
};

console.log("문자열:", product.title);
console.log("숫자:", product.price);
console.log("불리언:", product.inStock);
console.log("배열:", product.tags);
console.log("객체:", product.spec);
product.showTitle();
console.log("객체의 값에는 문자열, 숫자, 배열, 다른 객체, 함수 등 거의 모든 값이 들어갈 수 있습니다.");

console.log("\n=== 6. 점 표기법(dot notation) ===");
console.log("user.name ->", user.name);
console.log("user.age ->", user.age);
console.log("점 표기법은 가장 많이 사용하는 접근 방식입니다.");
console.log("객체이름.속성이름 형태로 사용합니다.");

console.log("\n=== 7. 대괄호 표기법(bracket notation) ===");
console.log('user["name"] ->', user["name"]);
console.log('user["age"] ->', user["age"]);
console.log("대괄호 안에는 문자열 형태의 key를 넣습니다.");
console.log("속성 이름에 공백이 있거나, 변수 값을 key로 사용할 때 유용합니다.");

console.log("\n=== 8. 점 표기법과 대괄호 표기법의 차이 ===");
const book = {
  title: "JavaScript Basics",
  "sub title": "for beginner"
};

const keyName = "title";

console.log("book.title ->", book.title);
console.log('book["sub title"] ->', book["sub title"]);
console.log('book[keyName] ->', book[keyName]);
console.log("book.keyName ->", book.keyName);
console.log("book.keyName은 keyName이라는 이름의 속성을 찾기 때문에 undefined가 나옵니다.");

console.log("\n=== 9. 객체에 속성 추가하기 ===");
const student = {
  name: "Jisu",
  grade: 2
};

student.major = "Computer Science";
student["school"] = "Korea High School";

console.log("속성 추가 후 student:", student);
console.log("객체는 만든 뒤에도 새로운 속성을 추가할 수 있습니다.");

console.log("\n=== 10. 객체의 속성 수정하기 ===");
student.grade = 3;
student["major"] = "Software";

console.log("속성 수정 후 student:", student);
console.log("기존 key에 새 값을 넣으면 값이 수정됩니다.");

console.log("\n=== 11. 객체의 속성 삭제하기 ===");
delete student.school;
console.log("school 삭제 후 student:", student);
console.log("delete 키워드로 속성을 삭제할 수 있습니다.");

console.log("\n=== 12. 없는 속성에 접근하면 어떻게 되는가 ===");
console.log("student.address ->", student.address);
console.log("존재하지 않는 속성에 접근하면 에러가 아니라 undefined가 나옵니다.");

console.log("\n=== 13. 메서드(method)란 무엇인가 ===");
const dog = {
  name: "Coco",
  bark() {
    console.log(`${this.name}가 멍멍 짖습니다.`);
  }
};

dog.bark();
console.log("객체 안에 들어 있는 함수를 메서드(method)라고 부릅니다.");

console.log("\n=== 14. this 란 무엇인가 ===");
const person = {
  firstName: "Min",
  lastName: "Su",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("전체 이름:", person.getFullName());
console.log("메서드 안의 this는 보통 그 메서드를 호출한 객체 자신을 가리킵니다.");

console.log("\n=== 15. 중첩 객체(nested object) ===");
const company = {
  name: "Open Study",
  address: {
    city: "Seoul",
    district: "Mapo"
  },
  contact: {
    email: "hello@example.com",
    phone: "010-1234-5678"
  }
};

console.log("회사 이름:", company.name);
console.log("도시:", company.address.city);
console.log("이메일:", company.contact.email);
console.log("객체 안에는 또 다른 객체를 넣어서 더 복잡한 구조를 만들 수 있습니다.");

console.log("\n=== 16. 배열 안의 객체 ===");
const users = [
  { id: 1, name: "Minsu" },
  { id: 2, name: "Jisu" },
  { id: 3, name: "Hana" }
];

console.log("첫 번째 사용자:", users[0]);
console.log("두 번째 사용자 이름:", users[1].name);
console.log("실무에서는 배열 안에 객체가 들어 있는 구조를 매우 자주 사용합니다.");

console.log("\n=== 17. 객체 안의 배열 ===");
const classroom = {
  className: "JavaScript Beginner",
  students: ["Minsu", "Jisu", "Hana"],
  scores: [90, 85, 95]
};

console.log("반 이름:", classroom.className);
console.log("첫 번째 학생:", classroom.students[0]);
console.log("세 번째 점수:", classroom.scores[2]);
console.log("객체는 여러 배열도 함께 묶어 관리할 수 있습니다.");

console.log("\n=== 18. 객체 순회하기: for...in ===");
const movie = {
  title: "Inception",
  year: 2010,
  genre: "SF"
};

for (const key in movie) {
  console.log(`key: ${key}, value: ${movie[key]}`);
}

console.log("for...in 문은 객체의 key를 하나씩 꺼내며 반복할 때 사용합니다.");

console.log("\n=== 19. Object.keys(), Object.values(), Object.entries() ===");
console.log("Object.keys(movie):", Object.keys(movie));
console.log("Object.values(movie):", Object.values(movie));
console.log("Object.entries(movie):", Object.entries(movie));
console.log("이 메서드들은 객체를 배열처럼 다루고 싶을 때 매우 유용합니다.");

console.log("\n=== 20. 객체 복사에 대한 기초 개념 ===");
const originalUser = {
  name: "Dami",
  age: 25
};

const copiedUser = originalUser;
copiedUser.age = 26;

console.log("originalUser:", originalUser);
console.log("copiedUser:", copiedUser);
console.log("객체를 변수에 그대로 대입하면 값이 복사되는 것이 아니라 같은 객체를 함께 참조합니다.");

console.log("\n=== 21. 전개 연산자로 얕은 복사하기 ===");
const clonedUser = { ...originalUser };
clonedUser.age = 30;

console.log("원본 객체:", originalUser);
console.log("복사한 객체:", clonedUser);
console.log("전개 연산자(...)를 사용하면 새 객체를 만들 수 있습니다.");
console.log("다만 중첩 객체까지 완전히 깊게 복사되는 것은 아닙니다.");

console.log("\n=== 22. 객체 구조 분해 할당 ===");
const member = {
  nickname: "coder",
  level: 7,
  city: "Busan"
};

const { nickname, level, city } = member;

console.log("nickname:", nickname);
console.log("level:", level);
console.log("city:", city);
console.log("구조 분해 할당은 객체의 값을 쉽게 꺼내 변수로 저장하는 문법입니다.");

console.log("\n=== 23. 객체와 JSON의 관계 ===");
const profile = {
  name: "Minsu",
  age: 20
};

const jsonText = JSON.stringify(profile);
console.log("JSON 문자열:", jsonText);
console.log("JSON.parse 결과:", JSON.parse(jsonText));
console.log("객체는 JavaScript 안에서 다루는 데이터이고, JSON은 데이터를 문자열 형태로 저장하거나 전송할 때 자주 사용합니다.");

console.log("\n=== 24. 실전 예제 1: 쇼핑몰 상품 객체 ===");
const item = {
  name: "마우스",
  price: 30000,
  quantity: 2,
  getTotalPrice() {
    return this.price * this.quantity;
  }
};

console.log("상품명:", item.name);
console.log("수량:", item.quantity);
console.log("총 가격:", item.getTotalPrice());

console.log("\n=== 25. 실전 예제 2: 학생 정보 관리 ===");
const learner = {
  name: "Hana",
  scores: {
    math: 90,
    english: 85,
    science: 95
  },
  getAverage() {
    const total = this.scores.math + this.scores.english + this.scores.science;
    return total / 3;
  }
};

console.log("학생 이름:", learner.name);
console.log("수학 점수:", learner.scores.math);
console.log("평균 점수:", learner.getAverage());

console.log("\n=== 26. 객체를 배울 때 꼭 기억할 점 ===");
console.log("1. 객체는 key와 value의 묶음입니다.");
console.log("2. 점 표기법과 대괄호 표기법으로 값에 접근할 수 있습니다.");
console.log("3. 객체에는 함수도 넣을 수 있고, 그 함수를 메서드라고 부릅니다.");
console.log("4. 객체는 현실 세계의 대상을 표현할 때 매우 유용합니다.");
console.log("5. 객체를 다른 변수에 대입할 때는 참조가 공유될 수 있다는 점을 기억해야 합니다.");

console.log("\n=== 27. 한 줄 정리 ===");
console.log("JavaScript 객체는 관련 있는 데이터를 이름표와 함께 묶어 관리하는 매우 중요한 자료형입니다.");
console.log("속성, 메서드, 중첩 구조, 순회, 복사 개념까지 이해하면 실전 코드 읽기가 훨씬 쉬워집니다.");
