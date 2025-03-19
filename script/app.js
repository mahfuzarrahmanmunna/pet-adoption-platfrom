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
        // console.log(category)
    });
}


const loadPets = async (categoryName) => {
    spinnerShow('spiner')
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    const data = await response.json()
    if (data.data) {
        displayPets(data.data)
        spinnerHide('spiner')
    }
}

const displayPets = (pets) => {
    const petsContainer = document.getElementById('petsContainer');
    petsContainer.innerHTML = ''
    if (pets.length == 0) {
        petsContainer.innerHTML = `
            <h1 id="status" class="text-center text-red-500">NO data Fund !!!!!!!!!</h1>

        `
    }
    pets.forEach(pet => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
           <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img class=''
                    src=${pet.image}
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${pet.breed}</h2>
                    <p>
                        ${pet.pet_details}
                    </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        `
        petsContainer.append(newDiv)
        console.log(pet)
    })
}

const spinnerHide = (id) => {
    document.getElementById(id).style.display = 'none'
}

const spinnerShow = (id) => {
    document.getElementById(id).style.display = 'block'
}

