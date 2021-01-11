import React from 'react'
import CartContents from './CartContents'
import CartTotal from './CartTotal'



class CartForm extends React.Component{
    render(){
        
        
        return(
            <div>
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartContents
                selected = {this.props.selected}
                 />
                <CartTotal
                selected = {this.props.selected}
                />
              </section>
            </div>
        )
    }

}

export default CartForm;