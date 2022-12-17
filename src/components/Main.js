import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Logo from '../images/Logo.png';
import './Main.css';

let Main = () => {




        const [text, setText] = React.useState("");
        const [list, setList] = React.useState([]);
        const [show, setShow] = React.useState(false);

        /**Add Item */
        const AddItem = () => {
            if(!text){
             alert("Add the tasks first!!")
            }
           else{
            setShow(true);
            setText("");
            setList([...list, text]);
            
            
           }
        }
      /*Remove Item*/
        const RemoveItem = (id) => {

            let updateItem = list.filter((element, index) => {
                return id !== index;
            })
            setList(updateItem);
        }


        /*Get Year */
        const year = new Date().getFullYear();



        return ( <>


                <Container id="container">
                <Row>
                <Col style={{display:"flex",justifyContent: "center"}}>

                <Card style = {{width: '23rem',margin:"40px"}}>
                    <Card.Title style={{display:"flex",justifyContent: "center"}}>
                    <img src={Logo} width="50" height="50" alt='logo'/>
                    </Card.Title>
            
                <Card.Title style={{textAlign:"center",fontSize:"31px",fontFamily: "'Rubik Vinyl', cursive",fontWeight:"bold"}}>TudoList</Card.Title>
                
                <Card.Body style = {{"height": "150px", "borderRadius": "15px"}}>


                
                <Card.Title >

                
                <FormControl fullWidth sx = {{m: 1}}
                variant = "standard" >
                <InputLabel htmlFor = "standard-adornment-amount" > Add Tasks </InputLabel> 
                <Input id = "standard-adornment-amount"
                type = "text"
                value = {text}
             
                
                onChange = {(e) => setText(e.target.value)}
                endAdornment = {
                    
                    <InputAdornment position = "end" >
                    
                    <Button type = "button"
                    onClick = {AddItem}>
                    
                    <AddCircleIcon sx={{ fontSize: 40}} style={{marginBottom:"10px",color:"pink"}}  >
                    </AddCircleIcon>
                    </Button> 
                    </InputAdornment>
                }/>

                </FormControl> </Card.Title> </Card.Body>

                <ListGroup.Item >

                    {show? <h6>Today's Tasks</h6>:null}
                  
                    {
                    list.map((item, index) => {
                        return ( 
                        <>
     
                            <Alert key = {index}
                            style={{ backgroundColor: "antiquewhite",color:"#000"}}
                            action = {
                                <Button color = "inherit"
                                key = {index}
                                size = "small"
                                type = "button"
                                onClick = {() => RemoveItem(index)  }>
                                <DeleteIcon></DeleteIcon> 
                                </Button> }>
                            {item} </Alert>             




                            </>
                        )
                    })
                }

                </ListGroup.Item>


                
                <Card.Body style = {{"textAlign": "center"}}>
                
                <Card.Link href ="https://www.linkedin.com/in/aakash-kasturiya-3b86a1115/" style = {{"textDecoration": "none"}} > &#169; {year} aakashkasturiya</Card.Link>

    
      </Card.Body>

    </Card>

        </Col>
      </Row>
    </Container>
        </>

    );

}



export default Main;