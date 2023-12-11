import './App.css'
import CardProduct from './components/card/CardProduct'
import Container from './components/container/Container'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import ProductRelList from './components/productRelList/ProductRelList'
import Footer from './components/footer/Footer'
import { useState, useEffect } from 'react';

async function LoadData() {
  const response = await fetch(`produto.json`);
  const product = await response.json();
  return product;
}

const initialProduct =
{
  "id": "0",
  "name": "",
  "price": "",
  "img": "",
  "score": "",
  "description": "",
  "vendor": "",
  "vendor_score": "",
  "vendor_email": "",
  "vendor_tel": "",
  "comments": [],
  "questions": [],
  "products": []
}


export default function App() {
  const [product, setProduct] = useState(initialProduct);

  async function requestProduct() {
    const productResponse = await LoadData();
    setProduct(productResponse);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <Container>
      <Header>
        Loja CellCenter
      </Header>
      <NavBar />
      <CardProduct {...product} />
      <ProductRelList products={product.products} />
      <Footer>Desenvolvido por Gregory Andrade Guanabara para o Assessment da disciplina Mobile-first UI com React. Todos direitos reservados a Ifone16. </Footer >
    </Container >
  )
}
