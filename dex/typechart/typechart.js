function load() {
    let main = document.getElementById("main");
    let header = document.createElement("h1");
    header.innerHTML = "Type Chart";
    main.appendChild(header);
    generateTypeChart(main);
}

function generateTypeChart(container){
    const types = [
        "Air", "Ancient", "Brawler", "Bug", "Dark", "Earth", "Electric", "Fire", "Ice", "Light", "Metal", "Mind", "Plant", "Simple", "Spirit", "Toxic", "Water"
    ];

    const typeColors = {
        "Air": "#ADD8E6", "Ancient": "#C19A6B", "Brawler": "#A0522D", "Bug": "#9ACD32",
        "Dark": "#705746", "Earth": "#DEB887", "Electric": "#FFD700", "Fire": "#FF4500",
        "Ice": "#00CED1", "Light": "#FFFACD", "Metal": "#B0C4DE", "Mind": "#9370DB",
        "Plant": "#228B22", "Simple": "#D3D3D3", "Spirit": "#8B008B", "Toxic": "#9932CC",
        "Water": "#1E90FF"
    };

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

    types.forEach((type, colIndex) => {
        let th = document.createElement("th");
        let div = document.createElement("div");
        div.className = "type-inner";
        div.textContent = type;
        div.style.backgroundColor = typeColors[type];
        div.addEventListener("click", () => {
            window.location.href = window.location.origin + `/dex/types/${type.toLowerCase()}`;
        });        
        th.appendChild(div);
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    for (let i = 0; i < types.length; i++) {
        let row = document.createElement("tr");
        let rowHeader = document.createElement("th");
        let headerDiv = document.createElement("div");
        headerDiv.className = "type-inner";
        headerDiv.textContent = types[i];
        headerDiv.style.backgroundColor = typeColors[types[i]];
        headerDiv.addEventListener("click", () => {
            window.location.href = window.location.origin + `/dex/types/${types[i].toLowerCase()}`;
        });
        rowHeader.appendChild(headerDiv);
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

    container.appendChild(table);
}
