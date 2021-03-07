const NavigationItem = ({to_id, title}) => {
  return (
    <li className='option'>
      <a href={`#${to_id}`}> {title} </a>
    </li>
  )
}

export default NavigationItem