// Cargar traducciones dinámicamente desde JSON
const loadTranslations = async (lang) => {
    try {
        const response = await fetch(`${lang}.json`);
        return await response.json();
    } catch (error) {
        console.error(`Error loading language file: ${error}`);
    }
};

// Actualizar contenido con las traducciones cargadas
const updateLanguage = async (lang) => {
    const translations = await loadTranslations(lang);

    if (translations) {
        document.getElementById('header-text').innerText = translations.header;
        document.getElementById('nav-historia').innerText = translations.nav.historia;
        document.getElementById('nav-ubicacion').innerText = translations.nav.ubicacion;
        document.getElementById('nav-peligros').innerText = translations.nav.peligros;
        document.getElementById('nav-contacto').innerText = translations.nav.contacto;
        document.getElementById('section-historia').innerText = translations.sections.historia;
        document.getElementById('section-historia-content').innerText = translations.sections.historiaContent;
        document.getElementById('section-ubicacion').innerText = translations.sections.ubicacion;
        document.getElementById('section-ubicacion-content').innerText = translations.sections.ubicacionContent;
        document.getElementById('section-peligros').innerText = translations.sections.peligros;
        document.getElementById('section-peligros-content').innerText = translations.sections.peligrosContent;
        document.getElementById('section-contacto').innerText = translations.sections.contacto;
        document.getElementById('section-contacto-content').innerText = translations.sections.contactoContent;
        document.getElementById('footer-text').innerText = translations.footer;
    }
};

// Configurar barra de búsqueda
const setupSearchBar = () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase();
        const sections = document.querySelectorAll('main section');

        sections.forEach(section => {
            const textContent = section.textContent.toLowerCase();
            if (textContent.includes(searchQuery)) {
                section.style.display = ''; // Mostrar sección
            } else {
                section.style.display = 'none'; // Ocultar sección
            }
        });
    });
};

// Configurar cambio de idioma
document.getElementById('language-selector').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Inicialización
const init = async () => {
    setupSearchBar();
    await updateLanguage('es'); // Idioma por defecto
};

document.addEventListener('DOMContentLoaded', init);


