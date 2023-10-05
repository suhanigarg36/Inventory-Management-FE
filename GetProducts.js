document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch("http://localhost:8080/getProducts"); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    const productDataDiv = document.getElementById("productData");
    productDataDiv.innerHTML = ""; 

    if (data.length === 0) {
        productDataDiv.textContent = "No data available.";
        return;
    }

    data.forEach((product) => {

        const productCard = document.createElement("div");
        productCard.className = "product-card";

    
        const productName = document.createElement("h2");
        productName.innerHTML = `<strong>Product Name:</strong> ${product.productName}`;

        const skuPriceUpdatedDate = document.createElement("p");
        skuPriceUpdatedDate.innerHTML = `<strong>SKU Price Updated Date:</strong> ${product.productSKUPriceUpdatedDate}`;

        const brandId = document.createElement("p");
        brandId.innerHTML = `<strong>Brand ID:</strong> ${product.brandId}`;

        const industry = document.createElement("p");
        industry.innerHTML = `<strong>Industry:</strong> ${product.industry}`;

        const brandName = document.createElement("p");
        brandName.innerHTML = `<strong>Brand Name:</strong> ${product.brandName}`;

        const companyName = document.createElement("p");
        companyName.innerHTML = `<strong>Company Name:</strong> ${product.companyName}`;

        const sgst = document.createElement("p");
        sgst.innerHTML = `<strong>SGST:</strong> ${product.sgst}`;

        const price = document.createElement("p");
        price.innerHTML = `<strong>Price:</strong> ${product.price}`;

        const productSkuId = document.createElement("p");
        productSkuId.innerHTML = `<strong>Product SKU ID:</strong> ${product.productSkuId}`;

        const supplierId = document.createElement("p");
        supplierId.innerHTML = `<strong>Supplier ID:</strong> ${product.supplierId}`;

        const inventoryAvailable = document.createElement("p");
        inventoryAvailable.innerHTML = `<strong>Inventory Available:</strong> ${product.inventoryAvailable}`;

        const barcode = document.createElement("p");
        barcode.innerHTML = `<strong>Barcode:</strong> ${product.barcode}`;

        const skuLastUpdatedDate = document.createElement("p");
        skuLastUpdatedDate.innerHTML = `<strong>SKU Last Updated Date:</strong> ${product.productSKULastUpdatedDate}`;

        const mrp = document.createElement("p");
        mrp.innerHTML = `<strong>MRP:</strong> ${product.mrp}`;

        const purchasePrice = document.createElement("p");
        purchasePrice.innerHTML = `<strong>Purchase Price:</strong> ${product.purchasePrice}`;

        const productLastUpdatedDate = document.createElement("p");
        productLastUpdatedDate.innerHTML = `<strong>Product Last Updated Date:</strong> ${product.productLastUpdatedDate}`;

        const productAlias = document.createElement("p");
        productAlias.innerHTML = `<strong>Product Alias:</strong> ${product.productAlias}`;

        const cgst = document.createElement("p");
        cgst.innerHTML = `<strong>CGST:</strong> ${product.cgst}`;

        const uqocName = document.createElement("p");
        uqocName.innerHTML = `<strong>UQOC Name:</strong> ${product.uqocName}`;

        const igst = document.createElement("p");
        igst.innerHTML = `<strong>IGST:</strong> ${product.igst}`;

        const cess = document.createElement("p");
        cess.innerHTML = `<strong>Cess:</strong> ${product.cess}`;

        const sp = document.createElement("p");
        sp.innerHTML = `<strong>SP:</strong> ${product.sp}`;

        const companyId = document.createElement("p");
        companyId.innerHTML = `<strong>Company ID:</strong> ${product.companyId}`;

        const industryId = document.createElement("p");
        industryId.innerHTML = `<strong>Industry ID:</strong> ${product.industryId}`;

        const brandLastUpdatedDate = document.createElement("p");
        brandLastUpdatedDate.innerHTML = `<strong>Brand Last Updated Date:</strong> ${product.brandLastUpdatedDate}`;

        const productStatus = document.createElement("p");
        productStatus.innerHTML = `<strong>Product Status:</strong> ${product.productStatus}`;

        const entityId = document.createElement("p");
        entityId.innerHTML = `<strong>Entity ID:</strong> ${product.entityId}`;

        const productId = document.createElement("p");
        productId.innerHTML = `<strong>Product ID:</strong> ${product.productId}`;

    
        productCard.appendChild(productName);
        productCard.appendChild(skuPriceUpdatedDate);
        productCard.appendChild(brandId);
        productCard.appendChild(industry);
        productCard.appendChild(brandName);
        productCard.appendChild(companyName);
        productCard.appendChild(sgst);
        productCard.appendChild(price);
        productCard.appendChild(productSkuId);
        productCard.appendChild(supplierId);
        productCard.appendChild(inventoryAvailable);
        productCard.appendChild(barcode);
        productCard.appendChild(skuLastUpdatedDate);
        productCard.appendChild(mrp);
        productCard.appendChild(purchasePrice);
        productCard.appendChild(productLastUpdatedDate);
        productCard.appendChild(productAlias);
        productCard.appendChild(cgst);
        productCard.appendChild(uqocName);
        productCard.appendChild(igst);
        productCard.appendChild(cess);
        productCard.appendChild(sp);
        productCard.appendChild(companyId);
        productCard.appendChild(industryId);
        productCard.appendChild(brandLastUpdatedDate);
        productCard.appendChild(productStatus);
        productCard.appendChild(entityId);
        productCard.appendChild(productId);
        productDataDiv.appendChild(productCard);
    });
}
function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        const productNameElement = card.querySelector("h2");
        const productName = productNameElement.textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


