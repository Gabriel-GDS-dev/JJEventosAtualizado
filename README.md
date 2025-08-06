# 🍽️ Cardápio Digital - Sistema de Catálogo de Produtos Gastronômicos

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://web.dev/responsive-web-design-basics/)

## 📋 Sobre o Projeto

Sistema web moderno e responsivo para exibição de cardápio digital, desenvolvido especialmente para restaurantes e estabelecimentos gastronômicos. O projeto oferece uma experiência visual atrativa com categorização de produtos, modal interativo e design otimizado para dispositivos móveis.

### 🎯 Características Principais

- **Interface Moderna**: Design elegante com gradientes e animações suaves
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Categorização Inteligente**: Filtros por categorias (Salgados, Doces, Saladas)
- **Modal Interativo**: Visualização detalhada dos produtos
- **Produtos Relacionados**: Sugestões automáticas baseadas na categoria
- **Navegação Fluida**: Transições suaves e experiência de usuário otimizada

## 🚀 Demonstração

### Desktop
![Desktop Preview](./docs/desktop-preview.png)

### Mobile
![Mobile Preview](./docs/mobile-preview.png)

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| HTML5 | - | Estruturação semântica |
| CSS3 | - | Estilização e responsividade |
| JavaScript | ES6+ | Funcionalidades interativas |
| CSS Grid | - | Layout responsivo |
| Flexbox | - | Alinhamento de componentes |

## 📁 Estrutura do Projeto

```
cardapio-digital/
├── 📄 index.html           # Página principal
├── 🎨 style.css           # Estilos CSS
├── ⚡ script.js           # Funcionalidades JavaScript
├── 📁 img/                # Diretório de imagens dos produtos
│   ├── entreveiro.jpeg
│   ├── maminha.jpeg
│   ├── paelladefrutosdomar.jpeg
│   └── ... (outras imagens)
├── 📁 docs/               # Documentação e screenshots
├── 📄 README.md           # Este arquivo
└── 📄 LICENSE             # Licença do projeto
```

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/cardapio-digital.git
cd cardapio-digital
```

### 2. Configuração das imagens
```bash
# Criar o diretório de imagens
mkdir img

# Adicionar suas imagens dos produtos no diretório img/
# Os nomes devem corresponder aos definidos no banco de dados (script.js)
```

### 3. Executar o projeto

#### Opção A: Servidor local simples (Python)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -SimpleHTTPServer 8000
```

#### Opção B: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com o botão direito no `index.html`
3. Selecione "Open with Live Server"

#### Opção C: Servidor web (Apache/Nginx)
Copie os arquivos para o diretório do seu servidor web.

### 4. Acessar a aplicação
Abra seu navegador e acesse:
```
http://localhost:8000
```

## 📊 Banco de Dados de Produtos

Os produtos são gerenciados através de um objeto JavaScript no arquivo `script.js`:

```javascript
const productsDatabase = {
  salgados: [
    {
      id: "entreveiro",
      nome: "Entreveiro",
      categoria: "salgados",
      descricao: "Descrição do produto...",
      imagem: "entreveiro.jpeg",
      destaque: true
    }
    // ... outros produtos
  ],
  doces: [...],
  saladas: [...]
};
```

### 🔧 Adicionando Novos Produtos

1. **Adicione a imagem** no diretório `img/`
2. **Edite o arquivo `script.js`**:
```javascript
{
  id: "novo-produto",
  nome: "Nome do Produto",
  categoria: "salgados", // ou "doces" ou "saladas"
  descricao: "Descrição detalhada do produto...",
  imagem: "nome-da-imagem.jpeg",
  destaque: false // true para produtos em destaque
}
```

## 🎨 Personalização de Cores

As cores principais podem ser modificadas no arquivo `style.css`:

```css
:root {
  --primary-brown: #7E4A39;    /* Marrom principal */
  --secondary-brown: #5d3428;   /* Marrom escuro */
  --accent-gold: #C6AE5B;       /* Dourado */
  --light-gold: #b8a049;        /* Dourado escuro */
}
```

## 📱 Recursos Responsivos

- **Desktop**: Layout em grid com 3 colunas
- **Tablet**: Layout em grid com 2 colunas
- **Mobile**: Layout em coluna única
- **Modal**: Adaptação automática ao tamanho da tela
- **Imagens**: Otimização automática com `object-fit`

## 🧪 Funcionalidades Implementadas

### ✅ Core Features
- [x] Exibição de produtos por categoria
- [x] Sistema de filtros
- [x] Modal de detalhes
- [x] Produtos relacionados
- [x] Design responsivo
- [x] Animações e transições
- [x] Navegação por teclado (ESC para fechar modal)

### 🔄 Funcionalidades Futuras
- [ ] Sistema de busca
- [ ] Carrinho de compras
- [ ] Integração com WhatsApp
- [ ] Sistema de favoritos
- [ ] Modo escuro
- [ ] Múltiplos idiomas
- [ ] Integração com CMS

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### 📝 Padrões de Commit
```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona testes
```

## 🐛 Relatório de Bugs

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/cardapio-digital/issues) com:

- **Descrição** do problema
- **Passos** para reproduzir
- **Comportamento** esperado vs atual
- **Screenshots** (se aplicável)
- **Ambiente** (navegador, versão, sistema operacional)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Inspiration de design: [Material Design](https://material.io/)
- Ícones: [Lucide Icons](https://lucide.dev/)
- Fontes: [Google Fonts](https://fonts.google.com/)
- Gradientes: [UI Gradients](https://uigradients.com/)

## 📞 Contato

- **Email**: seu.email@exemplo.com
- **LinkedIn**: [Seu Nome](https://linkedin.com/in/seu-perfil)
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

## 📈 Status do Projeto

```
🟢 Em desenvolvimento ativo
🔄 Versão atual: 1.0.0
📅 Última atualização: Agosto 2025
```

---

<div align="center">

**[⬆ Voltar ao topo](#-cardápio-digital---sistema-de-catálogo-de-produtos-gastronômicos)**

Made with ❤️ and ☕

</div>
