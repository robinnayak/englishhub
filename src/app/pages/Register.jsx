import React from 'react'
import styled from 'styled-components'
import learning from "../../media/learning.png";
import google from "../../media/google.png";
import { Link } from 'react-router-dom';
// width: 1920px;
// height: 1080px;
const Container = styled.div`
// z-index:-2;
position:relative;
min-height:100vh;
background: linear-gradient(180deg, rgba(17, 113, 239, 0.76) 0%, rgba(20, 80, 162, 0.874716) 49.48%, #172B4D 100%);
background-position:center;
background-size:cover;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
`

// mix-blend-mode: normal;

const Ellipse = styled.div`
position: absolute;
border-radius : 50%;
width: ${props => props.width};
height: ${props => props.height};
left: ${props => props.left};
top: ${props => props.top};
bottom:${props => props.bottom};
right: ${props => props.right};
background: rgba(17, 205, 239, 0.2);
z-index:1;
`
const Subcontainer = styled.div`
display:flex;
justify-content:center;
width: 950px;
min-height: 500px;
flex-wrap:wrap;
`
const Signup = styled.div`
width:470px;
background: #FFFFFF;
border-radius: 42px 0px 0px 42px;
z-index:2;
@media (max-width: 950px) {
    border-radius: 42px 42px 0px 0px;
  }
h1{
    margin-top:1rem;
    text-align:center;
    font-family:poppins;
    font-weight:600;
    font-size:1.5rem;
    line-height:2.5rem;
    color: #000000;
}
h5{
    margin-top:1.5rem;
    text-align:center;
    text-align:poppins;
    font-style:normal;
    font-weight:400;
    font-size:0.8rem;
    line-height:1rem;
    color: #000000;
}
form {
    // border:1px solid red;
    margin-top:0.5rem;
    display:flex;
    min-height:350px;
    flex-direction:column;
    justify-content:space-evenly;
    align-items: cent;
    label{
        input{
            padding:0.4rem;
            margin-left:6.5%;
            border-radius:5px;
            width:87%;
            border:1px solid black;
        }
    }
    input[type="submit"] {
        color:#ffffff;
        padding:0.2rem;
        margin-left:6.5%;
        width:87%;
        filter: drop-shadow(2px 5px 4px rgba(0, 0, 0, 0.25));
        background: #6F42C1;
        border-radius: 8px;
        opacity:0.9;
        transition: all 0.2s linear 0.1s;
        &:hover{
            background: #6F42C1;
                cursor:pointer;
                opacity:1;
            }
        }
}
.fullname{
    // border:1px solid red;
    display:flex;
    justify-content:space-evenly;
    input{
        padding:0.4rem;
        border:1px solid black;
        width:40%;
        border-radius:5px;
    }
}
p{
    text-align:center ;
}
`
const Pngdesign = styled.div`
background: #8F65DC;
width:470px;
border-radius:0 45px 45px 0;
z-index:2;
@media (max-width: 950px) {
    border-radius: 0px 0px 42px 42px;
  }
h1{
    line-height:2rem;
    text-align:center;
    color: #FFFFFF;
    font-family: Poppins;
    font-style: SemiBold;
    font-size: 1.2rem;
    // vertical-align: Top;
}
p{
    // position:relative;
    // border:1px solid yellow;
    line-height:2rem;
    text-align:center;
    color: #000000;
    font-family: Poppins;
    font-style: SemiBold;
    font-size: 1rem;
    // vertical-align: Top;
}
`
const Pngimage = styled.div`
position:relative;
// border:1px solid red;
height:327px;
img{
    // border:1px solid black;
}
hr{
    border:1px solid black;
    position:absolute;
    bottom:0px;
    left:60px;
    text-align:center;
    Width: 70%;
}
`
const Directsignuplinks = styled.div`
margin:0.5rem;
// border:1px solid red;
display:flex;
justify-content:center;

`
const Button = styled.button`
min-width:100px;
margin: 5px 40px;
padding: 5px 10px;
border:1px solid black;
background: #D9D9D9;
opacity: 0.8;
border: 0.5px solid #000000;
border-radius: 8px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1rem;
text-align: center;
transition: all 0.2s linear 0.1s;
&:hover{
background: #D9D9D9;
    cursor:pointer;
    opacity:1;
    border:1px solid #D9D9D9;
}
img{
    // border:1px solid red;
    display:inline;

}
`
function Register() {
    return (
        <Container >
            <Ellipse left="-68px" bottom="-5%" top="" height="259.42px" width="258.13px"></Ellipse>
            <Ellipse right="-50px" left="" top="-10%" height="250px" width="250px"></Ellipse>
            <Subcontainer>
                <Signup>
                    <h1>Sign Up</h1>
                    <h5>Enter Your Crediential Below To Register</h5>
                    <form action="">
                        <div className='fullname'>
                            {/* <label htmlFor="firstname"> */}
                            <input type="text" placeholder='First Name' id="firstname" />
                            {/* </label> */}
                            {/* <label htmlFor="lastname"> */}
                            <input type="text" placeholder='Last Name' id='lastname' />
                            {/* </label> */}
                        </div>
                        <label htmlFor="email">
                            <input type="email" name="email" id="email" placeholder='Email Address' />
                        </label>
                        <label htmlFor="phonenumber">
                            <input type="text" placeholder='Phone Number' id='phonenumber' />
                        </label>
                        <label htmlFor="password">
                            <input type="password" name="password" id="password" placeholder='Create Password' />
                        </label>
                        <label htmlFor="password1">
                            <input type="password" name="password1" id="password1" placeholder='Confirm Paswword' />
                        </label>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <p>Already have an account? <span className='text-blue-600'><Link to="/login">Sign in</Link></span></p>
                </Signup>
                <Pngdesign>
                    <Pngimage>
                        <img src={learning} alt="learning png" width="400px" height="300px" />
                        <hr />
                    </Pngimage>
                    <h1>Learn at the comfort of your own home</h1>
                    <p><span className='span1'>---</span> or Sign up with <span className='span2'>---</span></p>
                    <Directsignuplinks>
                        <Button><img src={google} alt="google" width="20px" height="20px"  /> Goggle</Button>
                        <Button><img src={google} alt="google" width="20px" height="20px"  /> Facebook</Button>
                    </Directsignuplinks>
                </Pngdesign>
            </Subcontainer>
        </Container>

    )
}


export default Register