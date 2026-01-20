# Guia de Contribuição

Obrigado por contribuir com o projeto! Este guia ajudará você a entender como contribuir de forma eficaz.

## 📋 Pré-requisitos

- Node.js instalado (versão recomendada na package.json)
- Git configurado
- Acesso ao repositório

## 🚀 Configuração Inicial

1. Clone o repositório:
```bash
git clone https://github.com/roraimafullstackdevs/Projetolandingcomunidade.git
cd Projetolandingcomunidade
```

2. Instale as dependências:
```bash
npm install
```

3. Configure os remotes (se necessário):
```bash
git remote -v
```

## 🔄 Fluxo de Contribuição

### 1. Antes de Começar

Sempre sincronize com a branch `develop`:
```bash
git checkout develop
git pull origin develop
```

### 2. Criar sua Branch

Crie uma branch a partir de `develop`:
```bash
# Para nova funcionalidade
git checkout -b feature/nome-da-funcionalidade

# Para correção de bug
git checkout -b bugfix/nome-do-bug

# Para hotfix (a partir de main)
git checkout main
git pull origin main
git checkout -b hotfix/nome-do-hotfix
```

### 3. Desenvolver

- Faça suas alterações
- Teste localmente: `npm run dev`
- Siga as convenções de código do projeto
- Faça commits pequenos e descritivos

### 4. Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Exemplos:
git commit -m "feat: adiciona novo componente de header"
git commit -m "fix: corrige bug no formulário de contato"
git commit -m "docs: atualiza documentação do gitflow"
git commit -m "style: formata código com prettier"
git commit -m "refactor: reorganiza estrutura de componentes"
git commit -m "test: adiciona testes para o componente Button"
git commit -m "chore: atualiza dependências"
```

### 5. Push

```bash
git push origin feature/sua-branch
```

### 6. Pull Request

1. Acesse o GitHub
2. Crie um Pull Request para `develop`
3. Preencha a descrição:
   - O que foi alterado
   - Por que foi alterado
   - Como testar
4. Aguarde code review
5. Faça ajustes se solicitado
6. Após aprovação, o PR será mergeado

## 📝 Padrões de Código

### Estrutura de Arquivos

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas/views
├── styles/        # Estilos globais
├── utils/         # Funções utilitárias
└── assets/        # Imagens, fontes, etc
```

### Nomenclatura

- **Arquivos de Componentes**: PascalCase (ex: `Button.tsx`)
- **Arquivos de Utilitários**: camelCase (ex: `formatDate.ts`)
- **Arquivos de Estilo**: kebab-case (ex: `button-styles.css`)
- **Branches**: lowercase com hífen (ex: `feature/nova-funcionalidade`)

### Code Style

- Use 2 espaços para indentação
- Use aspas simples para strings
- Sempre use ponto e vírgula
- Siga as regras do ESLint (se configurado)

## 🧪 Testes

Antes de criar um Pull Request:

```bash
# Executar testes (se houver)
npm test

# Executar lint (se houver)
npm run lint

# Build de produção
npm run build

# Testar localmente
npm run dev
```

## 🔍 Code Review

### Para Revisores

- Verifique se o código segue os padrões do projeto
- Teste as mudanças localmente
- Verifique se há quebras de funcionalidade
- Seja construtivo nos comentários

### Para Autores

- Responda a todos os comentários
- Faça as alterações solicitadas
- Seja receptivo ao feedback
- Atualize o PR conforme necessário

## 🚫 O Que NÃO Fazer

- ❌ Não commitar diretamente em `main`, `develop` ou `homol`
- ❌ Não incluir arquivos de build (`dist/`, `node_modules/`)
- ❌ Não fazer commits gigantes (prefira commits pequenos e focados)
- ❌ Não fazer merge manual sem aprovação
- ❌ Não ignorar conflitos de merge
- ❌ Não fazer push de credenciais ou dados sensíveis

## ✅ Checklist Antes do PR

- [ ] Código testado localmente
- [ ] Commits seguem Conventional Commits
- [ ] Sem arquivos desnecessários (build, node_modules, etc)
- [ ] Código segue padrões do projeto
- [ ] Documentação atualizada (se necessário)
- [ ] Branch atualizada com develop
- [ ] Conflitos resolvidos

## 🆘 Precisa de Ajuda?

- Consulte [GITFLOW.md](./GITFLOW.md) para fluxo de branches
- Leia [README.md](./README.md) para configuração do projeto
- Abra uma issue para discussões
- Entre em contato com a equipe

## 📚 Recursos Úteis

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

---

**Obrigado por contribuir! 🎉**
