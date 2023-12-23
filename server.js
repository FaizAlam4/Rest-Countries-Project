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

      var index = 1;
      data.forEach((ele) => {
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

        list.appendChild(listItem1);
        list.appendChild(listItem2);
        list.appendChild(listItem3);

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
      
      let flag = true;

      document
        .querySelector(".nav-item:nth-child(2)")
        .addEventListener("click", () => {
          if (flag) {
            document.body.style.backgroundColor = "#33313b";
          } else {
            document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
          }
          flag = !flag;
        });
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
});
