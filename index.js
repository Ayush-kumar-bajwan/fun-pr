        const promptText = document.getElementById("prompt");
        const yesButton = document.getElementById("yesButton");
        const noButton = document.getElementById("noButton");
        const buttonContainer = document.getElementById("buttonContainer");
        const header = document.getElementById("header");

        const prompts = [
            "manja naa👉👈",
            "chalte hai naa🫣 ",
            "manjao na cutiee👉👈🥺",
            "ek baar or sochlo😅",
            "chalo thik hai ek baat btata hun NO pe click kro",
            "i love u yrrr..bhaut🫣...dekhlo ab bhi Yes kr skti ho",
            "chalo koi nhi ab mujhse baat mt krna, tumhari meri ktti😤"
        ];

        let promptIndex = -1;
        let firstNoClick = true;
        

        function handleYes() {
            promptText.textContent = "Yeeeee! please call me🫣";
            buttonContainer.remove();
            header.removeChild(header.querySelector("h1"));
        }

        function handleNo() {
            if (firstNoClick) {
                header.removeChild(header.querySelector("h1"));
                firstNoClick = false;
            }
            if (promptIndex === prompts.length - 2) {
                buttonContainer.remove();
            } else {
                swapButtons();
            }
            changePrompt();
        }

        function swapButtons() {
            buttonContainer.insertBefore(noButton, yesButton);
        }

        function changePrompt() {
            promptIndex = (promptIndex + 1) % prompts.length;
            promptText.textContent = prompts[promptIndex];
        }