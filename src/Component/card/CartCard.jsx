import React from 'react'

const style={
  cartprocontainer:`flex shadow-xl m-1.5 rounded-lg p-2.5 items-center justify-center w-[900px]`,
  cartimgtitle:`flex w-[40%]  items-center`,
  proimg:`w-[50px] h-[50px] mr-2.5`,
  img:`max-w-[100%] max-h-[100%]`,
  protitle:`text-[22px]`,
  prodquantity:`flex justify-evenly bg-white pt-2.5 rounded-lg border-2 border-solid border-yellow-400 w-[120px]`,
  btn:`border-2 border-solid border-yellow-400 bg-white bg-white text-yellow-400 w-[30px] h-[30px] rounded-3xl `,
  prodprice:`w-[20%] flex justify-right text-[20px] text-lime-500 ml-[50px]`,
  deletebtn:`w-[30px] h-[30px] border-none hover:w-[35px] h-[35px] rounded-3xl`,
}

export default function CartCard(Props) {
  let p=Props.product
  return (
    <div>
       <div className={style.cartprocontainer}>
        <div className={style.cartimgtitle}>
          <div className={style.proimg}><img src={p.product.ImageSrc} className={style.img}/></div>
          <div className={style.protitle}>{p.product.Name}</div>
          {/* <div className={style.protitle}>{p.description}</div> */}
        </div>
        {/* <div className={style.prodquantity}>
          <button onClick={increasequantity} className={style.btn}>+</button>
          <p className='text-yellow-400'>{prodquantity}</p>
          <button onClick={descreasequantity} className={style.btn}>-</button>
        </div> */}
        {/* <div className={style.prodprice}>{prodquantity*seleprice}</div>
        <button className={style.deletebtn} onClick={deletecartitem}>
          <img src={deletebtn} alt="" className="max-w-[90%] max-h-[90%]" />
        </button> */}
    </div>
    </div>
  )
}
