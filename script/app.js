const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
    displayCategory(data.categories)
    // console.log(data)
}
loadCategory()


const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <button onclick='loadPets("${category.category}")'  class="btn btn-soft btn-primary">
            ${category.category}
            <img class='w-8' src='${category.category_icon}'>
        </button>
        `
        categoryContainer.appendChild(newDiv)
        console.log(category)
    });
}


const loadPets = async (categoryName) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    const data = await response.json()
    console.log(data.data)
}
