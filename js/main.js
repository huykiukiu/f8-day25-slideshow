const slideShow = document.querySelector("#my-slideshow");
const track = document.querySelector("#track");
const navigation = document.querySelector("#navigation");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

// Hàm xử lý chung:
let currentIndex = 0;
let totalSlide = track.children.length - 1;
console.log(totalSlide);

const handleNavigationSlide = (index) => {
  if (index > totalSlide || index < 0) return;
  track.style.transform = `translateX(-${index * 100}%)`;
  track.style.transition = "all 0.5s ease-in-out";
  hanleColorOfDot(index);
};

const hanleColorOfDot = (index) => {
  const arrayDots = Array.from(navigation.children);
  arrayDots.forEach((dot, currentIndex) => {
    if (index === currentIndex) {
      dot.className = "w-5 h-5 bg-yellow-500 rounded-full cursor-pointer";
    } else {
      dot.className = "w-5 h-5 bg-white rounded-full cursor-pointer";
    }
  });
};

// xử lý dot navigation:
const arraySlides = Array.from(track.children);
arraySlides.forEach((slide, index) => {
  // thêm dot nav:
  const dot = document.createElement("div");
  if (index === 0) {
    dot.className = "w-5 h-5 bg-yellow-500 rounded-full cursor-pointer";
    navigation.append(dot);
  } else {
    dot.className = "w-5 h-5 bg-white rounded-full cursor-pointer";
    navigation.append(dot);
  }

  // xử lý chuyển slide khi click vào dot:
  dot.addEventListener("click", () => {
    handleNavigationSlide(index);
    hanleColorOfDot(index);
  });
});

// xử lý lùi -  next slide:
next.addEventListener("click", () => {
  if (currentIndex >= totalSlide) return;
  currentIndex = currentIndex + 1;
  handleNavigationSlide(currentIndex);
});

previous.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex = currentIndex - 1;
  handleNavigationSlide(currentIndex);
});
