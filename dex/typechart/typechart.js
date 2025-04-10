function load() {
    let main = document.getElementById("main");
    let header = document.createElement("h1");
    header.innerHTML = "Type Chart";
    main.appendChild(header);

    generateTypeChart(main);
}

function generateTypeChart(container){
    const types =[
        "Air", "Ancient", "Brawler", "Bug", "Dark", "Earth", "Electric", "Fire", "Ice", "Light", "Metal", "Mind", "Plant", "Simple", "Spirit", "Toxic", "Water"
    ]
    const chart = [
        ["1x","1x","2x","2x","1x","1x","0.5x","2x","0.5x","1x","0.5x","1x","1x","1x","1x","1x","1x"], 
        ["1x","2x","1x","1x","1x","1x","1x","1x","1x","2x","2x","1x","0.5x","0.5x","1x","1x","1x"], 
        ["0.5x","1x","1x","2x","1x","0.5x","1x","1x","1x","1x","1x","2x","1x","1x","1x","1x","1x"], 
        ["0.5x","1x","0.5x","0.5x","2x","1x","1x","0.5x","1x","2x","1x","1x","2x","1x","0.5x","2x","1x"], 
        ["1x","1x","1x","0.5x","0.5x","1x","1x","2x","1x","1x","1x","0.5x","1x","0.5x","1x","1x","1x"], 
        ["0x","1x","1x","0.5x","1x","1x","2x","2x","1x","1x","1x","1x","2x","1x","1x","1x","1x"],
        ["2x","0.5x","1x","1x","1x","0x","0.5x","1x","1x","1x","2x","1x","0.5x","0.5x","1x","1x","2x"], 
        ["1x","0.5x","1x","1x","1x","2x","1x","0.5x","2x","0.5x","2x","1x","2x","1x","1x","1x","0.5x"], 
        ["2x","1x","0.5x","2x","1x","2x","1x","0.5x","1x","0.5x","1x","1x","2x","1x","1x","1x","0.5x"], 
        ["1x","2x","1x","1x","2x","1x","1x","2x","1x","0.5x","1x","0.5x","0.5x","0x","1x","1x","1x"], 
        ["1x","2x","1x","1x","1x","1x","1x","0.5x","1x","1x","0.5x","1x","1x","2x","1x","1x","0.5x"], 
        ["1x","1x","2x","1x","0.5x","1x","1x","1x","1x","1x","1x","1x","1x","2x","2x","1x","1x"], 
        ["1x","0.5x","1x","0.5x","1x","2x","1x","0.5x","1x","0.5x","1x","1x","1x","1x","1x","1x","2x"], 
        ["1x","0.5x","2x","1x","0.5x","1x","1x","1x","1x","2x","1x","1x","1x","1x","1x","1x","1x"],  
        ["1x","1x","1x","1x","1x","0.5x","1x","2x","1x","1x","0.5x","0.5x","1x","0.5x","1x","1x","2x"], 
        ["1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x","1x"], 
        ["1x","0.5x","1x","1x","1x","2x","2x","2x","1x","1x","0.5x","1x","0.5x","1x","0.5x","1x","0.5x"], 
    ];

    let table = document.createElement("table");
    table.classList.add("type-table");

    let headerRow = document.createElement("tr");
    let corner = document.createElement("th");
    headerRow.appendChild(corner); 

    for (let type of types) {
        let th = document.createElement("th");
        th.textContent = type;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = 0; i < types.length; i++) {
        let row = document.createElement("tr");
        let rowHeader = document.createElement("th");
        rowHeader.textContent = types[i];
        row.appendChild(rowHeader);

        for (let j = 0; j < types.length; j++) {
            let cell = document.createElement("td");
            let value = chart[i][j];
            cell.textContent = value;

            if (value === "2x") cell.classList.add("green");
            else if (value === "0.5x") cell.classList.add("red");
            else if (value === "0x") cell.classList.add("gray");

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    main.appendChild(table);
}