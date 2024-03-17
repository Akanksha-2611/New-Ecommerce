import React,{useState} from 'react'
import {Link} from 'react-router-dom';
const desc="Energistia an deliver atactica metrcs after avsionary Apropria transition enterprises an sources applications emerging psd template.";

const ProductDisplay = ({item}) => {
    const {name,id,price,seller,ratingCount,quantity}=item;

    const [prequantity,setQuantity]=useState(quantity);
    const[coupan,setCoupan]=useState("");
    const[size,setSize]=useState("Select Size");
    const [color,setColor]=useState("Select color");

    const handleSizeChange=(e)=>{
        setSize(e.target.value);
    }
    const handleColorChange=(e)=>{
        setColor(e.target.value);
    }
    const handleDecrease=()=>{
       if(prequantity>1){
        setQuantity(prequantity-1)
       }
    }
    const handleIncrease=()=>{
       
            setQuantity(prequantity+1)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const product={
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:quantity,
            size:size,
            color:color,
            coupan:coupan
        }
        // console.log(product);
        const existingCart=JSON.parse(localStorage.getItem("Cart"))|| [];

        const existingProductIndex=existingCart.findIndex((item)=>item.id===id);

        if(existingProductIndex!==-1){
            existingCart[existingProductIndex].quantity+=prequantity;
        }else{
            existingCart.push(product);
        }

        // update local storage
        localStorage.setItem("cart",JSON.stringify(existingCart));

        // reset form fields
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupan("");
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        {/* cart components */}
        <div>
            <form onSubmit={handleSubmit}>
            {/* size */}
              <div className='select-product size'>
                <select value={size} onChange={handleSizeChange}>
                    <option>Select Size</option>
                    <option value="SM">SM</option>
                    <option value="MD">MD</option>
                    <option value="LG">LG</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <i className='icofont-rounded-down'></i>
              </div>

              {/* color */}
              <div className='select-product color'>
                <select value={color} onChange={handleColorChange}>
                    <option>Select Color</option>
                    <option >Yellow</option>
                    <option >Pink</option>
                    <option >Black</option>
                    <option >Blue</option>
                    <option >Red</option>
                </select>
                <i className='icofont-rounded-down'></i>
              </div>

              {/* cart plus minus */}
              <div className='cart-plus-minus'>
                <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={prequantity} onChange={(e)=>setQuantity(parseInt(e.target.value,10))}/>
                <div className='inc qtybutton' onClick={handleIncrease}>+</div>
              </div>

              {/* coupan field */}
              <div className='discount-code mb-2'>
                <input type='text' placeholder='Enter Discount Code' onChange={(e)=>setCoupan(e.target.value)}/>
              </div>

              {/* btn section */}
              <button type='submit' className='lab-btn'>
                <span>Add To Cart</span>
              </button>
              <Link to="/cart-page" className='lab-btn bg-primary'>
                <span> Check Out</span>
              </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay