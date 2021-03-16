import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import Saopaulo from '../../assets/img/saopaulo.png';
import Maos from '../../assets/img/3maos.jpg';
import Pes from '../../assets/img/pes.jpg';


const items = [
  {
    src: Saopaulo,
    altText: 'Propostas de emprego aqui cadastradas estão visíveis a candidata, tendo as vagas exclusividade em contratar candidatas Egressas do Sistema Prisional de São Paulo.',
    caption: 'Propostas de emprego aqui cadastradas estão visíveis a candidata, tendo as vagas exclusividade em contratar candidatas Egressas do Sistema Prisional de São Paulo.',
    header: 'Diferencial',
    key: '1'
  },
  {
    src: Maos,
    altText: 'Com o site "Nova Trilha" é possível que egressas possam encontrar oportunidades de trabalho de acordo com seus perfis. A grande vantagem do "Nova Trilha" é o viés social voltado para a inclusão profissional de egressas.',
    caption: 'Com o site "Nova Trilha" é possível que egressas possam encontrar oportunidades de trabalho de acordo com seus perfis. A grande vantagem do "Nova Trilha" é o viés social voltado para a inclusão profissional de egressas.',
    header: 'Oportunidade',
    key: '2'
  },
  {
    src: Pes,
    altText: 'O Programa "Nova Trilha" oferece parcerias com instituiçoẽs experientes no âmbito de contratação de candidatas egressas, estabelecendo conexões com empresas contratantes com esse perfil social.',
    caption: 'O Programa "Nova Trilha" oferece parcerias com instituiçoẽs experientes no âmbito de contratação de candidatas egressas, estabelecendo conexões com empresas contratantes com esse perfil social.',
    header: 'Parcerias',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;