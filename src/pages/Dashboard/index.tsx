import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard:React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="Teste">
        <img src="https://avatars1.githubusercontent.com/u/15129047?s=460&u=00c277245c45ec6196cf35be058662ae3b94e7fb&v=4" alt="Pedro Mapelli" />
        <div>
          <strong>repositorio</strong>
          <p>Descrição do form</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
