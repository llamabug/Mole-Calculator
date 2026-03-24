let currentMode = null;
const l1 = document.getElementById('label1');
const l2 = document.getElementById('label2');


function menu(x) {
    x.classList.toggle("change");
    const sidenav = document.getElementById("sidenav");
    if (sidenav.style.display === "block") {
        sidenav.style.display = "none";
    } else {
        sidenav.style.display = "block";
    }
}



document.querySelectorAll('.mode').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('output').textContent = 'Output here!';
        setPlaceholdersForMode(currentMode);
    });
});



function setPlaceholdersForMode(mode) {
    const i1 = document.getElementById('input1');
    const i2 = document.getElementById('input2');

    if (mode === 'mass') {
        i1.placeholder = 'Molar mass';
        i2.placeholder = 'Moles';
        l1.textContent = "Molar Mass:";
        l2.textContent = "Moles:";
    } else if (mode === 'moles') {
        i1.placeholder = 'Mass';
        i2.placeholder = 'Molar mass';
        l1.textContent = "Mass:";
        l2.textContent = "Molar Mass:";
    } else if (mode === 'molarMass') {
        i1.placeholder = 'Mass';
        i2.placeholder = 'Moles';
        l1.textContent = "Mass:";
        l2.textContent = "Moles:";
    }
}



function calculate() {
    if (!currentMode) {
        alert('Please pick a calculation mode first (Mass, Moles or Molar Mass).');
        return;
    }
    const val1 = parseFloat(document.getElementById('input1').value);
    const val2 = parseFloat(document.getElementById('input2').value);
    if (isNaN(val1) || isNaN(val2)) {
        alert('Both input fields need a number.');
        return;
    }
    if (val1 <= 0 || val2 <= 0) {
        alert('Values must be positive.');
        return;
    }
    let result, unit;
    switch (currentMode) {
        case 'mass':
            result = val2 * val1;
            unit = 'g';
            break;

        case 'moles':
            result = val1 / val2;
            unit = 'mol';
            break;

        case 'molarMass':
            result = val1 / val2;
            unit = 'gmol⁻¹';
            break;

        default:
            console.error('Unexpected mode:', currentMode);
            return;
    }
    const rounded = Math.round(result * 1000) / 1000;
    document.getElementById('output').textContent =
        `Result: ${rounded} ${unit}`;
}
