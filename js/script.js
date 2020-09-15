/*-----------------ibg-------------------*/
// function ibg(){

//     let ibg=document.querySelectorAll(".ibg");
//     for (var i = 0; i < ibg.length; i++) {
//     if(ibg[i].querySelector('img')){
//     ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
//     }
//     }
//     }
    
//     ibg();
// /*-----------------ibg-------------------*/
// /*-----slider-------*/
// const prev = document.getElementById('btn-prev'),
//       next = document.getElementById('btn-next'),
//       slides = document.querySelectorAll('.slide'),
//       dots = document.querySelectorAll('.dot'),
//       slidesWrapper = document.querySelectorAll('.slider-wrapper');

// let index = 0;


// const activeSlide = n => {
// for(slide of slides){
//     slide.classList.remove('active');
// }
// slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots){
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
//     }

// const prepareCurrentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
//     }
// const nextSlide  = () => {
//  if(index ==slides.length - 1){
//      index = 0;
//      prepareCurrentSlide(index);
//  } else {
//      index++;
//      prepareCurrentSlide(index);
//  }
// }
// const prevSlide  = () => {
//     if(index == 0){
//        index = slides.length - 1;
//        prepareCurrentSlide(index);
//     } else {
//         index--;
//         prepareCurrentSlide(index);
//     }
//    }

// dots.forEach((item,indexDot)=>{
//     item.addEventListener('click', () =>{
//         index = indexDot;
//         prepareCurrentSlide(index);
//     })
// })   

// const interval = setInterval(nextSlide, 2500);
// function startSlid(){
//    return interval;
// }
// function stopSlid(){
//     clearInterval(interval);
// }

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

// clearInterval(interval)