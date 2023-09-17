const div1 = document.querySelector(".row");

const cardData = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      div1.innerHTML = data.map(
        (product) => `
       
<div class="col-12 col-md-3 padd border card ">
<a href="./product.html?id=${product.id}&name="asdfasdf">
<div class="image">
 <img src="${product.image}"  alt="">
</div>
<div class="text ">
<h5 class="card-title">${product.title}</h5>
     <p>${product.price}</p>
      <p></p>
      <p>${product.category}</p>
      <p>${product.description}</p>
     
</div>
</a>
</div>


 
  `
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
cardData();

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(value);
      });

      div1.innerHTML = filteredData.map(
        (product) => `
<div class="col-12 col-md-3 padd border ">
<div class="image">
 <img src="${product.image}"  alt="">
</div>
<div class="text ">
<h5 class="card-title">${product.title}</h5>
     <p>${product.price}</p>
      <p></p>
      <p>${product.category}</p>
      <p>${product.description}</p>
     <a href="#" class="btn btn-primary">Read MOre.....</a>
</div>
</div>
 
  `
      );

      //   updateUI(filteredData);
    })
    .catch((err) => {
      console.error(err);
    });
});

// function updateUI(filteredData) {

//   const resultsElement = document.getElementById('results');

// //   resultsElement.innerHTML = '';

//   // Render the filtered data
//   filteredData.forEach((item) => {
//     const itemElement = document.createElement('div');
//     itemElement.textContent = item.title;
//     resultsElement.appendChild(itemElement);
//   });
// }
