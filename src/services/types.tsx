export interface UsuarioPacienteDTO {
    usuarioPacienteId: number;
    nome: string;
    sobrenome: string;
    email: string;
    dataNasc: string; 
    genero: string;
    cep: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    contato: string;
    descontos?: number; 
    senha: string;
  }
  
  