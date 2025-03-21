Pokémon Adventure - Jogo de Aventura com Ash e seus Pokémons

[Descrição do Projeto]

Este projeto é um jogo de aventura inspirado no universo Pokémon, onde o jogador controla Ash e deve explorar o cenário para encontrar três Pokémons específicos: Charmander, Pikachu e Zubat. O objetivo do jogo é localizar todos os Pokémons antes que o tempo se esgote. O jogo foi desenvolvido com HTML, CSS e JavaScript, proporcionando uma experiência simples, divertida e interativa.

O jogo utiliza animações e manipulação do DOM (Document Object Model) para o controle dos personagens e efeitos visuais.

🎮 Como Funciona o Jogo

O jogador controla Ash e navega pelo cenário usando as setas do teclado (⬅️⬆️⬇️➡️). O objetivo é encontrar os Pokémons Charmander, Pikachu e Zubat, que estão escondidos no mapa. Cada Pokémon é exibido na tela assim que o jogador se aproxima da área correta.

Condições de vitória:

O jogador vence o jogo quando encontra todos os três Pokémons (Charmander, Pikachu e Zubat) dentro do tempo estipulado.
Após encontrar todos os Pokémons, o fundo do jogo muda para uma imagem de vencedor (exibindo uma vitória).
Condições de derrota:

Se o jogador não conseguir encontrar todos os Pokémons dentro do tempo limite, o jogo termina, exibindo uma tela de "Game Over".

Controles:

Setas do Teclado: Movimentam o Ash pelo mapa.

⬅️: Move para a esquerda.
➡️: Move para a direita.
⬆️: Move para cima.
⬇️: Move para baixo.

🛠️ Tecnologias Utilizadas

HTML5: Utilizado para estruturar o conteúdo da página e organizar os elementos visuais do jogo.

CSS3: Responsável pelo design e posicionamento dos elementos no jogo. Utilizado para criar a interface visual e aplicar o background das diferentes telas (fundo do jogo, game over, vitória).

JavaScript (ES6): Manipula o comportamento do jogo, controla a movimentação dos personagens, gerenciamento de eventos (teclado, clique), temporizadores, e lógica de vitória/derrota.

🧩 Recursos e Funcionalidades

Movimentação do Personagem (Ash):

Ash pode ser movido usando as teclas de seta do teclado, e ele se movimenta com suavidade, enquanto o jogo atualiza sua posição conforme as coordenadas do DOM.

Tempo Limite:

O jogo possui um contador de tempo que começa em 60 segundos. O jogador precisa encontrar todos os Pokémons dentro desse limite para vencer.

O tempo é exibido em tempo real, sendo decrementado a cada segundo.

Música de Fundo:

O jogo inclui uma música de fundo controlada por um botão de 'play/pause'. O volume pode ser ajustado e o usuário pode alternar a música entre ligada e desligada.

Condições de Vitória e Derrota:

Vitória: O jogo exibe uma tela especial de vitória se o jogador encontrar todos os Pokémons antes do tempo acabar.

Derrota: O jogo exibe uma tela de "Game Over" se o tempo acabar sem que o jogador tenha encontrado todos os Pokémons.

Resetação do Jogo:

Existe um botão de reset que reinicia a página, permitindo que o jogador jogue novamente sem precisar recarregar manualmente.

📂 Estrutura de Arquivos do Projeto
pgsql
Copiar
Editar
📦 Pokemon-Adventure
├── 📁 assets
│   ├── 📁 icons
│   │   └── on.png
│   │   └── off.png
│   ├── 📁 images
│   │   └── game-over.jpg
│   │   └── winner.jpg
│   └── 📁 sprites
│       └── ash.png
│       └── charmander.png
│       └── pikachu.png
│       └── zubat.png
├── 📄 index.html
├── 📄 style.css
└── 📄 script.js

Arquivos principais:

index.html: Arquivo HTML principal que contém a estrutura da página e onde o jogo é renderizado.
style.css: Arquivo CSS que estiliza os elementos visuais, posicionamento dos personagens, e os backgrounds.
script.js: Arquivo JavaScript que contém toda a lógica do jogo, como movimentação dos personagens, temporizadores, e condições de vitória e derrota.

🚀 Como Rodar o Projeto Localmente

Requisitos:

Um navegador moderno que suporte JavaScript, como Google Chrome, Firefox ou Edge.

Passo a Passo:

Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/pokemon-adventure.git

Navegue até a pasta do projeto:

bash
Copiar
Editar
cd pokemon-adventure

Abra o arquivo index.html em seu navegador:

Basta abrir o arquivo no navegador ou arrastar o arquivo index.html para uma aba aberta no navegador.

Divirta-se jogando!

📚 Possíveis Melhorias Futuras

Níveis de Dificuldade: Adicionar diferentes níveis de dificuldade, aumentando ou diminuindo o tempo ou o número de Pokémons a serem encontrados.

Animações Avançadas: Implementar animações mais sofisticadas, como efeitos de transição mais suaves para os personagens e cenários.

Pontuação: Criar um sistema de pontuação que exiba o desempenho do jogador com base no tempo restante.

Multiplayer: Implementar um modo multiplayer, onde dois jogadores podem competir para ver quem encontra os Pokémons mais rápido.

🏆 Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas ideias. Se você encontrou algum bug ou tem sugestões de aprimoramento, por favor, abra uma issue ou envie um pull request.

📞 Contato

Caso tenha dúvidas ou sugestões, entre em contato pelo GitHub ou envie um e-mail para:

GitHub: https://github.com/AdLrGianotti

Linkedin: https://www.linkedin.com/in/adrianogianotti-qa-engineer/

Email: adlrgianotti@hotmail.com

