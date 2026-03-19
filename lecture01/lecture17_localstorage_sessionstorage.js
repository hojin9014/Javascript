// JavaScript localStorage / sessionStorage 자세히 배우기
// 이 파일은 브라우저 콘솔과 화면 실습을 함께 보며 Web Storage를 이해하도록 작성되었습니다.

console.log("=== 1. Web Storage란 무엇인가 ===");
console.log("Web Storage는 브라우저에 데이터를 저장하는 기능입니다.");
console.log("대표적으로 localStorage와 sessionStorage가 있습니다.");

console.log("\n=== 2. localStorage란 무엇인가 ===");
console.log("localStorage는 브라우저에 비교적 오래 남는 저장소입니다.");
console.log("페이지를 새로고침해도 유지되고, 브라우저를 다시 열어도 남아 있을 수 있습니다.");

console.log("\n=== 3. sessionStorage란 무엇인가 ===");
console.log("sessionStorage는 현재 탭 세션 동안만 유지되는 저장소입니다.");
console.log("새로고침은 버티지만, 보통 탭을 닫으면 사라집니다.");

console.log("\n=== 4. 둘의 공통점 ===");
console.log("1. 둘 다 key와 value 형태로 저장합니다.");
console.log("2. 둘 다 문자열(string) 기반 저장소입니다.");
console.log("3. setItem, getItem, removeItem, clear 같은 메서드를 사용합니다.");

console.log("\n=== 5. 둘의 차이 ===");
console.log("localStorage: 오래 유지되는 데이터");
console.log("sessionStorage: 현재 탭에서만 유지되는 데이터");
console.log("예를 들어 자동 로그인 선호값은 localStorage, 임시 폼 상태는 sessionStorage가 어울릴 수 있습니다.");

console.log("\n=== 6. 문자열만 저장된다는 뜻 ===");
console.log("숫자나 객체를 저장해도 실제로는 문자열로 저장됩니다.");
console.log("객체는 보통 JSON.stringify()로 저장하고, 읽을 때 JSON.parse()를 사용합니다.");

console.log("\n=== 7. 자주 쓰는 메서드 ===");
console.log('localStorage.setItem("key", "value")');
console.log('localStorage.getItem("key")');
console.log('localStorage.removeItem("key")');
console.log("localStorage.clear()");
console.log("sessionStorage도 같은 패턴으로 사용합니다.");

console.log("\n=== 8. 브라우저 환경에서만 의미가 큼 ===");
console.log("이 저장소들은 브라우저가 제공하는 기능이기 때문에, 브라우저 화면과 함께 실습하는 것이 가장 좋습니다.");

function isStorageAvailable(storage) {
  try {
    const testKey = "__storage_test__";
    storage.setItem(testKey, "ok");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    console.log("저장소 사용 불가:", error.message);
    return false;
  }
}

const canUseLocalStorage = typeof localStorage !== "undefined" && isStorageAvailable(localStorage);
const canUseSessionStorage = typeof sessionStorage !== "undefined" && isStorageAvailable(sessionStorage);

const statusText = document.querySelector("#status-text");
const storageSummary = document.querySelector("#storage-summary");
const keyInput = document.querySelector("#storage-key-input");
const valueInput = document.querySelector("#storage-value-input");
const saveLocalButton = document.querySelector("#save-local-button");
const readLocalButton = document.querySelector("#read-local-button");
const removeLocalButton = document.querySelector("#remove-local-button");
const saveSessionButton = document.querySelector("#save-session-button");
const readSessionButton = document.querySelector("#read-session-button");
const removeSessionButton = document.querySelector("#remove-session-button");
const saveJsonButton = document.querySelector("#save-json-button");
const readJsonButton = document.querySelector("#read-json-button");
const refreshViewButton = document.querySelector("#refresh-view-button");
const localPreview = document.querySelector("#local-preview");
const sessionPreview = document.querySelector("#session-preview");

const defaultJsonKey = "lecture17-user";

function getCurrentKey() {
  const key = keyInput.value.trim();
  return key || "lecture17-demo";
}

function updateStatus(message) {
  statusText.textContent = message;
  console.log("상태 변경:", message);
}

function formatStorageValue(value) {
  if (value === null) {
    return "저장된 값이 없습니다.";
  }

  return value;
}

function updateSummary() {
  const localLength = canUseLocalStorage ? localStorage.length : 0;
  const sessionLength = canUseSessionStorage ? sessionStorage.length : 0;
  storageSummary.textContent = `localStorage key 수: ${localLength} / sessionStorage key 수: ${sessionLength}`;
}

function updatePreview() {
  const key = getCurrentKey();

  if (canUseLocalStorage) {
    localPreview.textContent = `key: ${key}\nvalue: ${formatStorageValue(localStorage.getItem(key))}`;
  } else {
    localPreview.textContent = "현재 환경에서는 localStorage를 사용할 수 없습니다.";
  }

  if (canUseSessionStorage) {
    sessionPreview.textContent = `key: ${key}\nvalue: ${formatStorageValue(sessionStorage.getItem(key))}`;
  } else {
    sessionPreview.textContent = "현재 환경에서는 sessionStorage를 사용할 수 없습니다.";
  }

  updateSummary();
}

function requireValue() {
  const value = valueInput.value.trim();

  if (!value) {
    updateStatus("저장할 값을 먼저 입력해 주세요.");
    return null;
  }

  return value;
}

if (!canUseLocalStorage || !canUseSessionStorage) {
  updateStatus("현재 환경에서는 일부 저장소 기능이 제한될 수 있습니다.");
}

