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

const StyledUl = styled.ul`
	font-family: vortice-concept, sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 2rem;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 0px;
    font-weight: bold;
	position: fixed;
	right: 1.8rem;
	top: 6.5rem;
	display: block;
	text-align: right;
`

const StyledLi = styled.li`
    float: inline;
    height: 100%;
    padding: 10px;
	text-align: right;
`

const DropDownContent = styled.div`
	text-align: right;
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`

const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`

const StyledA = styled.a`
    display: inline-block;
    text-decoration: none;
	color: black;
	text-align: right;
`

const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: right;
    padding: 10px;
`

const Title = () => {
  
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
  
  	return (
    		<>
        		<MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                		<Icon clicked={click}>&nbsp;</Icon>
        		</MenuLabel>

				<StyledUl>
					<StyledLi>
						<StyledA onClick={() => this.handleClick("Home")}>
							About
						</StyledA>
					</StyledLi>
					<StyledLi>
						<StyledA onClick={() => this.handleClick("News")}>
							Skills
						</StyledA>
					</StyledLi>
					<StyledLi>
						<StyledA onClick={() => this.handleClick("News")}>
							Contact
						</StyledA>
					</StyledLi>
					<DropDownLi>
						<StyledA onClick={() => this.handleClick("DropDown")}>
							Games
						</StyledA>
						<DropDownContent>
							{" "}
							<SubA onClick={() => this.handleClick("Link1")}>
								Link 1
							</SubA>
							<SubA onClick={() => this.handleClick("Link2")}>
								Link 2
							</SubA>
							<SubA onClick={() => this.handleClick("Link3")}>
								Link 3
							</SubA>
						</DropDownContent>
					</DropDownLi>
				</StyledUl>
    		</>
  	)
}

export default Title
