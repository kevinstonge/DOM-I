const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/*
1
* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images. Use the IDs to update src path content

2
* [ ] Remember, NO direct updating of the HTML source is allowed.
* [ ] Using your selectors, update the content to match the example file
* [ ] Remember to update the src attributes on images
*/

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"]

let ctaH1 = document.querySelector(".cta-text>h1");
ctaH1.innerText = siteContent["cta"]["h1"];
let ctaButton = document.querySelector(".cta-text>button");
ctaButton.innerText = siteContent["cta"]["button"]

let navAnchors = document.querySelectorAll('nav>a');
navAnchors.forEach((e,i)=>{
  let aText = siteContent.nav[`nav-item-${i+1}`];
  e.innerText = aText; e.href = `#${aText}`
});

let h4Nodes = document.querySelectorAll(".text-content>h4");
let pNodes = document.querySelectorAll(".text-content>p");
let sections = ["features","about","services","product","vision"];
h4Nodes.forEach((e,i)=>{
    h4Nodes[i].innerText = siteContent["main-content"][`${sections[i]}-h4`];
    pNodes[i].innerText = siteContent["main-content"][`${sections[i]}-content`];
});

let contactNodes = document.querySelector(".contact").children;
Object.values(siteContent.contact).forEach((e,i)=>{
  contactNodes[i].innerText = e;
})

/*
3
* [ ] Change the color of the navigation text to be green.
*/
let updateNavCSS = () => {
  document.querySelectorAll("header>nav>a").forEach(e=>e.style = "color: lightgreen; background: #333; padding: 1em");
}
/*
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser
*/
// document.querySelector("header>nav").appendChild()
let newsButton = document.createElement("a");
newsButton.href = `#news`;
newsButton.innerText = "News";
document.querySelector("nav").prepend(newsButton);

let careersButton = document.createElement("a");
careersButton.href = `##careers`;
careersButton.innerText = "Careers";
document.querySelector("nav").appendChild(careersButton);

updateNavCSS();
/*
stretch
* [ ] Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.  
*/

document.querySelector("html").style = "background: #222; color: #eee;"

/*
* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.
*/

