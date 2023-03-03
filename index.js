const loadFeatures = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayFeatures(data.data.tools);
}
const displayFeatures = features =>{
    const featuresContainer = document.getElementById('feature-container');
    features.forEach(feature => {
       const featureDiv = document.createElement('div');
       featureDiv.classList.add('col');
       featureDiv.innerHTML= `
       <div class="card h-100">
                    <img src="${feature.image}" class="container rounded mx-auto d-block card-img-top mt-3 mb-3" alt="...">
                    <div class="card-body">
                    <h5>Feature</h5>
                    <ol>
                    ${listOfFeatures(feature.features)}
                    </ol>
                    </div>
                    <div class="card-footer">
                    <h5 class="card-title">${feature.id}. ${feature.name}</h5>
                    <p class="card-description">${feature.description}</p>
                      <small class="text-muted">${feature.published_in}</small>
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
}

