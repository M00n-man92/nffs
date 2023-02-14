import "./image.scss"
export default function ImageBox({src}) {
  return (
    <div className="imagebox">
      <img className="image" src={src} alt=""/>
      <div className="darker"></div>
    </div>
  )
}
