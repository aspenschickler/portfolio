import React,{useState} from "react";
import styled from "styled-components";


const MenuLabel = styled.label`
  	position: fixed;
	top: 0;
  	right: 1.5rem;
  	border-radius: 50%;
  	height: 7rem;
  	width: 7rem;
  	cursor: pointer;
  	z-index: 1000;
  	box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
	text-align: center;
`

const Icon = styled.span`
	position: relative;
	background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  	width: 5rem;
  	height: 8px;
  	display: inline-block;
  	margin-top: 3.5rem;
  	transition: all 0.3s;
  	&::before,
  	&::after {
    		content: "";
    		background-color: black;
    		width: 3rem;
    		height: 2px;
    		display: inline-block;
    		position: absolute;
    		left: 0;
    		transition: all 0.3s;
  	}
  	&::before {
		width: 5rem;
    		height: 8px;
		top: ${(props) => (props.clicked ? "0" : "-1rem")};
    		transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  	}
  	&::after {
		width: 5rem;
		height: 8px;
    		top: ${(props) => (props.clicked ? "0" : "1rem")};
    		transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  	}
  	${MenuLabel}:hover &::before {
    		top: ${(props) => (props.clicked ? "0" : "-1.6rem")};
  	}
  	${MenuLabel}:hover &::after {
    		top: ${(props) => (props.clicked ? "0" : "1.6rem")};
  	}
`

const Title = () => {
  
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
  
  	return (
    		<>
        		<MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                		<Icon clicked={click}>&nbsp;</Icon>
        		</MenuLabel>
    		</>
  	)
}

export default Title
