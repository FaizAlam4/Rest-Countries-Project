document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Faiz's website");
  let fetchData = async () => {
    try {
      var ans = await fetch("https://restcountries.com/v3.1/all");
      var data = await ans.json();
      console.log(data);

      let myObj = data.reduce((acc, ele) => {
        if (acc[ele.region] == undefined) {
          acc[ele.region] = [];
        }

        acc[ele.region].push({
          country: ele.name.common,
          population: ele.population,
          capital: ele.capital,
        });
        return acc;
      }, {});

      // making card-dom
      var index = 1;

      function createCard() {
        let newCard = document.createElement("div");
        newCard.className = "card-container-item";
        let div1 = document.createElement("div");
        div1.className = "card-container-item-1";
        let div2 = document.createElement("div");
        div2.className = "card-container-item-2";

        document.querySelector(".card-container").appendChild(newCard);
        newCard.appendChild(div1);
        newCard.appendChild(div2);
        let list = document.createElement("ul");
        list.className = "list-wrapper";

        let listItemHeading = document.createElement("h3");

        listItemHeading.className = "list-item-title";
        div2.appendChild(listItemHeading);
        div2.appendChild(list);

        let listItem1 = document.createElement("li");
        let listItem2 = document.createElement("li");
        let listItem3 = document.createElement("li");

        listItem1.className = "list-item";
        listItem2.className = "list-item";
        listItem3.className = "list-item";

        list.append(listItem1, listItem2, listItem3);
      }

      data.forEach((ele) => {
        createCard();
        document.querySelector(
          `.card-container-item:nth-child(${index}) .card-container-item-1`
        ).innerHTML = `<img src="${ele.flags.svg}">`;

        document.querySelector(
          `.card-container-item:nth-child(${index}) .card-container-item-2 .list-item-title`
        ).innerText = ele.name.common;

        document.querySelector(
          `.card-container-item:nth-child(${index}) .card-container-item-2 li:nth-child(1)`
        ).innerHTML = "<b>Population:</b> " + ele.population;
        document.querySelector(
          `.card-container-item:nth-child(${index}) .card-container-item-2 li:nth-child(2)`
        ).innerHTML = "<b>Region:</b> " + ele.region;

        document.querySelector(
          `.card-container-item:nth-child(${index}) .card-container-item-2 li:nth-child(3)`
        ).innerHTML = "<b>Capital:</b> " + ele.capital;

        index++;
      });

      // filter for region
      data.forEach((ele)=>{

      })

      // dark-mode
      let flag = true;
      document
        .querySelector(".nav-item:nth-child(2)")
        .addEventListener("click", () => {
          if (flag) {
            document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
            document.querySelector("nav").style.backgroundColor = "hsl(209, 23%, 22%)";
            document.querySelector("nav").style.color = "white";
            let content = document.querySelectorAll(".input-filter-item");
            content.forEach((ele) => {
              ele.style.backgroundColor = "hsl(209, 23%, 22%)";
              ele.style.color = "white";
            });
            let cardContent = document.querySelectorAll(".card-container-item");
            cardContent.forEach((ele) => {
              ele.style.backgroundColor = "hsl(209, 23%, 22%)";
              ele.style.color = "white";
            });
            let boldContent = document.querySelectorAll("b");
            boldContent.forEach((ele) => {
              ele.style.color = "white";
            });

            document.querySelector("select").style.backgroundColor = "hsl(209, 23%, 22%)";
            document.querySelector("select").style.color = "white";

            let myOptions = document.querySelectorAll(".filter-region-option");
            myOptions.forEach((ele) => {
              ele.style.color = "white";
            });
          } else {
            document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
            document.querySelector("nav").style.backgroundColor = "white";
            document.querySelector("nav").style.color = "black";
            let content = document.querySelectorAll(".input-filter-item");
            content.forEach((ele) => {
              ele.style.backgroundColor = "white";
              ele.style.color = "black";
            });
            let cardContent = document.querySelectorAll(".card-container-item");
            cardContent.forEach((ele) => {
              ele.style.backgroundColor = "white";
              ele.style.color = "black";
            });
            let boldContent = document.querySelectorAll("b");
            boldContent.forEach((ele) => {
              ele.style.color = "rgb(66, 65, 65)";
            });
            document.querySelector("select").style.backgroundColor = "white";
            document.querySelector("select").style.color = "black";
            let myOptions = document.querySelectorAll(".filter-region-option");
            myOptions.forEach((ele) => {
              ele.style.color = "black";
            });
          }
          flag = !flag;
        });
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
});
