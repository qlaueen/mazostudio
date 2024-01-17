document.addEventListener("mousemove", parallax);

function parallax(event) {
  const logo = document.querySelector(".logo");
  const x = (window.innerWidth - event.clientX) / 50;
  const y = (window.innerHeight - event.clientY) / 50;
  logo.style.transform = `translate(${x}px, ${y}px)`;
}
