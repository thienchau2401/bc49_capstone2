
let getItemDetail = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log(myParam);
    let promise = axios({
        method : 'GET',
        url: (`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`),
    });
    promise.then(function(result){
        console.log(result.data.content);
        renderItemDetail(result.data.content);
        renderProduct(result.data.content.relatedProducts);
    })
    .catch(function(err){
        console.log(err);
    });
}
getItemDetail();
let renderItemDetail = (item) => {
    // create available size list
    let sizeList = '';
    let index = 1;
    for (let size of item.size) {
        sizeList += `
        <input type="radio" class="btn-check" name="options" id="option${index}" autocomplete="off" checked>
        <label class="btn btn-info me-2" for="option${index}">${size}</label>
        `;
        index++;
    }
    //render item detail tab
    let content = `
    <div class="container">
        <h2 class = 'text-center pt-3'> PRODUCT DETAIL</h2>
        <div class="detail__content d-flex align-items-center ms-5">
            <img class = "w-25 img-fluid" src="${item.image}" alt="">
            <div class="item__description ms-5">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <h5>Available size</h5>
                <div class="size__list d-flex">
                    ${sizeList}
                </div>
                <h4 class='text-danger'>${item.price}$</h4>
                <div class="quantity d-flex">
                    <button class="btn btn-primary" onclick='minusBtn()'>
                        <i class="fa fa-minus"></i>
                    </button>
                    <p id='quantityTxt' class='mx-5 '>1</p>
                    <button class="btn btn-primary" onclick='plusBtn()'>
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <button class="btn btn-danger my-3" id='addToCart'>Add to cart</button>
            </div>
        </div>  
    </div>
    `;
    document.getElementById("itemDetail").innerHTML = content;
}
//increase quantity button
let minusBtn = () => {
    let quantity = document.getElementById('quantityTxt');
    if (quantity.innerHTML*1 > 0) {
        quantity.innerHTML = (quantity.innerHTML*1) - 1;
    }
}
//Decrease quantity button
let plusBtn = () => {
    let quantity = document.getElementById('quantityTxt');
    quantity.innerHTML = (quantity.innerHTML*1) + 1;
}
//Render related items
let renderProduct = (productData) => {
    let content = '';
    for (product of productData) {
        content += `
        <div class = "col-lg-3 col-md-4 col-sm-6 col-xs-12 gy-3">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.shortDescription}</p>
                    <div class = "card-bottom d-flex justify-content-between align-items-center">
                        <a href="./detail.html?id=${product.id}" class="btn btn-primary">Buy now</a>
                        <p>${product.price}$</p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
    document.getElementById('productList').innerHTML = content;
}