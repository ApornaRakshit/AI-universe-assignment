

const loadFeatures = () =>{

  const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
    .then(res => res.json())
    .then(data => 
         displayFeatures(data.data.tools))

}
const seeAll = document.getElementById('btn-seeAll');


function displayFeatures(features) {
    const featuresContainer = document.getElementById('feature-container');
    
    const noFeature = document.getElementById('no-found-message');
    
    if(features.length === 0){
      noFeature.classList.remove('d-block')
    }
    else {
      noFeature.classList.add('d-none');
    }
    
    
    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.classList.add('col');
        featureDiv.innerHTML = `
       <div class="card h-100">
                    <img src="${feature.image}" class="container rounded mx-auto d-block card-img-top mt-3 " alt="...">
                    <div class="card-body">
                    <h5>Feature</h5>
                    <ol>
                    ${listOfFeatures(feature.features)}
                    </ol>
                    </div>
                    <div class="card-footer">
                    <h5 class="card-title">${feature.id}. ${feature.name}</h5>
                    <div class="d-flex justify-content-between">
                    <small class="text-muted">${feature.published_in}</small>
                    <i class="fas fa-arrow-right" onclick="getDetail('${feature.id}')" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"></i>
                    </div>
                    </div>
                    </div>
                  </div>
       `;
       featuresContainer.appendChild(featureDiv);
        
    });
}

loadFeatures();


function listOfFeatures(arg){
  let items="";
  for(let i=0; i<arg.length;i++){
   items  +=`<li>${arg[i]}</li>`;
  }
  return items;
};

const getDetail = id =>{
  const url =` https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then(res => res.json())    
    .then(data => showDetail(data.data));
};

const showDetail = (detail) =>{

  const {  description, image_link, input_output_examples, features, integrations, accuracy } = detail;
  const modalContainer = document.getElementById('modal-body');
  modalContainer.innerHTML= `
  <div class="row">
  <div class="col-sm-7 mb-3 mb-sm-0">
  <div class="card">
      <div class="card-body">
        <h6 class="card-title">${description}</h6>
        
        <div class="d-flex">
        
        <div>
        <h5 class="card-title">Features</h5>
        <ul><li><small>${features[1].feature_name}</small></li>
        <li><small>${features[2].feature_name}</small></li>
        <li><small>${features[3].feature_name}</small></li>
        </ul></div>
        
        <div>
        <h5 class="card-title">Integrations</h5>
        <ul><li><small>${integrations[0]}</small></li>
        <li><small>${integrations[1]}</small></li>
        <li><small>${integrations[2]}</small></li>
        </ul></div>
</div>
      </div>
    </div>
  
  </div>
  <div class="col-sm-5">
  <div class="card">
  <div><span id="acc-badge" class="badge bg-danger">${accuracy.score*100}% accuracy</span>
  <img src=${image_link[0]} id="imgHeight" class="card-img-top" alt="..."></div>
  <div class="card-body">
    <p class="card-text">${input_output_examples[0].input}</p>
    <small class="text-secondary lh-1">
    ${input_output_examples[0].output}</small>
  </div>
</div>
  </div>
</div>
  
  `
  
}

