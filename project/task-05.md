# Task 05

## Goals

### Step 1: Git Flow

O **Git Flow** é um modelo de ramificação que ajuda a organizar o fluxo de trabalho em projetos de desenvolvimento. Ele utiliza duas principais branches permanentes:

- **`main`**: branch principal, usada para código em produção.
- **`develop`**: branch de desenvolvimento, usada para consolidar funcionalidades antes de irem para produção.

Além dessas, são criadas branches temporárias para recursos específicos.

markdown
Copy code

# Documentação: Git Flow com Branches `main` e `develop`

## Introdução

O **Git Flow** é um modelo de ramificação que ajuda a organizar o fluxo de trabalho em projetos de desenvolvimento. Ele utiliza duas principais branches permanentes:

1. Branch Principal (main)
   Objetivo: Branch principal, usada para código em produção.  
   Uso: Não faça commits diretamente. Atualizações ocorrem apenas através de merges vindos de develop ou hotfix.

2. Branch de Desenvolvimento (develop)
   Objetivo: Branch de desenvolvimento, usada para consolidar funcionalidades antes de irem para produção.  
   Uso: Não faça commits diretamente. Use esta branch como base para criar novas funcionalidades.

3. Branch de Novas Funcionalidades (feature/nome-da-sua-funcionalidade)
   Objetivo: Essa branch deve ser criada sempre que desejar implementar uma nova funcionalidade ou fazer alguma mudança no código. Essa branch deve ser criada sempre a partir da branch `develop`.

### Muito Importante

Antes de criar a sua branch feature, certifique-se de verificar se sua branch develop está atualizada.

```bash
git checkout develop # Certifique-se que voce está branch develop
git pull develop # Atualize a branch develop
```

### Criando a branch feature

Crie a branch feature sempre seguindo o padrão `feature/breve-descricao-do-que-sera-alterado`

```bash
git checkout -b feature/add-login-tests-with-invalid-information # Para criar uma branch a partir da branch develop
git branch --show-current # Para verificar se está na branch criada
```

### Trabalhando na nova feature

Após criar a branch feature, você pode começar a implementar as mudanças desejadas.

Conselho: Mantenha os commits granulares (com poucas alterações).
Siga a regra: "Funcionou? Faz commit!" para garantir que cada alteração seja rastreável e fácil de entender.
Você pode fazer vários commits antes de fazer o push do seu código.

```bash
git add .
git commit -m "Adicionado o teste com login válido"
```

```bash
git add .
git commit -m "Adicionado o teste com login inválido e atulizado teste de login válido"
```

### Fazendo push da nova branch para o repositório

Quando você teminar todas as alterações necessárias para a sua task, faça o push da nova branch com o código

```bash
git push
```

### Criando um Pull Request

Após completar o último passo, você terá uma nova branch no Github.
O que queremos agora é criar um `Pull Request` para que outro developer faça um code review das suas alterações antes que o código seja merged para a branch develop.

O Pull Request deve ser criado diretamente na página do Github.
