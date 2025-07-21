export const delayedDisplay = () => {
  //   const elements = document.querySelectorAll(".delayedDisplay");
  //   elements.forEach((element, index) => {
  //     setTimeout(() => {
  //       element.style.display = "block";
  //       console.log(element);
  //     }, index * 500); // Adjust the delay as needed
  //   });
};

export const isMobileDevice = () => {
  // return /Mobi|Android/i.test(navigator.userAgent);
  return window.innerWidth <= 768; // Consider devices with width <= 768px as mobile
};
