import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/photo/logo1.png"
import cart from "../../assets/photo/cart.png"
import { ProductArray } from '../../App'
import deletebtn from '../../assets/photo/deletebtn.jpeg'
import { products } from '../data/Data';
import { Link } from 'react-router-dom'


const style={
	model:`bg-slate-800 w-[570px] h-5/6 justify-center items-center text-center absolute z-999 top-auto left-1/4 right-1/4 overflow-y-auto touch-pan-y ml-7`,
	carthead:`flex items-center justify-center text-3xl text-slate-100 font-bold mt-3 border-b-4 border-slate-100`,
	allitems:`bg-salte-800`,
	cartprocontainer:`flex shadow-xl rounded-lg items-center justify-center `,
	cartimgtitle:`flex items-center mr-4`,
	proimg:` w-[180px] mt-1 mr-2.5`,
	img:`max-w-[100%] max-h-[100%] h-[80px]`,
	protitle:`text-[15px] text-white `,
	mrp:`flex m-0 p-1.5 `,
	frate:`flex m-0  text-red-500 line-through `,
	prodquantity:`flex justify-evenly bg-white pt-2.5 rounded-lg border-2 border-solid border-yellow-400 w-[120px]`,
	btn:`border-2 border-solid border-yellow-400 bg-white bg-white text-yellow-400 w-[30px] h-[30px] rounded-3xl `,
	prodprice:`w-[20%] flex justify-right text-[20px] text-lime-500 ml-[50px]`,
	deletebtn:`w-[30px] h-[30px] border-none hover:w-[35px] h-[35px] rounded-3xl`,
	price:`flex ml-1 p-0 flex-col`,
    seleprice:`flex m-0 p-1.5`,
    save:`flex m-0 p-1 `,
    rate:`text-lime-500 ml-1.5 border-1 border-solid`,
	prices:`flex flex-col`

}
export default function Header () {
	// const allproduct=products;
	// // let p=allproduct.product;
    // let overaaltax=10/100;
    // let overcommision=10/100;
    // let extraforfun=10/100;
    // let mrp=parseInt(allproduct.product.Price)
    // mrp=mrp+overaaltax*mrp+overcommision*mrp+extraforfun*mrp
    // const seleprice=mrp-extraforfun*mrp
    // const Discount=mrp-seleprice
	
	const [selectedProduct,setSelectedProduct]=useContext(ProductArray);
	console.log("head😒😒😒",selectedProduct);
	const [visibleModal,setVisibleModal]=useState(false)

	const [amount, setAmount] = useState({
		amount: 0,
		discount: 0,
		totalAmount: 0,
	});

	useEffect(() => {
		let amount = 0;
		let discountAmount = 0;
		let totalAmount = 0;
		if (selectedProduct && selectedProduct.length > 0) {
			selectedProduct.map((singleProduct)=>{
				
				amount += singleProduct.product.Price;
				console.log('👌👌👌',amount)
				if (singleProduct.product.discount) {
					discountAmount += singleProduct.product.discount;
				}
			})
		// for (let i = 0; i < selectedProduct.length; i++) {
		// 	const singleProduct = selectedProduct[i];
		// 	amount += singleProduct.Price;
		// 	if (singleProduct.discount) {
		// 	discountAmount += singleProduct.discount;
		// 	}
		// }
		}
		totalAmount = amount - discountAmount;
		setAmount({
		amount: amount,
		discount: discountAmount,
		totalAmount: totalAmount,
		});
	}, [selectedProduct]);
	
	const removeFromCart=(id ,index)=>{
		// const filterItem=selectedProduct.filter((prd)=>prd.ID !==id );
		const filterItem=[];
		selectedProduct.map((prd,i)=>{
			if (prd.ID == id && i==index){
				// continue
				
			}else{
				filterItem.push(prd)
			}
		})
		setSelectedProduct(filterItem);
	}
	
  return (
    <>
    <header className="p-2 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
			<a href="" className=''> <img src={logo} className='w-24 -mt-4' alt="logo" /></a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
		<li className="flex" >
				<Link to='/home' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
					<img src={cart} className='w-16' alt="" />{selectedProduct.length >0?selectedProduct.length :0}</a>
			</li>
			<li className="flex" onClick={()=>setVisibleModal(!visibleModal)}>
				<a href='#'  rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">View</a>
			</li>
			
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
		<Link to="/signin"><button className="self-center px-8 py-3 rounded">Sign in</button> </Link>
		<Link to="/login">	<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link> 
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
	
	
	{
		visibleModal && (<div className={style.model}>
		<div className={style.carthead}>  Your selected products cart</div>
		<div className={style.allitems}>
			{
				selectedProduct.length > 0 ?(
					selectedProduct.map((product,index)=>(
						
						console.log("seletemap",product),
					<div className={style.cartprocontainer} key={product.product.ID}>
					<div className={style.cartimgtitle}>
					<div className={style.proimg}><img src={product.product.ImageSrc} 
					className={style.img}/>
					<div className={style.protitle}>{product.product.Name}</div>
					</div>
					<div className={style.prices}>
					<div className={style.mrp}>Price: <p className={style.frate}> {product.product?.Price} </p> TAKA</div>
					<div className={style.seleprice}>Discount Price:<p className={style.rate}>{product.product?.Price-product.product?.discount}</p>TAKA</div>
                <p className={style.save}>Save: {product.product?.discount} TAKA</p>
				</div>
					</div>
					
					
					<button className={style.deletebtn} onClick={()=>removeFromCart(product.ID,index)}>
					<img src={deletebtn} alt="" className="max-w-[90%] max-h-[90%]" />
					</button>
				</div>
					))
				):(
					<p>No Product </p>
				)
			}
			<div className="space-y-1 text-right mr-1.5">
            <p>
                Amount :
                <span className="font-semibold"> {amount.amount} TAKA</span>
            </p>
            <p>
                Discount :
                <span className="font-semibold">{amount.discount} TAKA</span>
            </p>
            <p>
                Total amount:
                <span className="font-semibold">{amount.totalAmount} TAKA</span>
            </p>
            <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
            </p>
            </div>
		</div>
		</div>
		)
	}
	
	
</header>
</>
  )
}
