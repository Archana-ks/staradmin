import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href=""><h4>Starwar Admin</h4></a>
            
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                    <Link className="nav-link" to="/">
                    PeopleList</Link>
                    </a>
               </li>
                
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="">
                    <Link className="nav-link" to="/character">
                    CharacterDetails</Link>
                   </a>
                </li>
                          
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Header