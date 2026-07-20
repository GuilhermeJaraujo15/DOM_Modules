(function () {
  const translations = {
    "pt-BR": {
      nav: {
        languageSwitcher: "EN",
        languageSwitcherAriaLabel: "Mudar para inglês",
      },
      seo: {
        title: "JS Lab · Arquivos",
        description: "Portfólio de exercícios DOM em JavaScript com tradução para inglês.",
      },
      home: {
        title: "📁 JavaScript Lab",
        subtitle:
          "Repositório pessoal de pequenos experimentos práticos. Cada card aponta para uma implementação isolada.",
        domSectionTitle: "Manipulação do DOM",
        methodsSectionTitle: "Métodos Aplicados a DOM",
        footerText: "Feito para guardar meus projetos · Portfólio Expositivo",
        cards: {
          dom: {
            ex1: { title: "Exercício 01", description: "(Saudação Personalizada.)", hint: "Abrir →" },
            ex2: { title: "Exercício 02", description: "(Alteração de Estilos Dinâmicos.)", hint: "Abrir →" },
            ex3: { title: "Exercício 03", description: "(Criação de novos elementos.)", hint: "Abrir →" },
            ex4: { title: "Exercício 04", description: "(Atualização em Massa.)", hint: "Abrir →" },
          },
          methods: {
            ex1: { title: "1 - filter()", description: "(Nomes com 'A')", hint: "Abrir →" },
            ex2: { title: "2 - filter()", description: "(Números correspondentes)", hint: "Abrir →" },
            ex3: { title: "3 - filter()", description: "(Múltiplos de 3)", hint: "Abrir →" },
            ex4: { title: "1 - find()", description: "(Primeiro Negativo)", hint: "Abrir →" },
            ex5: { title: "2 - find()", description: "(Valor > 100)", hint: "Abrir →" },
            ex6: { title: "3 - find()", description: "(Padrão de Texto 'z')", hint: "Abrir →" },
            ex7: { title: "1 - forEach()", description: "(Lista de Interesses)", hint: "Abrir →" },
            ex8: { title: "2 - forEach()", description: "(Aplicação de Desconto)", hint: "Abrir →" },
            ex9: { title: "3 - forEach()", description: "(Status de Aprovação)", hint: "Abrir →" },
            ex10: { title: "1 - reduce()", description: "(Cálculo de Média)", hint: "Abrir →" },
            ex11: { title: "2 - reduce()", description: "(Produto de Valores)", hint: "Abrir →" },
            ex12: { title: "3 - reduce()", description: "(Fusão de Strings)", hint: "Abrir →" },
          },
        },
      },
      exercises: {
        dom1: {
          title: "Saudação Dinâmica com textContent",
          description: "Transformação de input do usuário em feedback visual imediato.",
          demoTitle: "Demonstração",
          label: "Digite seu nome:",
          placeholder: "Ex: Guilherme",
          button: "Enviar Saudação",
          resultMessage: "Hello, {name}! Welcome!",
        },
        dom2: {
          title: "Alteração de Estilos via DOM",
          description:
            "Manipulação direta de propriedades CSS inline através do objeto style.",
          heading: "Título da Demonstração",
          paragraph:
            "Este parágrafo terá seu estilo alterado programaticamente quando o botão for acionado. Observe a mudança na cor da fonte e na cor de fundo.",
          button: "Alterar Estilos",
        },
        dom3: {
          title: "Inserção Dinâmica com appendChild",
          description:
            "Aprenda a manipular o fluxo do documento criando e injetando novos elementos via JavaScript.",
          button: "Adicionar Novo Item",
          newItem: "Novo item adicionado!",
        },
        dom4: {
          title: "Iteração com querySelectorAll",
          description:
            "Atualização em massa de múltiplos elementos selecionados por classe.",
          button: "Atualizar Conteúdo dos Itens",
          itemA: "Conteúdo Original A",
          itemB: "Conteúdo Original B",
          itemC: "Conteúdo Original C",
          itemD: "Conteúdo Original D",
          updatedText: "Guilherme Jorge de Araujo",
        },
        filter1: {
          title: "Filtragem de Coleções: Array.filter()",
          description: "Demonstração técnica de processamento e filtragem seletiva de arrays.",
          label: "Insira nomes separados por vírgula:",
          placeholder: "Ex: Alice, Bruno, Amanda, Carlos",
          button: "Executar Filtragem",
          resultInitial: "Aguardando interação...",
          resultMessage: "The name(s) that start with 'A' are: {names}.",
        },
        filter2: {
          title: "Processamento Numérico com filter()",
          description: "Conversão de tipos e aplicação de filtros lógicos em arrays numéricos.",
          label: "Insira números (separados por vírgula):",
          placeholder: "Ex: 5, 8.5, 10, 6, 7",
          button: "Filtrar Valores (>= 7)",
          resultInitial: "Aguardando entrada de dados...",
          resultMessage: "The number(s) greater than or equal to seven are: {values}.",
        },
        filter3: {
          title: "Filtro de Divisibilidade",
          description: "Utilização do método filter() para identificação de múltiplos matemáticos.",
          label: "Digite os números (separados por vírgula):",
          placeholder: "Ex: 3, 5, 9, 12, 14, 21",
          button: "Filtrar Múltiplos de 3",
          resultInitial: "Aguardando entrada de dados...",
          resultMessage: "The multiple(s) of three are: {values}.",
        },
        find1: {
          title: "Busca com find()",
          description:
            "Utilização do método Array.prototype.find() para localizar a primeira ocorrência em um conjunto de dados.",
          label: "Insira os números (separados por vírgula):",
          placeholder: "Ex: 10, 5, -3, 8, -1",
          button: "Localizar Primeiro Negativo",
          resultInitial: "Aguardando processamento...",
          resultMessage: "The number less than 0 is: {value}.",
        },
        find2: {
          title: "Busca Condicional com find()",
          description: "Identificação do primeiro valor acima de um limite e tratamento de resultados nulos.",
          label: "Insira uma lista de números (por vírgula):",
          placeholder: "Ex: 50, 80, 120, 30",
          button: "Verificar Valores > 100",
          resultInitial: "Aguardando entrada de dados...",
          noValueResult: "There are no values greater than 100 in the numbers provided.",
          valueResult: "The number greater than 100 is: {value}.",
        },
        find3: {
          title: "Busca de Substrings com find()",
          description: "Filtragem atômica de strings baseada na presença de caracteres específicos.",
          label: "Insira palavras (separadas por vírgula):",
          placeholder: "Ex: Casa, Azeitona, Zebra, Carro",
          button: "Localizar palavra com 'z'",
          resultInitial: "Aguardando entrada de dados...",
          foundResult: "The first word containing 'z' is: {value}.",
          noValueResult: "There is no 'z' in the provided words.",
        },
        forEach1: {
          title: "Iteração de Arrays com forEach()",
          description: "Utilização de loops funcionais para processamento e exibição de listas dinâmicas.",
          label: "Insira seus interesses (separados por vírgula):",
          placeholder: "Ex: Programação, Música, Viagens",
          button: "Gerar Frases",
          resultInitial: "Aguardando entrada de dados...",
          resultMessage: "I like {value}.",
        },
        forEach2: {
          title: "Processamento de Preços: forEach()",
          description: "Aplicação de descontos em massa através da iteração de coleções numéricas.",
          label: "Insira os preços (separados por vírgula):",
          placeholder: "Ex: 50, 85.50, 120, 300",
          button: "Aplicar Desconto de R$ 10,00",
          resultInitial: "Aguardando entrada de dados...",
          resultMessage: "Price with a $10.00 discount: {value}.",
        },
        forEach3: {
          title: "Validação de Lote com forEach()",
          description: "Processamento de coleções e aplicação de lógica condicional para feedback de status.",
          label: "Notas dos alunos (separadas por vírgula):",
          placeholder: "Ex: 8.5, 4, 10, 6.5, 7",
          button: "Verificar Status",
          resultInitial: "Aguardando entrada de dados...",
          approved: "Approved.",
          failed: "Failed.",
        },
        reduce1: {
          title: "Média Aritmética com reduce()",
          description: "Utilização de acumuladores para agregação e processamento de dados numéricos.",
          label: "Insira uma lista de números (por vírgula):",
          placeholder: "Ex: 10, 15, 20, 25",
          button: "Calcular Média",
          resultInitial: "Aguardando entrada de dados...",
          resultMessage: "The average of the numbers provided is: {value}.",
        },
        reduce2: {
          title: "Produto Acumulado com reduce()",
          description: "Utilização de funções de redução para operações matemáticas em coleções numéricas.",
          label: "Insira uma lista de números (por vírgula):",
          placeholder: "Ex: 2, 5, 10",
          button: "Calcular Multiplicação",
          resultInitial: "Aguardando entrada de dados...",
          resultMessage: "The product of the numbers provided is: {value}.",
        },
        reduce3: {
          title: "Acumulação de Texto / Números com reduce()",
          description: "Demonstração de como transformar uma coleção de strings em um valor único.",
          label: "Palavras ou números para fundir (separadas por vírgula):",
          placeholder: "Ex: HTML, CSS, JavaScript ou 1, 2, 3",
          button: "Concatenar Lista",
          resultInitial: "Aguardando entrada de dados...",
        },
      },
    },
    "en-US": {
      nav: {
        languageSwitcher: "PT",
        languageSwitcherAriaLabel: "Switch to Portuguese",
      },
      seo: {
        title: "JS Lab · Files",
        description: "Portfolio of DOM JavaScript exercises with English translation.",
      },
      home: {
        title: "📁 JavaScript Lab",
        subtitle:
          "Personal repository of small practical experiments. Each card points to an isolated implementation.",
        domSectionTitle: "DOM Manipulation",
        methodsSectionTitle: "Array Methods Applied to DOM",
        footerText: "Made to store my projects · Expository Portfolio",
        cards: {
          dom: {
            ex1: { title: "Exercise 01", description: "(Personalized Greeting.)", hint: "Open →" },
            ex2: { title: "Exercise 02", description: "(Dynamic Style Changes.)", hint: "Open →" },
            ex3: { title: "Exercise 03", description: "(Creating new elements.)", hint: "Open →" },
            ex4: { title: "Exercise 04", description: "(Bulk Update.)", hint: "Open →" },
          },
          methods: {
            ex1: { title: "1 - filter()", description: "(Names starting with 'A')", hint: "Open →" },
            ex2: { title: "2 - filter()", description: "(Matching numbers)", hint: "Open →" },
            ex3: { title: "3 - filter()", description: "(Multiples of 3)", hint: "Open →" },
            ex4: { title: "1 - find()", description: "(First Negative)", hint: "Open →" },
            ex5: { title: "2 - find()", description: "(Value > 100)", hint: "Open →" },
            ex6: { title: "3 - find()", description: "(Text Pattern 'z')", hint: "Open →" },
            ex7: { title: "1 - forEach()", description: "(Interest List)", hint: "Open →" },
            ex8: { title: "2 - forEach()", description: "(Discount Application)", hint: "Open →" },
            ex9: { title: "3 - forEach()", description: "(Approval Status)", hint: "Open →" },
            ex10: { title: "1 - reduce()", description: "(Average Calculation)", hint: "Open →" },
            ex11: { title: "2 - reduce()", description: "(Product of Values)", hint: "Open →" },
            ex12: { title: "3 - reduce()", description: "(String Merge)", hint: "Open →" },
          },
        },
      },
      exercises: {
        dom1: {
          title: "Dynamic Greeting with textContent",
          description: "Turning the user's input into immediate visual feedback.",
          demoTitle: "Demonstration",
          label: "Type your name:",
          placeholder: "Example: Guilherme",
          button: "Send Greeting",
          resultMessage: "Hello, {name}! Welcome!",
        },
        dom2: {
          title: "Style Changes via DOM",
          description: "Direct manipulation of inline CSS properties through the style object.",
          heading: "Demo Title",
          paragraph:
            "This paragraph will have its style changed programmatically when the button is clicked. Notice the change in the text color and background color.",
          button: "Change Styles",
        },
        dom3: {
          title: "Dynamic Insertion with appendChild",
          description:
            "Learn how to manipulate the document flow by creating and injecting new elements with JavaScript.",
          button: "Add New Item",
          newItem: "New item added!",
        },
        dom4: {
          title: "Iteration with querySelectorAll",
          description: "Mass updating multiple elements selected by class.",
          button: "Update Item Content",
          itemA: "Original Content A",
          itemB: "Original Content B",
          itemC: "Original Content C",
          itemD: "Original Content D",
          updatedText: "Guilherme Jorge de Araujo",
        },
        filter1: {
          title: "Collection Filtering: Array.filter()",
          description: "Technical demonstration of selective processing and filtering of arrays.",
          label: "Enter names separated by commas:",
          placeholder: "Example: Alice, Bruno, Amanda, Carlos",
          button: "Run Filtering",
          resultInitial: "Waiting for interaction...",
          resultMessage: "The name(s) that start with 'A' are: {names}.",
        },
        filter2: {
          title: "Numeric Processing with filter()",
          description: "Type conversion and logical filtering applied to numeric arrays.",
          label: "Enter numbers (separated by commas):",
          placeholder: "Example: 5, 8.5, 10, 6, 7",
          button: "Filter Values (>= 7)",
          resultInitial: "Waiting for input...",
          resultMessage: "The number(s) greater than or equal to seven are: {values}.",
        },
        filter3: {
          title: "Divisibility Filter",
          description: "Using filter() to identify mathematical multiples.",
          label: "Enter numbers (separated by commas):",
          placeholder: "Example: 3, 5, 9, 12, 14, 21",
          button: "Filter Multiples of 3",
          resultInitial: "Waiting for input...",
          resultMessage: "The multiple(s) of three are: {values}.",
        },
        find1: {
          title: "Search with find()",
          description:
            "Using Array.prototype.find() to locate the first occurrence in a dataset.",
          label: "Enter numbers (separated by commas):",
          placeholder: "Example: 10, 5, -3, 8, -1",
          button: "Find First Negative",
          resultInitial: "Waiting for processing...",
          resultMessage: "The number less than 0 is: {value}.",
        },
        find2: {
          title: "Conditional Search with find()",
          description: "Finding the first value above a threshold and handling null results.",
          label: "Enter a list of numbers (comma separated):",
          placeholder: "Example: 50, 80, 120, 30",
          button: "Check Values > 100",
          resultInitial: "Waiting for input...",
          noValueResult: "There are no values greater than 100 in the provided numbers.",
          valueResult: "The number greater than 100 is: {value}.",
        },
        find3: {
          title: "Substring Search with find()",
          description: "Atomic string filtering based on specific characters.",
          label: "Enter words (separated by commas):",
          placeholder: "Example: House, Olive, Zebra, Car",
          button: "Find a word containing 'z'",
          resultInitial: "Waiting for input...",
          foundResult: "The first word containing 'z' is: {value}.",
          noValueResult: "There is no 'z' in the provided words.",
        },
        forEach1: {
          title: "Array Iteration with forEach()",
          description: "Using functional loops to process and display dynamic lists.",
          label: "Enter your interests (separated by commas):",
          placeholder: "Example: Programming, Music, Travel",
          button: "Generate Phrases",
          resultInitial: "Waiting for input...",
          resultMessage: "I like {value}.",
        },
        forEach2: {
          title: "Price Processing: forEach()",
          description: "Applying bulk discounts through numeric collection iteration.",
          label: "Enter prices (separated by commas):",
          placeholder: "Example: 50, 85.50, 120, 300",
          button: "Apply a $10.00 Discount",
          resultInitial: "Waiting for input...",
          resultMessage: "Price with a $10.00 discount: {value}.",
        },
        forEach3: {
          title: "Batch Validation with forEach()",
          description: "Processing collections and applying conditional logic for status feedback.",
          label: "Student grades (separated by commas):",
          placeholder: "Example: 8.5, 4, 10, 6.5, 7",
          button: "Check Status",
          resultInitial: "Waiting for input...",
          approved: "Approved.",
          failed: "Failed.",
        },
        reduce1: {
          title: "Arithmetic Mean with reduce()",
          description: "Using accumulators for aggregation and numerical processing.",
          label: "Enter a list of numbers (comma separated):",
          placeholder: "Example: 10, 15, 20, 25",
          button: "Calculate Average",
          resultInitial: "Waiting for input...",
          resultMessage: "The average of the numbers provided is: {value}.",
        },
        reduce2: {
          title: "Accumulated Product with reduce()",
          description: "Using reduction functions for mathematical operations on numeric collections.",
          label: "Enter a list of numbers (comma separated):",
          placeholder: "Example: 2, 5, 10",
          button: "Calculate Multiplication",
          resultInitial: "Waiting for input...",
          resultMessage: "The product of the numbers provided is: {value}.",
        },
        reduce3: {
          title: "Text / Number Accumulation with reduce()",
          description: "Demonstration of how to turn a collection of strings into a single value.",
          label: "Words or numbers to merge (separated by commas):",
          placeholder: "Example: HTML, CSS, JavaScript or 1, 2, 3",
          button: "Concatenate List",
          resultInitial: "Waiting for input...",
        },
      },
    },
  };

  let currentLanguage = localStorage.getItem("appLanguage") || "pt-BR";

  function getValue(obj, path) {
    return path.split(".").reduce((acc, key) => acc && acc[key] !== undefined ? acc[key] : undefined, obj);
  }

  function t(key, params = {}) {
    const source = translations[currentLanguage] || translations["pt-BR"];
    const value = getValue(source, key) || getValue(translations["pt-BR"], key) || key;
    if (typeof value !== "string") {
      return key;
    }
    return value.replace(/\{(\w+)\}/g, (_, token) => params[token] ?? `{${token}}`);
  }

  function setTextContent(node, key) {
    if (!node) return;
    const value = t(key);
    if (value) {
      node.textContent = value;
    }
  }

  function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    const title = document.querySelector("title");
    if (title) {
      title.textContent = t("seo.title");
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", t("seo.description"));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", t("seo.description"));
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", t("seo.description"));
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) return;
      setTextContent(element, key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const value = t(key);
      if (value) {
        element.setAttribute("placeholder", value);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.getAttribute("data-i18n-title");
      if (!key) return;
      const value = t(key);
      if (value) {
        element.setAttribute("title", value);
      }
    });

    const switcher = document.getElementById("language-switcher");
    if (switcher) {
      switcher.textContent = currentLanguage === "pt-BR" ? "EN" : "PT";
      switcher.setAttribute("aria-label", t("nav.languageSwitcherAriaLabel"));
      switcher.setAttribute("title", t("nav.languageSwitcherAriaLabel"));
    }
  }

  function changeLanguage(language) {
    if (!translations[language]) {
      return;
    }
    currentLanguage = language;
    localStorage.setItem("appLanguage", language);
    applyTranslations();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    const switcher = document.getElementById("language-switcher");
    if (switcher) {
      switcher.addEventListener("click", () => {
        changeLanguage(currentLanguage === "pt-BR" ? "en-US" : "pt-BR");
      });
    }
  });

  window.t = t;
  window.changeLanguage = changeLanguage;
  window.i18n = { t, changeLanguage };
})();
