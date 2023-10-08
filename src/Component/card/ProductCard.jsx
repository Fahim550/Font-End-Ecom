import React, { useContext } from 'react'
import { ProductArray } from '../../App';


const style={
    productcontainer:`flex  m-1.5 max-h-[250px]  max-w-[500px] border-1 border-solid border-slate-200 shadow-xl justify-evenly p-2.5 items-center
    h-[350px]`,
    img:`h-fit w-fit max-h-[250px] max-w-[200px]`,
    details:`w-[70%] ml-2 `,
    title:`text-[15px] font-semibold p-1 no-underline`,
    price:`flex ml-1 p-0 flex-col`,
    mrp:`flex m-0 p-1.5`,
    seleprice:`flex m-0 p-1.5`,
    save:`flex m-0 p-1 text-lg`,
    frate:`flex m-0  text-red-500 line-through`,
    rate:`text-lime-500 ml-1.5 border-1 border-solid`,
    buycart:`flex mt-2 ml-1.5 justify-left`,
    btn:`text-black border-2 border-solid  p-1.5 rounded-lg mr-2.5 hover:bg-slate-800 hover:text-white `,
  }
export default function ProductCard(product) {
    let p=product.product
    let overaaltax=10/100;
    let overcommision=10/100;
    let extraforfun=10/100;
    let mrp=parseInt(product.product.Price)
    mrp=mrp+overaaltax*mrp+overcommision*mrp+extraforfun*mrp
    const seleprice=mrp-extraforfun*mrp
    const Discount=mrp-seleprice
    
    const [selectedProduct,setSelectedProduct]=useContext(ProductArray)
    const addToCart=(product)=>{
      console.log("AddToCart",product);
      setSelectedProduct([...selectedProduct,product])
      console.log("selectedProduct",selectedProduct);
    }

  return (
    
        <div className={style.productcontainer}>
      {/* <p>{product.productTitle}</p>; */}
       <img src={product.product.ImageSrc} className={style.img} />
       <div className={style.details}>
            {/* <a href={`/product/${p.productType}/${p.id}`}> */}
              <p className={style.title}>{p?.Name} </p>
              {/* </a>  */}
            <div className={style.price}>
                <div className={style.mrp}>TAKA: <p className={style.frate}>{mrp}</p> </div>
                <div className={style.seleprice}>Discount Price: <p className={style.rate}>{product.product.Price}</p> </div>
                <p className={style.save}>Discount Price: {Discount}</p>
            </div> 
            {/* <a href={`/product/${p.productType}/${p.id}`} className={style.buycart}> */}
                <button className={style.btn} onClick={()=> addToCart(product)}>Add to cart</button>
                {/* <button className={style.btn}>Add to cart</button> */}

            {/* </a> */}
       </div>
        </div>
    
  )
}
