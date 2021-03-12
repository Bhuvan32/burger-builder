import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PICE = {
	salad: 0.3,
	bacon: 0.4,
	cheese: 0.5,
	meat: 0.6,
}
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}
	updatePurchasable(ingredients) {
	
		const sum = Object.keys(ingredients).map(igKey => {
			return ingredients[igKey]
		})
		.reduce((sum, el) => {
			return sum + el;
		}, 0)
		this.setState({purchasable: sum > 0})
	}
	ingredientAdded = (type) => {

		const oldIngredientsCount = this.state.ingredients[type]
		const ingredientAdded = oldIngredientsCount + 1

		const updatedIngredient = { ...this.state.ingredients }
		updatedIngredient[type] = ingredientAdded

		const priceAddition = INGREDIENT_PICE[type]
		const oldPrice = this.state.totalPrice
		const newPrice = priceAddition + oldPrice
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredient,
		})
		this.updatePurchasable(updatedIngredient)
	}
	ingredientRemoved = (type) => {
		const oldIngredientsCount = this.state.ingredients[type]
		if (oldIngredientsCount <= 0) {
			return
		}
		const ingredientAdded = oldIngredientsCount - 1
		console.log(ingredientAdded)

		const updatedIngredient = { ...this.state.ingredients }
		updatedIngredient[type] = ingredientAdded

		const priceDeduction = INGREDIENT_PICE[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - priceDeduction
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredient,
		})
		this.updatePurchasable(updatedIngredient)

	}
	purchaseHandler = ()=>{
		this.setState({purchasing: true})
	}
	orderCancel = () =>{
		this.setState({purchasing: false})
	}
	continueOrderHandler = () =>{
		alert('You Continue!!!')
	}
	render() {
		let disabledInfo = { ...this.state.ingredients }

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<Auxiliary>
				<Modal show={this.state.purchasing} modalClosed={this.orderCancel}>
					<OrderSummary
						cancelOrder={this.orderCancel}
						price={this.state.totalPrice}
						continueOrder={this.continueOrderHandler}
						ingredients = {this.state.ingredients} />
				</Modal> 
				
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredients={this.ingredientAdded}
					removeIngredients={this.ingredientRemoved}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchaable = {this.state.purchasable}
					ordered = {this.purchaseHandler}
				/>
			</Auxiliary>
		)
	}
}

export default BurgerBuilder
