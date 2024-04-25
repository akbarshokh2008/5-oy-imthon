const darkBtn = document.querySelector("#darkBtn");
const darkImg = document.querySelector("#darkImg");
if (localStorage.getItem("Darkmode") === "dark") {
  document.body.classList.remove("light");
  darkBtn.lastChild.textContent = "dark mode";
  darkImg.setAttribute("src", "./img/oy.svg");
} else {
  document.body.classList.add("light");
  darkBtn.lastChild.textContent = "light mode";
  darkImg.setAttribute("src", "./img/quyosh.svg");
}

darkBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkBtn.lastChild.textContent = "dark mode";
    darkImg.setAttribute("src", "./img/oy.svg");
    localStorage.setItem("Darkmode", "dark");
  } else {
    document.body.classList.add("light");
    darkBtn.lastChild.textContent = "light mode";
    darkImg.setAttribute("src", "./img/quyosh.svg");
    localStorage.setItem("Darkmode", "light");
  }
});

const urlParams = new URLSearchParams(window.location.search);
const region = urlParams.get("region");
const id = urlParams.get("id");
getdata();

function getdata() {
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${region}&search=${id}`
  )
    .then((res) => res.json())
    .then((data) => {
      createDav(data);
    });
}

function createDav(todoArr) {
  const hammasi = document.querySelector("#hammasi"); // 1. List elementini tanlash
  hammasi.innerHTML = ""; // 2. Listning ichini tozalash
  todoArr.data.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("list-item");
    article.innerHTML += `
      <section class="container main-container">
        <a class="about-href" href="index.html">
          <img src="./img/back.svg" alt="strelka" />Back
        </a>
        <div class="main-dav">
          <img src=${item.flags.png} alt=${item.flags.alt} />
          <div class="main-text">
            <h2>${item.name.common}</h2>
            <div class="main-text__1">
              <p><b>Native Name: </b>${item.name.nativeName}</p>
              <p><b>Population: </b>${item.population}</p>
              <p><b>Region: </b>${item.region}</p>
              <p><b>Sub Region: </b>${item.subregion}</p>
              <p><b>Capital: </b>${item.capital}</p>
            </div>
            <div class="main-text__2">
              <p><b>Top Level Domain: </b>${item.continents}</p>
              <p><b>Currencies: </b>${item.currencies}</p>
              <p><b>Languages: </b>${item.languages}</p>
            </div>
            <div class="main-text-border">
              <b>Border Countries: </b><a href="">${item.borders}</a>
            </div>
          </div>
        </div>
      </section>
    `;
    hammasi.appendChild(article);
  });
}
