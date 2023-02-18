// csss claass
import "./border.scss"
export default function Border({first, second}) {
  return (
    <div className="border">
      <span className="firstborder">{first}</span>
      <span className="secondborder">{second}</span>
    </div>
  )
}
