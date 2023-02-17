// introduce page

//scroll animation
let comment1 = document.querySelector(".comment1");
console.log(comment1);

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  console.log("scrollY", value);

  if(value > 300) {
    comment1.style.animation = "disappear 1s ease-out forwards"; // 사라진 상태 유지 -> forwards 사용
  } else {
    comment1.style.animation = "slide 1s ease-out";
  }
});

