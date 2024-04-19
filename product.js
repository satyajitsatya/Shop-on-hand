let product = document.querySelectorAll(".product-card");

let pcontainer = document.getElementById("product-container")
let mcontainer = document.getElementById("main-container")
let slider1 = document.getElementById("p-slider1")
let slider2 = document.getElementById("p-slider2")
let slider3 = document.getElementById("p-slider3")
let ptype = document.getElementById("p-type")

let pcolor = document.getElementById("p-color")

let pfabric = document.getElementById("p-fabric")

let pdupatafb = document.getElementById("p-dupata-fabric")

let ppattern = document.getElementById("p-pattern")

let pfit = document.getElementById("p-fit")
let pstitching = document.getElementById("p-stitching-type")
let psalespackage = document.getElementById("p-sales-package")



console.log(product)
product.forEach((value) => {
    value.addEventListener("click", () => {
        console.log(value.childNodes)
        let pdimgsrc1 = value.childNodes[1].src;
        let pdimgsrc2 = value.childNodes[3].src;
        let pdtype = value.childNodes[7].textContent;
        let pdcolor = value.childNodes[9].textContent;
        let pdfabric = value.childNodes[11].textContent;
        let pddupatafabric = value.childNodes[13].textContent;
        let pdpattern = value.childNodes[15].textContent;
        let pdfit = value.childNodes[17].textContent;
        let pdstitching = value.childNodes[19].textContent;
        let pdsalespackage = value.childNodes[21].textContent;
        // let pdimg4="lehenga.lehenga4.jpg"


        mcontainer.style.display = "none"
        pcontainer.style.display = "inline"

        console.log(pdimgsrc1, pdimgsrc2, pdcolor, pdfabric, pddupatafabric, pdpattern, pdfit, pdstitching, pdsalespackage)

        slider1.src = pdimgsrc2
        slider2.src = pdimgsrc1
        slider3.src = pdimgsrc2
        ptype.innerText = pdtype
        pcolor.innerText = pdcolor
        pfabric.innerText = pdfabric
        pdupatafb.innerText = pddupatafabric
        ppattern.innerText = pdpattern
        pfit.innerText = pdfit
        pstitching.innerText = pdstitching
        psalespackage.innerText = pdsalespackage
        // slider2.style.src=pdimgsrc


    })
})