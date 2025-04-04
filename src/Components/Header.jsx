import Chef from '../assets/chef.png'
const Header = () => {
  return (
    <header>
        <img src={Chef} />
        <h1 className='header-title'>Chef Claude</h1>
    </header>
  )
}

export default Header