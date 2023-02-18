import "./image.scss"
export default function ImageBox({src, darker,size}) {
  return (
    <div className="imagebox">
      <img className={size ?"image withborder":"image"} src={src} alt="" style={{borderRadiusTop:size}}/>
      {darker?<div className="darker"></div>:<></>}
      
    </div>
  )
}
