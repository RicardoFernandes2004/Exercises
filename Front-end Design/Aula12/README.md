# Usando Media Query
As Media Queries são uma característica fundamental das folhas de estilo em cascata (CSS) 
que permitem adaptar o estilo de um site ou aplicativo da web de acordo com as características 
do dispositivo ou as preferências do usuário. Elas permitem definir regras de estilo condicionais 
baseadas em características como a largura da tela, altura da tela, orientação do dispositivo, 
densidade de pixels, resolução da tela, etc.

As Media Queries são comumente usadas para criar layouts responsivos, que se ajustam automaticamente 
a diferentes tamanhos de tela, desde dispositivos móveis até desktops. Isso ajuda a garantir uma 
experiência de usuário otimizada, independentemente do dispositivo usado para acessar o site.

As Media Queries são definidas dentro de uma folha de estilo CSS usando a sintaxe @media, 
seguida por uma ou mais condições entre parênteses e as regras de estilo correspondentes 
entre chaves.


/* @media not|only mediatype and (mediafeature and mediafeature) {
    CSS-Code;
} */

- **@media**: Indica que estamos definindo uma regra de Media Query.
- O **only** é usado para garantir que a regra seja aplicada apenas a navegadores modernos que suportam Media Queries.
- O **not** inverte o significado de uma media query.
- **mediatype** - all (todo tipo de mídia), print (visualização de impressão), screen (telas), speech (leitor de tela)
- **and**: É um operador lógico usado para combinar diferentes condições de mídia.
- **mediafeature**:
    - width: Especifica a largura da área de renderização da página. Por exemplo: (min-width: 768px).
    - height: Especifica a altura da área de renderização da página. Por exemplo: (max-height: 600px).
    - device-width: Especifica a largura do dispositivo. Por exemplo: (max-device-width: 1024px).
    - device-height: Especifica a altura do dispositivo. Por exemplo: (min-device-height: 480px).
    - orientation: Determina a orientação do dispositivo. Pode ser portrait (retrato) ou landscape (paisagem). 
    Por exemplo: (orientation: landscape).
    - aspect-ratio: Determina a proporção entre a largura e a altura da tela. Por exemplo: (aspect-ratio: 16/9).
    - color: Determina a profundidade de cor da tela. Por exemplo: (min-color: 256).
    - resolution: Especifica a resolução de saída do dispositivo. Por exemplo: (min-resolution: 300dpi).
    - hover: Indica se o dispositivo possui capacidade de hover, como um mouse. Pode ser none ou hover. Por exemplo: (hover: hover).
    - pointer: Indica o tipo de dispositivo de entrada apontador. Pode ser none, coarse ou fine. Por exemplo: (pointer: coarse).

## Unidades de medidas de distância <length>
###    Medidas relativas
- Para fontes: unidades em, ex, ch, rem
- Porcentagem da viewport: unidades vw, vh, vmin, vmax
- A especificação do W3C classifica tecnicamente a porcentagem (%) como tipo de dado e não unidade de medida.
###    Medidas absolutas
- Unidades cm, mm, q, in, pt, pc, px
- Resolução: unidades dpi, dpcm, dppx

### O valor é tomado em relação:

- em: ...ao tamanho da fonte ('font-size') do elemento no qual a unidade é declarada;
- ex: ...a altura da letra x (xis) da fonte herdada;
- ch: ...a largura acrescida do espaçamanto em volta do número 0 (zero) da fonte do elemento no qual a unidade é declarada;
- rem: ...ao tamanho da fonte ('font-size') do elemento raiz do documento.

### O valor é igual a:

- vw: 1% da largura da viewport;
- vh: 1% da altura da viewport;
- vmin: a menor medida entre vw e vh;
- vmax: a maior medida entre vw e vh.

### exemplos
- div { margin: 1.5em; } 
- h4 { margin: 2ex; } 
- p { font-size: 14px; }
- .classe { padding: 90%; }
- hr { width: 14pt; } 
- h1 { margin: 1pc; } 
- h2 { font-size: 4mm; }
- p.classe { padding: 0.3cm; }
- h5.classe { padding: 0.5in; }
- @media ( min-resolution: 2dppx ) { ... }
- background-image: linear-gradient( 45deg, white, black );
- div { width: 50vw; }