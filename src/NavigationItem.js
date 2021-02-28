const NavigationItem = ({to_id, title}) => {
  return (
    <div className='nav-item'>
      <a href={`#${to_id}`}> {title} </a>
    </div>
  )
}

export default NavigationItem