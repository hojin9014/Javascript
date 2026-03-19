// JavaScript fetch 자세히 배우기
// 이 파일은 브라우저 콘솔에서 fetch의 개념과 사용 방법을 단계적으로 이해하도록 작성되었습니다.

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function runLecture15() {
  console.log("=== 1. fetch란 무엇인가 ===");
  console.log("fetch는 네트워크 요청을 보내고 응답을 받아오는 JavaScript 내장 함수입니다.");
  console.log("주로 서버 API 호출, JSON 데이터 읽기, 파일 요청 등에 사용합니다.");

  console.log("\n=== 2. 왜 fetch를 배우는가 ===");
  console.log("웹 개발에서는 서버에서 데이터를 받아 화면에 보여주는 일이 매우 많습니다.");
  console.log("게시글 목록, 로그인 결과, 상품 정보, 댓글 데이터 등을 가져올 때 fetch를 자주 사용합니다.");

  console.log("\n=== 3. fetch의 기본 특징 ===");
  console.log("1. fetch는 Promise를 반환합니다.");
  console.log("2. 따라서 then/catch 또는 async/await와 함께 사용합니다.");
  console.log("3. 응답(response)을 먼저 받고, 그 안의 실제 데이터는 다시 꺼내야 합니다.");

  console.log("\n=== 4. 가장 기본적인 형태 ===");
  console.log('fetch("주소")');
  console.log("  .then((response) => response.json())");
  console.log("  .then((data) => console.log(data));");

  console.log("\n=== 5. fetch는 바로 데이터 자체를 주는 것이 아님 ===");
  console.log("fetch의 첫 결과는 Response 객체입니다.");
  console.log("즉, 서버가 응답한 정보 묶음을 먼저 받고 그 다음에 본문 데이터를 읽습니다.");

  console.log("\n=== 6. Response 객체에서 자주 보는 값 ===");
  console.log("response.ok -> 요청 성공 여부");
  console.log("response.status -> 상태 코드");
  console.log("response.statusText -> 상태 문자");
  console.log("response.json() -> JSON 본문 읽기");
  console.log("response.text() -> 텍스트 본문 읽기");

  console.log("\n=== 7. fetch와 async/await 기본 예제 ===");
  const fakeResponse = {
    ok: true,
    status: 200,
    statusText: "OK",
    async json() {
      await wait(10);
      return { message: "가짜 응답 데이터", items: [1, 2, 3] };
    }
  };

  console.log("fakeResponse.ok:", fakeResponse.ok);
  console.log("fakeResponse.status:", fakeResponse.status);
  console.log("fakeResponse.statusText:", fakeResponse.statusText);
  console.log("fakeResponse.json() 결과:", await fakeResponse.json());
  console.log("실제 fetch도 비슷한 흐름으로 응답 객체를 먼저 받고, json()으로 본문을 읽습니다.");

  console.log("\n=== 8. then 방식 예제 구조 이해하기 ===");
  await Promise.resolve({
    json() {
      return Promise.resolve({ title: "then 예제 데이터" });
    }
  })
    .then((response) => {
      console.log("첫 번째 then: response를 받음");
      return response.json();
    })
    .then((data) => {
      console.log("두 번째 then: 실제 데이터", data);
    });

  console.log("첫 then에서는 응답 객체를 다루고, 두 번째 then에서는 실제 데이터를 다루는 경우가 많습니다.");

  console.log("\n=== 9. HTTP 메서드란 무엇인가 ===");
  console.log("GET: 데이터 조회");
  console.log("POST: 데이터 생성");
  console.log("PUT/PATCH: 데이터 수정");
  console.log("DELETE: 데이터 삭제");
  console.log("fetch는 기본적으로 GET 요청을 보냅니다.");

  console.log("\n=== 10. GET 요청 예시 ===");
  console.log('fetch("/articles")');
  console.log("기본 옵션을 주지 않으면 보통 GET 요청입니다.");

  console.log("\n=== 11. POST 요청 예시 ===");
  console.log('fetch("/articles", {');
  console.log('  method: "POST",');
  console.log("  headers: { \"Content-Type\": \"application/json\" },");
  console.log('  body: JSON.stringify({ title: "새 글" })');
  console.log("})");
  console.log("POST, PUT, PATCH처럼 데이터를 보낼 때는 body와 headers를 함께 쓰는 경우가 많습니다.");

  console.log("\n=== 12. headers란 무엇인가 ===");
  console.log("headers는 요청에 대한 추가 정보입니다.");
  console.log("예를 들어 JSON 형식이라고 알리거나, 인증 토큰을 보낼 때 사용합니다.");

  console.log("\n=== 13. body란 무엇인가 ===");
  console.log("body는 서버에 보내는 실제 데이터입니다.");
  console.log("객체를 그대로 넣는 것이 아니라, 보통 JSON.stringify()로 문자열로 바꿔 보냅니다.");

  console.log("\n=== 14. response.ok를 확인하는 이유 ===");
  console.log("fetch는 HTTP 404나 500이어도 네트워크 자체가 성공하면 Promise가 바로 reject되지 않을 수 있습니다.");
  console.log("그래서 response.ok를 직접 확인해 주는 습관이 중요합니다.");

  const fakeNotFoundResponse = {
    ok: false,
    status: 404,
    statusText: "Not Found",
    async json() {
      return { message: "데이터를 찾을 수 없습니다." };
    }
  };

  console.log("404 응답 예시 ok:", fakeNotFoundResponse.ok);
  console.log("404 응답 예시 status:", fakeNotFoundResponse.status);

  console.log("\n=== 15. response.ok 검사 패턴 ===");
  async function handleFakeResponse(response) {
    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  try {
    console.log("정상 응답 처리:", await handleFakeResponse(fakeResponse));
  } catch (error) {
    console.log("이 문장은 실행되지 않습니다.");
  }

  try {
    console.log("실패 응답 처리:", await handleFakeResponse(fakeNotFoundResponse));
  } catch (error) {
    console.log("response.ok 검사 에러:", error.message);
  }

  console.log("\n=== 16. try...catch와 함께 쓰기 ===");
  async function fetchStyleExample() {
    try {
      const response = fakeResponse;
      const data = await response.json();
      console.log("try 내부 데이터:", data);
    } catch (error) {
      console.log("fetch 에러:", error.message);
    }
  }

  await fetchStyleExample();
  console.log("실무에서는 async/await + try...catch 조합을 매우 많이 사용합니다.");

  console.log("\n=== 17. 실제 로컬 파일 fetch 실습: sample.json ===");
  console.log("이 예제는 로컬 서버(http://localhost 등)로 열었을 때 가장 잘 동작합니다.");
  console.log("file:// 방식으로 열면 브라우저 보안 정책 때문에 fetch가 막힐 수 있습니다.");

  if (typeof location !== "undefined" && location.protocol === "file:") {
    console.log("현재 file:// 환경으로 보입니다.");
    console.log("sample.json fetch 실습은 Live Server 같은 로컬 서버로 열면 정상 동작할 가능성이 높습니다.");
  } else if (typeof fetch === "function") {
    try {
      const response = await fetch("sample.json");
      console.log("sample.json 응답 status:", response.status);

      if (!response.ok) {
        throw new Error(`sample.json 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      console.log("sample.json 데이터:", data);
    } catch (error) {
      console.log("sample.json fetch 오류:", error.message);
    }
  } else {
    console.log("현재 환경에는 fetch 함수가 없습니다.");
  }

  console.log("\n=== 18. 외부 API fetch 예시 개념 ===");
  console.log("브라우저에서 실제 API 주소로 fetch할 수도 있지만, CORS나 네트워크 환경에 따라 실패할 수 있습니다.");
  console.log('예: fetch("https://jsonplaceholder.typicode.com/posts/1")');

  console.log("\n=== 19. JSON 데이터 읽기 흐름 다시 정리 ===");
  console.log("1. fetch로 Response 객체를 받음");
  console.log("2. response.ok / status 확인");
  console.log("3. response.json() 또는 response.text() 호출");
  console.log("4. 실제 데이터를 사용");

  console.log("\n=== 20. text()와 json()의 차이 ===");
  const fakeTextResponse = {
    async text() {
      await wait(10);
      return "plain text response";
    }
  };

  console.log("text() 결과:", await fakeTextResponse.text());
  console.log("json()은 JSON 데이터를 객체로 바꿔 주고, text()는 문자열 그대로 읽습니다.");

  console.log("\n=== 21. fetch 옵션 객체 예시 ===");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token-example"
    },
    body: JSON.stringify({
      title: "JavaScript fetch",
      content: "fetch 실습 데이터"
    })
  };

  console.log("요청 옵션 예시:", requestOptions);
  console.log("실무에서는 URL과 함께 두 번째 인수로 이런 옵션 객체를 전달합니다.");

  console.log("\n=== 22. 자주 하는 실수 ===");
  console.log("1. fetch 결과를 바로 데이터라고 생각하는 실수");
  console.log("2. response.json() 앞에서 await를 빼먹는 실수");
  console.log("3. response.ok를 확인하지 않는 실수");
  console.log("4. POST 요청에서 body를 JSON.stringify 하지 않는 실수");
  console.log("5. file:// 환경에서 fetch가 안 되는 이유를 코드 문제로 오해하는 실수");

  console.log("\n=== 23. 실전 느낌 예제: 게시글 목록 요청 흐름 ===");
  async function loadPostsExample() {
    try {
      const response = {
        ok: true,
        status: 200,
        async json() {
          await wait(10);
          return [
            { id: 1, title: "첫 번째 글" },
            { id: 2, title: "두 번째 글" }
          ];
        }
      };

      if (!response.ok) {
        throw new Error(`게시글 요청 실패: ${response.status}`);
      }

      const posts = await response.json();
      console.log("게시글 개수:", posts.length);

      for (const post of posts) {
        console.log(`게시글 ${post.id}: ${post.title}`);
      }
    } catch (error) {
      console.log("게시글 로딩 에러:", error.message);
    }
  }

  await loadPostsExample();

  console.log("\n=== 24. 한 줄 정리 ===");
  console.log("fetch는 서버나 파일에서 데이터를 가져오기 위한 기본 도구이며, Promise와 async/await와 함께 사용됩니다.");
  console.log("Response 객체, response.ok, json(), headers, body 개념까지 이해하면 실제 API 통신 코드를 훨씬 쉽게 읽고 작성할 수 있습니다.");
}

runLecture15().catch((error) => {
  console.log("lecture15 실행 중 처리되지 않은 에러:", error.message);
});
