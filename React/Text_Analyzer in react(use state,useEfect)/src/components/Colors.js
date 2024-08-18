import React from 'react'

export default function Colors(props) {
  return (
    <div>
     <div className="container">
     <button type="button" className="btn btn-outline-primary m-2" onClick={props.changebg}>Primary</button>
<button type="button" className="btn btn-outline-secondary m-2">Secondary</button>
<button type="button" className="btn btn-outline-success m-2">Success</button>
<button type="button" className="btn btn-outline-danger m-2">Danger</button>
<button type="button" className="btn btn-outline-warning m-2">Warning</button>
<button type="button" className="btn btn-outline-info m-2">Info</button>
<button type="button" className="btn btn-outline-light m-2">Light</button>






     </div>

    </div>
  )
}
