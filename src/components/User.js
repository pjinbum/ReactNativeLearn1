import React from 'react'
import styled from 'styled-components'
import UserContext from '../context/ContextUser'
import { useContext } from 'react';


const NameText = styled.Text`
font-size: 25px;
margin: 10px;
`;

const User =() => {
    const { user } =useContext(UserContext);

    return (
        <NameText>이름  : {user.name} </NameText>
    );
}

export default User;