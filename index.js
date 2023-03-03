

const recipesEl = document.getElementById("recipes-el")
let recipeLinks = ["recipes/cinrolls.html","recipes/artdip.html","recipes/chili.html"];
console.log (recipeLinks)

function recipes(){
    let recipeList = ""
    for (let i = 0; i < recipeLinks.length; i++) {
        recipeList +=
         `<li>
              <a  target='_blank' href='${recipeLinks[i]}'>${recipeLinks[i]}</a>    
         </li>`
        }
        recipesEl.innerHTML = recipeList
}
recipes()