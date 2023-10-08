import React, { useContext, useState } from 'react'
import logo from "../../assets/photo/logo1.png"
import cart from "../../assets/photo/cart.png"
import { ProductArray } from '../../App'
import deletebtn from '../../assets/photo/deletebtn.jpeg'


const style={
	model:`bg-slate-800 w-[850px] h-5/6 justify-center text-center absolute z-999 top-auto left-1/4 right-1/4 overflow-auto touch-pan-y`,
	carthead:`flex items-center justify-center text-3xl text-slate-100 font-bold mt-3 mb-3 border-b-4 border-slate-100`,
	allitems:`w-[800px] bg-salte-800`,
	cartprocontainer:`flex shadow-xl m-1.5 rounded-lg p-2.5 items-center justify-center w-[900px]`,
	cartimgtitle:`flex w-[40%]  items-center`,
	proimg:`w-[200px] mr-2.5`,
	img:`max-w-[100%] max-h-[100%]`,
	protitle:`text-[22px] text-white`,
	prodquantity:`flex justify-evenly bg-white pt-2.5 rounded-lg border-2 border-solid border-yellow-400 w-[120px]`,
	btn:`border-2 border-solid border-yellow-400 bg-white bg-white text-yellow-400 w-[30px] h-[30px] rounded-3xl `,
	prodprice:`w-[20%] flex justify-right text-[20px] text-lime-500 ml-[50px]`,
	deletebtn:`w-[30px] h-[30px] border-none hover:w-[35px] h-[35px] rounded-3xl`,

}
export default function Header () {
	
	const [selectedProduct,setSelectedProduct]=useContext(ProductArray);
	console.log("head",selectedProduct);
	const [visibleModal,setVisibleModal]=useState(false)
	// const [visibleModal, setVisibleModal] = useState(false);
	const removeFromCart=(id)=>{
		const filterItem=selectedProduct.filter((prd)=>prd.ID !==id );
		setSelectedProduct(filterItem);
	}
	
  return (
    <>
    <header className="p-2 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
			<a href="" className=''> <img src={logo} className='w-24 -mt-4' alt="logo" /></a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
					<img src={cart} className='w-16' alt="" />{selectedProduct.length >0?selectedProduct.length :0}</a>
			</li>
			<li className="flex" onClick={()=>setVisibleModal(!visibleModal)}>
				<a href='#'  rel="noopener noreferrer"  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">View</a>
			</li>
			
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
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
					selectedProduct.map((product)=>(
						console.log("seletemap",product),
					<div className={style.cartprocontainer} key={product.product.ID}>
					<div className={style.cartimgtitle}>
					<div className={style.proimg}><img src={product.product.ImageSrc} className={style.img}/></div>
					<div className={style.protitle}>{product.product.Name}</div>
					</div>
					
					<div className={style.prodprice}>{product?.Price}</div>
					<button className={style.deletebtn} onClick={()=>removeFromCart(product.ID)}>
					<img src={deletebtn} alt="" className="max-w-[90%] max-h-[90%]" />
					</button>
				</div>
					))
				):(
					<p>No Product </p>
				)
			}
		</div>
		</div>
		)
	}
          
          
      
	
</header>
</>
  )
}
