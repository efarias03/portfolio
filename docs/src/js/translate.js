let languages = document.querySelector(".language-options"),
link = document.querySelectorAll(".language-opt"),
homeLink = document.querySelector("#home-menu-link"),
aboutLink = document.querySelector("#about-menu-link"),
projectsLink = document.querySelector("#projects-menu-link"),
knowledgeLink = document.querySelector("#knowledge-menu-link"),
contactsLink = document.querySelector("#contacts-menu-link"),
welcomeTitle = document.querySelector(".welcome-text"),
subtitleSpan = document.querySelector("#subtitle-span"),
aboutText = document.querySelector("#about-text-p"),
resumeDivTitle = document.querySelector("#download-resume-title"),
resumeDownloadBtn = document.querySelector("#resume-download"),
projectsSectionTitle = document.querySelector(".projects-section-title"),
favListTitle = document.querySelector("#fav-list-title"),
allListTitle = document.querySelector("#all-list-title"),
knowledgeTitle = document.querySelector(".knowledge-section-title"),
formTitle = document.querySelector(".form-title"),
nameLabel = document.querySelector(".name-label"),
emailLabel = document.querySelector(".email-label"),
subjectLabel = document.querySelector(".subject-label"),
messageLabel = document.querySelector(".message-label"),
submitForm = document.querySelector(".form-submit-btn");

const language = window.navigator.language;

let en = document.getElementById("en-preffered");
let pt = document.getElementById("pt-preffered");


document.addEventListener("DOMContentLoaded", () => {
    const cacheLanguagePT = localStorage.getItem("portuguese");
    const cacheLanguageEN = localStorage.getItem("english");
    if (language === "pt-BR" || cacheLanguagePT) {
        en.classList.remove("en-active");
        pt.classList.add("pt-active");

        changeLanguage("portuguese");
        localStorage.setItem("portuguese", 1);
        localStorage.removeItem("english");
    }
    if (language === "en-US" || cacheLanguageEN) {
        en.classList.add("en-active");
        pt.classList.remove("pt-active");

        changeLanguage("english");
        localStorage.setItem("english", 1);
        localStorage.removeItem("portuguese");
    }
})


link.forEach(i => {
    i.addEventListener("click", () => {
        
        let attr = i.getAttribute("language");

        
        if (i.textContent === "EN") {
            pt.classList.remove("pt-active");
            i.classList.add("en-active");

            localStorage.setItem("english", 1);
            localStorage.removeItem("portuguese");
        }
        if (i.textContent === "PT-BR") {
            en.classList.remove("en-active");
            i.classList.add("pt-active");

            localStorage.setItem("portuguese", 1);
            localStorage.removeItem("english");
        }

        changeLanguage(attr);
    })
})

function changeLanguage(language) {
    welcomeTitle.textContent = data[language].welcomeTitle;
        homeLink.textContent = data[language].homeLink;
        aboutLink.textContent = data[language].aboutLink;
        projectsLink.textContent = data[language].projectsLink;
        knowledgeLink.textContent = data[language].knowledgeLink;
        contactsLink.textContent = data[language].contactsLink;
        subtitleSpan.textContent = data[language].subtitleSpan;
        aboutText.textContent = data[language].aboutText;
        resumeDivTitle.textContent = data[language].resumeDivTitle;
        resumeDownloadBtn.textContent = data[language].resumeDownloadBtn;

        projectsSectionTitle.textContent = data[language].projectsSectionTitle;
        favListTitle.textContent = data[language].favListTitle;
        allListTitle.textContent = data[language].allListTitle;

        knowledgeTitle.textContent = data[language].knowledgeTitle;
        formTitle.textContent = data[language].formTitle;
        nameLabel.textContent = data[language].nameLabel;
        emailLabel.textContent = data[language].emailLabel;
        subjectLabel.textContent = data[language].subjectLabel;
        messageLabel.textContent = data[language].messageLabel;
        submitForm.value = data[language].submitForm;
}

let data = {
    portuguese: {
        welcomeTitle: "Bem Vindo ao meu Portfolio",
        homeLink: "Principal",
        aboutLink: "Sobre",
        projectsLink: "Projetos",
        knowledgeLink: "Conhecimento",
        contactsLink: "Contatos",
        subtitleSpan: "Feito com amor por mim: Enzo Farias",
        aboutText: "Brasileiro de 19 anos, Desenvolvedor Front-End quase formado. Posso dizer que sempre levo minhas tarefas de front-end o mais a sério possível, mas sempre amando o processo. Gosto de cuidar de todos os mínimos detalhes porque faço com amor.",
        resumeDivTitle: "Baixar currículo",
        resumeDownloadBtn: "Baixar",
        projectsSectionTitle: "Projetos",
        favListTitle: "Projetos Favoritos",
        allListTitle: "Todos os projetos",
        knowledgeTitle: "Conhecimento",
        formTitle: "Mande-me uma Mensagem",
        nameLabel: "Seu Nome",
        emailLabel: "Seu Email",
        subjectLabel: "Assunto",
        messageLabel: "Mensagem",
        submitForm: "Enviar"
    },

    english: {
        welcomeTitle: "Welcome to My Portfolio",
        homeLink: "Home",
        aboutLink: "About",
        projectsLink: "Projects",
        knowledgeLink: "Knowledge",
        contactsLink: "Contacts",
        subtitleSpan: "Made with love by me: Enzo Farias",
        aboutText: "19y Brazilian, almost graduated Front-End Developer. I can say that I always take my front-end tasks as seriously as possible, but always loving the process. I like to take care of all the smallest details because I do it with love.",
        resumeDivTitle: "Download Resume",
        resumeDownloadBtn: "Download",
        projectsSectionTitle: "Projects",
        favListTitle: "Favorites Projects",
        allListTitle: "All Projects",
        knowledgeTitle: "Knowledge",
        formTitle: "Send me a message",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        submitForm: "Submit"
    }
}