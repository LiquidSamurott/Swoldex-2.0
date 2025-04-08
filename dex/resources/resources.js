function load() {
    let main = document.getElementById("main");

    let header = document.createElement("h1");
    header.innerHTML = "Contribute";
    let description = document.createElement("p");
    description.innerHTML = `Contributions are always welcome! If there are any inaccuracies with information or you want to write an article yourself, please make a PR on the Github Repo.`;

    main.appendChild(header);
    main.appendChild(description);

    let changesHeader = document.createElement("h2");
    changesHeader.innerHTML = "Proposed/Upcoming Changes:";

    let changeLine1 = document.createElement("p");
    changeLine1.innerHTML = "• Update current data to match S1-S2 balancing";

    let changeLine2 = document.createElement("p");
    changeLine2.innerHTML = "• New sets from Free Sets and Meta Analysis.";

    let changeLine3 = document.createElement("p");
    changeLine3.innerHTML = "• Add Light/Dark mode.";

    let changeLine4 = document.createElement("p");
    changeLine3.innerHTML = "• Hunter's Journal-esque remarks for the Loomian Analysis.";

    let changeLine5 = document.createElement("p");
    changeLine3.innerHTML = "• Tips for Raid Battles";

    let changeLine6 = document.createElement("p");
    changeLine3.innerHTML = "• Advanced Tutorials/Tips on certain playstyles.";

    main.appendChild(changesHeader);
    main.appendChild(changeLine1);
    main.appendChild(changeLine2);
    main.appendChild(changeLine3);
    main.appendChild(changeLine4);
    main.appendChild(changeLine5);
    main.appendChild(changeLine6);
    main.appendChild(changeLine7);


}
