#!/bin/bash

# Script para configurar o Gitflow no repositório
# Este script deve ser executado por um administrador do repositório

set -e

echo "🚀 Iniciando configuração do Gitflow..."
echo ""

# Verificar se estamos em um repositório git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Erro: Não está em um repositório Git"
    exit 1
fi

echo "✅ Repositório Git detectado"
echo ""

# Obter branch atual
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Branch atual: $CURRENT_BRANCH"
echo ""

# Verificar se as branches principais existem
echo "🔍 Verificando branches existentes..."
git fetch origin

MAIN_EXISTS=$(git branch -r | grep -c "origin/main" || echo "0")
MASTER_EXISTS=$(git branch -r | grep -c "origin/master" || echo "0")
DEVELOP_EXISTS=$(git branch -r | grep -c "origin/develop" || echo "0")
HOMOL_EXISTS=$(git branch -r | grep -c "origin/homol" || echo "0")

# Determinar branch principal
if [ "$MAIN_EXISTS" -gt 0 ]; then
    MAIN_BRANCH="main"
    echo "✅ Branch principal: main"
elif [ "$MASTER_EXISTS" -gt 0 ]; then
    MAIN_BRANCH="master"
    echo "✅ Branch principal: master"
else
    MAIN_BRANCH="main"
    echo "⚠️  Nenhuma branch principal detectada. Usando: main"
fi

echo ""
echo "📋 Status das branches:"
echo "  - $MAIN_BRANCH: $([ "$MAIN_EXISTS" -gt 0 ] || [ "$MASTER_EXISTS" -gt 0 ] && echo '✅ Existe' || echo '❌ Não existe')"
echo "  - develop: $([ "$DEVELOP_EXISTS" -gt 0 ] && echo '✅ Existe' || echo '❌ Não existe')"
echo "  - homol: $([ "$HOMOL_EXISTS" -gt 0 ] && echo '✅ Existe' || echo '❌ Não existe')"
echo ""

# Criar branches se não existirem
if [ "$DEVELOP_EXISTS" -eq 0 ]; then
    echo "📝 Criando branch develop..."
    git checkout -b develop
    git push -u origin develop
    echo "✅ Branch develop criada e enviada para origin"
else
    echo "ℹ️  Branch develop já existe"
fi

if [ "$HOMOL_EXISTS" -eq 0 ]; then
    echo "📝 Criando branch homol..."
    if [ "$DEVELOP_EXISTS" -eq 0 ]; then
        # Se acabamos de criar develop, estamos nela
        git checkout -b homol
    else
        # Senão, criar a partir de develop
        git checkout develop
        git pull origin develop
        git checkout -b homol
    fi
    git push -u origin homol
    echo "✅ Branch homol criada e enviada para origin"
else
    echo "ℹ️  Branch homol já existe"
fi

echo ""
echo "✅ Configuração do Gitflow concluída!"
echo ""
echo "📚 Próximos passos:"
echo "  1. Configure as regras de proteção de branch no GitHub:"
echo "     - Acesse: Settings > Branches > Branch protection rules"
echo "     - Proteja as branches: $MAIN_BRANCH, develop, homol"
echo "  2. Leia a documentação completa em GITFLOW.md"
echo "  3. Leia o guia de contribuição em CONTRIBUTING.md"
echo ""
echo "🎉 Pronto para usar o Gitflow!"
