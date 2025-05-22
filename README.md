# Smartooth AI

Projeto desenvolvido por alunos do segundo ano de Análise e Desenvolvimento de Sistemas, atendendo às solicitações feitas pela OdontoPrev durante o Challenge 2024/2 da FIAP.

JULIANA MOREIRA DA SILVA – RM: 554113

KEVIN CHRISTIAN NOBRE – RM: 552590

SABRINA COUTO XAVIER – RM: 552728


## Definição do Projeto

### Objetivo do Projeto
O SmarTooth AI é um sistema inteligente voltado para otimizar serviços odontológicos, integrando inteligência
artificial (AI) e Machine Learning (ML) para proporcionar uma experiência personalizada e eficiente aos
usuários.
Nosso sistema oferece um filtro intuitivo de procedimentos odontológicos, destacando em quais planos de
saúde cada serviço está incluído, com explicações claras e acessíveis sobre os tratamentos disponíveis.
Além disso, o Smartooth AI conta com um indicador de Dicas que, utilizando machine learning, sugere
orientações de saúde bucal personalizadas com base no histórico de consultas e prontuários dos pacientes. O
sistema também inclui um programa de recompensas, onde os usuários acumulam pontos ao manter suas
consultas regulares e praticar hábitos de saúde bucal, registrados em seu formulário. Esses pontos podem ser
trocados por descontos em tratamentos dentários, proporcionando uma vantagem exclusiva aos pacientes.
Outro diferencial do nosso sistema são as recomendações personalizadas em tempo real, que auxiliam o
usuário com sugestões de cuidados e procedimentos específicos de acordo com o seu perfil e histórico
clínico.

Nosso objetivo é simples: reduzir sinistros nos planos odontológicos e melhorar a saúde bucal dos usuários,
oferecendo orientações e incentivos baseados em dados reais e comportamentos saudáveis. O nome
“Smartooth” reflete bem a ideia por trás do projeto, combinando “smart” (inteligente) com “tooth” (dente),
representando nossa proposta de unir tecnologia e odontologia em uma solução inovadora.

### Arquitetura do Sistema
O Smartooth AI foi desenvolvido utilizando uma arquitetura monolítica, onde toda a lógica da aplicação reside em um único código-base. Essa abordagem foi escolhida considerando os seguintes fatores:
- Simplicidade no desenvolvimento e manutenção: Permite uma implementação mais ágil e centralizada, facilitando correções e melhorias contínuas.
- Menor complexidade operacional: Não há necessidade de gerenciar múltiplos serviços independentes, reduzindo a sobrecarga de infraestrutura e comunicação entre microsserviços.
- Facilidade na integração com o banco de dados Oracle: Garante um fluxo de dados eficiente sem a necessidade de camadas adicionais para comunicação.
- Escalabilidade planejada: Apesar da abordagem monolítica inicial, o sistema foi estruturado de forma modular, permitindo futuras transições para uma arquitetura baseada em microsserviços, se necessário.

A API do Smartooth AI foi projetada seguindo boas práticas de desenvolvimento, utilizando princípios SOLID e garantindo modularidade nas funcionalidades para facilitar futuras expansões.

### Escopo
O projeto abrange o desenvolvimento de um sistema que:
- Realiza o gerenciamento de usuários pacientes, incluindo registro e autenticação.
- Fornece funcionalidades de CRUD (Create, Read, Update, Delete) para gerenciar os dados dos usuários pacientes.
- Implementa a lógica de negócios necessária para validações e operações específicas, como a validação de e-mail e cálculo de idade.
- Estabelece uma estrutura de repositório para o acesso e manipulação de dados no banco de dados.
- Utiliza mapeamento de entidades para garantir que as operações do banco de dados sejam realizadas de maneira eficaz.

### Requisitos Funcionais
- O sistema deve permitir o registro de novos usuários pacientes com informações básicas.
- Os usuários devem poder visualizar, editar e deletar seus dados.
- O sistema deve validar o e-mail dos usuários antes de permitir o registro.
- O cálculo da idade deve ser realizado com base na data de nascimento informada.

