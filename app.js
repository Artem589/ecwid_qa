const UI = {
  widget: document.querySelectorAll(".sizing"),
  data: document.querySelector("[data-layout]"),
  cards: document.querySelector(".cart-box"),
};

document.body.insertAdjacentElement('afterbegin', div)
UI.widget.forEach((i) =>
  i.addEventListener("click", (e) => {
    UI.data.attributes[0].textContent = e.target.textContent;
  })
);
