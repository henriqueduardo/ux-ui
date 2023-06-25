function initClickImage() {
  const images = document.querySelectorAll(".js-content-images img");
  const text = document.querySelectorAll(".js-content-texts .images-text");
  text[0].classList.add("active");

  if (images.length && text.length) {
    function activeTab(index) {
      text.forEach((section) => {
        section.classList.remove("active");
      });
      text[index].classList.add("active");
    }

    images.forEach((itemText, index) => {
      itemText.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initClickImage();

function initAccordion() {
  const activeClass = "active"; // classe
  const accordionList = document.querySelectorAll(".js-accordion dt"); // lista
  if (accordionList.length) { // verificar se existe o código na página
    accordionList[0].classList.add(activeClass); //add classe no primeiro elemento da lista(arraylike)
    accordionList[0].nextElementSibling.classList.add(activeClass); // adicionar classe no elemento próximo elemento da lista após o primeiro (element)

    function activeAccordion() {
      this.classList.toggle(activeClass); // adicionar e remover a classe
      this.nextElementSibling.classList.toggle(activeClass); //
    }

    accordionList.forEach((item) => { // passar o evento em toda a lista
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();