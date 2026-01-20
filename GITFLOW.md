# Gitflow Strategy

Este projeto segue a estratégia de Gitflow com três branches principais para gerenciar o ciclo de vida do desenvolvimento.

## Branches Principais

### 🚀 `main` - Produção
- **Propósito**: Branch de produção
- **Descrição**: Contém código estável e pronto para produção
- **Deploys**: Automaticamente para ambiente de produção
- **Proteção**: Branch protegida - apenas merge via Pull Request
- **Origem dos merges**: Apenas da branch `homol` após aprovação

### 🔧 `develop` - Desenvolvimento
- **Propósito**: Branch de desenvolvimento
- **Descrição**: Integração contínua de novas features
- **Deploys**: Pode deployar para ambiente de desenvolvimento
- **Proteção**: Branch protegida - apenas merge via Pull Request
- **Origem dos merges**: De branches `feature/*`, `bugfix/*`

### ✅ `homol` - Homologação
- **Propósito**: Branch de homologação/staging
- **Descrição**: Ambiente para testes e validação antes da produção
- **Deploys**: Automaticamente para ambiente de homologação
- **Proteção**: Branch protegida - apenas merge via Pull Request
- **Origem dos merges**: Da branch `develop` quando features estão prontas para teste

## Fluxo de Trabalho

### 1. Desenvolvimento de Nova Feature
```bash
# Criar branch a partir de develop
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature

# Desenvolver e commitar
git add .
git commit -m "feat: descrição da feature"

# Push para o repositório
git push origin feature/nome-da-feature

# Criar Pull Request para develop
```

### 2. Correção de Bug
```bash
# Criar branch a partir de develop
git checkout develop
git pull origin develop
git checkout -b bugfix/nome-do-bug

# Corrigir e commitar
git add .
git commit -m "fix: descrição do bug corrigido"

# Push para o repositório
git push origin bugfix/nome-do-bug

# Criar Pull Request para develop
```

### 3. Hotfix em Produção
```bash
# Criar branch a partir de main
git checkout main
git pull origin main
git checkout -b hotfix/nome-do-hotfix

# Corrigir e commitar
git add .
git commit -m "hotfix: descrição do hotfix"

# Push para o repositório
git push origin hotfix/nome-do-hotfix

# Criar Pull Request para main E develop
```

### 4. Fluxo de Deploy

```
feature/bugfix → develop → homol → main
     ↓              ↓         ↓       ↓
   (dev)      (ambiente    (staging) (produção)
              de dev)
```

## Convenções de Nomenclatura

### Branches
- `feature/*` - Novas funcionalidades
- `bugfix/*` - Correções de bugs
- `hotfix/*` - Correções urgentes em produção
- `release/*` - Preparação de release (opcional)

### Commits (Conventional Commits)
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação, missing semi colons, etc
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes
- `chore:` - Tarefas de build, configurações, etc

## Processo de Review

1. **Desenvolver** na branch feature/bugfix
2. **Pull Request** para `develop`
3. **Code Review** por pelo menos um membro da equipe
4. **Merge** após aprovação
5. **Teste** em desenvolvimento
6. **Pull Request** de `develop` para `homol` quando pronto
7. **Teste** em homologação
8. **Pull Request** de `homol` para `main` após validação
9. **Deploy** em produção

## Regras de Proteção Recomendadas

### Branch `main`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
- ✅ Restrict who can push to matching branches

### Branch `develop`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass

### Branch `homol`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass

## Configuração Inicial

Para configurar o gitflow pela primeira vez:

```bash
# Certifique-se de estar na branch principal atual
git checkout main  # ou master

# Criar branch develop
git checkout -b develop
git push -u origin develop

# Criar branch homol
git checkout -b homol
git push -u origin homol

# Voltar para main
git checkout main
```

## Boas Práticas

1. ✅ Sempre fazer pull da branch base antes de criar nova branch
2. ✅ Manter branches feature pequenas e focadas
3. ✅ Fazer commits frequentes com mensagens descritivas
4. ✅ Testar localmente antes de criar Pull Request
5. ✅ Resolver conflitos localmente antes do merge
6. ✅ Deletar branches após merge
7. ✅ Manter `develop` sempre em estado deployável
8. ✅ Não fazer commit diretamente em `main`, `develop` ou `homol`

## Troubleshooting

### Conflitos de Merge
```bash
# Atualizar sua branch com a branch base
git checkout feature/sua-feature
git fetch origin
git merge origin/develop

# Resolver conflitos manualmente
# Após resolver:
git add .
git commit -m "resolve: conflitos com develop"
git push origin feature/sua-feature
```

### Sincronizar Fork (se aplicável)
```bash
# Adicionar upstream
git remote add upstream https://github.com/roraimafullstackdevs/Projetolandingcomunidade.git

# Sincronizar
git fetch upstream
git checkout develop
git merge upstream/develop
git push origin develop
```

## Referências

- [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
