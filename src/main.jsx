import React from "react";
import ReactDOM from "react-dom/client";
import Seasons from "./Seasons";



class App extends React.Component
{
     state= {lat:null , errorMessage: ''}

     componentDidMount()
     {
        window.navigator.geolocation.getCurrentPosition(
          position=>this.setState({lat:position.coords.latitude}),
          err=>this.setState({errorMessage:err.message})
        );
     }

     renderContent()
     {
      if(!this.state.errorMessage && this.state.lat)
      {
        return<Seasons lat={ this.state.lat} />
      }

      if(this.state.errorMessage && !this.state.lat)
      {
        return<div>Error:{this.state.errorMessage}</div>;
      }
      return<div>Loading....</div>;
     }

     render()
     {
      return<div>{this.renderContent()}</div>;
     }
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
