let mode = null;

function menu(x) {
    x.classList.toggle("change");
    const sidenav = document.getElementById("sidenav");
    if (sidenav.style.display === "block") {
        sidenav.style.display = "none";
    } else {
        sidenav.style.display = "block";
    }
}

const massInput = document.getElementById("input1");
const molarMassInput = document.getElementById("input2");
const output = document.querySelector("p"); // your output paragraph

function calculate() {
    const mass = parseFloat(massInput.value);
    const molarMass = parseFloat(molarMassInput.value);

    const moles = mass / molarMass;

    output.textContent = "Moles = " + moles;
}
