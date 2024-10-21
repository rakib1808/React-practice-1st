import './Cart.css'

function Cart () {

    const firstName = "R";
    const lastName = "H";


    return (
        <div>
            <div className="body">
                <h1 className='text-5xl'>Buy this Item</h1>
                <ul className="list mt-5 list-disc list-inside marker: text-sky-400">
                    <li>Tomato</li>
                    <li>Potato</li>
                    <li>Onion</li>
                    <li>Chiken</li>
                    <li>Porotha</li>
                </ul>
            </div>

            {/* create A image card */}
            <div className='all-cart-container'>
            <div className='cart-container'>
                <img width={220} src="https://i.pinimg.com/736x/97/74/58/977458a0a9fead6846516c151bb0c104.jpg" alt="" />
                <div className='rating-container'>
                    <span>
                        <p>S</p>
                        <p>220</p>
                    </span>
                    <span>
                        <p>E</p>
                        <p>20</p>
                    </span>
                    <span>
                        <p>R</p>
                        <p>4.0</p>
                    </span>
                </div>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatem</p>
                <div className='rating-container2'>
                    <span>
                        <p>A</p>
                        <p>$550</p>
                    </span>
                    <span>
                        <p>F</p>
                        <p>Facebook</p>
                    </span>
                </div>            
            </div>


            <div className='cart-container'>
                <img width={220} src="https://i.pinimg.com/736x/97/74/58/977458a0a9fead6846516c151bb0c104.jpg" alt="" />
                <div className='rating-container'>
                    <span>
                        <p>S</p>
                        <p>220</p>
                    </span>
                    <span>
                        <p>E</p>
                        <p>20</p>
                    </span>
                    <span>
                        <p>R</p>
                        <p>4.0</p>
                    </span>
                </div>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatem</p>
                <div className='rating-container2'>
                    <span>
                        <p>A</p>
                        <p>$550</p>
                    </span>
                    <span>
                        <p>F</p>
                        <p>Facebook</p>
                    </span>
                </div>            
            </div>



            <div className='cart-container'>
                <img width={220} src="https://i.pinimg.com/736x/97/74/58/977458a0a9fead6846516c151bb0c104.jpg" alt="" />
                <div className='rating-container'>
                    <span>
                        <p>S</p>
                        <p>220</p>
                    </span>
                    <span>
                        <p>E</p>
                        <p>20</p>
                    </span>
                    <span>
                        <p>R</p>
                        <p>4.0</p>
                    </span>
                </div>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatem</p>
                <div className='rating-container2'>
                    <span>
                        <p>A</p>
                        <p>$550</p>
                    </span>
                    <span>
                        <p>F</p>
                        <p>Facebook</p>
                    </span>
                </div>            
            </div>


            <div className='cart-container'>
                <img width={220} src="https://i.pinimg.com/736x/97/74/58/977458a0a9fead6846516c151bb0c104.jpg" alt="" />
                <div className='rating-container'>
                    <span>
                        <p>S</p>
                        <p>220</p>
                    </span>
                    <span>
                        <p>E</p>
                        <p>20</p>
                    </span>
                    <span>
                        <p>R</p>
                        <p>4.0</p>
                    </span>
                </div>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptatem</p>
                <div className='rating-container2'>
                    <span>
                        <p>A</p>
                        <p>$550</p>
                    </span>
                    <span>
                        <p>F</p>
                        <p>Facebook</p>
                    </span>
                </div>            
            </div>
            </div>

            <div>
                <a href="https://www.youtube.com">Go To Youtube</a>
                <h1>Hello, I'm {firstName} {lastName}</h1>
            </div>
        </div>
    )
    
}

export default Cart;