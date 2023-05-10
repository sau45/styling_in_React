import React from 'react'
// NOT WORKING WELL
import styled from "styled-components"
const MyButton = () => {
    return <Button>Sign in</Button>
}

export default MyButton

const button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%); 
    padding: 12px 0; 
    width: 200px; 
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`
