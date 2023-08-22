
export function ProductCard({product}){

    const ownerId = product.owner.id;
    const productTitle = product.title;
    const categories = product.categories || [];
    const description = product.description;
    const price = product.price;
    const rentPrice = product.rentPrice;
    const rentDuration = product.rentDuration;
    const datePosted = product.created_at;

    let trashCanButton = null;
    if(ownerId === localStorage.getItem('userId')) {
        console.log('same owner', ownerId);
        trashCanButton = (
            <img src="/trash-bin.png" width={20} height={25} alt="Logo" />
        );
    }

    return (
        <div className="card">
            <div className="rightSide">
                {trashCanButton}
            </div>
            <div className="leftSide">
                <h2>{productTitle}</h2>
                <div>
                    {categories.length > 0 &&
                        (
                            <h6 className="categories">
                                Categories: {categories.map(category =>(
                                    <p key={category.id}>{category.title}, </p>
                                ))}
                            </h6>
                        )
                    }
                </div>
                
                <p>Price: ${price} | Rent: ${rentPrice} per {rentDuration}</p>
                <p className="description">{description}</p>
  
                <p className="date">Date posted: {datePosted}</p>
            </div>
            
        </div>
    )
}