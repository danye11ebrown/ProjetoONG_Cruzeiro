//--MENU RESPONSIVO--// 
function toggleMenu() {
  const navMenu = document.querySelector(".navMenu");
  const menuToggle = document.querySelector(".menu-toggle");

  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");

  //--Troca o ícone (hambúrguer)--//
  const icon = menuToggle.querySelector("i");
  if (menuToggle.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
}

//--DESTAQUE NO MENU ATUAL--// 
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navMenu a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-page");
    }
  });
});

//--SUBMENUS (telas pequenas)--//
document.querySelectorAll(".has-submenu > a").forEach(link => {
  link.addEventListener("click", function (e) {
    // só permite expandir o submenu se o menu estiver no modo mobile
    const navMenu = document.querySelector(".navMenu");
    if (navMenu.classList.contains("active")) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      submenu.classList.toggle("open");
    }
  });
});

//--FECHAR MENU AO CLICAR EM LINK--// 
document.querySelectorAll(".navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector(".navMenu");
    const menuToggle = document.querySelector(".menu-toggle");
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      icon.classList.replace("fa-times", "fa-bars");
    }
  });
});

//--MASK DE TELEFONE (Inputmask)--// 
document.addEventListener("DOMContentLoaded", () => {
  const celularInput = document.getElementById("celular");
  if (celularInput) {
    Inputmask({ mask: "(99) 99999-9999" }).mask(celularInput);
  }
});

//--FORMULÁRIO DE CADASTRO--// 
function handleSubmit(event) {
  event.preventDefault(); //--Impede envio tradicional--//

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const celular = document.getElementById("celular");
  const endereco = document.getElementById("endereco");

  //--Verifica campos obrigatórios--//
  if (!nome.value || !email.value || !celular.value || !endereco.value) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  //--Exibe mensagem de sucesso--//
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  successMessage.style.opacity = "1";

  //--Limpa formulário--//
  document.getElementById("cadastroForm").reset();

  //--Oculta mensagem após 5 segundos--//
  setTimeout(() => {
    successMessage.style.opacity = "0";
    setTimeout(() => (successMessage.style.display = "none"), 500);
  }, 5000);
}

//--FOOTER LOGO SCROLL TO TOP--//
document.querySelector('.footer-logo-link').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});