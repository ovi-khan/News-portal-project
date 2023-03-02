const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategories(data.data))
}

const showCategories = data => {
    console.log(data)
    const categoriesContainer = document.getElementById('categories-container')
    data.news_category.forEach(singleCategory => {
        console.log(singleCategory)
        // const div = document.createElement('div')
        // categoriesContainer.innerHTML += `
        // <a class="text-decoration-none" href="#">${singleCategory.category_name}</a>
        // `;
        let linkContainer = document.createElement('p');
        linkContainer.innerHTML = `<a class="text-decoration-none" href="#" onclick="fetchCategoryNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>`;
        categoriesContainer.appendChild(linkContainer)
    });
}
// fetch all news avilabi
const fetchCategoryNews = (category_id, category_name) => {
    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showAllNews(data.data, category_name))
};
const showAllNews = (data, category_name) => {
    console.log(data, category_name);
    document.getElementById("news-count").innerText = data.length
    document.getElementById("category-name").innerText = category_name;



} 