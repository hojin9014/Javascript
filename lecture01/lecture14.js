// JavaScript 비동기 프로그래밍 자세히 배우기
// 이 파일은 브라우저 콘솔에서 비동기 프로그래밍의 개념과 흐름을 단계적으로 이해하도록 작성되었습니다.

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function asyncTask(name, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${name} 작업이 실패했습니다.`));
        return;
      }

      resolve(`${name} 작업이 완료되었습니다.`);
    }, ms);
  });
}

function callbackTask(name, ms, callback, shouldFail = false) {
  setTimeout(() => {
    if (shouldFail) {
      callback(new Error(`${name} 작업이 실패했습니다.`), null);
      return;
    }

    callback(null, `${name} 작업이 완료되었습니다.`);
  }, ms);
}

async function runLecture14() {
  console.log("=== 1. 비동기 프로그래밍이란 무엇인가 ===");
  console.log("비동기 프로그래밍은 시간이 걸리는 작업을 기다리는 동안 다른 코드를 먼저 실행할 수 있게 만드는 방식입니다.");
  console.log("예를 들어 서버 요청, 파일 읽기, 타이머, 사용자 클릭 대기 같은 작업은 결과가 바로 나오지 않을 수 있습니다.");

  console.log("\n=== 2. 왜 비동기가 필요한가 ===");
  console.log("만약 시간이 오래 걸리는 작업이 끝날 때까지 프로그램 전체가 멈춘다면 사용자 경험이 매우 나빠집니다.");
  console.log("비동기를 사용하면 기다리는 동안 화면을 그리거나, 다른 작업을 처리하거나, 다음 코드를 준비할 수 있습니다.");

  console.log("\n=== 3. 동기와 비동기의 차이 ===");
  console.log("동기(synchronous)는 한 작업이 끝나야 다음 작업으로 넘어가는 방식입니다.");
  console.log("비동기(asynchronous)는 오래 걸리는 작업은 맡겨 두고, 다음 작업을 먼저 진행할 수 있는 방식입니다.");

  console.log("\n=== 4. JavaScript는 왜 비동기를 중요하게 다루는가 ===");
  console.log("JavaScript는 기본적으로 한 번에 한 줄씩 실행되는 단일 스레드 기반 언어입니다.");
  console.log("그래서 오래 걸리는 작업까지 모두 멈춰서 기다리면 프로그램이 답답해집니다.");
  console.log("이 문제를 해결하기 위해 브라우저와 Node.js는 타이머, 네트워크, 이벤트 시스템과 함께 비동기 구조를 제공합니다.");

  console.log("\n=== 5. 가장 쉬운 비동기 예제: setTimeout ===");
  console.log("아래 순서를 보면, 타이머를 먼저 등록해도 바로 실행되지는 않습니다.");

  await new Promise((resolve) => {
    console.log("1. 시작");

    setTimeout(() => {
      console.log("3. setTimeout 콜백 실행");
      resolve();
    }, 10);

    console.log("2. 끝");
  });

  console.log("setTimeout은 지정한 시간이 지난 뒤 콜백을 실행하도록 예약만 합니다.");

  console.log("\n=== 6. 비동기라고 해서 동시에 모든 코드가 섞이는 것은 아님 ===");
  console.log("지금 실행 중인 동기 코드는 먼저 끝까지 실행됩니다.");
  console.log("비동기 콜백은 현재 실행 중인 코드가 끝난 뒤, 나중에 실행 순서에 들어옵니다.");

  console.log("\n=== 7. 이벤트 루프(event loop) 개념 맛보기 ===");
  console.log("JavaScript 엔진은 현재 실행 중인 코드가 끝나면, 대기 중인 비동기 작업의 콜백을 가져와 실행합니다.");
  console.log("이 흐름을 이해하면 왜 실행 순서가 예상과 다르게 보이는지 이해하기 쉬워집니다.");

  await new Promise((resolve) => {
    console.log("이벤트 루프 예제 시작");

    setTimeout(() => {
      console.log("setTimeout 콜백 실행");
      resolve();
    }, 0);

    Promise.resolve().then(() => {
      console.log("Promise.then 콜백 실행");
    });

    console.log("동기 코드 실행");
  });

  console.log("보통 Promise.then 같은 마이크로태스크가 setTimeout보다 먼저 실행됩니다.");

  console.log("\n=== 8. 콜백(callback)이란 무엇인가 ===");
  console.log("콜백은 나중에 실행되도록 다른 함수에 전달하는 함수입니다.");
  console.log("비동기 작업이 끝난 뒤 실행할 동작을 함수 형태로 넘기는 것이 대표적입니다.");

  await new Promise((resolve) => {
    callbackTask("파일 읽기", 20, (error, result) => {
      if (error) {
        console.log("콜백 에러:", error.message);
      } else {
        console.log("콜백 결과:", result);
      }

      resolve();
    });
  });

  console.log("\n=== 9. 콜백 기반 비동기 코드의 단점 ===");
  console.log("작업이 여러 단계로 이어지면 함수 안에 함수가 계속 들어가서 읽기 어려워질 수 있습니다.");
  console.log("이 현상을 보통 callback hell 또는 pyramid of doom이라고 부릅니다.");

  await new Promise((resolve) => {
    callbackTask("로그인 확인", 20, (error1, result1) => {
      if (error1) {
        console.log("에러:", error1.message);
        resolve();
        return;
      }

      console.log(result1);

      callbackTask("장바구니 조회", 20, (error2, result2) => {
        if (error2) {
          console.log("에러:", error2.message);
          resolve();
          return;
        }

        console.log(result2);

        callbackTask("결제 준비", 20, (error3, result3) => {
          if (error3) {
            console.log("에러:", error3.message);
          } else {
            console.log(result3);
          }

          resolve();
        });
      });
    });
  });

  console.log("단계가 많아질수록 코드가 오른쪽으로 깊어지고 관리가 어려워집니다.");

  console.log("\n=== 10. Promise란 무엇인가 ===");
  console.log("Promise는 미래에 완료되거나 실패할 작업의 결과를 나타내는 객체입니다.");
  console.log("비동기 작업의 성공과 실패를 더 구조적으로 다루게 도와줍니다.");
  console.log("Promise에는 보통 pending, fulfilled, rejected 같은 상태 개념이 있습니다.");

  console.log("\n=== 11. Promise 생성과 resolve / reject ===");
  const promiseSuccess = asyncTask("회원 정보 가져오기", 20);
  const promiseFailure = asyncTask("주문 정보 가져오기", 20, true);

  try {
    console.log(await promiseSuccess);
  } catch (error) {
    console.log("이 문장은 실행되지 않습니다.");
  }

  try {
    console.log(await promiseFailure);
  } catch (error) {
    console.log("Promise 실패:", error.message);
  }

  console.log("resolve는 성공 결과를 보내고, reject는 실패 이유를 보냅니다.");

  console.log("\n=== 12. then, catch, finally ===");
  await asyncTask("댓글 불러오기", 20)
    .then((result) => {
      console.log("then 결과:", result);
      return asyncTask("좋아요 정보 불러오기", 20);
    })
    .then((result) => {
      console.log("두 번째 then 결과:", result);
    })
    .catch((error) => {
      console.log("catch 결과:", error.message);
    })
    .finally(() => {
      console.log("finally는 성공이든 실패든 마지막에 실행됩니다.");
    });

  console.log("\n=== 13. Promise chaining ===");
  console.log("then 안에서 또 Promise를 반환하면 다음 then으로 결과가 이어집니다.");

  await asyncTask("1단계", 20)
    .then((result) => {
      console.log(result);
      return asyncTask("2단계", 20);
    })
    .then((result) => {
      console.log(result);
      return asyncTask("3단계", 20);
    })
    .then((result) => {
      console.log(result);
    });

  console.log("이 방식을 체이닝(chaining)이라고 합니다.");

  console.log("\n=== 14. async / await 란 무엇인가 ===");
  console.log("async 함수는 항상 Promise를 반환합니다.");
  console.log("await는 Promise가 끝날 때까지 기다린 뒤 결과를 꺼내 쓰게 도와줍니다.");

  async function getNumberAsync() {
    return 10;
  }

  const asyncResult = getNumberAsync();
  console.log("getNumberAsync() 반환값:", asyncResult);
  console.log("Promise 인가?:", asyncResult instanceof Promise);
  console.log("await 결과:", await getNumberAsync());

  console.log("\n=== 15. async / await가 왜 편한가 ===");
  console.log("Promise 체이닝보다 동기 코드처럼 읽히기 때문에 흐름을 이해하기 쉬워집니다.");

  async function loadUserProfile() {
    const userInfo = await asyncTask("사용자 정보 불러오기", 20);
    console.log(userInfo);

    const orderInfo = await asyncTask("주문 정보 불러오기", 20);
    console.log(orderInfo);

    return "프로필 화면에 필요한 데이터 준비 완료";
  }

  console.log(await loadUserProfile());

  console.log("\n=== 16. async 함수에서의 에러 처리 ===");
  async function loadWithError() {
    try {
      const profile = await asyncTask("프로필 요청", 20);
      console.log(profile);

      const settings = await asyncTask("설정 요청", 20, true);
      console.log(settings);
    } catch (error) {
      console.log("async 함수 내부 catch:", error.message);
    } finally {
      console.log("async 함수 내부 finally 실행");
    }
  }

  await loadWithError();

  console.log("\n=== 17. await는 async 함수 안에서 사용한다 ===");
  console.log("await는 보통 async 함수 안에서만 사용할 수 있습니다.");
  console.log("즉, 비동기 결과를 기다리는 문법도 정해진 문맥 안에서 사용해야 합니다.");

  console.log("\n=== 18. 여러 비동기 작업을 순차 실행하기 ===");
  console.log("순차 실행은 앞의 결과가 끝나야 다음 작업을 시작합니다.");

  const sequentialStart = Date.now();
  await asyncTask("순차 작업 A", 30);
  await asyncTask("순차 작업 B", 30);
  console.log("순차 실행 대략 소요 시간(ms):", Date.now() - sequentialStart);

  console.log("\n=== 19. 여러 비동기 작업을 병렬 실행하기 ===");
  console.log("서로 독립적인 작업이라면 동시에 시작해서 더 빨리 끝낼 수 있습니다.");

  const parallelStart = Date.now();
  const parallelResults = await Promise.all([
    asyncTask("병렬 작업 A", 30),
    asyncTask("병렬 작업 B", 30)
  ]);
  console.log("병렬 결과:", parallelResults);
  console.log("병렬 실행 대략 소요 시간(ms):", Date.now() - parallelStart);

  console.log("\n=== 20. Promise.all 과 Promise.allSettled ===");
  console.log("Promise.all 은 하나라도 실패하면 전체가 reject 됩니다.");
  console.log("Promise.allSettled 는 성공과 실패를 모두 결과로 모아 줍니다.");

  try {
    await Promise.all([
      asyncTask("전체 묶음 A", 20),
      asyncTask("전체 묶음 B", 20, true)
    ]);
  } catch (error) {
    console.log("Promise.all 실패:", error.message);
  }

  const settledResults = await Promise.allSettled([
    asyncTask("allSettled A", 20),
    asyncTask("allSettled B", 20, true)
  ]);
  console.log("Promise.allSettled 결과:", settledResults);

  console.log("\n=== 21. return 과 await의 관계 ===");
  async function returnPromiseDirectly() {
    return asyncTask("직접 반환", 20);
  }

  async function returnAwaitedValue() {
    return await asyncTask("await 후 반환", 20);
  }

  console.log(await returnPromiseDirectly());
  console.log(await returnAwaitedValue());
  console.log("둘 다 Promise 기반이지만, try...catch 동작이나 코드 의도 표현에서 차이가 날 수 있습니다.");

  console.log("\n=== 22. 자주 하는 실수 ===");
  console.log("1. 비동기 함수를 호출만 하고 await 하지 않으면 결과를 바로 사용할 수 없을 수 있습니다.");
  console.log("2. Promise를 return 하지 않으면 체이닝이 끊길 수 있습니다.");
  console.log("3. try...catch는 await와 함께 써야 비동기 에러를 자연스럽게 잡기 쉽습니다.");
  console.log("4. 독립 작업을 무조건 순차 처리하면 불필요하게 느려질 수 있습니다.");

  console.log("\n=== 23. 실전 느낌 예제: 게시글 화면 준비 ===");
  async function preparePostPage() {
    try {
      const post = await asyncTask("게시글 불러오기", 20);
      console.log(post);

      const comments = await asyncTask("댓글 불러오기", 20);
      console.log(comments);

      const author = await asyncTask("작성자 정보 불러오기", 20);
      console.log(author);

      return "게시글 화면 준비 완료";
    } catch (error) {
      return `게시글 화면 준비 실패: ${error.message}`;
    }
  }

  console.log(await preparePostPage());

  console.log("\n=== 24. 한 줄 정리 ===");
  console.log("JavaScript 비동기 프로그래밍은 오래 걸리는 작업을 기다리는 동안 다른 작업을 계속할 수 있게 해 주는 핵심 개념입니다.");
  console.log("콜백, Promise, async/await, Promise.all 같은 도구를 이해하면 실무에서 API 요청과 타이머, 사용자 이벤트를 훨씬 자연스럽게 다룰 수 있습니다.");
}

runLecture14().catch((error) => {
  console.log("lecture14 실행 중 처리되지 않은 에러:", error.message);
});
