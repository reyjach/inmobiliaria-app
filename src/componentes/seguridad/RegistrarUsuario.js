import React, { Component } from 'react';
import { Container, Typography, Grid, TextField, Avatar, Button} from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined'

const style = {
    paper: {
        marginTop : 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }, 
    avatar : {
        margin: 8,
        backgroundColor: "#e53935"
    },
    form: {
        width: "100%",
        marginTop: 10
    },
    submit: {
        marginTop: 15,
        marginBottom: 20
    }
}

class RegistrarUsuario extends Component {
    state = {
        usuario:{
            nombre:'',
            apellido:'',
            email:'',
            password:''
        }
    }

    onChange = e => {
        let usuario = Object.assign({}, this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
            usuario
        })
    }

    registrarUsuario = e => {
        e.preventDefault();
        console.log('imprimir objeto usuario del state', this.state.usuario);
    }
    render() {
        return (
            <Container maxWidth="md">
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockOutLineIcon></LockOutLineIcon>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registre su Cuenta
                    </Typography>
                    <form style={style.form}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <TextField name="nombre" onChange={this.onChange} value={this.state.usuario.nombre} fullwidth="true" label="Ingrese su Nombre"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="apellido" onChange={this.onChange} value={this.state.usuario.apellido} fullwidth="true" label="Ingrese sus Apellidos"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField name="email" onChange={this.onChange} value={this.state.usuario.email} fullwidth="true" label="Ingrese su E-mail"></TextField>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="password" name="password" onChange={this.onChange} value={this.state.usuario.password} fullwidth="true" label="Ingrese su Contraseña"></TextField>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <Button type="submit" onClick={this.registrarUsuario} variant="contained" fullwidth="true" size="large" color="primary" style={style.submit}>
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default RegistrarUsuario;