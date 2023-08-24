

const PurchasesCard = ({prod}) => {
    console.log(prod)
  return (
    <div className="container_purchases">

    <article className="article_img_purchases">
        <div className="container_img_purchase">
        <img className="img_purchases" src={prod.product.images[0].url} alt="" />
        </div>
        <div className="name_purchses_d">
        <h3 className="name_purchases">{prod.product.title}</h3>
        </div>
        
        <div className="price_purchase_container">
            <span className="quantity_purchase">{prod.quantity}</span>x <span className="price_purchases" >${prod.product.price}</span>
        </div>
    </article>
    </div>
  )
}

export default PurchasesCard