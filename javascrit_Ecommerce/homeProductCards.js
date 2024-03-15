const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((curProduct) => {
    const { brand, category, description, id, image, name, price, stock } = curProduct;

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".productName").textContent = name;
    productContainer.appendChild(productClone);
  });
};
