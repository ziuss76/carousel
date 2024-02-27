const carouselSlide = document.querySelector(".carousel-slide");
const carouselImgs = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let cnt = 1;
const size = carouselImgs[0].clientWidth;
carouselSlide.style.transform = "translateX(" + -size * cnt + "px)";
// 현재 html 에는 마지막 이미지가 첫번째 이미지로 복제되어 있으므로 한번 오른쪽으로 이동시키기

nextBtn.addEventListener("click", () => {
  if (cnt >= carouselImgs.length - 1) return;
  // 마지막 이미지에 도달하면 일시 정지 후 맨 아래 'transitionend' 이벤트에서 처리함
  // 부등호가 있는 이유는 마지막 이미지로 이동하기 전에 또 클릭이 되어서 cnt 가 증가되는 것을 방지하기 위함
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  cnt++;
  carouselSlide.style.transform = "translateX(" + -size * cnt + "px)";
});

prevBtn.addEventListener("click", () => {
  if (cnt <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  cnt--;
  carouselSlide.style.transform = "translateX(" + -size * cnt + "px)";
});

// 슬라이드 이동이 마지막이나 첫번째 클론에 도달했을 때 (위에서 일시정지를 했을 때)

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImgs[cnt].id === "lastClone") {
    carouselSlide.style.transition = "none";
    // 슬라이드 이동 애니메이션을 제거해 순간이동 시킬 준비

    cnt = carouselImgs.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * cnt + "px)";
    // 슬라이드를 클론이 아닌 실제 마지막 이미지로 이동
  }

  if (carouselImgs[cnt].id === "firstClone") {
    carouselSlide.style.transition = "none";
    cnt = carouselImgs.length - cnt;
    carouselSlide.style.transform = "translateX(" + -size * cnt + "px)";
  }
});
