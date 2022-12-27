import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/CartSlice';
import { fetchProducts } from '../Store/ProductsSlice';
import { STATUSES } from '../Store/ProductsSlice';
import { Skeleton,Stack} from '@mui/material';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);
    // const [isDisabled, setisDisabled] = useState(false);
    const handleAdd = (product) => {
        dispatch(add(product));
        // setisDisabled(true);
    };

    if (status === STATUSES.LOADING) {
        return <>
            <div className='productsWrapper'>
                {products.map((product)=>(
                    <div className='card' key={product.id}>
                    <Stack spacing={1}>
                        {/* For variant="text", adjust the height via font-size */}
                        
                        {/* For other variants, adjust the size with `width` and `height` */}
                        <Skeleton variant="rectangle" width={150} height={100} />
                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="rounded" height={30} width={80}/>
                        </Stack>
                    </div>
                
            ))}
            </div>
           
            
        </>;
        
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div style={{overflow:"auto"}}>
        <h3 id='productHead'>Top Products</h3>
        <div className="productsWrapper">
            
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" height="100px" width="150px" />
                    <h4>{product.title.slice(0,25).concat("...")}</h4>
                    <h5 style={{color: "#eb5e60",fontSize: "large",fontWeight: "600"}}>${product.price}</h5>
                    <button 
                    onClick={() => handleAdd(product)} className="btn"  >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Products;