// css class
import "./headernav.scss"
export default function HeaderNavLink ({icon, text, idlink}) {
return (
  <a className="headernavlink" href={`#${idlink}`}>
    {icon}
    <span className="headernavlinktext">{text}</span>
  </a>
)
}