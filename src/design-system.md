# Design System - Gran Produtor

## Paleta de Cores

### Cores Primárias (do Logo)
```css
/* Verde Escuro - Cor principal do logo */
--primary-dark: #152A1E;

/* Verde Médio - Cor secundária do logo */
--primary-green: #639652;
```

### Cores Principais Expandidas
```css
/* Verdes - Paleta principal */
--green-900: #0F1F15;    /* Verde mais escuro */
--green-800: #152A1E;    /* Verde escuro (do logo) */
--green-700: #1E3829;    /* Verde escuro médio */
--green-600: #2A4A35;    /* Verde médio escuro */
--green-500: #639652;    /* Verde médio (do logo) */
--green-400: #7BA968;    /* Verde médio claro */
--green-300: #93BB7E;    /* Verde claro */
--green-200: #B5D4A4;    /* Verde muito claro */
--green-100: #D7EACA;    /* Verde pastel */
--green-50: #F1F8ED;     /* Verde quase branco */
```

### Cores Complementares

#### Neutros (Base)
```css
/* Cinzas - Para textos e backgrounds */
--gray-900: #1A1A1A;     /* Preto quase */
--gray-800: #2D2D2D;     /* Cinza muito escuro */
--gray-700: #404040;     /* Cinza escuro */
--gray-600: #666666;     /* Cinza médio */
--gray-500: #8A8A8A;     /* Cinza */
--gray-400: #ADADAD;     /* Cinza claro */
--gray-300: #D1D1D1;     /* Cinza muito claro */
--gray-200: #E8E8E8;     /* Cinza quase branco */
--gray-100: #F5F5F5;     /* Cinza bem claro */
--gray-50: #FAFAFA;      /* Branco sujo */

/* Neutros puros */
--white: #FFFFFF;
--black: #000000;
```

#### Cores Terrosas (Complementares para agro)
```css
/* Marrons/Terra - Complementam o verde */
--brown-900: #2C1810;    /* Marrom escuro */
--brown-800: #3D2317;    /* Marrom */
--brown-700: #5D3621;    /* Marrom médio */
--brown-600: #7D4A2B;    /* Marrom claro */
--brown-500: #A0653B;    /* Terra */
--brown-400: #B8804F;    /* Terra clara */
--brown-300: #D1A373;    /* Bege escuro */
--brown-200: #E4C198;    /* Bege */
--brown-100: #F0DDBC;    /* Bege claro */
--brown-50: #F8F2E7;     /* Creme */
```

#### Cores de Apoio
```css
/* Azuis - Para contraste e confiança */
--blue-700: #1E3A5F;     /* Azul escuro */
--blue-600: #2563EB;     /* Azul */
--blue-500: #3B82F6;     /* Azul médio */
--blue-400: #60A5FA;     /* Azul claro */
--blue-100: #DBEAFE;     /* Azul pastel */

/* Amarelos/Dourados - Para destaques e agricultura */
--yellow-700: #A16207;   /* Dourado escuro */
--yellow-600: #CA8A04;   /* Dourado */
--yellow-500: #EAB308;   /* Amarelo dourado */
--yellow-400: #FACC15;   /* Amarelo */
--yellow-100: #FEF3C7;   /* Amarelo claro */

/* Vermelhos - Para alertas e CTAs */
--red-700: #B91C1C;      /* Vermelho escuro */
--red-600: #DC2626;      /* Vermelho */
--red-500: #EF4444;      /* Vermelho médio */
--red-100: #FEE2E2;      /* Vermelho claro */
```

## Aplicação das Cores

### Uso Recomendado
```css
/* Principais */
--color-primary: var(--green-800);           /* #152A1E */
--color-primary-light: var(--green-500);     /* #639652 */
--color-primary-lighter: var(--green-300);   /* #93BB7E */

/* Backgrounds */
--color-background: var(--white);            /* #FFFFFF */
--color-background-secondary: var(--gray-50); /* #FAFAFA */
--color-background-muted: var(--green-50);   /* #F1F8ED */

/* Textos */
--color-text-primary: var(--gray-900);       /* #1A1A1A */
--color-text-secondary: var(--gray-600);     /* #666666 */
--color-text-muted: var(--gray-500);         /* #8A8A8A */
--color-text-inverse: var(--white);          /* #FFFFFF */

/* Bordas */
--color-border: var(--gray-300);             /* #D1D1D1 */
--color-border-light: var(--gray-200);       /* #E8E8E8 */

/* Estados */
--color-success: var(--green-600);           /* #2A4A35 */
--color-warning: var(--yellow-500);          /* #EAB308 */
--color-error: var(--red-600);               /* #DC2626 */
--color-info: var(--blue-600);               /* #2563EB */
```

## Tipografia

### Fontes Recomendadas

#### Fonte Principal (Para títulos e destaque)
```css
/* Opção 1 - Robusta e moderna */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Opção 2 - Mais tradicional e confiável */
font-family: 'Source Sans Pro', Arial, sans-serif;

/* Opção 3 - Para um toque mais sofisticado */
font-family: 'Nunito Sans', Arial, sans-serif;
```

#### Fonte Secundária (Para textos corridos)
```css
/* Para leitura em textos longos */
font-family: 'Open Sans', Arial, sans-serif;

/* Alternativa mais neutra */
font-family: 'Lato', Arial, sans-serif;
```

#### Fonte Display (Para logo e headlines grandes)
```css
/* Opção mais impactante para títulos grandes */
font-family: 'Montserrat', Arial, sans-serif;

/* Alternativa mais geométrica */
font-family: 'Poppins', Arial, sans-serif;
```

### Escala Tipográfica
```css
/* Tamanhos de fonte */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Pesos de fonte */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Altura de linha */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

## Sugestões de Uso

### Para Headers/Navegação
- Background: `var(--color-primary)` (#152A1E)
- Texto: `var(--color-text-inverse)` (branco)
- Links ativos: `var(--color-primary-light)` (#639652)

### Para Botões Primários
- Background: `var(--color-primary-light)` (#639652)
- Texto: `var(--color-text-inverse)` (branco)
- Hover: `var(--color-primary)` (#152A1E)

### Para Seções de Destaque
- Background: `var(--color-background-muted)` (#F1F8ED)
- Texto: `var(--color-text-primary)` (#1A1A1A)
- Bordas: `var(--green-200)` (#B5D4A4)

### Para Cards/Produtos
- Background: `var(--white)` (#FFFFFF)
- Bordas: `var(--color-border-light)` (#E8E8E8)
- Preços/CTAs: `var(--yellow-600)` (#CA8A04)

## Exemplo de Implementação CSS

```css
:root {
  /* Cores do logo */
  --brand-primary: #152A1E;
  --brand-secondary: #639652;
  
  /* Paleta estendida */
  --green-800: #152A1E;
  --green-500: #639652;
  --green-300: #93BB7E;
  --green-100: #D7EACA;
  --green-50: #F1F8ED;
  
  /* Neutros */
  --gray-900: #1A1A1A;
  --gray-600: #666666;
  --gray-300: #D1D1D1;
  --gray-100: #F5F5F5;
  --white: #FFFFFF;
  
  /* Aplicações */
  --primary: var(--brand-primary);
  --secondary: var(--brand-secondary);
  --background: var(--white);
  --text: var(--gray-900);
  --border: var(--gray-300);
}
```

Esta paleta foi criada especificamente para complementar as cores do seu logo Gran Produtor, mantendo a identidade visual forte do verde, mas adicionando cores que funcionam bem para um site completo do setor agropecuário.