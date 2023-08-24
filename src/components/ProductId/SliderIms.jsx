import React, { useState } from 'react'
import './styles/SliderImg.css'

const SliderIms = ({product}) => {
    console.log(product)

    const [indexImg, setIndexImg] = useState(0)
    const styleMovible={
        transform: `translateX(calc((-${indexImg}/3*100%))`
    }

    const handlePrevius=()=>{
        if(indexImg-1>=0){
            setIndexImg(indexImg-1)

        }else{
            setIndexImg(2)
        }

    }

    const handleNext=()=>{
        if(indexImg+1<=2){
            setIndexImg(indexImg+1)

        }else{
            setIndexImg(0)
        }
    }
  return (
    <>
    <div>

    <div className='slider'>
        <button onClick={handlePrevius} className='slider_btn slider_left'>&lt;</button>
        <div style={styleMovible} className='slider_movible'>
            {
                product?.productImags.map(imgInfo=>(
                    <div  className='slider_img_container' key={imgInfo.id}>
                        <img className='slider_img' src={imgInfo.url} alt="" />
                    </div>
                ))
            }

        </div>
        <button onClick={handleNext} className='slider_btn slider_right'>&gt;</button>
        </div>

        <div className='slider_footer_container'>

        <div className='slider_footer'>
        
            {
                product?.productImags.map((imgInfo,i)=>(
                    <div  className={`slider_footer_img_container 
                    ${i===indexImg && "slider_img_active"}`} 
                    key={imgInfo.id}
                    onClick={()=>setIndexImg(i)}
                    >
                        <img className='slider_img' src={imgInfo.url} alt="" />
                    </div>
                ))
            }
        </div>

        </div>
    </div>

    </>
  )
}

export default SliderIms