
function SlideController(slideChangeHandler) {
  
  this.indicators = document.querySelectorAll(".slideController__indicator");
  this.slides = document.querySelectorAll(".slideContainer__slide");

  
  if(this.slides.length === 0) {
    console.error("No slides were found in the DOM. Add the .slideContainer__slide class to slide sections");
  }  
  if(this.indicators.length === 0) {
    console.error("No indicators were found in the DOM. Add the .slideController_indicator class to elements the show the slide index");
  }
  if(this.slides.length !== this.indicators.length){
    console.error("The amount of slides and indicators do not match!");
  }
  this.activeSlide = 0;

  this.slideChangeHandler = slideChangeHandler;
  
  this.indicators.forEach((indicator, index) => {
    indicator.onclick = () => {
      this.changeActiveSlide(index);
    };
  });

}
SlideController.prototype.next = function () {
  if (this.activeSlide + 1 > this.indicators.length - 1) {
    this.changeActiveSlide(0);
  } else {
    this.changeActiveSlide(this.activeSlide + 1);
  }
}
SlideController.prototype.changeActiveSlide = function (slideNumber) {

  this.toggleIndicator(this.activeSlide);
  this.toggleIndicator(slideNumber);
  
  this.toggleSlide(this.activeSlide);
  this.toggleSlide(slideNumber);

  this.activeSlide = slideNumber;
};

SlideController.prototype.toggleIndicator = function (indicatorIndex) {
  this.indicators[indicatorIndex].classList.toggle(
    "slideController__indicator--active"
  );
};
SlideController.prototype.toggleSlide = function (slideIndex) {
  this.slides[slideIndex].classList.toggle(
    "slideContainer__slide--active"
  );
};