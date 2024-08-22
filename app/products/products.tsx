export interface Product {
    id: number;
    productName: string;
    price: number;
    image: string;
    quantity: number;
  }
  
  const products: Product[] = [
    {
      id: 1,
      productName: "Sản phẩm 1",
      price: 100000,
      image: "",
      quantity: 50,
    },
    {
      id: 2,
      productName: "Sản phẩm 2",
      price: 200000,
      image: "",
      quantity: 30,
    },
    {
        id: 3,
        productName: "Sản phẩm 3",
        price: 300000,
        image: "",
        quantity: 40,
      },
  ];
  
  export default products;