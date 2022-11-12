import{React} from 'react'

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i className="fa-brands fa-github-alt"></i>
              
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Portifolio
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item disabled" href="#">Completo</a></li>
                  <li><a className="dropdown-item disabled" href="#">Meus Projetos</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item disabled" href="#">Paginas Clone</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
              <button className="btn btn-danger" type="submit">Pesquisar</button>
            </form>
          </div>
        </div>
      </nav> 
    )

}