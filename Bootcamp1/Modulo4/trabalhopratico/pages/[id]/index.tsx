export async function getStaticPaths() {
  const products = await fetch(
    "https://fakestoreapi.com/products?limit=10"
  ).then((resp) => resp.json());

  const paths = products.map((item: any) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((resp) => resp.json());

  return {
    props: {
      product,
    },
  };
}

const index = ({ product }: any) => {
  return (
    <div className="productDetailContainer">
      <div className="productDetailLeft">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="productDetailRight">
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
        <p>R$ {product.price}</p>
      </div>
    </div>
  );
};

export default index;
