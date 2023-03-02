const loadFeatures = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayFeatures(data.data);
}

const displayFeatures = features =>{
    const featuresContainer = document.getElementById('feature-container');
    features.forEach(phone =>{

    })
}
loadFeatures();