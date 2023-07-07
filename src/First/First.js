import { Header, Section, Footer} from './First-DA'
import Button from './First-rename'
import { useState } from 'react'
import '../scss/firstStyle.scss'

function First() {
  const [index, setIndex] = useState([0, 1, 2])
  const [colors, setColors] = useState(['red', 'yellow', 'green'])
  const [isBox, setIsBox] = useState(true)
  return (
    <div>
      <div className='wrap'>
        <Header></Header>
        <Section></Section>
        <div className='flexStart'>
          <div style={{color : '#'+Math.floor(Math.random() * 106)}} className='title'>Buttons</div>
          <span className='controller plus' onClick={()=>{
            setIndex(Array(index.length + 1).fill().map((v,i)=>i+1))
            setColors(Array(index.length + 1).fill().map((v,i)=> Math.floor(Math.random() * 256)))
            setIsBox(index.length + 1 > 0 ? true : false)
            }}>
          </span>
          <span className={isBox ? 'controller minus' : 'controller minus prevent'} onClick={()=>{
            setIndex(Array(index.length - 1).fill().map((v,i)=>i+1))
            setColors(Array(index.length - 1).fill().map((v,i)=> Math.floor(Math.random() * 256)))
            setIsBox(index.length - 1 > 0 ? true : false)
            }}>
          </span> 
        </div>
        <div className="centerFlex">
          <div className='boxWrap'  onClick={()=>{
            setColors(Array(index.length).fill().map((v,i)=> Math.floor(Math.random() * 256)))
          }}>
            {
              index.map((index, idx)=>{
                return (
                  <Button text={'Buttons'+ index} index={index} colors={colors} key={idx}></Button>
                )
              })
            }
            { isBox && <p className='alert'>Click here!</p>}
          </div>
        </div>
        <div className='footer'>
          <div className='footerWrap'>
            <p>a small, sometimes circular object that you press to operate a device or a machine,<br/> or an area on a computer screen that looks and acts like one of these</p>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First
