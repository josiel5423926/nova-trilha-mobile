<?php include("./conexao.php");?>

<?php

$query = $pdo->query("select * from vagas");


$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
 foreach ($res[$i] as $key => $value) {
 }
    $dados[] = array(
        'id' => $res[$i]['id'],
        'vaga' => $res[$i]['vaga'],
       'descricao' => $res[$i]['descricao'],
       'empregador' => $res[$i]['empregador'],
       'localizacao' => $res[$i]['localizacao'],
       'salario' => $res[$i]['salario'],   
   
    );

    }

    if(count($res) > 0){
           $result = json_encode(array('success'=>true, 'result'=>$dados));

       }else{
           $result = json_encode(array('success'=>false, 'result'=>'0'));

       }
       echo $result; 
?>