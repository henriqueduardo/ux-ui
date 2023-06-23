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