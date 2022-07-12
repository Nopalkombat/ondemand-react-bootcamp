import { useParams } from 'react-router-dom';
import { FormatPrice } from '../../utils/functions';
import { useSingleProduct } from '../../utils/hooks/useSingleProduct';
import SingleProductSlider from '../../Components/SingleProductSlider';
import Table from '../../Components/Table';
import './styles.scss';

const SingleProduct = () => {
  const { productId } = useParams();
  const { data: productData, isLoading } = useSingleProduct(productId);

  if (!productData || isLoading) {
    return (
      // <Loading />
      <h3>Loading...</h3>
    );
  }

  const product = productData.results[0].data;
  const description = product.description[0].text;

  return (
    <div className="content single-product">
      <div className="left">
        <SingleProductSlider images={product.images} />
      </div>
      <div className="right">
        <label className="title"> {product.name}</label>
        <label className="price"> {FormatPrice(product.price)}</label>
        <label className="sku"> SKU: {product.sku}</label>
        <label className="category"> Category: {product.category.slug}</label>
        <div className="button-container full">
          <a href="#!" className="simple-button">
            Add to cart
          </a>
        </div>
        <p className="description">{description || 'No description available'}</p>
      </div>
      <Table info={product.specs} />
    </div>
  );
};

export default SingleProduct;
