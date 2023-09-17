const search = new URLSearchParams(location.search);
console.log(search.get("id"));

const products = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
  
        div1.innerHTML = data.map(
          (product) => `
         
  <div class="col-12 col-md-8 padd border card ">
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
  products();