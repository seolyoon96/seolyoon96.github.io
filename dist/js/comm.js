document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});

document.body.addEventListener('mousemove', (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set('.cursor', {
    x: mouseX,
    y: mouseY,
  });

  gsap.to('.shape', {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});
