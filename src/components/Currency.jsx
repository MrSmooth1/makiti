import React from 'react'
import PropTypes from "prop-types";
function Currency(props) {
  return (
    <div className='group'>
        <label 
            value={props.currency} 
            onChange={e=>props.onCurrencyChange(e.target.value)}
        >
            {props.currencies.map((currency=>(
                <option value={currency}>
                    {props.currency}
                </option>
            )))}
        </label>
        <input placeholder='Enter a value'  type="text"  value={props.amount} onChange={e=>props.onAmountChange(e.target.value)}/>
    </div>
  )
}

Currency.propTypes={
    amount: PropTypes.number,
    currency: PropTypes.string,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,

}

export default Currency