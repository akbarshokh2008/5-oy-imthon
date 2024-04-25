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

const list = document.querySelector("#list");
const input = document.querySelector("#input");
const select = document.querySelector("#select");

input.addEventListener("input", getData);
function createElement(todoArr) {
  list.innerHTML = "";
  todoArr.data.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("list-item");
    article.innerHTML += `
    <a href="about.html?slug=${item.name.slug}">
    <img src=${item.flags.png} alt="${item.flags.alt}">
    <div class="item-text">
<h3>${item.name.common}</h3>
<p><span>Population: </span>${item.population}</p>
<p><span>Region: </span>${item.region}</p>
<p><span>Capital: </span>${item.capital}</p> 
    </div>
    </a>
    `;
    list.appendChild(article);
    article.value = "";
  });
}
getData();
function getData() {
  const inputValue = input.value;
  const url = `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${inputValue}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      createElement(data);
    });
}
const loader = document.querySelector("#loader");

select.addEventListener("change", (e) => {
  const url = `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${e.target.value}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      createElement(data);
    });
});
