const products = document.querySelector('main')

window.apis.products = {
  addProduct(name, info){
    products.insertAdjacentHTML("afterend", `<div class=".device-card"><h1>${name}</h1><p>${info.join(",")}</p></div>`)
  } // why am i lazy
}
