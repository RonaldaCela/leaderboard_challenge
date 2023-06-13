const playersList = document.getElementById("playersList");
const firstNameInput = document.getElementById("box1");
const lastNameInput = document.getElementById("box2");
const countryInput = document.getElementById("box3");
const scoreInput = document.getElementById("box4");
const addPlayerButton = document.querySelector(".button");

const errorContainer = document.createElement("div");

document.getElementById("addPlayerError").style.display = "none";

const playersWrapper = document.createElement("div");
playersWrapper.setAttribute("class", "players-wrapper");
playersList.appendChild(playersWrapper);

const initialPlayersList = [
  
];



addInitialPlayers();
function addInitialPlayers() {
  initialPlayersList.forEach((element) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("class", "list-item");

    const firstNameDiv = document.createElement("div");
    firstNameDiv.innerText = element.firstName;
    listItem.appendChild(firstNameDiv);

    const lastNameDiv = document.createElement("div");
    lastNameDiv.innerText = element.lastName;
    listItem.appendChild(lastNameDiv);

    const countryDiv = document.createElement("div");
    countryDiv.innerText = element.country;
    listItem.appendChild(countryDiv);

    const scoreDiv = document.createElement("div");
    if(isFinite(element.score)) {
      scoreDiv.innerText = element.score;
      listItem.appendChild(scoreDiv);
    }
    

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute = ("class", "date-div");
    const date = new Date();


    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const data = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    dateDiv.innerText =  `${month}/${data}/${year}   ${hour}:${minutes}`;
    listItem.appendChild(dateDiv);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });
    listItem.appendChild(deleteButton);

    const addFive = document.createElement("button");
    addFive.setAttribute("class", "add-five");
    addFive.innerText = "+5";
    listItem.appendChild(addFive);

    addFive.onclick = function () {
      element.score = Number(element.score) + 5;
      scoreDiv.textContent = element.score;
    };

    const extractFive = document.createElement("button");
    extractFive.setAttribute("class", "extract-five");
    extractFive.innerText = "-5";
    listItem.appendChild(extractFive);

    extractFive.onclick = function () {
      element.score = Number(element.score) - 5;
      scoreDiv.textContent = element.score;
    };

    listItem.classList.add("player");
    playersList.appendChild(listItem);
  });
  playersWrapper.classList.add("players-wrapper");
}

addPlayerClick();
function addPlayerClick() {
  if (
    !firstNameInput.value ||
    !lastNameInput.value ||
    !countryInput.value ||
    !scoreInput.value
  ) {
    const errorButton = document.getElementById("addPlayerError");
    errorButton.innerText = "All fields required!";
    errorButton.style.display = "block";

    const xButton = document.createElement("button");
    xButton.setAttribute("class", "x-button");
    xButton.innerText = "x";
    xButton.addEventListener("click", () => {
      errorButton.style.display = "none";
    });

    errorButton.appendChild(xButton);
  } else {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "list-item");

    const firstNameDiv = document.createElement("div");
    firstNameDiv.innerText = firstNameInput.value;
    listItem.appendChild(firstNameDiv);

    const lastNameDiv = document.createElement("div");
    lastNameDiv.innerText = lastNameInput.value;
    listItem.appendChild(lastNameDiv);

    const countryDiv = document.createElement("div");
    countryDiv.innerText = countryInput.value;
    listItem.appendChild(countryDiv);

    const scoreDiv = document.createElement("div");
    if(isFinite(scoreInput.value)) {
      scoreDiv.innerText = scoreInput.value;
    listItem.appendChild(scoreDiv);
    playersList.appendChild(listItem);
    }
    

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute = ("class", "date-div");
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const data = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    dateDiv.innerText = `${month}/${data}/${year} ${hour}:${minutes}`;

    listItem.appendChild(dateDiv);

    

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });
    listItem.appendChild(deleteButton);

    const addFive = document.createElement("button");
    addFive.setAttribute("class", "add-five");
    addFive.innerText = "+5";
    listItem.appendChild(addFive);

    addFive.onclick = function () {
      scoreDiv.textContent = Number(scoreDiv.textContent) + 5;
    };

    const extractFive = document.createElement("button");
    extractFive.setAttribute("class", "extract-five");
    extractFive.innerText = "-5";
    listItem.appendChild(extractFive);

    extractFive.onclick = function () {
      scoreDiv.textContent = Number(scoreDiv.textContent) - 5;
    };
    document.getElementById('box1').value = "";
    document.getElementById('box2').value = "";
    document.getElementById('box3').value = "";
    document.getElementById('box4').value = "";
  }

  
}
