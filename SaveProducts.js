const form = {
    productname: document.getElementById("productname"),
    productid: document.getElementById("productid"),
    productskupriceupdateddate: document.getElementById("productskupriceupdateddate"),
    brandid: document.getElementById("brandid"),
    industry: document.getElementById("industry"),
    brandname: document.getElementById("brandname"),
    companyname: document.getElementById("companyname"),
    sgst: document.getElementById("sgst"),
    price: document.getElementById("price"),
    productskuid: document.getElementById("productskuid"),
    supplierid: document.getElementById("supplierid"),
    inventoryavailable: document.getElementById("inventoryavailable"),
    barcode: document.getElementById("barcode"),
    productskulastupdateddate: document.getElementById("productskulastupdateddate"),
    mrp: document.getElementById("mrp"),
    purchaseprice: document.getElementById("purchaseprice"),
    productlastupdateddate: document.getElementById("productlastupdateddate"),
    productalias: document.getElementById("productalias"),
    cgst: document.getElementById("cgst"),
    uqocname: document.getElementById("uqocname"),
    igst: document.getElementById("igst"),
    cess: document.getElementById("cess"),
    sp: document.getElementById("sp"),
    companyid: document.getElementById("companyid"),
    industryid: document.getElementById("industryid"),
    brandlastupdateddate: document.getElementById("brandlastupdateddate"),
    productstatus: document.getElementById("productstatus"),
    entityid: document.getElementById("entityid"),
    submit: document.querySelector("#addproductbtn")
  };
  
  
  form.submit.addEventListener("click", (e) => {
    e.preventDefault();
  
    const productData = {
        productId: form.productid.value,
        productName: form.productname.value,
        productSKUPriceUpdatedDate: form.productskupriceupdateddate.value,
        brandId: form.brandid.value,
        industry: form.industry.value,
        brandName: form.brandname.value,
        companyName: form.companyname.value,
        sgst: form.sgst.value,
        price: form.price.value,
        productSkuId: form.productskuid.value,
        supplierId: form.supplierid.value,
        inventoryAvailable: form.inventoryavailable.value,
        barcode: form.barcode.value,
        productSKULastUpdatedDate: form.productskulastupdateddate.value,
        mrp: form.mrp.value,
        purchasePrice: form.purchaseprice.value,
        productLastUpdatedDate: form.productlastupdateddate.value,
        productAlias: form.productalias.value,
        cgst: form.cgst.value,
        uqocName: form.uqocname.value,
        igst: form.igst.value,
        cess: form.cess.value,
        sp: form.sp.value,
        companyId: form.companyid.value,
        industryId: form.industryid.value,
        brandLastUpdatedDate: form.brandlastupdateddate.value,
        productStatus: form.productstatus.value,
        entityId: form.entityid.value,

    };

  
    const jsonData = JSON.stringify(productData);
  
    const addProducts = 'http://localhost:8080/saveProductDetails';
  
    fetch(addProducts, {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: jsonData
    })
    .then((response) => {
      
      if (response.status === 200) {
          
          alert("Product added successfully");
      } else {
          
          console.error("Failed");
      }
  })
  .catch((err) => {
      console.error(err); 
  });
  });
  