# 🎨 Design System - RR Fullstack Developers

Sistema de design escalável e organizado para facilitar o desenvolvimento e manter consistência visual.

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Header, Footer)
│   ├── sections/        # Seções da página (Hero, About, Events, etc)
│   └── ui/              # Componentes reutilizáveis (Button, Card, Badge)
```

## 🎨 Sistema de Cores

Todas as cores do projeto seguem o padrão Tailwind CSS usando classes utilitárias:

### Paleta de Cores Principais

- **Background**: 
  - `bg-dark-900` (#0A0A0A) - Fundo principal
  - `bg-[#111]` - Fundo secundário (cards)
  - `bg-[#1A1A1A]` - Fundo terciário
  - `bg-zinc-800` - Elementos hover

- **Borders**: 
  - `border-zinc-800` - Borda padrão
  - `border-zinc-600` - Borda hover
  - `border-white/5` - Borda sutil

- **Text**: 
  - `text-white` - Texto principal
  - `text-zinc-400` - Texto secundário
  - `text-zinc-500` - Texto terciário
  - `text-zinc-600` - Texto muted

- **Brand** (Blue): 
  - `bg-blue-600` / `text-blue-600` - Primária
  - `bg-blue-700` / `text-blue-700` - Hover
  - `bg-blue-500` / `text-blue-500` - Destaque

## 🔘 Componente Button

O novo componente Button é totalmente escalável com múltiplas variantes e tamanhos:

### Importação

```typescript
import Button from '../ui/Button';
import { ArrowRight, Plus, Search } from 'lucide-react';
```

### Variantes

```tsx
{/* Primary - Ação principal */}
<Button variant="primary">Botão Primary</Button>

{/* Secondary - Ação secundária */}
<Button variant="secondary">Botão Secondary</Button>

{/* Outline - Ação com borda */}
<Button variant="outline">Botão Outline</Button>

{/* Outline Blue - Destaque azul */}
<Button variant="outline-blue">Botão Outline Blue</Button>

{/* Ghost - Ação sutil */}
<Button variant="ghost">Botão Ghost</Button>

{/* Danger - Ação destrutiva */}
<Button variant="danger">Deletar</Button>

{/* Success - Ação de sucesso */}
<Button variant="success">Confirmar</Button>
```

### Tamanhos

```tsx
<Button size="sm">Pequeno</Button>
<Button size="md">Médio (padrão)</Button>
<Button size="lg">Grande</Button>
<Button size="xl">Extra Grande</Button>
```

### Ícones

```tsx
{/* Ícone à direita (padrão) */}
<Button icon={ArrowRight}>Ver mais</Button>

{/* Ícone à esquerda */}
<Button icon={Plus} iconPosition="left">Adicionar</Button>

{/* Ícone com variante e tamanho */}
<Button 
  variant="outline-blue" 
  size="lg" 
  icon={Search} 
  iconPosition="left"
>
  Buscar projetos
</Button>
```

### Estados

```tsx
{/* Desabilitado */}
<Button disabled>Botão Desabilitado</Button>

{/* Loading */}
<Button loading>Carregando...</Button>

{/* Full Width */}
<Button fullWidth>Botão Largura Total</Button>
```

### Exemplos Completos

```tsx
// Botão de ação principal com ícone
<Button 
  variant="primary" 
  size="lg" 
  icon={ArrowRight}
  onClick={handleClick}
>
  Começar agora
</Button>

// Botão secundário pequeno
<Button 
  variant="secondary" 
  size="sm" 
  icon={Plus}
  iconPosition="left"
>
  Novo item
</Button>

// Botão outline blue com loading
<Button 
  variant="outline-blue" 
  loading={isLoading}
  onClick={handleSubmit}
>
  Salvar alterações
</Button>

// Botão danger full width
<Button 
  variant="danger" 
  fullWidth
  onClick={handleDelete}
>
  Excluir conta
</Button>
```

## 🎯 Boas Práticas

1. **Use Tailwind CSS**: Todas as cores e estilos usam classes Tailwind
2. **Componentes reutilizáveis**: Crie componentes na pasta `ui/` se forem usados em múltiplos lugares
3. **Dados nos componentes**: Mantenha dados mockados dentro dos próprios componentes
4. **Imports relativos**: Use `../` para navegar entre pastas
5. **TypeScript**: Sempre defina tipos para props dos componentes

## 🚀 Adicionando Novas Variantes

Para adicionar uma nova variante de botão:

1. Abra `src/components/ui/Button.tsx`
2. Adicione o tipo em `ButtonVariant`
3. Adicione o estilo no objeto `variants`

```typescript
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'sua-nova-variante'; // ← Adicione aqui

const variants: Record<ButtonVariant, string> = {
  // ...outras variantes
  'sua-nova-variante': "bg-purple-600 hover:bg-purple-700 text-white", // ← Estilo aqui
};
```

---

**Desenvolvido com 💙 pela comunidade RR Fullstack Developers**
