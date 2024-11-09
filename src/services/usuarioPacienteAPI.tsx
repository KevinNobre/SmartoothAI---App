import axios from 'axios';
import { UsuarioPacienteDTO } from './types';

// Criação da instância do axios
const api = axios.create({
  baseURL: 'http://localhost:8080/', 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export const loginUser = async (email: string, senha: string) => {
  try {
    // Chama a API usando a instância 'api'
    const response = await api.get('/usuarios'); // Ajuste a URL conforme necessário

    // Verifica se a resposta contém os dados esperados
    if (response.data._embedded && response.data._embedded.usuarioPacienteDTOList) {
      const usuario = response.data._embedded.usuarioPacienteDTOList.find((usuario: any) => usuario.email === email && usuario.senha === senha);
      
      if (usuario) {
        // Login bem-sucedido, retorna o usuário
        return usuario;
      } else {
        throw new Error('Email ou senha não conferem');
      }
    } else {
      throw new Error('Resposta da API inválida');
    }
  } catch (error: unknown) {
    // Trato de erro: Se for um erro padrão, exibe a mensagem
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro ao tentar fazer login');
    } else {
      // Se o erro não for uma instância de Error, exibe mensagem genérica
      throw new Error('Erro desconhecido');
    }
  }
};

// Função para recuperar a senha
export const recoverPassword = async (email: string) => {
  try {
    // Aqui você faz um POST ou GET conforme a sua API
    const response = await api.post('/usuarios', { email });

    // Se a resposta for bem-sucedida, retorna a mensagem de sucesso
    if (response.data && response.data.message) {
      return response.data.message; // Mensagem de sucesso do servidor
    } else {
      throw new Error('Falha ao enviar solicitação de recuperação de senha');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro ao tentar recuperar a senha');
    } else {
      throw new Error('Erro desconhecido');
    }
  }
};

export const createUser = async (novoUsuario: UsuarioPacienteDTO) => {
    try {
      const response = await api.post('/usuarios', novoUsuario);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message || 'Erro ao criar usuário');
      } else {
        throw new Error('Erro desconhecido ao criar usuário');
      }
    }
  };
    