### Requisitos Não Funcionais
- O sistema deve ser seguro, garantindo que as informações dos usuários estejam protegidas.
- A aplicação deve ser escalável para suportar um número crescente de usuários.
- O tempo de resposta para operações de CRUD deve ser minimizado para garantir uma boa experiência do usuário.
- O sistema deve ser desenvolvido seguindo boas práticas de programação e design de software, utilizando princípios de SOLID.

---
## 📊 Diagrama 1: Fluxo de Informações e Navegação no Aplicativo
Este diagrama representa o fluxo geral de telas e navegação no aplicativo SmartoothAI. Ele demonstra como o usuário interage com o sistema desde o início até acessar as funcionalidades disponíveis após a autenticação.

![Fluxo de Informação e Processo de Autenticação ](https://github.com/user-attachments/assets/8ea91945-5dd5-42ca-b958-2ac5168677a5)

✏️ Descrição:

Início: Tela inicial do app, normalmente usada para verificações de sessão ou redirecionamento.

Login / Registro: Pontos de entrada para autenticação do usuário.

Dashboard Principal: Primeira tela visualizada após o login, onde dados e atalhos principais são apresentados.

Menu Principal: Permite navegar entre funcionalidades importantes do app:

Perfil do Usuário: Edição de dados pessoais e preferências.

Histórico de Consultas: Exibe registros anteriores de atendimentos.

Agendamento de Consulta: Funcionalidade para marcar novas consultas.

Configurações: Ajustes gerais do aplicativo.

Sair: Finaliza a sessão do usuário.

Este fluxo ajuda a visualizar a experiência do usuário (UX) e pode ser útil para desenvolvedores, designers e testers compreenderem a estrutura geral do aplicativo.

---

## 🔐 Diagrama 2: Processo de Autenticação
Este segundo gráfico detalha o fluxo de autenticação, incluindo os passos para login, logout e registro de usuários.

![Fluxo de Informação e Processo de Autenticação](https://github.com/user-attachments/assets/7962e438-f264-46ba-a829-2809b6df2aed)


✏️ Descrição:

O usuário abre o aplicativo.

O sistema verifica automaticamente se há uma sessão ativa:

Se sim, o usuário é direcionado diretamente para o Dashboard Principal.

Se não, o usuário vê a tela de login.

A partir da tela de login, o usuário pode:

Inserir suas credenciais e acessar o sistema.

Navegar para a tela de registro caso ainda não possua conta.

Uma vez autenticado, o usuário permanece logado até executar o logout, que encerra a sessão e o redireciona à tela inicial.

Este diagrama é essencial para garantir que os processos de segurança e navegação estejam coerentes e funcionais.


---


### Exemplo de Teste

- Requisição de Login com utilização da API + Banco de Dados Oracle

  ![Login](https://github.com/user-attachments/assets/6a5f669b-d6ab-4cd7-b532-b0c1db41b646)

---

### 📋 Requisitos para Execução

## 🧪 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile multiplataforma.
- **Expo**: Ferramenta que simplifica o processo de build, deploy e teste de apps React Native.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Expo Router**: Gerenciador de rotas baseado na estrutura de pastas do projeto.
- **React Navigation**: Navegação entre telas (utilizado via Expo Router).
- **AsyncStorage**: Armazenamento local de dados do usuário, como sessão e preferências.

Para executar o aplicativo SmartoothAI em seu ambiente de desenvolvimento, é necessário atender aos seguintes requisitos:

- **Sistema Operacional**:
  - Windows 10 ou superior
  - macOS 11 ou superior
  - Distribuições Linux compatíveis com Node.js e Expo

- **Ferramentas Necessárias**:
  - [Node.js (versão LTS recomendada)](https://nodejs.org/)
  - [Expo CLI](https://docs.expo.dev/get-started/installation/)
  - [Yarn](https://classic.yarnpkg.com/) ou npm
  - Editor de código (VS Code recomendado)
  - Emulador Android/iOS ou dispositivo físico com o aplicativo **Expo Go**

### 🚀 Instruções de Instalação e Execução

## Instalar APK 

Se preferir instalar diretamente o APK no Android:

- Faça o download do arquivo `.apk`. na pasta do projeto.
- Transfira para o dispositivo e instale manualmente (habilite a instalação de fontes desconhecidas).


      
