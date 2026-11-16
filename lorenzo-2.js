document.addEventListener("DOMContentLoaded", () => {
    
    const currentYear = new Date().getFullYear();

    document.querySelectorAll(".current-year").forEach((element) => {
        element.textContent = currentYear;
    });

    
    const themeButton = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }

    function updateThemeButton() {
        if (!themeButton) return;

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const isEnglish = document.documentElement.lang === "en";

        if (currentTheme === "dark") {
            themeButton.textContent = isEnglish
                ? " Light mode"
                : " Modo claro";
        } else {
            themeButton.textContent = isEnglish
                ? " Dark mode"
                : " Modo escuro";
        }
    }

    if (themeButton) {
        updateThemeButton();

        themeButton.addEventListener("click", () => {
            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);

            updateThemeButton();
        });
    }
});
