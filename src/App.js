import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'
import "./App.css";
import ListaInmuebles from "./componentes/vistas/ListaInmuebles";
import AppNavbar from "./componentes/layout/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme/theme";
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar></AppNavbar>

          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
              <Route path="/auth/registrarUsuario" exact component={RegistrarUsuario}></Route>
            </Switch>
          </Grid>
          
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
