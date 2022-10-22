
import "./Spinner.css"

export default function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="lds-dual-ring"></div>
    </div>
  )
}
