import React from 'react'
import loaderImage from './../../resources/icons/loader.gif'
import './style.scss'

class Loader extends React.PureComponent{
    render(){
        return <img className='Loader' src={`/${loaderImage}`}/>
    }
}
export default Loader