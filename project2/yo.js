const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const h = parseInt(document.querySelector('#height').value);
    const b = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');

    // if (h <= 0 || isNaN(h) || b <= 0 || isNaN(b)) {
    //     r.innerText = "Please enter valid height and weight";
    //     return;
    // }

    const bmi = (b / ((h * h) / 10000)).toFixed(2);
    r.innerText = bmi;
});