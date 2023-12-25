document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Faiz's website");

  let fetchData = async () => {
    try {
      var ans = await fetch("https://restcountries.com/v3.1/all");
      var data = await ans.json();

      // making card-dom

      function createCard(index, ele) {
        let newCard = document.createElement("div");
        newCard.className = "card-container-item";
        let div1 = document.createElement("div");
        div1.className = "card-container-item-1";
        let div2 = document.createElement("div");
        div2.className = "card-container-item-2";

        document.querySelector(".card-container").appendChild(newCard);
        newCard.append(div1, div2);

        let list = document.createElement("ul");
        list.className = "list-wrapper";

        let listItemHeading = document.createElement("h3");

        listItemHeading.className = "list-item-title";
        div2.append(listItemHeading, list);

        let listItem1 = document.createElement("li");
        let listItem2 = document.createElement("li");
        let listItem3 = document.createElement("li");

        listItem1.className = "list-item";
        listItem2.className = "list-item";
        listItem3.className = "list-item";

        list.append(listItem1, listItem2, listItem3);

        document.querySelector(
          `.card-container .card-container-item:nth-child(${index}) .card-container-item-1`
        ).innerHTML = `<img src="${ele.flags.svg}">`;

        document.querySelector(
          `.card-container .card-container-item:nth-child(${index}) .card-container-item-2 .list-item-title`
        ).innerText = ele.name.common;

        document.querySelector(
          `.card-container .card-container-item:nth-child(${index}) .card-container-item-2 li:nth-child(1)`
        ).innerHTML = "<b>Population:</b> " + ele.population.toLocaleString();
        document.querySelector(
          `.card-container .card-container-item:nth-child(${index}) .card-container-item-2 li:nth-child(2)`
        ).innerHTML = "<b>Region:</b> " + ele.region;

        document.querySelector(
          `.card-container .card-container-item:nth-child(${index}) .card-container-item-2 li:nth-child(3)`
        ).innerHTML = "<b>Capital:</b> " + ele.capital;
      }
 
      // select options

      var regionVal = [];
      data.forEach((countryData) => {
        let selectMenu = document.querySelector("#filter-region");
        let myOption = document.createElement("option");
        myOption.className = "opt";
        myOption.value = countryData.region;
        myOption.innerHTML = countryData.region;
        if (!regionVal.includes(countryData.region)) {
          regionVal.push(countryData.region);
          selectMenu.append(myOption);
        }
      });

      let myOption = document.createElement("option");
      myOption.className = "opt";
      myOption.value = "all";

      let i = 1;
      data.forEach((country) => {
        createCard(i, country);
        i++;
      });

      myOption.innerText = "Filter by region";
      myOption.setAttribute("selected", "selected");
      document.querySelector("#filter-region").append(myOption);


      // filter

      document
        .querySelector("#filter-region")
        .addEventListener("change", (event) => {
          document.querySelector(".card-container").innerHTML = "";
          let index = 1,
            index1 = 1;
          if (event.target.value == "all") {
            data.forEach((countryData) => {
              createCard(index1, countryData);
              index1++;
            });
          } else {
            data.forEach((countryData) => {
              if (countryData.region == event.target.value) {
                createCard(index, countryData);
                index++;
              }
            });
          }
        });


      // input

      document.querySelector("input").addEventListener("input", (e) => {
        let inputVal = e.target.value.trim().toLowerCase();
      });

      //   console.log(inputVal);

      //   if (document.querySelector("#filter-region").value == "africa") {
      //     let a = document.querySelectorAll(
      //       ".card-container-1 .card-container-item"
      //     );
      //     console.log(a);
      //     a.forEach((selector) => {
      //       if (
      //         selector
      //           .querySelector(`h3`)
      //           .innerText.toLowerCase()
      //           .includes(inputVal) == false
      //       ) {
      //         selector.style.display = "none";
      //       } else {
      //         selector.style.display = "block";
      //       }
      //     });
      //   } else if (
      //     document.querySelector("#filter-region").value == "america"
      //   ) {
      //     let a = document.querySelectorAll(
      //       ".card-container-2 .card-container-item"
      //     );
      //     console.log(a);
      //     a.forEach((selector) => {
      //       if (
      //         selector
      //           .querySelector(`h3`)
      //           .innerText.toLowerCase()
      //           .includes(inputVal) == false
      //       ) {
      //         selector.style.display = "none";
      //       } else {
      //         selector.style.display = "block";
      //       }
      //     });
      //   } else if (document.querySelector("#filter-region").value == "asia") {
      //     let a = document.querySelectorAll(
      //       ".card-container-3 .card-container-item"
      //     );
      //     console.log(a);
      //     a.forEach((selector) => {
      //       if (
      //         selector
      //           .querySelector(`h3`)
      //           .innerText.toLowerCase()
      //           .includes(inputVal) == false
      //       ) {
      //         selector.style.display = "none";
      //       } else {
      //         selector.style.display = "block";
      //       }
      //     });
      //   } else if (document.querySelector("#filter-region").value == "europe") {
      //     let a = document.querySelectorAll(
      //       ".card-container-4 .card-container-item"
      //     );
      //     console.log(a);
      //     a.forEach((selector) => {
      //       if (
      //         selector
      //           .querySelector(`h3`)
      //           .innerText.toLowerCase()
      //           .includes(inputVal) == false
      //       ) {
      //         selector.style.display = "none";
      //       } else {
      //         selector.style.display = "block";
      //       }
      //     });
      //   } else if (
      //     document.querySelector("#filter-region").value == "oceania"
      //   ) {
      //     let a = document.querySelectorAll(
      //       ".card-container-5 .card-container-item"
      //     );
      //     console.log(a);
      //     a.forEach((selector) => {
      //       if (
      //         selector
      //           .querySelector(`h3`)
      //           .innerText.toLowerCase()
      //           .includes(inputVal) == false
      //       ) {
      //         selector.style.display = "none";
      //       } else {
      //         selector.style.display = "block";
      //       }
      //     });
      //   } else if (document.querySelector("#filter-region").value == "all") {
      //     let a = document.querySelectorAll(
      //       ".card-container .card-container-item"
      //     );
      //     console.log(a);
      //     a.forEach((selector) => {
      //       if (
      //         selector
      //           .querySelector(`h3`)
      //           .innerText.toLowerCase()
      //           .includes(inputVal) == false
      //       ) {
      //         selector.style.display = "none";
      //       } else {
      //         selector.style.display = "block";
      //       }
      //     });
      //   }
      // });

      

      // dark-mode
      let flag = true;
      document
        .querySelector(".nav-item:nth-child(2)")
        .addEventListener("click", () => {
          if (flag) {
            document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
            document.querySelector("nav").style.backgroundColor =
              "hsl(209, 23%, 22%)";
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
            document.querySelector("select").style.backgroundColor =
              "hsl(209, 23%, 22%)";
            document.querySelector("select").style.color = "white";

            let myOptions = document.querySelectorAll(".filter-region-option");
            myOptions.forEach((ele) => {
              ele.style.color = "white";
            });
            document.querySelector("input").style.color = "white";
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
            document.querySelector("input").style.color = "black";
          }
          flag = !flag;
        });
    } catch (err) {
      console.log(err);
    }
  };

  fetchData();
});
