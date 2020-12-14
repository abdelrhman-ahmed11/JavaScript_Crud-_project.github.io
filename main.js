var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");
var mainBtn = document.getElementById("mainBtn");
mainBtn.value = "Submit";
var searchInput = document.getElementById("searchInput");
var updateIndex;
var siteContainer;

if (localStorage.getItem("mySite") == null) {
    siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem("mySite"));
    displayData();
}

mainBtn.onclick = function () {

    if (mainBtn.value == "Submit") {

        var newSite = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value,
        }

        siteContainer.push(newSite);
        localStorage.setItem("mySite", JSON.stringify(siteContainer));
        clearForm();
        displayData();

    }
    else {
        var site = {
            siteName: siteNameInput.value,
            siteUrl: siteUrlInput.value,
        }

        siteContainer.splice(Number(updateIndex), 1, site);
        localStorage.setItem("mySite", JSON.stringify(siteContainer));
        mainBtn.value = "Submit"
        clearForm();
        displayData();

    }

}

function clearForm() {
    siteNameInput.value = ``
    siteUrlInput.value = ``
}

function displayData() {

    var container = ``

    for (let i = 0; i < siteContainer.length; i++) {

        container += `
        <tr>
        <td>${i}</td>
        <td class="text-uppercase">${siteContainer[i].siteName}</td>
        <td><button  onclick="deleteRow(`+ i + `)" class="btn btn-outline-danger">Delete</button></td>
        <td><button onclick="updateRow(`+ i + `)" class="btn btn-outline-warning">Update</button></td>
        <td><a href="${siteContainer[i].siteUrl}" target="_blank" class="btn btn-outline-info">Visit</a></td>
        </tr>`
    }

    document.getElementById("tBody").innerHTML = container;
}

function deleteRow(siteIndex) {

    siteContainer.splice(siteIndex, 1);

    localStorage.setItem("mySite", JSON.stringify(siteContainer));

    displayData();
}

function getSearch(searchTrem) {

    container = ``

    for (let i = 0; i < siteContainer.length; i++) {

        if (siteContainer[i].siteName.toLowerCase().includes(searchTrem.toLowerCase()))

            container += `
        <tr>
        <td>${i}</td>
        <td class="text-uppercase">${siteContainer[i].siteName}</td>
        <td><button  onclick="deleteRow(`+ i + `)" class="btn btn-outline-danger">Delete</button></td>
        <td><button onclick="updateRow(`+ i + `)" class="btn btn-outline-warning">Update</button></td>
        <td><a href="${siteContainer[i].siteUrl}" target="_blank" class="btn btn-outline-info">Visit<a></td>
        </tr>`

    }

    document.getElementById("tBody").innerHTML = container;
}

function updateRow(siteIndex) {

    siteNameInput.value = siteContainer[siteIndex].siteName
    siteUrlInput.value = siteContainer[siteIndex].siteUrl

    mainBtn.value = "Update"

    updateIndex = siteIndex
}

/* document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
} */