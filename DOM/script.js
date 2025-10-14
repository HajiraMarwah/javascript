// 1️⃣ Selecting an element by ID
const mainTitle = document.getElementById("main-title");
mainTitle.style.color = "crimson";
mainTitle.textContent = " DOM Targeting Example Updated";

// 2️⃣ Selecting the first matching element using querySelector
const firstSubTitle = document.querySelector(".sub-title");
firstSubTitle.style.textDecoration = "underline";
firstSubTitle.textContent = "Updated Paragraph Section";

// 3️⃣ Selecting multiple elements using querySelectorAll (returns NodeList)
const paragraphs = document.querySelectorAll("p");

// NodeList supports forEach()
paragraphs.forEach((para, index) => {
  para.style.color = "blue";
  para.style.fontWeight = "bold";
  para.textContent = `Paragraph ${index + 1} updated with forEach()`;
});

// 4️⃣ Selecting all list items and updating using forEach
const fruitItems = document.querySelectorAll(".fruit");
fruitItems.forEach((item, index) => {
  item.style.color = "green";
  item.textContent = ` Fruit ${index + 1}: ${item.textContent}`;
});
