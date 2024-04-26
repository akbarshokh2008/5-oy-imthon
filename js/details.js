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

const loader = document.querySelector("#loader");

const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");
getdata();

function getdata() {
  fetch("https://frontend-mentor-apis-6efy.onrender.com/countries/" + slug)
    .then((res) => res.json())
    .then((data) => {
      createEl(data);
      loader.classList.add("hidden");
    });
}

const hammasi = document.querySelector("#hammasi");

function createEl(todoDav) {
  hammasi.innerHTML = "";
  const borders = todoDav.borders
    .map(
      (borders) =>
        `<a href="about.html?slug=${todoDav.borders.slug}">${borders.slug}</a>`
    )
    .join(", ");
  const section = document.createElement("section");
  section.classList.add("list-item-dav");
  section.innerHTML += `
  <section class="container main-container">
  <a class="about-href" href="index.html">
    <img src="./img/back.svg" alt="strelka" />
    Back
  </a>
  <div class="main-dav">
    <img src="${todoDav.flags.png}" alt="${todoDav.flags.alt}" />
    <div class="main-text">
      <h2>${todoDav.name.common}</h2>
      <div class="main-textlar">
        <div class="main-text__1">
          <p><b>Native Name: </b>${todoDav.name.nativeName}</p>
          <p><b>Population: </b>${todoDav.population}</p>
          <p><b>Region: </b>${todoDav.region}</p>
          <p><b>Sub Region: </b>${todoDav.subregion}</p>
          <p><b>Capital: </b>${todoDav.capital}</p>
        </div>
        <div class="main-text__2">
          <p><b>Top Level Domain: </b>${todoDav.continents}</p>
          <p><b>Currencies: </b>${todoDav.currencies}</p>
          <p><b>Languages: </b>${todoDav.languages}</p>
        </div>
      </div>
      <div class="main-text-border">
        <b>Border Countries: </b><a href="">${borders}</a>
      </div>
    </div>
  </div>
</section> 
 
    `;
  hammasi.appendChild(section);
}
