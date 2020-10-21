var startPoint = 0; // Start Point
var images = [];
var time = 5000;

// Images List
images[0] =
   'https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[1] =
   'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[2] =
   'https://images.pexels.com/photos/2529787/pexels-photo-2529787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[3] =
   'https://images.pexels.com/photos/4127632/pexels-photo-4127632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[4] =
   'https://images.pexels.com/photos/4437148/pexels-photo-4437148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[5] =
   'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[6] =
   'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[7] =
   'https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[8] =
   'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[9] =
   'https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

// change the image
function changeImg() {
   document.slide.src = images[startPoint];
   if (startPoint < images.length - 1) {
      startPoint++;
   } else {
      startPoint = 0;
   }

   setTimeout('changeImg()', time);
}

window.onload = changeImg;

// Adding Products

// UI CLASS
class UI {
   // TOP DEALS SECTION
   static displayTopSellingSection(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a >
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
      `;

      // Append to the TOP SECTION DEALS IN THE HTML
      topSellingSection.appendChild(productDiv);

      productDiv.addEventListener('click', () => {
         const productName =
            productDiv.children[0].children[2].children[0].innerHTML;

         location = 'product.html';
      });
   }

   // LESS THAN ONE K SECTION
   static displayLessThanOneKSection(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      lessThanOneK.appendChild(productDiv);
   }

   // COLLECTION SECTION
   static displayCollectionSection(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      collectionSection.appendChild(productDiv);
   }

   // DEALS OF THE DAY SECTION
   static displayDealsOfTheDay(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      dealsOfTheDay.appendChild(productDiv);
   }

   // FEATURED SECTION
   static displayFeaturedSection(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      featuredSection.appendChild(productDiv);
   }

   // ELECTRONIC SECTION COMPUTING
   static displayElectronicSectionComputing(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      electronicWareHouseComputing.appendChild(productDiv);
   }

   // ELECTRONIC SECTION PHONE
   static displayElectronicSectionPhone(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      electronicWareHousePhone.appendChild(productDiv);
   }

   // MEGA CLEARANCE
   static displayMegaClearance(deal) {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
         <a href ="https://jumia.com/${deal.title}.com">
            <h6>-30%</h6>
            <img src="${deal.img}" alt="${deal.title}"/>
            <div class="details">
               <small>${deal.title}</small>
               <h4>${deal.reducedPrice}</h4>
               <small>${deal.price}</small>
            </div>
         </a>
            `;

      // Append to the TOP SECTION DEALS IN THE HTML
      megaClearance.appendChild(productDiv);
   }

   static searchProduct() {
      const searchText = searchInput.value.toLowerCase();

      // Grab all th Product
      const products = document.querySelectorAll('.product');
      Array.from(products).forEach((product) => {
         const productName =
            product.children[0].children[2].children[0].textContent;

         if (productName.toLowerCase().indexOf(searchText) != -1) {
            product.style.opacity = '1';
         } else {
            product.style.opacity = '0.1';
         }
      });
   }
}

// STORAGE CLASS

// Selectors
const topSellingSection = document.querySelector(
   '.top-selling-section .products'
);
const lessThanOneK = document.querySelector('.one-k-section .products');
const collectionSection = document.querySelector(
   '.collection-section .products'
);
const dealsOfTheDay = document.querySelector('.deals-section .products');
const featuredSection = document.querySelector('.featured-section .products');
const electronicWareHouseComputing = document.querySelector(
   '.computing .products'
);
const electronicWareHousePhone = document.querySelector('.phone .products');
const megaClearance = document.querySelector('.mega-clearance .products');

// EVENTS
window.addEventListener('load', displayTopSellingSectionFunction);
window.addEventListener('load', displayLessThanOneKSectionFunction);
window.addEventListener('load', displayCollectionSectionFunction);
window.addEventListener('load', displayDealsOfTheDayFunction);
window.addEventListener('load', displayElectronicSectionComputingFunction);
window.addEventListener('load', displayElectronicSectionPhoneFunction);
window.addEventListener('load', displayMegaClearanceSectionFunction);

// window.addEventListener('click', productPage);

// FUNCTIONS

// TOP SELLING SECTION
function displayTopSellingSectionFunction() {
   fetch('products/topDeals.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayTopSellingSection(deal);
         });
      })
      .then();
}

// LESS THAN ONE K SECTION
function displayLessThanOneKSectionFunction() {
   fetch('products/lessThanOneK.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayLessThanOneKSection(deal);
         });
      });
}

// COLLECTION SECTION
function displayCollectionSectionFunction() {
   fetch('products/collection.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayCollectionSection(deal);
         });
      });
}

// DEALS OF THE DAY SECTION
function displayDealsOfTheDayFunction() {
   fetch('products/dealsOfTheDay.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayDealsOfTheDay(deal);
         });
      });
}

// FEATURED SECTION
function displayFeaturedSectionFunction() {
   fetch('products/featuredCategories.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayFeaturedSection(deal);
         });
      });
}

// ELECTRONIC SECTION COMPUTING
function displayElectronicSectionComputingFunction() {
   fetch('products/electronicForComputing.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayElectronicSectionComputing(deal);
         });
      });
}

// ELECTRONIC SECTION PHONE
function displayElectronicSectionPhoneFunction() {
   fetch('products/electronicForPhone.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayElectronicSectionPhone(deal);
         });
      });
}

// MEGA CLEARANCE
function displayMegaClearanceSectionFunction() {
   fetch('products/megaClearance.json')
      .then((res) => res.json())
      .then((data) => {
         data.forEach((deal) => {
            UI.displayMegaClearance(deal);
         });
      });
}

// Search Products
const searchInputForm = document.querySelector('.header-search-form');
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', searchProducts);

function searchProducts(e) {
   UI.searchProduct();
}

// Grab all th Product
function productPage() {
   console.log('3');
   // const products = document.querySelectorAll('.product');
   // Array.from(products).forEach((product) => {
   //    product.addEventListener('click', () => {
   //       console.log('run');
   //    });
   // });
}
