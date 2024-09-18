Uma **custom property** (também conhecida como variável CSS) é uma maneira de definir valores que podem ser reutilizados em todo o documento CSS. Elas são definidas usando a notação `--nome-da-propriedade` e podem ser acessadas posteriormente utilizando a função `var(--nome-da-propriedade)`.

**Exemplo básico de uso:**

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
}

.button {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
}

.button-secondary {
    background-color: var(--secondary-color);
    color: white;
    padding: 10px 20px;
}
```

**Principais vantagens das custom properties:**

1. **Reutilização de valores:** Ao definir um valor em uma custom property, você pode reutilizá-lo em várias partes do seu CSS, o que reduz a duplicação e facilita a manutenção do código.

2. **Tematização:** É fácil alterar temas ou esquemas de cores, basta modificar o valor de uma custom property, e todas as instâncias desse valor serão atualizadas automaticamente.

3. **Hereditariedade e escopo:** Custom properties podem ser herdadas e podem ter escopo limitado (por exemplo, em um componente específico), o que oferece flexibilidade na definição de estilos.

4. **Manipulação via JavaScript:** Custom properties podem ser manipuladas via JavaScript, permitindo dinamicidade no design da página.

Por exemplo, no código anterior, `--css-contain` é uma custom property que armazena o valor `layout inline-size`, e pode ser reutilizada em outros lugares no CSS, simplificando ajustes e manutenções futuras.