let names = [
  {
    name: "Global Summit",
    description:
      "I created this project as part of my Microverse bootcamp. Its goal was to replicate an existing website, allowing me to gain practical web development experience and improve my skills.",
    image: "/images/SnapshootPortfolio1.png",
    skill: "",
    liveUrl:'https://ameer2000mzori.github.io/Global-Summit-Website/',
    sourceUrl: 'https://github.com/Ameer2000Mzori/Global-Summit-Website',
  },
  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: "/images/SnapshootPortfolio2.svg.svg",
    skill: "Ruby on rails",
    liveUrl:'https://ameer2000mzori.github.io/Global-Summit-Website/',
    sourceUrl: 'https://github.com/Ameer2000Mzori/Global-Summit-Website',
  },
  {
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: "/images/SnapshootPortfolio3.svg.svg",
    skill: "Ruby on rails",
    liveUrl:'https://ameer2000mzori.github.io/Global-Summit-Website/',
    sourceUrl: 'https://github.com/Ameer2000Mzori/Global-Summit-Website',
  },
  {
    name: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: "/images/SnapshootPortfolio4.svg.svg",
    skill: "Ruby on rails",
    liveUrl:'https://ameer2000mzori.github.io/Global-Summit-Website/',
    sourceUrl: 'https://github.com/Ameer2000Mzori/Global-Summit-Website',
  },
];

const body = document.querySelector("body");
const createdDiv = document.createElement("div");
const dynamicList = document.getElementById("skills-continator");

function showlist(index) {
  let listHtml = `
  <div class='dynamic-skill-card'>
  <div class="dynamic-continator">
  <div class='title-and-btn'>
  <h1  class="dynamic-skill-h1">${names[index].name}</h1>
  <button  class='closeBtn' onclick='closemnuBtn()'><img src="/icons/IconCancel.svg" alt=""></button>
  </div>
  <div class="dynamic-skill-list">
  <ul>
    <h5 class="dynamic-skill-box-h5" >CANOPY</h5>
    <li><h5>Front end Dev</h5></li>
    <li><h5>2023</h5></li>
  </ul>
</div>
<div class='img-wrap'>  
  <img id="dynamic-skill-img-1" class="dynamic-skill-img"  src="${names[index].image}" alt="">
  </div>
  <div class='dynamic-p-buttons-lang-wrap'>
  <div class='dynamic-p-wrap'>
  <p class="dynamic-skill-p">${names[index].description}</p> 
  </div>

  <div class='buttons-skills-lang-wrap'> 
  <div>
  <div class="skills-list-lang">
  <div class="skill-lang">HTML</div>
  <div class="skill-lang">${names[index].skill}</div>
  <div class="skill-lang">CSS</div>
  <div class="skill-lang">JavaScript</div>

  </div>
  <div>
<hr class='dynamic-hr'>
</div>
</div>

<div class='dynamic-buttons-wrap'>
<button class="dynamic-live-btn" type='button'><img class='exportsmall' src='/icons/exportsmall.svg'><a class='url-source-btn' href='${names[index].liveUrl}'>See live </a> </button>
<button class="dynamic-source-btn" type='button'  ><a class='url-source-btn' href='${names[index].sourceUrl}'>See source </a> <img class='githubsmall' src='/icons/githubsmall.png'></button>
</div>
</div>
</div>
</div>
</div>
`;
  body.classList.add("active");
  dynamicList.classList.add("active");
  createdDiv.innerHTML = listHtml;
  body.appendChild(createdDiv);
  console.log("you clicked");
}

function closemnuBtn() {
  body.removeChild(createdDiv);
  console.log("youclicked");
  body.classList.remove("active");
  dynamicList.classList.remove("active");
}
