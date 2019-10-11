console.log('%c HI', 'color: firebrick')

  document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogContainer = document.querySelector('div#dog-image-container')
    const ul = document.querySelector('ul')
    breedDropdown = document.querySelector("#breed-dropdown")
   
  
    function fetchDogs() {
       return fetch(imgUrl)
       .then(resp => resp.json())
       .then(json => renderDogs(json));
     }
    
     function renderDogs(json) { 
        json.message.map(url => {dogContainer.innerHTML += `<img src=${url}>`})
      }

      // function fetchBreeds() {
      //   return fetch(breedUrl)
      //   .then(resp => resp.json())
      //   .then(breeds => renderBreeds(breeds.message));  
      // }

      function fetchBreeds(event) {
        ul.innerHTML = ''
        return fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
          for(breed in breeds.message) {
            if(!event || breed.startsWith(event)){
              console.log(event)
              ul.innerHTML += `<li>${breed}</li>`
            }
          }
        }
        )    
      }

      function filterBreeds(event) {fetchBreeds(event.target.value)}
      
      function changeColor(event) {
        if (event.target.tagName === 'LI'){event.target.style.color = 'purple'}
      }

      document.addEventListener('click', changeColor)

    
      breedDropdown.addEventListener('change', filterBreeds)

    fetchDogs();
    fetchBreeds();

    
  })

  
  
 