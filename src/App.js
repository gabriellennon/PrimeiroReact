import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import 'materialize-css/dist/css/materialize.min.css' //importando o materialize

import image from './img/react.png'
import { useState } from 'react';

class blogBR extends Component{
  constructor(){
    super()
    this.state = {curtidas: 0}
  }

  render(){
    return(
      <>
        <nav>
          <div class="nav-wrapper red darken-4">
            <a href="/" class="brand-logo center">Blog React</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
            </ul>
          </div>
        </nav>
        <body>
          <div class="container">
            <div class="row">
              <div class="col s12 m6 l3">
                <div class="container2">
                  <div class="box" >
                      <div class="imgBx">
                        <img src={image} alt=""/>
                      </div>
                    <div class="content">
                      <h3>Meu primeiro React (1)</h3>
                        <p>Lorem ipsum magni Animi, eligendi repudiandae libero necessitatibus ullam qui?</p>
                        
                    </div>
                  </div>
                </div>
                <div className="like">
                  <button onClick={() => this.setState({ curtidas: this.state.curtidas + 1})}>❤</button>
                  <span>{this.state.curtidas} curtidas</span>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="container2">
                    <div class="box">
                        <div class="imgBx">
                          <img src={image} alt=""/>
                        </div>
                      <div class="content">
                        <h3>Meu primeiro React (2)</h3>
                          <p>Lorem ipsum magni Animi, eligendi repudiandae libero necessitatibus ullam qui?</p>
                      </div>
                    </div>
                </div>
                <div className="like">
                  <button onClick={() => this.setState({ curtidas: this.state.curtidas + 1})}>❤</button>
                  <span>{this.state.curtidas} curtidas</span>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="container2">
                    <div class="box">
                        <div class="imgBx">
                          <img src={image} alt=""/>
                        </div>
                      <div class="content">
                        <h3>Meu primeiro React (2)</h3>
                          <p>Lorem ipsum magni Animi, eligendi repudiandae libero necessitatibus ullam qui?</p>
                      </div>
                    </div>
                </div>
                <div className="like">
                  <button onClick={() => this.setState({ curtidas: this.state.curtidas + 1})}>❤</button>
                  <span>{this.state.curtidas} curtidas</span>
                </div>
              </div>
              <div class="col s12 m6 l3">
                <div class="container2">
                    <div class="box">
                        <div class="imgBx">
                          <img src={image} alt=""/>
                        </div>
                      <div class="content">
                        <h3>Meu primeiro React (2)</h3>
                          <p>Lorem ipsum magni Animi, eligendi repudiandae libero necessitatibus ullam qui?</p>
                      </div>
                    </div>
                </div>
                <div className="like">
                  <button onClick={() => this.setState({ curtidas: this.state.curtidas + 1})}>❤</button>
                  <span>{this.state.curtidas} curtidas</span>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    )
  }
}

render(
  <>
    <blogBR />
  </>
)
export default blogBR;