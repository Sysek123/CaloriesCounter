import PropTypes from 'prop-types'

const Button = ({ onClick, text, color}) => {
  return (
  <button style={{ backgroundColor: color}} onClick={onClick} className='btn' >{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.prosType = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button