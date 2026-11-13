// Contador de grabación
let seconds = 0;

const recordingTime = document.getElementById("recordingTime");

function updateRecordingTime() {
    seconds++;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    recordingTime.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(remainingSeconds).padStart(2, "0")}`;
}

setInterval(updateRecordingTime, 1000);


//   Botones SKILL 

const skillLevels = [
    {
        level: "LEVEL 01",
        category: "PROGRAMMING",
        subtitle: "CORE SYSTEMS // AVAILABLE SKILLS",

        skills: [
            {
                name: "Java",
                icon: "J",
                status: "EN FORMACIÓN",
                description: "Programación orientada a objetos y desarrollo de aplicaciones utilizando Java."
            },
            {
                name: "JavaScript",
                icon: "JS",
                status: "EN PRÁCTICA",
                description: "Lógica de programación, interactividad y manipulación del DOM para aplicaciones web."
            },
            {
                name: "HTML5",
                icon: "5",
                status: "EN PRÁCTICA",
                description: "Estructuración de páginas web mediante HTML semántico."
            },
            {
                name: "CSS3",
                icon: "3",
                status: "EN PRÁCTICA",
                description: "Diseño de interfaces, estilos visuales y adaptación responsive."
            }
        ]
    },

    {
        level: "LEVEL 02",
        category: "DATABASE",
        subtitle: "DATA MANAGEMENT // AVAILABLE SKILLS",

        skills: [
            {
                name: "PostgreSQL",
                icon: "P",
                status: "EN APRENDIZAJE",
                description: "Gestión de bases de datos relacionales utilizando PostgreSQL."
            },
            {
                name: "SQL",
                icon: "DB",
                status: "EN APRENDIZAJE",
                description: "Consultas, manipulación y organización de información en bases de datos."
            }
        ]
    },

    {
        level: "LEVEL 03",
        category: "TOOLS",
        subtitle: "SURVIVAL EQUIPMENT // AVAILABLE SKILLS",

        skills: [
            {
                name: "Git",
                icon: "G",
                status: "EN PRÁCTICA",
                description: "Control de versiones y seguimiento de cambios en proyectos."
            },
            {
                name: "GitHub",
                icon: "GH",
                status: "EN PRÁCTICA",
                description: "Gestión de repositorios y publicación de proyectos."
            },
            {
                name: "VS Code",
                icon: "VS",
                status: "UTILIZANDO",
                description: "Entorno de desarrollo para trabajar en proyectos web."
            },
            {
                name: "IntelliJ IDEA",
                icon: "IJ",
                status: "UTILIZANDO",
                description: "Entorno de desarrollo utilizado para programación Java."
            }
        ]
    }
];

// Elementos HTML
const levelButtons = document.querySelectorAll(".level-button");
const levelSkills = document.getElementById("levelSkills");

const currentLevel = document.getElementById("currentLevel");
const currentCategory = document.getElementById("currentCategory");
const currentSubtitle = document.getElementById("currentSubtitle");

const technologyName = document.getElementById("technologyName");
const technologyDescription = document.getElementById("technologyDescription");

// Mostrar información de una tecnología
function selectTechnology(skill, button) {

    document.querySelectorAll(".technology").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    technologyName.textContent = skill.name;
    technologyDescription.textContent = skill.description;
}

// Mostrar las tecnologías de un nivel
function showLevel(levelIndex) {

    const selectedLevel = skillLevels[levelIndex];

    currentLevel.textContent = selectedLevel.level;
    currentCategory.textContent = selectedLevel.category;
    currentSubtitle.textContent = selectedLevel.subtitle;

    levelSkills.innerHTML = "";

    selectedLevel.skills.forEach(skill => {

        const button = document.createElement("button");

        button.classList.add("technology");

        button.innerHTML = `
            <span class="technology-icon">${skill.icon}</span>
            <span class="technology-name">${skill.name}</span>
            <span class="technology-status">${skill.status}</span>
            <span class="technology-arrow">↗</span>
        `;

        button.addEventListener("click", () => {
            selectTechnology(skill, button);
        });

        levelSkills.appendChild(button);
    });

    // Seleccionar automáticamente la primera tecnología
    const firstSkill = selectedLevel.skills[0];
    const firstButton = levelSkills.querySelector(".technology");

    selectTechnology(firstSkill, firstButton);

    // Actualizar el nivel activo
    levelButtons.forEach(button => {
        button.classList.remove("active");
    });

    levelButtons[levelIndex].classList.add("active");
}

// Eventos de los niveles
levelButtons.forEach(button => {

    button.addEventListener("click", () => {

        const levelIndex = Number(button.dataset.level);

        showLevel(levelIndex);

    });

});

// Cargar el primer nivel
showLevel(0);
