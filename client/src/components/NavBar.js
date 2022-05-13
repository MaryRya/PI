import React from 'react';
import {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer ( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="primary" variant="dark">
            <img src="hanger-svgrepo-com.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE} className="ml-2">CloseShop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Авторизация</Button>
                        <Button variant={"outline-light"}  className="ml-3">Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
        </Navbar>
    );
});

export default NavBar;