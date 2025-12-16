// 🔝 Always start at top when page loads
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Scroll + bật nhạc
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("album").scrollIntoView({
    behavior: "smooth"
  });

  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play();
});

// Count love days
document.getElementById("countBtn").addEventListener("click", countLove);

function countLove() {
  // 💕 NGÀY BẮT ĐẦU YÊU
  const startDate = new Date("2025-09-21");
  const today = new Date();

  const diffTime = today - startDate;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById("counter").innerHTML =
    `Chúng ta đã bên nhau <b>${days}</b> ngày 💖<br>
     và anh vẫn muốn bên em mãi.`;
}

function unlock() {
  const pass = document.getElementById("passwordInput").value;
  const correctPassword = "21071507"; // 🔴 ĐỔI MẬT KHẨU Ở ĐÂY

  if (pass === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
  } else {
    document.getElementById("errorText").innerText =
      "Sai rồi, nhưng anh vẫn yêu em 💕";
  }
}

// 🎉 Anniversary check
(function anniversaryCheck() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  // 💗 21/09
  if (day === 21 && month === 9) {
    alert("💖 Hôm nay là ngày kỷ niệm của chúng ta 💖\nAnh yêu em, Trà Giang!");
  }
})();


// 💗 HEART RAIN WHEN LAST IMAGE APPEARS
let heartRainStarted = false;

const heartObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !heartRainStarted) {
      heartRainStarted = true;
      startHeartRain();
    }
  });
}, { threshold: 0.6 });

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  heart.style.fontSize = (16 + Math.random() * 14) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// 💌 Typing final message after heart rain
const finalText =
  "Cảm ơn em vì đã xem hết câu chuyện của chúng ta.\nAnh yêu em, Trà Giang.";

let typed = false;

function typeFinalMessage() {
  const el = document.getElementById("finalMessage");
  const text =
    "Cảm ơn em vì đã xem hết câu chuyện của chúng ta.\nAnh yêu em, Trà Giang.";

  let i = 0;
  const typing = setInterval(() => {
    el.innerHTML = text.slice(0, i).replace(/\n/g, "<br>");
    i++;
    if (i > text.length) clearInterval(typing);
  }, 50);
}


// Gọi sau khi trái tim bắt đầu rơi
function startHeartRain() {
  for (let i = 0; i < 25; i++) {
    createHeart();
  }

  // ⏱ đợi 2s rồi gõ chữ
  setTimeout(typeFinalMessage, 2000);
}

// 💗 Comfort message
function showComfort() {
  const msg = document.getElementById("comfortMessage");

  msg.innerHTML =
    "Anh ở đây.<br>Không cần nói gì cả,<br>chỉ cần nhớ là em không một mình 💕";
  msg.style.opacity = 1;
}

let hugTimer = null;
const hugZone = document.getElementById("hugZone");
const hugMessage = document.getElementById("hugMessage");

if (hugZone && hugMessage) {
  hugZone.addEventListener("touchstart", () => {
    hugTimer = setTimeout(() => {
      hugMessage.style.opacity = 1;

      setTimeout(() => {
        hugMessage.style.opacity = 0;
      }, 2000);
    }, 1500); // 1.5s là rất tự nhiên
  });

  hugZone.addEventListener("touchend", () => {
    clearTimeout(hugTimer);
  });
}


document.addEventListener("touchend", () => {
  clearTimeout(hugTimer);
});

function toggleCaption(el) {
  el.classList.toggle("show");
}

function showFavorite() {
  document.getElementById("favoritePopup").classList.add("show");
}

function closeFavorite() {
  document.getElementById("favoritePopup").classList.remove("show");
}


document.addEventListener("DOMContentLoaded", () => {
  const favorite = document.querySelector(".memory.favorite");
  let finalPlayed = false;

  if (!favorite) {
    console.error("❌ Không tìm thấy ảnh favorite");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !finalPlayed) {
          finalPlayed = true;

          // 💗 tim rơi
          for (let i = 0; i < 25; i++) {
            createHeart();
          }

          // ✍️ gõ chữ sau 2s
          setTimeout(typeFinalMessage, 2000);
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(favorite);
});


