import React from 'react'
import LogoImg from '../../assets/images/burger-logo.png'
import  classes from './Logo.module.css'

function Logo(props) {
	return (
		<div className={classes.Logo}>
			<img src={LogoImg} />
		</div>
	)
}

export default Logo
