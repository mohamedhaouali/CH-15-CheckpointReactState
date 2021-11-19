import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

  constructor() {
    console.log("constructor()");
    super();
    this.state = {
      fullName: "Mohamed Haouali",
      bio: "Versatile Software Engineer training engineer ",
      imgSrc: "med.jpg",
      profession: "Software development engineer",
      show: true,
      interval: null,
      count: 0
    };
  }
  // pour intervalle

  componentDidMount() {
    console.log("componentDidMount()")
    this.setState({
      interval: setInterval(() => {
        this.setState({ count: this.state.count + 1 });

      }, 1000),
    });
  }

  //update composant

  componentDidUpdate() {
    console.log("componentDidUpdate()")
  }
  // affichage profil

  visibility = () => {
    this.setState({
      show: !this.state.show
    })

  }
  render() {
    console.log("render()");
    return (

      <>

        <div className="card" style={{ width: "400px" }}>


          {this.state.show ?
            (<><img src={this.state.imgSrc} alt="Myphoto"></img>
              <h2>{this.state.fullName}</h2>
              <p >{this.state.bio}</p>
              <p className="para1">{this.state.profession}</p>
              <div className="logos">
                <a href="https://github.com/mohamedhaouali" target="blanc">
                  <img src="github.png" alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/mohamed-haouali-24236334/" target="blanc">
                  <img src="linkedin.png" alt="linkedin"></img>
                </a>
              </div>
              <h3>{this.state.count}</h3>
            </>) : (<h2>Click button to show profile</h2>)
          }
        </div>
        <button type="button" className="button" onClick={this.visibility}>{this.state.show ? "Hide profile" : "Show profile"}</button>
      </>

    );
  }
}

export default App;