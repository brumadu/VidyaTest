VidyaTest
============

Obrigado por tirar tempo para meu projeto React Native! Em 7 dias desenvolvi um aplicativo mobile composto por nove telas. O foco principal é a implementação de funcionalidades para gerenciamento de clientes, produtos e pedidos.

Indice
-----------------

1.  [Intro](#intro)
2.  [Tech](#tech)
3.  [Folder Structure](#folder-structure)
4.  [Instalar](#instalar)


Intro
------------

Metas do projeto:
Gerenciamento de components: implemente telas e funcionalidades para gerenciar informações de clientes, produtos e pedidos.
Boas Praticas: manter boa organização de código e utilizar boas práticas de programação.

É possível verificar um showcase do projeto acessando esse link: https://youtu.be/mfWg9BMvoKU

Tech 
----------

**React Native:** Como framework principal para o desenvolvimento do aplicativo.
**React Navigation:** Para a navegação entre as diferentes telas do aplicativo.
**Redux Toolkit:** Para gerenciamento eficiente do estado da aplicação.
**React Hook Form:** Para a manipulação e gerenciamento de formulários.
**Yup:** Para adicionar validações aos formulários.
**Styled Components:** Para estilização dos componentes.
**Axios:** Para realizar requisições HTTP.
**RealmDB:** Para o armazenamento local dos dados do aplicativo.
**Image-Picker:** Para o upload de imagens e utilização dentro do aplicativo.

Estrutura de Pastas
----------------

VidyaTest/
└── src/
    ├── components/ # O modelo de componentização utilizado foi o Atomic Design, ele traz vários beneficios como organização de código e modulação de componentes.
    │   ├── atoms/
    │   ├── molecules/
    │   └── organisms/
    │       ├── Client # O modelo atomico trás o beneficio de poder organizar os componentes por sua função no aplicativo, facilitando a busca de arquivos.
    │       ├── Order
    │       └── Product
    ├── routes/
    │   ├── stack.routes.ts # A navegação no aplicativo acontece por uma Stack de rotas, onde possui uma tab responsável pela navegação nas telas principais.
    │   └── tab.routes.ts
    ├── schemas/  # Declaração de conteúdos do RealmDB
    │   ├── ClientSchema.ts
    │   ├── OrderSchema.ts
    │   └── ProductSchema.ts
    ├── screens/ # Declaração das telas principais, possuem somente uma chamada para sua estrutura referente em organismos.
    │   ├── Client/ 
    │   ├── Order/ 
    │   └── Product/
    ├── services/
    │   ├── axios/
    │   ├── realm/ # Os componentes para receber e enviar dados do RealmDB
    │   ├── utils/
    │   └── yup/  # Validadores do yup componentizados
    ├── store/  # Implementação de gerenciamento de estado pelo redux, suas ações são declaradas pelo Redux Toolkit, tirando a necessidade de declarar ações separadamente
    │   └── reducers/
    └── styles  

Instalar
------------

Para instalar em sua maquina:

1.  Clone o repositório: `git clone https://github.com/your-username/project.git`
2.  Navegue até a pasta: `cd project`
3.  Instale as dependencias: `npm install`
4.  Se estiver utilizando um emulador IOS: `cd ios` && `pod install`, logo em seguida volte para a pasta principal `cd ..`
5.  Inicie a aplicação: `npm run android` ou `npm run ios` dependendo do sistema
