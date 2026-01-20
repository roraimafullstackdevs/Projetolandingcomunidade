#!/bin/bash

# Script para verificar se o repositório está seguindo corretamente o Gitflow
# Este script verifica branches, proteções, documentação e configurações

echo "🔍 VERIFICAÇÃO DE CONFORMIDADE COM GITFLOW"
echo "=========================================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Contadores
PASSED=0
FAILED=0
WARNINGS=0

# Função para print com cores
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
    ((PASSED++))
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
    ((FAILED++))
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
    ((WARNINGS++))
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

echo "1️⃣  VERIFICANDO REPOSITÓRIO GIT"
echo "--------------------------------"

# Verificar se está em um repositório git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Não está em um repositório Git"
    exit 1
fi
print_success "Repositório Git detectado"

# Verificar remote
if git remote get-url origin > /dev/null 2>&1; then
    REMOTE_URL=$(git remote get-url origin)
    print_success "Remote configurado: $REMOTE_URL"
else
    print_warning "Nenhum remote configurado"
fi

echo ""
echo "2️⃣  VERIFICANDO BRANCHES PRINCIPAIS"
echo "-----------------------------------"

# Fetch para garantir branches atualizadas
git fetch origin -q 2>/dev/null || true

# Verificar existência das branches principais
MAIN_EXISTS=$(git branch -r 2>/dev/null | grep -c "origin/main" 2>/dev/null || echo "0")
MASTER_EXISTS=$(git branch -r 2>/dev/null | grep -c "origin/master" 2>/dev/null || echo "0")
DEVELOP_EXISTS=$(git branch -r 2>/dev/null | grep -c "origin/develop" 2>/dev/null || echo "0")
HOMOL_EXISTS=$(git branch -r 2>/dev/null | grep -c "origin/homol" 2>/dev/null || echo "0")

# Branch principal (main ou master)
if [ "$MAIN_EXISTS" -gt 0 ]; then
    MAIN_BRANCH="main"
    print_success "Branch 'main' existe"
elif [ "$MASTER_EXISTS" -gt 0 ]; then
    MAIN_BRANCH="master"
    print_success "Branch 'master' existe"
else
    print_error "Branch principal (main/master) não encontrada"
    MAIN_BRANCH=""
fi

# Branch develop
if [ "$DEVELOP_EXISTS" -gt 0 ]; then
    print_success "Branch 'develop' existe"
else
    print_error "Branch 'develop' não encontrada"
fi

# Branch homol
if [ "$HOMOL_EXISTS" -gt 0 ]; then
    print_success "Branch 'homol' existe"
else
    print_error "Branch 'homol' não encontrada"
fi

echo ""
echo "3️⃣  VERIFICANDO DOCUMENTAÇÃO"
echo "----------------------------"

# Verificar arquivos de documentação
if [ -f "GITFLOW.md" ]; then
    print_success "Arquivo GITFLOW.md existe"
else
    print_error "Arquivo GITFLOW.md não encontrado"
fi

if [ -f "CONTRIBUTING.md" ]; then
    print_success "Arquivo CONTRIBUTING.md existe"
else
    print_error "Arquivo CONTRIBUTING.md não encontrado"
fi

if [ -f "README.md" ]; then
    print_success "Arquivo README.md existe"
    # Verificar se README menciona Gitflow
    if grep -qi "gitflow" README.md; then
        print_success "README.md menciona Gitflow"
    else
        print_warning "README.md não menciona Gitflow"
    fi
else
    print_error "Arquivo README.md não encontrado"
fi

echo ""
echo "4️⃣  VERIFICANDO TEMPLATES"
echo "-------------------------"

# Verificar templates
if [ -f ".github/PULL_REQUEST_TEMPLATE.md" ]; then
    print_success "Template de Pull Request existe"
else
    print_warning "Template de Pull Request não encontrado"
fi

if [ -d ".github/ISSUE_TEMPLATE" ]; then
    print_success "Diretório de templates de Issue existe"
else
    print_warning "Diretório de templates de Issue não encontrado"
fi

echo ""
echo "5️⃣  VERIFICANDO ESTRUTURA DE COMMITS"
echo "-------------------------------------"

# Verificar últimos commits para ver se seguem Conventional Commits
RECENT_COMMITS=$(git log --oneline -n 10 --format="%s" 2>/dev/null || echo "")
if [ -n "$RECENT_COMMITS" ]; then
    CONVENTIONAL_COUNT=0
    while IFS= read -r commit; do
        if echo "$commit" | grep -Eq "^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?:" ; then
            ((CONVENTIONAL_COUNT++))
        fi
    done <<< "$RECENT_COMMITS"
    
    TOTAL_COMMITS=$(echo "$RECENT_COMMITS" | wc -l)
    PERCENTAGE=$((CONVENTIONAL_COUNT * 100 / TOTAL_COMMITS))
    
    if [ "$PERCENTAGE" -ge 80 ]; then
        print_success "$CONVENTIONAL_COUNT de $TOTAL_COMMITS commits seguem Conventional Commits ($PERCENTAGE%)"
    elif [ "$PERCENTAGE" -ge 50 ]; then
        print_warning "$CONVENTIONAL_COUNT de $TOTAL_COMMITS commits seguem Conventional Commits ($PERCENTAGE%)"
    else
        print_warning "Apenas $CONVENTIONAL_COUNT de $TOTAL_COMMITS commits seguem Conventional Commits ($PERCENTAGE%)"
    fi
else
    print_info "Nenhum commit encontrado para análise"
fi

echo ""
echo "6️⃣  VERIFICANDO CONFIGURAÇÃO GIT-FLOW"
echo "--------------------------------------"

