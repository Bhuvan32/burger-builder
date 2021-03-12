import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

function OrderSummary(props) {
	let ingredientSummary = Object.keys(props.ingredients)
	.map(igKey => {
		return (
			<li key ={igKey}>
				<span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		)
	})
	return (
		<Auxiliary >
			<h4>Your Order</h4>
			<p>A Delicious Burger wih the following ingredients</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to checkout?</p>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
			<Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
		</Auxiliary>
	)
}

export default OrderSummary
