import React from 'react';
import {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer ( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="primary" variant="dark">
            <img src="hanger-svgrepo-com.svg" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE} className="ml-2">CloseShop</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"}  className="ml-3" onClick={() => logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
        </Navbar>
    );
});

export default NavBar;