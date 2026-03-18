// 아주 기본적인 DOM 실습
// 버튼을 누르면 문장과 박스 색이 바뀝니다.

const message = document.querySelector("#message");
const changeButton = document.querySelector("#change-button");
const box = document.querySelector("#box");

let isChanged = false;

changeButton.addEventListener("click", () => {
  if (isChanged === false) {
    message.textContent = "버튼을 눌러서 문장이 바뀌었습니다.";
    box.classList.add("active");
    changeButton.textContent = "다시 원래대로";
    isChanged = true;
  } else {
    message.textContent = "아직 버튼을 누르지 않았습니다.";
    box.classList.remove("active");
    changeButton.textContent = "문장 바꾸기";
    isChanged = false;
  }
});
