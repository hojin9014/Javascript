// JavaScript DOM 개념 / 실습
// 이 파일은 브라우저 콘솔과 화면 조작을 함께 보며 DOM의 핵심 개념을 이해하도록 작성되었습니다.

console.log("=== 1. DOM이란 무엇인가 ===");
console.log("DOM은 Document Object Model의 줄임말입니다.");
console.log("HTML 문서를 JavaScript가 객체 형태로 읽고, 찾고, 바꾸고, 추가하고, 삭제할 수 있게 해 주는 구조입니다.");

console.log("\n=== 2. 왜 DOM을 배우는가 ===");
console.log("DOM을 배우면 버튼 클릭, 문장 변경, 목록 추가, 스타일 변경 같은 화면 조작을 할 수 있습니다.");
console.log("즉, 사용자가 보는 웹페이지를 JavaScript로 움직이게 만드는 핵심 개념입니다.");

console.log("\n=== 3. document 객체 ===");
console.log("브라우저는 현재 HTML 문서를 document 객체로 제공합니다.");
console.log("JavaScript는 document를 통해 페이지 안의 요소를 찾고 조작합니다.");
console.log("현재 문서 제목:", document.title);

console.log("\n=== 4. 요소 선택하기 ===");
console.log("querySelector는 CSS 선택자 방식으로 첫 번째 요소를 찾습니다.");
console.log("querySelectorAll은 조건에 맞는 여러 요소를 찾습니다.");

const playground = document.querySelector("#playground");
const titleText = document.querySelector("#title-text");
const statusText = document.querySelector("#status-text");
const itemCount = document.querySelector("#item-count");
const changeTextButton = document.querySelector("#change-text-button");
const toggleThemeButton = document.querySelector("#toggle-theme-button");
const titleInput = document.querySelector("#title-input");
const applyTitleButton = document.querySelector("#apply-title-button");
const addItemButton = document.querySelector("#add-item-button");
const removeItemButton = document.querySelector("#remove-item-button");
const domList = document.querySelector("#dom-list");

console.log("선택한 박스 요소:", playground);
console.log("선택한 제목 요소:", titleText);
console.log("선택한 목록 개수:", document.querySelectorAll("#dom-list li").length);

console.log("\n=== 5. textContent로 내용 바꾸기 ===");
console.log("textContent는 요소 안의 텍스트 내용을 읽거나 바꿀 때 사용합니다.");

console.log("\n=== 6. classList로 클래스 조작하기 ===");
console.log("classList.add(), remove(), toggle()로 CSS 클래스를 쉽게 바꿀 수 있습니다.");

console.log("\n=== 7. addEventListener로 이벤트 연결하기 ===");
console.log("버튼 클릭, 입력, 마우스 동작 같은 이벤트에 반응하게 만들 수 있습니다.");

console.log("\n=== 8. createElement와 append로 요소 추가하기 ===");
console.log("JavaScript로 새 요소를 만들고 화면에 붙일 수 있습니다.");

console.log("\n=== 9. remove로 요소 삭제하기 ===");
console.log("기존 요소를 찾아서 지우는 것도 가능합니다.");

let isChanged = false;
let createdItemNumber = domList.children.length;

function updateCount() {
  itemCount.textContent = `현재 목록 수: ${domList.children.length}`;
}

function updateStatus(message) {
  statusText.textContent = message;
  console.log("상태 변경:", message);
}

updateCount();

changeTextButton.addEventListener("click", () => {
  if (isChanged) {
    titleText.textContent = "DOM 실습 제목";
    updateStatus("textContent로 제목을 원래대로 되돌렸습니다.");
    changeTextButton.textContent = "문장 바꾸기";
    isChanged = false;
  } else {
    titleText.textContent = "DOM은 문서를 JavaScript로 조작하는 방법입니다.";
    updateStatus("textContent로 제목 내용을 바꿨습니다.");
    changeTextButton.textContent = "원래 문장으로";
    isChanged = true;
  }
});

toggleThemeButton.addEventListener("click", () => {
  playground.classList.toggle("active");

  if (playground.classList.contains("active")) {
    updateStatus("classList.toggle()로 강조 스타일을 켰습니다.");
  } else {
    updateStatus("classList.toggle()로 강조 스타일을 껐습니다.");
  }
});

applyTitleButton.addEventListener("click", () => {
  const inputValue = titleInput.value.trim();

  if (!inputValue) {
    updateStatus("입력값이 비어 있어서 제목을 바꾸지 않았습니다.");
    return;
  }

  titleText.textContent = inputValue;
  updateStatus("입력값으로 제목을 바꿨습니다.");
  titleInput.value = "";
  titleInput.focus();
});

addItemButton.addEventListener("click", () => {
  createdItemNumber += 1;

  const newItem = document.createElement("li");
  newItem.textContent = `새 DOM 연습 항목 ${createdItemNumber} (클릭하면 완료 표시)`;

  domList.append(newItem);
  updateCount();
  updateStatus("createElement()와 append()로 새 목록 항목을 추가했습니다.");
});

removeItemButton.addEventListener("click", () => {
  const lastItem = domList.lastElementChild;

  if (!lastItem) {
    updateStatus("삭제할 목록 항목이 없습니다.");
    return;
  }

  lastItem.remove();
  updateCount();
  updateStatus("lastElementChild와 remove()로 마지막 항목을 삭제했습니다.");
});

domList.addEventListener("click", (event) => {
  const clickedItem = event.target;

  if (!(clickedItem instanceof HTMLLIElement)) {
    return;
  }

  clickedItem.classList.toggle("done");

  if (clickedItem.classList.contains("done")) {
    updateStatus("event.target으로 클릭한 목록 항목을 완료 상태로 바꿨습니다.");
  } else {
    updateStatus("event.target으로 클릭한 목록 항목의 완료 상태를 해제했습니다.");
  }
});

console.log("\n=== 10. 실습 방법 ===");
console.log("1. 문장 바꾸기 버튼을 눌러 textContent 변화를 확인합니다.");
console.log("2. 강조 토글 버튼을 눌러 classList 변화를 확인합니다.");
console.log("3. 입력창에 제목을 넣고 적용 버튼을 눌러 DOM 내용을 바꿉니다.");
console.log("4. 목록 추가 / 삭제 버튼으로 요소 생성과 제거를 연습합니다.");
console.log("5. 목록 항목을 클릭해 event.target과 classList.toggle 동작을 확인합니다.");

console.log("\n=== 11. 한 줄 정리 ===");
console.log("DOM은 HTML 문서를 JavaScript로 다루기 위한 구조이며, 요소 선택, 내용 변경, 클래스 조작, 이벤트 연결, 요소 추가/삭제가 핵심입니다.");
