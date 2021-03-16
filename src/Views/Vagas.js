
import React,{useState, useEffect}  from 'react';
import {  Button,ScrollView, Text, View  } from 'react-native';
import axios from 'axios'; // npm i axios 
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';



import TextCenter from "../components/TextCenter";

const Vagas = (props) => {
 

  const [lista, setLista] = useState([]);
  const [id, setId] = useState('');
  const [vaga, setVaga] = useState('');
  const [descricao, setDescricao] = useState('');
  const [empregador, setEmpregador] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [salario, setSalario] = useState('');
  

  useEffect(()=>{
    ListarDados();
  },[])
  
  async function ListarDados(){
    const res = await axios.get('http://localhost/nova-trilha-mobile/api/Listar.php');
    setLista(res.data.result);
    console.log(res.data.result);
  }


  return (
   
    <ScrollView>
      <View  style={{ flex: 1, 
    FlexDirectin: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 500,
    width: 500  
    
    
    }} > 


     <div className="container d-block "  > 
        <h2>Vagas</h2>
        
    
      
      <Card >
      {lista.map(item =>(
             
        <CardBody>
          <CardTitle  tag="h2"  key={item.id}>{item.vaga}</CardTitle>

          <CardText >{item.descricao}</CardText>
          <CardText >{item.empregador}</CardText>
          <CardText> {item.localizacao}</CardText>
          <CardText>R$ {item.salario}</CardText>
          <Button
               
                  title="Cadastre-se"
                  color="#2196F3"
                  accessibilityLabel="Learn more about this purple button"
                />
        </CardBody>
      /*   <hr></hr> */
    
        ))}
      </Card>
      
    </div>
     

   

  </View>
    
</ScrollView>

  );
};

export default Vagas;