# Verificar se git-flow está configurado
GITFLOW_MASTER=$(git config --get gitflow.branch.master 2>/dev/null || echo "")
GITFLOW_DEVELOP=$(git config --get gitflow.branch.develop 2>/dev/null || echo "")

if [ -n "$GITFLOW_MASTER" ] && [ -n "$GITFLOW_DEVELOP" ]; then
    print_success "Git-flow configurado localmente"
    print_info "  Master: $GITFLOW_MASTER"
    print_info "  Develop: $GITFLOW_DEVELOP"
else
    print_warning "Git-flow não configurado localmente (opcional)"
    print_info "Execute: git flow init -d"
fi

echo ""
echo "7️⃣  VERIFICANDO ARQUIVOS DE CONFIGURAÇÃO"
echo "-----------------------------------------"

# Verificar .gitignore
if [ -f ".gitignore" ]; then
    print_success "Arquivo .gitignore existe"
else
    print_warning "Arquivo .gitignore não encontrado"
fi

# Verificar package.json
if [ -f "package.json" ]; then
    print_success "Arquivo package.json existe"
else
    print_info "Arquivo package.json não encontrado (pode ser normal)"
fi

echo ""
echo "8️⃣  VERIFICANDO SCRIPT DE SETUP"
echo "--------------------------------"

# Verificar script de setup
if [ -f "setup-gitflow.sh" ]; then
    print_success "Script setup-gitflow.sh existe"
    if [ -x "setup-gitflow.sh" ]; then
        print_success "Script setup-gitflow.sh é executável"
    else
        print_warning "Script setup-gitflow.sh não é executável"
        print_info "Execute: chmod +x setup-gitflow.sh"
    fi
else
    print_error "Script setup-gitflow.sh não encontrado"
fi

echo ""
echo "9️⃣  VERIFICANDO BRANCHES FEATURE/BUGFIX/HOTFIX"
echo "-----------------------------------------------"

# Contar branches por tipo
FEATURE_COUNT=$(git branch -r 2>/dev/null | grep "origin/feature/" | wc -l || echo "0")
BUGFIX_COUNT=$(git branch -r 2>/dev/null | grep "origin/bugfix/" | wc -l || echo "0")
HOTFIX_COUNT=$(git branch -r 2>/dev/null | grep "origin/hotfix/" | wc -l || echo "0")
RELEASE_COUNT=$(git branch -r 2>/dev/null | grep "origin/release/" | wc -l || echo "0")

print_info "Branches feature: $FEATURE_COUNT"
print_info "Branches bugfix: $BUGFIX_COUNT"
print_info "Branches hotfix: $HOTFIX_COUNT"
print_info "Branches release: $RELEASE_COUNT"

if [ "$FEATURE_COUNT" -gt 0 ] || [ "$BUGFIX_COUNT" -gt 0 ]; then
    print_success "Existem branches de desenvolvimento seguindo nomenclatura"
else
    print_info "Nenhuma branch feature/bugfix encontrada (pode ser normal)"
fi

echo ""
echo "🔟 VERIFICANDO ESTRUTURA DO PROJETO"
echo "------------------------------------"

# Verificar estrutura de diretórios
if [ -d "src" ]; then
    print_success "Diretório 'src' existe"
else
    print_warning "Diretório 'src' não encontrado"
fi

if [ -f "index.html" ]; then
    print_success "Arquivo 'index.html' existe"
fi

echo ""
echo "=========================================="
echo "📊 RESUMO DA VERIFICAÇÃO"
echo "=========================================="
echo ""
echo -e "${GREEN}✅ Verificações bem-sucedidas: $PASSED${NC}"
echo -e "${RED}❌ Problemas encontrados: $FAILED${NC}"
echo -e "${YELLOW}⚠️  Avisos: $WARNINGS${NC}"
echo ""

# Calcular pontuação
TOTAL=$((PASSED + FAILED))
if [ "$TOTAL" -gt 0 ]; then
    SCORE=$((PASSED * 100 / TOTAL))
    echo "📈 Pontuação de conformidade: $SCORE%"
    echo ""
    
    if [ "$SCORE" -ge 90 ]; then
        echo -e "${GREEN}🎉 EXCELENTE! O repositório está altamente conforme com Gitflow${NC}"
    elif [ "$SCORE" -ge 70 ]; then
        echo -e "${GREEN}✅ BOM! O repositório está conforme com Gitflow com pequenos ajustes necessários${NC}"
    elif [ "$SCORE" -ge 50 ]; then
        echo -e "${YELLOW}⚠️  ATENÇÃO! O repositório precisa de melhorias na conformidade com Gitflow${NC}"
    else
        echo -e "${RED}❌ CRÍTICO! O repositório não está seguindo Gitflow adequadamente${NC}"
    fi
fi

echo ""
echo "📚 PRÓXIMOS PASSOS RECOMENDADOS:"
echo "--------------------------------"

if [ "$FAILED" -gt 0 ]; then
    echo "1. Corrija os problemas identificados acima"
    if [ "$DEVELOP_EXISTS" -eq 0 ] || [ "$HOMOL_EXISTS" -eq 0 ]; then
        echo "2. Execute './setup-gitflow.sh' para criar branches faltantes"
    fi
    if [ ! -f "GITFLOW.md" ] || [ ! -f "CONTRIBUTING.md" ]; then
        echo "3. Crie a documentação faltante"
    fi
fi

echo ""
echo "📖 Para mais informações:"
echo "  - Leia GITFLOW.md para entender o fluxo"
echo "  - Leia CONTRIBUTING.md para guia de contribuição"
echo "  - Configure proteções de branch no GitHub"
echo ""

# Exit code baseado em falhas críticas
if [ "$FAILED" -gt 5 ]; then
    exit 1
else
    exit 0
fi
