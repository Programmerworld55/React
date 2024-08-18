import React from 'react'

export default function Navbar(props) {
  return (
    <>
   
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode.modee}>
      {/* <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> */}
  <div className="container-fluid">
    <a className="navbar-brand" href="none">Text Analyzer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="none">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="none">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="none">Color Themes</a>
        </li>
      </ul>
      <span className="navbar-text">
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglefunctionn} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode.msg}</label>
{/* <button onClick={props.togglefunctionn}>dark mode</button> */}
</div>


      </span>
    </div>
  </div>
</nav>
    </div>
   
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.mode.msg}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </>
  )
}

