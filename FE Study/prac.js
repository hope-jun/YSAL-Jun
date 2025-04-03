const ID = "jungwoong";
const PW = "0505";

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  if (username === ID && password === PW) {
    message.style.color = "green";
    message.innerText = "로그인 성공! 팬페이지로 이동합니다...";
    setTimeout(() => {
      document.querySelector("section").style.display = "none";
      document.querySelector("main").style.display = "block";
      document.querySelector("footer").style.display = "block";
    }, 1000);
  } else {
    message.style.color = "red";
    message.innerText = "아이디 또는 비밀번호가 틀렸습니다.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").style.display = "none";
    document.querySelector("footer").style.display = "none";
  
    // 다크모드 토글 이벤트 등록
    const nightDayBtn = document.getElementById("night_day");
    const body = document.querySelector("body");
  
    nightDayBtn.addEventListener("click", function () {
      if (this.value === "DARK") {
        body.classList.remove("bg-gray-100", "text-gray-900");
        body.classList.add("bg-black", "text-white");
        body.classList.add("dark");
        this.value = "LIGHT";
      } else {
        body.classList.remove("bg-black", "text-white");
        body.classList.remove("dark");
        body.classList.add("bg-gray-100", "text-gray-900");
        this.value = "DARK";
      }
    });
  });
