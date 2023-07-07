function Popup({color}) {
  return (
    <>
      <div className='popup' style={{backgroundColor : color}}>
        해당 컬러로 선택 하시 겠습니까?
        <button>OK</button>
        <button>Choose again</button>
      </div>
    </>
  )
}

export default Popup
