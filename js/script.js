let mainImg = document.querySelector(".main-img");
let imgBtn = document.querySelector(".imgs-btn");
let ddr8 = document.querySelector(".ddr8");
let ddr16 = document.querySelector(".ddr16");
let gb256 = document.querySelector(".gb256");
let gb512 = document.querySelector(".gb512");
let tb1 = document.querySelector(".tb1");
let ddrTextContnet = document.querySelector(".ddr");
let gbrTextContnet = document.querySelector(".gb");
let discountPrice = document.querySelector(".discount-price");
let orginalPrice = document.querySelector(".orginal-price");

ddr16.addEventListener("click", () => { 
  gb256.style.display = "inline-flex";
  gb512.style.display = "inline-flex";
  tb1.style.display = "inline-flex";
  ddrTextContnet.textContent = "16";
  discountPrice.textContent = "17 250 000 so'm"
  orginalPrice.innerHTML = `<del>20 034 500 so'm</del>`
})

ddr8.addEventListener("click", () => {
  ddr16.style.display = "inline-flex";
  gb256.style.display = "inline-flex";
  gb512.style.display = "none";
  tb1.style.display = "none";
  ddrTextContnet.textContent = "8";
  gbrTextContnet.textContent = "256GB"
  discountPrice.textContent = "10 707 000 so'm"
  orginalPrice.innerHTML = `<del>12 994 000 so'm</del>`
})

gb512.addEventListener("click", () => {
  ddr8.style.display = "none";
  ddr16.style.display = "inline-flex";
  gb256.style.display = "inline-flex";
  tb1.style.display = "inline-flex";
  ddrTextContnet.textContent = "16";
  gbrTextContnet.textContent = "512GB";
  discountPrice.textContent = "19 629 500 so'm"
  orginalPrice.innerHTML = `<del>23 822 000 so'm</del>`
})

tb1.addEventListener("click", () => {
  ddr8.style.display = "none";
  ddr16.style.display = "inline-flex";
  gb256.style.display = "inline-flex";
  gb512.style.display = "inline-flex";
  gbrTextContnet.textContent = "1tb";
  ddrTextContnet.textContent = "16";
  discountPrice.textContent = "26 172 500 so'm"
  orginalPrice.innerHTML = `<del>31 762 500 so'm</del>`
})

gb256.addEventListener("click", () => {
  ddr8.style.display = "inline-flex";
  ddr16.style.display = "inline-flex"; 
  gbrTextContnet.textContent = "256GB";
  discountPrice.textContent = "10 707 000 so'm"
  orginalPrice.innerHTML = `<del>12 994 000 so'm</del>`
})

let colorImgGold = [
  {img: "003a584a-0d7d-4123-9f03-b3386914c6c2.webp"},
  {img: "b8166836-a68f-4886-bf74-04d2ae1e38da.webp"},
  {img: "dfd7cc8c-8f26-430c-ba64-7820b90d4df1.webp"},
  {img: "355da324-69f8-41d0-a143-605d8e470bad.webp"},
  {img: "2aa0ef46-60b7-469c-8eea-11d8bf09d9f3.webp"}
];

let colorImgSilver = [
  {img: "cf510327-b4e8-4378-a001-cbd8779504b8.webp"},
  {img: "67762a5d-aa1e-4d3c-b3cd-fda8b50b937f.webp"},
  {img: "51b73a16-4170-4944-80cf-6f8bca51351e.webp"},
  {img: "e622b5e0-65fc-4e91-a70d-9025fc30fd58.webp"},
  {img: "d90e01d1-2087-48a3-9462-912f58ea138c.webp"}
];

let colorImgGray = [
  {img: "edb6411f-3f34-47b1-a118-36045811f045.webp"},
  {img: "7f956a88-c90a-44b4-ba40-50aac4807181.webp"},
  {img: "dfda6000-e242-4442-ad59-bac513806275.webp"},
  {img: "eb6d4a3e-b892-4c4f-aff6-46d333c494ae.webp"},
  {img: "66715875-b08c-45a0-9f79-5f4a222e5943.webp"}
]

function addImgGold() {
  for(let i = 0; i < colorImgGold.length; i++) {
    let row = document.createElement("div");
    row.innerHTML = `
    <img src="img/${colorImgGold[i].img}" class="gold-img" alt="img">
    <img src="img/${colorImgSilver[i].img}" class="silver-img" alt="img">
    <img src="img/${colorImgGray[i].img}" class="gray-img" alt="img">
    `
    mainImg.appendChild(row);
  }

  for(let i = 0; i < colorImgGold.length; i++) {
    let row = document.createElement("div");
    row.classList = "click-img"
    row.innerHTML = `
    <img src="img/${colorImgGold[i].img}" class="gold-img" alt="img">
    <img src="img/${colorImgSilver[i].img}" class="silver-img" alt="img">
    <img src="img/${colorImgGray[i].img}" class="gray-img" alt="img">
    `
    imgBtn.appendChild(row);
  }
}

addImgGold();

let clickImg = document.querySelectorAll(".click-img");
for(let i = 0; i < clickImg.length; i++) {
  clickImg[i].addEventListener("click", () => {
    mainImg.style.transform = `translateX(${-i * 450}px)`;
    for(let j = 0; j < clickImg.length; j++) {
      clickImg[i].classList.add("img-active");
      clickImg[j].classList.remove("img-active");
    }
  })
}
document.querySelector(".silver").addEventListener("click", () => {
  document.querySelectorAll(".silver-img").forEach(item => {
    item.style.display = "block";
  })
  document.querySelectorAll(".gold-img").forEach(item => {
    item.style.display = "none";
  })
  document.querySelectorAll(".gray-img").forEach(item => {
    item.style.display = "none";
  })
})

document.querySelector(".gold").addEventListener("click", () => {
  document.querySelectorAll(".silver-img").forEach(item => {
    item.style.display = "none";
  })
  document.querySelectorAll(".gray-img").forEach(item => {
    item.style.display = "none";
  })
  document.querySelectorAll(".gold-img").forEach(item => {
    item.style.display = "block";
  })
})

document.querySelector(".gray").addEventListener("click", () => {
  document.querySelectorAll(".gray-img").forEach(item => {
    item.style.display = "block";
  })
  document.querySelectorAll(".gold-img").forEach(item => {
    item.style.display = "none";
  })
  document.querySelectorAll(".silver-img").forEach(item => {
    item.style.display = "none";
  })
})