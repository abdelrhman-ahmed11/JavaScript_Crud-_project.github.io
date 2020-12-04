var ProductNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCatInput = document.getElementById("productCatInput");
var productDesInput = document.getElementById("productDesInput");
var mainBtn = document.getElementById("mainBtn");
    mainBtn.innerHTML = "Add Product";
var productContainer;


if (localStorage.getItem("myProducts") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayData();
}

function AddProduct() {
    var product = {
        Name: productNameInput.value,
        Price: productPriceInput.value,
        Category: productCatInput.value,
        Description: productDesInput.value
    };
    if (mainBtn.innerHTML = "Add Product") {
        productContainer.push(product);
    }
    else {
        changeFormForUpdate(productIndex);
    }
    localStorage.setItem("myProducts", JSON.stringify(productContainer));
    cleanForm();
    displayData();
};

function cleanForm() {

    ProductNameInput.value = "";
    productPriceInput.value = "";
    productDesInput.value = "";
    productCatInput.value = "";

}

function displayData() {

    var cartona = "";

    for (let i = 0; i < productContainer.length; i++) {

        cartona += `
        <tr>
            <td>${i}</td>
            <td>${productContainer[i].Name}</td>
            <td>${productContainer[i].Price}</td>
            <td>${productContainer[i].Category}</td>
            <td>${productContainer[i].Description}</td>
            <td><button onclick="changeFormForUpdate(`+ i + `)" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button></td>
        </tr>`
    }

    document.getElementById("tBody").innerHTML = cartona;
}

function deleteProduct(productIndex) {

    productContainer.splice(productIndex, 1);

    localStorage.setItem("myProducts", JSON.stringify(productContainer));

    displayData();
}

function searchProduct(searchterm) {
    var cartona = ``;

    for (let i = 0; i < productContainer.length; i++) {

        if (productContainer[i].Name.toLowerCase().includes(searchterm.toLowerCase())) {
            cartona += `
        <tr>
            <td>${i}</td>
            <td>${productContainer[i].Name}</td>
            <td>${productContainer[i].Price}</td>
            <td>${productContainer[i].Category}</td>
            <td>${productContainer[i].Description}</td>
            <td><button onclick="changeFormForUpdate(`+ i + `)" class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="deleteProduct(` + i + `)" class="btn btn-outline-danger">Delete</button></td>
        </tr>`;

        }
    }
    document.getElementById("tBody").innerHTML = cartona;
}

function changeFormForUpdate(productIndex) {

    mainBtn.innerHTML = "update Product";

    productNameInput.value = productContainer[productIndex].Name;
    productPriceInput.value = productContainer[productIndex].Price;
    productCatInput.value = productContainer[productIndex].Category;
    productDesInput.value = productContainer[productIndex].Description;

    productContainer.splice(productIndex, 1 );
}
