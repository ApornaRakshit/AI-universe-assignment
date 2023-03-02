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
                    <img src="${feature.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
       `;
       featuresContainer.appendChild(featureDiv);
    })
}
loadFeatures();