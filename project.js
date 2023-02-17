// project page

// 방법 1
// button click -> img slide
// document.querySelector('.btn2').addEventListener('click', function() {
//   document.querySelector('.slideBox').style.transform = 'translate(-100vw)';
// });

// 방법 2
/*
script src 상단/하단 기술 차이
in <head>: 문서의 모든 내용이 load된 후 할 일
-> 대상.addEventListener('이벤트종류', 할 일);
-> DOMContentLoaded
-> 할 일 == 함수 == function(){ 실제로 할 일 }
*/ 

document.addEventListener('DOMContentLoaded', function() {
  // slide1
  /*
  변수(variable) 지정
  .container -> $slideWrap
  .slider-container -> $slideContainer
  .slide ->  $slide
  이전 버튼, 다음 버튼 -> 생략
  */
  let $slideWrap1 = document.querySelector('.slideWrap1'),
      $slideContainer1 = document.querySelector('.slider-container1'),
      $slide1 = document.querySelectorAll('.slide1'),
      $slideCount1 = $slide1.length, // 예제: 6ea
      $slideHeight1 = 0,
      $currentIndex1 = 0, // 처음인지 마지막인지 여부 확인
      $pagerHTML1 = '',
      $pager1 = document.querySelector('.pager1')
      // $pagerBtn = document.querySelectorAll('.pager span')
      ;

  /*
  슬라이드의 높이 확인하여 부모의 높이 지정하기 (예제: 문단마다 높이가 변동)
  -> 대상.offsetHeight
  */ 
  for(let h = 0; h < $slideCount1; h++) {
    if($slideHeight1 < $slide1[h].offsetHeight) {
      $slideHeight1 = $slide1[h].offsetHeight;
    }
  }
  // console.log($slideHeight);

  $slideWrap1.style.height = $slideHeight1 + 'px';
  $slideContainer1.style.height = $slideHeight1 + 'px';
  
  /*
  슬라이드가 있을 경우 가로로 배열하기
  */
  for(let w = 0; w < $slideCount1; w++) {
    $slide1[w].style.left = w * 100 + '%';

    /*
    슬라이드 개수만큼 pager 자동 생성
    <span data-idx="0"></span> 
    */
    $pagerHTML1 += '<span data-idx="' + w +'"></span>';
    $pager1.innerHTML = $pagerHTML1;
  }

  let $pagerBtn1 = document.querySelectorAll('.pager1 span');

  /*
  슬라이드 이동 함수
   */
  function goToSlide1(idx) {
    $slideContainer1.classList.add('animated');
    $slideContainer1.style.left = -100 * idx + '%';
    $currentIndex1 = idx;

    /*
    클릭된 그 요소에만 .active 추가
    모든 $pagerBtn에 .active 제거 
    */
   for(let a = 0; a < $pagerBtn1.length; a++) {
    $pagerBtn1[a].classList.remove('active');
   }
    $pagerBtn1[idx].classList.add('active'); 
  }

  /*
  첫번째 슬라이드 먼저 .active 보이도록 하기기
  */
  goToSlide1(0);
 
  /*
  버튼기능 업데이트 함수,
  버튼을 클릭하면 슬라이드 이동시키기,  
  다음 버튼을 클릭하면 할 일, 이전 버튼을 클릭하면 할 일
  + 자동 슬라이드 -> setInterval(할 일, 4000) - 변수에서 함수로 생성,
  슬라이드 영역에 마우스가 들어오면 자동 슬라이드 정지 -> clearInterval(대상) 
  => 생략
  */

  /*
  pager로 슬라이드 이동하기
  */
 for(let x = 0; x < $pagerBtn1.length; x++) {
  $pagerBtn1[x].addEventListener('click', function(event) {
    let pagerNum1 = event.target.getAttribute('data-idx');
    goToSlide1(pagerNum1);
  });
 }

 // slide2
  let $slideWrap2 = document.querySelector('.slideWrap2'),
      $slideContainer2 = document.querySelector('.slider-container2'),
      $slide2 = document.querySelectorAll('.slide2'),
      $slideCount2 = $slide2.length, 
      $slideHeight2 = 0,
      $currentIndex2 = 0, 
      $pagerHTML2 = '',
      $pager2 = document.querySelector('.pager2')
      ;

  for(let h = 0; h < $slideCount2; h++) {
    if($slideHeight2 < $slide2[h].offsetHeight) {
      $slideHeight2 = $slide2[h].offsetHeight;
    }
  }

  $slideWrap2.style.height = $slideHeight2 + 'px';
  $slideContainer2.style.height = $slideHeight2 + 'px';
  
  for(let w = 0; w < $slideCount2; w++) {
    $slide2[w].style.left = w * 100 + '%';

    $pagerHTML2 += '<span data-idx="' + w +'"></span>';
    $pager2.innerHTML = $pagerHTML2;
  }

  let $pagerBtn2 = document.querySelectorAll('.pager2 span');

  function goToSlide2(idx) {
    $slideContainer2.classList.add('animated');
    $slideContainer2.style.left = -100 * idx + '%';
    $currentIndex2 = idx;

   for(let a = 0; a < $pagerBtn2.length; a++) {
    $pagerBtn2[a].classList.remove('active');
   }
    $pagerBtn2[idx].classList.add('active'); 
  }
  goToSlide2(0);
 
 for(let x = 0; x < $pagerBtn2.length; x++) {
  $pagerBtn2[x].addEventListener('click', function(event) {
    let pagerNum2 = event.target.getAttribute('data-idx');
    goToSlide2(pagerNum2);
  });
 }

 // slide3
 let $slideWrap3 = document.querySelector('.slideWrap3'),
 $slideContainer3 = document.querySelector('.slider-container3'),
 $slide3 = document.querySelectorAll('.slide3'),
 $slideCount3 = $slide2.length, 
 $slideHeight3 = 0,
 $currentIndex3 = 0, 
 $pagerHTML3 = '',
 $pager3 = document.querySelector('.pager3')
 ;

for(let h = 0; h < $slideCount3; h++) {
if($slideHeight3 < $slide3[h].offsetHeight) {
 $slideHeight3 = $slide3[h].offsetHeight;
}
}

$slideWrap3.style.height = $slideHeight3 + 'px';
$slideContainer3.style.height = $slideHeight3 + 'px';

for(let w = 0; w < $slideCount3; w++) {
$slide3[w].style.left = w * 100 + '%';

$pagerHTML3 += '<span data-idx="' + w +'"></span>';
$pager3.innerHTML = $pagerHTML3;
}

let $pagerBtn3 = document.querySelectorAll('.pager3 span');

function goToSlide3(idx) {
$slideContainer3.classList.add('animated');
$slideContainer3.style.left = -100 * idx + '%';
$currentIndex3 = idx;

for(let a = 0; a < $pagerBtn3.length; a++) {
$pagerBtn3[a].classList.remove('active');
}
$pagerBtn3[idx].classList.add('active'); 
}
goToSlide3(0);

for(let x = 0; x < $pagerBtn3.length; x++) {
$pagerBtn3[x].addEventListener('click', function(event) {
let pagerNum3 = event.target.getAttribute('data-idx');
goToSlide3(pagerNum3);
});
}

// slide4
let $slideWrap4 = document.querySelector('.slideWrap4'),
$slideContainer4 = document.querySelector('.slider-container4'),
$slide4 = document.querySelectorAll('.slide4'),
$slideCount4 = $slide4.length, 
$slideHeight4 = 0,
$currentIndex4 = 0, 
$pagerHTML4 = '',
$pager4 = document.querySelector('.pager4')
;

for(let h = 0; h < $slideCount4; h++) {
if($slideHeight4 < $slide4[h].offsetHeight) {
$slideHeight4 = $slide4[h].offsetHeight;
}
}

$slideWrap4.style.height = $slideHeight4 + 'px';
$slideContainer4.style.height = $slideHeight4 + 'px';

for(let w = 0; w < $slideCount4; w++) {
$slide4[w].style.left = w * 100 + '%';

$pagerHTML4 += '<span data-idx="' + w +'"></span>';
$pager4.innerHTML = $pagerHTML4;
}

let $pagerBtn4 = document.querySelectorAll('.pager4 span');

function goToSlide4(idx) {
$slideContainer4.classList.add('animated');
$slideContainer4.style.left = -100 * idx + '%';
$currentIndex4 = idx;

for(let a = 0; a < $pagerBtn4.length; a++) {
$pagerBtn4[a].classList.remove('active');
}
$pagerBtn4[idx].classList.add('active'); 
}
goToSlide4(0);

for(let x = 0; x < $pagerBtn4.length; x++) {
$pagerBtn4[x].addEventListener('click', function(event) {
let pagerNum4 = event.target.getAttribute('data-idx');
goToSlide4(pagerNum4);
});
}

}); //DOMContentLoaded

