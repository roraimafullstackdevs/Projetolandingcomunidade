# Implement Figma Design

This is a code bundle for Implement Figma Design. The original project is available at https://www.figma.com/design/8QXfA4dKwyg63LGrRWHEIW/Implement-Figma-Design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Gitflow

Este projeto segue a estratégia de Gitflow. Para mais informações sobre o fluxo de trabalho, branches e convenções, consulte [GITFLOW.md](./GITFLOW.md).

### Branches Principais

- **`main`** - Produção (código estável em produção)
- **`develop`** - Desenvolvimento (integração de novas features)
- **`homol`** - Homologação (testes antes da produção)

### Fluxo Rápido

```bash
# Criar feature
git checkout develop
git checkout -b feature/minha-feature

# Desenvolver...

# Pull Request: feature → develop → homol → main
```

Para detalhes completos, veja [GITFLOW.md](./GITFLOW.md).