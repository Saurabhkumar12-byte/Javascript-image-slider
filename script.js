let flag = 0;

function controller(num) {
  flag = flag + num;
  slideshow(flag);
}
slideshow(flag)
function slideshow(n) {
    if (n == 4) {
      n = 0;
      flag=0;
    }
    if (n < 0) {
      n = 3;
      flag=3;
    }
  let slide = document.getElementsByClassName("slide");
//   console.log(slide);

  for (let index = 0; index < slide.length; index++) {
    slide[index].style.display = "none";
  }
  slide[n].style.display = "block";
}
