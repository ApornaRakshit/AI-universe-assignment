const loadFeatures = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayFeatures(data.data.tools);
}
const displayFeatures = features =>{
    const featuresContainer = document.getElementById('feature-container');
    //features = features.slice(0,6);
    const noFeature = document.getElementById('no-found-message');
    
    if(features.length === 0){
      noFeature.classList.remove('d-none')
    }
    else {
      noFeature.classList.add('d-none');
    }
    //display all features
    features.forEach(feature => {
       const featureDiv = document.createElement('div');
       featureDiv.classList.add('col');
       featureDiv.innerHTML= `
       <div class="card h-100">
                    <img src="${feature.image}" class="container rounded mx-auto d-block card-img-top mt-3 " alt="...">
                    <div class="card-body">
                    <h5>Feature</h5>
                    <ol>
                    ${listOfFeatures(feature.features)}
                    </ol>
                    </div>
                    <div class="card-footer">
                    <h5 class="card-title">${feature.id}.${feature.name}</h5>
                    <div class="d-flex justify-content-between">
                    <small class="text-muted">${feature.published_in}</small>
                    
                    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-arrow-right"></i></button>
                   
                    
                    </div>
                    </div>
                    </div>
                  </div>
       `;
       featuresContainer.appendChild(featureDiv);
    })
}
loadFeatures();

function listOfFeatures(arg){
  let items="";
  for(let i=0; i<arg.length;i++){
   items  +=`<li>${arg[i]}</li>`;
  }
  return items;
};



/*
const fetchModal = () =>{
  fetch("https://openapi.programming-hero.com/api/ai/tool/01?fbclid=IwAR1UsEDXezYLsWcOjlse5UtfJQiotmtznQauK4JR97leonl6LCGFVAypdTo")
  .then((res)=>res.json())
  .then((data)=>showCategories(data.data));
};
fetchModal();

const showCategories = data =>{
  console.log(data)
  
}
*/
/*
const fetchCategories = () =>{fetch('https://openapi.programming-hero.com/api/ai/tool/01?fbclid=IwAR1UsEDXezYLsWcOjlse5UtfJQiotmtznQauK4JR97leonl6LCGFVAypdTo')
.then((res)=>res.json())
.then((data)=>
displayCategories(data))}
fetchCategories();

const displayCategories = tools =>{
  const modalContainer = document.getElementById('modal-container');
  tools.function() 
    
  (tool=>{
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('col');
    modalDiv.innerHTML=`
                        <div class="card">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
    `;
    modalContainer.appendChild(modalDiv);
  })
}
*/










//<button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-arrow-right"></i></button>