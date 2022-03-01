function searchFood(){
 const searchInput = document.getElementById("search-input");
const searchText = searchInput.value;
// console.log(valueInput);
searchInput.value ='';
if(searchText == ''){
  alert("Your search did not match any documents");
  
}
else{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.meals));
}
//   try {
  
// const res =await fetch(url);
// const data = await res.json();
//  displaySearchResult(data.meals);

//   } 
//   catch(error) {
//  console.log(error);
//   }




}
const displaySearchResult = meals => {

    const searchResult = document.getElementById('search-result');

      searchResult.textContent='';
      meals.forEach(meal => {
     
              console.log(meal);
              const div = document.createElement('div');
              div.classList.add('col-4');
              div.innerHTML = `
              <div onclick="loadMealDetail(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.idMeal}</h5>
                <h6>${meal.strArea} </h6>
                <p class="card-text"> ${meal.strInstructions.slice(0,200)}</p>
              </div>
            </div>
      
              `
              searchResult.appendChild(div);
       
      
    });
    

    // searchResult.innerHTML='';
    // meals.forEach(meal => {
    //     console.log(meal);
    //     const div = document.createElement('div');
    //     div.classList.add('col-4');
    //     div.innerHTML = `
    //     <div onclick="loadMealDetail(${meal.idMeal})" class="card">
    //     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${meal.idMeal}</h5>
    //       <h6>${meal.strArea} </h6>
    //       <p class="card-text"> ${meal.strInstructions.slice(0,200)}</p>
    //     </div>
    //   </div>

    //     `
    //     searchResult.appendChild(div);
        
    // });
}

const loadMealDetail = meaild => {
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meaild}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayMealDetail(data.meals[0]));
}
const displayMealDetail = meal => {
  // previous value remove 
  const searchResult = document.getElementById('search-result');
  searchResult.innerHTML='';
   const searchDetals = document.getElementById('search-detals');
   searchDetals.innerHTML='';
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML=`
   <div class="card">
   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
     <p class="card-text"> ${meal.strInstructions.slice(0,150)}</p>
 
   </div>
 </div>
   
   `;
   searchDetals.appendChild(div);


}