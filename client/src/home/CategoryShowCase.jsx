import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../components/Ratting';

const title="Our Product";

const ProductData=[
    {
        imgUrl:'src/assets/images/categoryTab/01.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/01.jpg',
        brand:'Nike',
        price:'$199.00',
        id:1,
    },
    {
        imgUrl:'src/assets/images/categoryTab/02.jpg',
        cate:'Bags',
        title:'Nike Premier X',
        author:'assets/images/course/author/02.jpg',
        brand:'Nike',
        price:'$199.00',
        id:2,
    },
    {
        imgUrl:'src/assets/images/categoryTab/03.jpg',
        cate:'Phones',
        title:'Nike Premier X',
        author:'assets/images/course/author/03.jpg',
        brand:'Nike',
        price:'$199.00',
        id:3,
    },
    {
        imgUrl:'src/assets/images/categoryTab/04.jpg',
        cate:'Bags',
        title:'Nike Premier X',
        author:'assets/images/course/author/04.jpg',
        brand:'Nike',
        price:'$199.00',
        id:4,
    },
    {
        imgUrl:'src/assets/images/categoryTab/05.jpg',
        cate:'SHoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/05.jpg',
        brand:'Nike',
        price:'$199.00',
        id:5,
    },
    {
        imgUrl:'src/assets/images/categoryTab/06.jpg',
        cate:'Beauty',
        title:'Nike Premier X',
        author:'assets/images/course/author/06.jpg',
        brand:'Nike',
        price:'$199.00',
        id:6,
    },
    {
        imgUrl:'src/assets/images/categoryTab/07.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/07.jpg',
        brand:'Nike',
        price:'$199.00',
        id:7,
    },
    {
        imgUrl:'src/assets/images/categoryTab/08.jpg',
        cate:'Phones',
        title:'Nike Premier X',
        author:'assets/images/course/author/08.jpg',
        brand:'Nike',
        price:'$199.00',
        id:8,
    },
    {
        imgUrl:'src/assets/images/categoryTab/09.jpg',
        cate:'Phones',
        title:'Nike Premier X',
        author:'assets/images/course/author/09.jpg',
        brand:'Nike',
        price:'$199.00',
        id:9,
    },
    {
        imgUrl:'src/assets/images/categoryTab/10.jpg',
        cate:'Phones',
        title:'Nike Premier X',
        author:'assets/images/course/author/10.jpg',
        brand:'Nike',
        price:'$199.00',
        id:10,
    },
    {
        imgUrl:'src/assets/images/categoryTab/11.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/11.jpg',
        brand:'Nike',
        price:'$199.00',
        id:11,
    },
    {
        imgUrl:'src/assets/images/categoryTab/12.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/12.jpg',
        brand:'Nike',
        price:'$199.00',
        id:12,
    },
    {
        imgUrl:'src/assets/images/categoryTab/13.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/13.jpg',
        brand:'Nike',
        price:'$199.00',
        id:13,
    },
    {
        imgUrl:'src/assets/images/categoryTab/14.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/14.jpg',
        brand:'Nike',
        price:'$199.00',
        id:14,
    },
    {
        imgUrl:'src/assets/images/categoryTab/15.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/15.jpg',
        brand:'Nike',
        price:'$199.00',
        id:15,
    },
    {
        imgUrl:'src/assets/images/categoryTab/16.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/16.jpg',
        brand:'Nike',
        price:'$199.00',
        id:16,
    },
    {
        imgUrl:'src/assets/images/categoryTab/17.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/17.jpg',
        brand:'Nike',
        price:'$199.00',
        id:17,
    },
    {
        imgUrl:'src/assets/images/categoryTab/18.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/18.jpg',
        brand:'Nike',
        price:'$199.00',
        id:18,
    },
    {
        imgUrl:'src/assets/images/categoryTab/19.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/19.jpg',
        brand:'Nike',
        price:'$199.00',
        id:19,
    },
    {
        imgUrl:'src/assets/images/categoryTab/20.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/20.jpg',
        brand:'Nike',
        price:'$199.00',
        id:20,
    },
    {
        imgUrl:'src/assets/images/categoryTab/21.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/21.jpg',
        brand:'Nike',
        price:'$199.00',
        id:21,
    },
    {
        imgUrl:'src/assets/images/categoryTab/22.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/22.jpg',
        brand:'Nike',
        price:'$199.00',
        id:22,
    },
    {
        imgUrl:'src/assets/images/categoryTab/23.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/23.jpg',
        brand:'Nike',
        price:'$199.00',
        id:23,
    },
    {
        imgUrl:'src/assets/images/categoryTab/24.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/24.jpg',
        brand:'Nike',
        price:'$199.00',
        id:24,
    },
    {
        imgUrl:'src/assets/images/categoryTab/25.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/25.jpg',
        brand:'Nike',
        price:'$199.00',
        id:25,
    },
    {
        imgUrl:'src/assets/images/categoryTab/26.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/26.jpg',
        brand:'Nike',
        price:'$199.00',
        id:26,
    },
    {
        imgUrl:'src/assets/images/categoryTab/27.jpg',
        cate:'Shoes',
        title:'Nike Premier X',
        author:'assets/images/course/author/27.jpg',
        brand:'Nike',
        price:'$199.00',
        id:27,
    },

];
const CategoryShowCase = () => {
    const[items,setItems]=useState(ProductData);
    //  category baded filtering
     
    const filterItem=(categItem)=>{
        const updateItems=ProductData.filter((currElem)=>{
            return currElem.cate===categItem;
        });
        setItems(updateItems);
     };

  return (
    <div className='course-section style-3 padding-tb'>
    {/* shapes */}
    <div className='course-shape one'>
        <img src="/src/assets/images/shape-img/icon/01.png" alt=""/>
    </div>
    <div className='course-shape two'>
        <img src="/src/assets/images/shape-img/icon/02.png" alt=""/>
    </div>

    {/* main section */}
    <div className='container'>
        {/* section header */}
        <div className='section-header'>
            <h2 className='title'>{title}</h2>
            <div className='course-filter-group'>
                <ul className='lab-ul'>
                    <li onClick={()=>setItems(ProductData)}>All</li>
                    <li onClick={()=>filterItem("Shoes")}>Shoes</li>
                    <li onClick={()=>filterItem("Bags")}>Bags</li>
                    <li onClick={()=>filterItem("Phones")}>Phones</li>
                    <li onClick={()=>filterItem("Beauty")}>Beauty</li>
                </ul>
            </div>
        </div>

        {/* section body */}
        <div className='section-wrapper'>
            <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                {
                   items.map((product)=><div key={product.id} className="col">
                    <div className='course-item style-4'>
                        <div className='course-inner'>
                            <div className='course-thumb'>
                                <img src={product.imgUrl} alt=""/>
                                <div className='course-category'>
                                    <div className='course-cate'>
                                        <a href="#">{product.cate}</a>
                                    </div>
                                    <div className='course-review'>
                                        <Ratting/>
                                    </div>
                                </div>
                            </div>

                            {/* content */}
                            <div className='course-content'>
                                <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                <div className='course-footer'>
                                    <div className='course-author'>
                                        <Link to="/" className="ca-name">{product.brand}</Link>
                                    </div>
                                    <div className='course-price'>
                                        {product.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>) 
                }
            </div>
        </div>
    </div> 
   </div>

  );
}

export default CategoryShowCase