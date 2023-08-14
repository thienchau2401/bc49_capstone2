arrProduct = [];
let getProductByFeature = () => {
    let promise = axios({
        method : 'GET',
        url: ('https://shop.cyberlearn.vn/api/Product/getProductByFeature?feature=true'),

    });
    promise.then(function(result){
        console.log(result.data.content);
        renderProduct(result.data.content);
    })
    .catch(function(err){
        console.log(err);
    });
}
getProductByFeature();
let renderProduct = (productData) => {
    let content = '';
    let delayTime = 0;
    for (product of productData) {
        content += `
        <div class = "col-3 gy-3">
            <div class="card animate__animated animate__fadeInUpBig"style="animation-delay: ${0.2*delayTime++}s;">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.shortDescription}</p>
                    <div class = "card-bottom d-flex justify-content-between align-items-center">
                        <a href="./pages/detail.html?id=${product.id}" class="btn btn-primary">Buy now</a>
                        <p>${product.price}$</p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
    document.getElementById('productList').innerHTML = content;
}

// Header scrolled
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});