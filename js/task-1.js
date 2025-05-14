const listCategories = document.querySelectorAll(".item");
// console.log(listCategories);
console.log(`Number of categories: ${listCategories.length}`);
const listItems = listCategories.forEach(item => {
    const categoriesName = item.querySelector("h2").textContent;
    const categoriesElem = item.querySelectorAll("ul li").length;
    // console.log(categoriesName);
    // console.log(categoriesElem);
    console.log(`Category: ${categoriesName}`);
    console.log(`Elements: ${categoriesElem}`);

});
