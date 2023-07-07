//이름을 바꿔서 import 해보기
function rename({text, index, colors}) {
  const isRandom = typeof(colors[0]) == 'number' ? true : false;
  return (
    <>
    {isRandom ? 
      <div className="box" style={{backgroundColor: "#"+colors[index]}}>
        {text}
      </div>
    : <div className="box" style={{backgroundColor: colors[index]}}>
        {text}
      </div>}
    </>
  )
}

export default rename
