
(() => {

    const root = document.documentElement;

    const button = document.getElementById("theme-toggle");

    const storageKey = "preferencia-tema";


    

    function applyTheme(theme) {

        if (theme === "dark") {

            root.setAttribute("data-theme", "dark");

            if (button) {
                button.textContent = " Modo claro";
                button.setAttribute("aria-pressed", "true");
            }

        } else {

            root.removeAttribute("data-theme");

            if (button) {
                button.textContent = " Modo noturno";
                button.setAttribute("aria-pressed", "false");
            }

        }

    }


   

    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem(storageKey);
    } catch (error) {
       
    }


 

    const initialTheme = savedTheme || (

        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"

    );

    applyTheme(initialTheme);


  

    if (button) {

        button.addEventListener("click", () => {

            const nextTheme =
                root.getAttribute("data-theme") === "dark"
                    ? "light"
                    : "dark";

            applyTheme(nextTheme);

            try {
                localStorage.setItem(storageKey, nextTheme);
            } catch (error) {
                
            }

        });

    }

})();
