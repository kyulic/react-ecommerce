import { useForm } from "react-hook-form"


const FilterPrice = ({setPriceMinMax,priceMinMax}) => {

 const{register, reset,handleSubmit}=useForm()

 const submit=(data)=>{
  const min=data.from.trim()===""?0: +data.from
  const max= data.from.trim()===""?Infinity:+data.to
  setPriceMinMax({min,max})

 }
 const handleClearFilter=()=>{
  setPriceMinMax({min:0,max:Infinity})
  reset({
    from:"",
    to:""
  })
 }

  return (
    <article>Price
        <h3>Price</h3>
        <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From</label>
          <input {...register('from')} type="text" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input {...register('to')} type="text" id="to" />
        </div>
        <button>Filter Price</button>
        
      </form>

     {
       priceMinMax.min!==0 || 
       priceMinMax!==Infinity? <p>
       From {priceMinMax.min} to {priceMinMax.max} <b onClick={handleClearFilter}>X</b>
        </p>:''
     }

      
      

    </article>
  )
}

export default FilterPrice