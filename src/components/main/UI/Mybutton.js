import './Mybutton.css'

const Mybutton = ({children, ...props}) => {

  return(
    <button className="btn" {...props}>{children}</button>
  )
}

export default Mybutton