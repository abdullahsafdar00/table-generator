let tablenumber = document.querySelector(".tablenumber");
let button = document.querySelector(".button");

button.addEventListener("click", () => {
    document.querySelectorAll("p").forEach(p => p.remove());

    for (let i = 1; i <= 10; i++) {
        let number = Number(tablenumber.value);
        let result = number * i;
        let table = document.createElement("p");
        table.innerText = `${number} * ${i} = ${result}`;
        document.body.appendChild(table);
    }
})

tablenumber.addEventListener("input", () => {
    if (tablenumber.value === "") {
        let allTables = document.querySelectorAll("p");
        allTables.forEach((table) => {
            table.remove();
        });
    }
});