updatePreview();

saveLocalButton.addEventListener("click", () => {
  if (!canUseLocalStorage) {
    updateStatus("localStorage를 사용할 수 없습니다.");
    return;
  }

  const value = requireValue();

  if (value === null) {
    return;
  }

  const key = getCurrentKey();
  localStorage.setItem(key, value);
  updateStatus(`localStorage에 "${key}" 키로 값을 저장했습니다.`);
  updatePreview();
});

readLocalButton.addEventListener("click", () => {
  if (!canUseLocalStorage) {
    updateStatus("localStorage를 사용할 수 없습니다.");
    return;
  }

  const key = getCurrentKey();
  const value = localStorage.getItem(key);
  updateStatus(`localStorage에서 "${key}" 값을 읽었습니다.`);
  localPreview.textContent = `key: ${key}\nvalue: ${formatStorageValue(value)}`;
  updateSummary();
});

removeLocalButton.addEventListener("click", () => {
  if (!canUseLocalStorage) {
    updateStatus("localStorage를 사용할 수 없습니다.");
    return;
  }

  const key = getCurrentKey();
  localStorage.removeItem(key);
  updateStatus(`localStorage에서 "${key}" 키를 삭제했습니다.`);
  updatePreview();
});

saveSessionButton.addEventListener("click", () => {
  if (!canUseSessionStorage) {
    updateStatus("sessionStorage를 사용할 수 없습니다.");
    return;
  }

  const value = requireValue();

  if (value === null) {
    return;
  }

  const key = getCurrentKey();
  sessionStorage.setItem(key, value);
  updateStatus(`sessionStorage에 "${key}" 키로 값을 저장했습니다.`);
  updatePreview();
});

readSessionButton.addEventListener("click", () => {
  if (!canUseSessionStorage) {
    updateStatus("sessionStorage를 사용할 수 없습니다.");
    return;
  }

  const key = getCurrentKey();
  const value = sessionStorage.getItem(key);
  updateStatus(`sessionStorage에서 "${key}" 값을 읽었습니다.`);
  sessionPreview.textContent = `key: ${key}\nvalue: ${formatStorageValue(value)}`;
  updateSummary();
});

removeSessionButton.addEventListener("click", () => {
  if (!canUseSessionStorage) {
    updateStatus("sessionStorage를 사용할 수 없습니다.");
    return;
  }

  const key = getCurrentKey();
  sessionStorage.removeItem(key);
  updateStatus(`sessionStorage에서 "${key}" 키를 삭제했습니다.`);
  updatePreview();
});

saveJsonButton.addEventListener("click", () => {
  if (!canUseLocalStorage) {
    updateStatus("JSON 저장 실습에는 localStorage가 필요합니다.");
    return;
  }

  const sampleUser = {
    name: "Minsu",
    theme: "light",
    language: "ko",
    savedAt: new Date().toLocaleString()
  };

  localStorage.setItem(defaultJsonKey, JSON.stringify(sampleUser));
  updateStatus(`JSON.stringify()로 객체를 "${defaultJsonKey}" 키에 저장했습니다.`);
  updatePreview();
});

readJsonButton.addEventListener("click", () => {
  if (!canUseLocalStorage) {
    updateStatus("JSON 읽기 실습에는 localStorage가 필요합니다.");
    return;
  }

  const rawValue = localStorage.getItem(defaultJsonKey);

  if (rawValue === null) {
    updateStatus(`"${defaultJsonKey}" 키에 저장된 JSON 데이터가 없습니다.`);
    return;
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    updateStatus(`JSON.parse()로 "${defaultJsonKey}" 데이터를 읽었습니다.`);
    localPreview.textContent = `key: ${defaultJsonKey}\nvalue:\n${JSON.stringify(parsedValue, null, 2)}`;
    updateSummary();
  } catch (error) {
    updateStatus(`JSON.parse 중 오류가 발생했습니다: ${error.message}`);
  }
});

refreshViewButton.addEventListener("click", () => {
  updateStatus("현재 key 기준으로 localStorage와 sessionStorage 값을 다시 읽었습니다.");
  updatePreview();
});

keyInput.addEventListener("input", () => {
  updatePreview();
});

console.log("\n=== 9. 실습 방법 ===");
console.log("1. 같은 key와 value를 localStorage와 sessionStorage에 각각 저장해 봅니다.");
console.log("2. 새로고침 후 어떤 값이 남는지 확인합니다.");
console.log("3. 탭을 닫았다가 다시 열면 sessionStorage는 사라지고 localStorage는 남을 수 있습니다.");
console.log("4. JSON 저장 버튼으로 객체를 문자열로 저장하고, JSON 읽기 버튼으로 다시 객체로 복원합니다.");

console.log("\n=== 10. 주의할 점 ===");
console.log("1. 비밀번호나 토큰 같은 민감한 정보는 조심해서 다뤄야 합니다.");
console.log("2. 저장 용량은 무한하지 않습니다.");
console.log("3. 값은 문자열 기반이라 객체 저장 시 JSON.stringify/parse가 필요합니다.");
console.log("4. 같은 출처(origin) 기준으로 저장이 구분됩니다.");

console.log("\n=== 11. 한 줄 정리 ===");
console.log("localStorage는 오래 남는 브라우저 저장소이고, sessionStorage는 현재 탭 세션 동안만 유지되는 저장소입니다.");
console.log("둘 다 key-value 문자열 저장소이며, 간단한 사용자 설정이나 임시 상태를 저장할 때 자주 사용됩니다.");
