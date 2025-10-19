# Trabalho Prático I – Integração de Sistemas de Informação

## 1. Enquadramento

**Disciplina:** Integração de Sistemas de Informação (ISI)  
**Curso:** Licenciatura em Engenharia de Sistemas Informáticos  
**Ano:** 2025/26
**Alunos:** Hugo Especial - 27963 e Marco Cardoso - 27969

Este projeto consiste na aplicação de boas práticas de ETL (Extract, Transform, Load) para manipulação e análise de dados, utilizando a plataforma KNIME. O objetivo principal foi desenvolver fluxos de trabalho que permitissem importar, tratar, transformar e analisar dados provenientes de diferentes fontes, garantindo a sua qualidade e integridade.

---

## 2. Objetivo do Trabalho

O trabalho teve como finalidade:

- Consolidar conceitos associados à integração de sistemas de informação usando dados.  
- Explorar e aplicar técnicas de ETL em diferentes formatos de dados (CSV, XML, JSON).  
- Realizar verificações de qualidade, normalização e remoção de inconsistências nos dados.  
- Automatizar processos de transformação e gerar relatórios e visualizações.  
- Desenvolver competências técnicas e de planeamento no contexto de projetos de dados.

---

## 3. Dataset Utilizado

O projeto utilizou **três ficheiros CSV**:

1. **Clientes.csv** – Contém informações sobre os clientes (ID, Nome, Email, Telemóvel, Cidade, País).  
2. **Livros.csv** – Contém informações sobre os livros (ID, Título, Autor, Gênero, Ano de Publicação, Preço, Stock).  
3. **Vendas.csv** – Contém registos de vendas, associando livros aos clientes através dos IDs.

---

## 4. Estrutura do Workflow

O workflow no KNIME segue a seguinte estrutura:

1. **Importação dos Dados**  
   - Leitura dos ficheiros CSV e XML usando nós **CSV Reader** e **XML Reader**.  
   - Conversão para tabelas utilizáveis dentro do KNIME.

2. **Verificação e Limpeza**  
   - **Validação de emails e telemóveis** utilizando expressões regulares.  
   - Detecção de valores em falta (missing values) e remoção de linhas ou colunas inválidas.  
   - Normalização de campos e formatação consistente dos dados.

3. **Transformações e Análise**  
   - Agrupamento de vendas por ano e contagem de livros vendidos usando **GroupBy**.  
   - Identificação dos **Top 5 livros mais vendidos**.  
   - Junção de tabelas (**Joiner**) para cruzar clientes, livros e vendas.  
   - Criação de variáveis para envio de alertas sobre livros futuros.

4. **Exportação e Visualização**  
   - Escrita de ficheiros de saída (CSV/JSON) com caminhos relativos para portabilidade.  
   - Geração de gráficos interativos utilizando Chart.js (para visualização de vendas e clientes).  
   - Logs de remoção e de validação para rastreabilidade.


O workflow no PENTAHO segue a seguinte estrutura:

1. **Importação dos Dados**  
   - Leitura dos ficheiros CSV, XML e JSON usando nós **CSV Input**,  **XML Input** e **JSON Input**.  
   - Conversão para tabelas utilizáveis dentro do PENTAHO.

2. **Verificação e Limpeza**  
   - **Validação de emails** utilizando expressões regulares.  
   - Detecção de valores em falta (missing values) e remoção de linhas ou colunas inválidas.  
   - Normalização de campos e formatação consistente dos dados.

3. **Transformações e Análise**  
   - Agrupamento de vendas por género e contagem de livros vendidos por país usando **GroupBy**.  
   - Junção de tabelas (**Stream Lookup**) para cruzar clientes, livros e vendas.  
   - Criação de variáveis para envio de email sobre livros vendidos por género.

4. **Exportação e Visualização**  
   - Escrita de ficheiros de saída (JSON) com caminhos relativos para portabilidade.  
   - Geração de gráficos interativos utilizando Chart.js (para visualização de vendas).  
   - Logs de remoção e de validação para rastreabilidade.
---

## 5. Funcionalidades Adicionais

- Automatização do envio de emails (simulado) para clientes sobre novos lançamentos de livros (KNIME).
- Automatização do envio de emails sobre a quantidade de pedidos de livros por género (PENTAHO).  
- Rastreamento de inconsistências nos dados e geração de logs detalhados.  
- Capacidade de desformatação dos dados originais para demonstração de métodos de normalização e validação.

---

## 6. Tecnologias e Ferramentas

- **KNIME Analytics Platform** – Ferramenta para criação do workflow ETL.
- **PENTAHO KETTLE** – Ferramenta para criação do workflow ETL.
- **Chart.js** – Para visualização gráfica dos dados exportados.  
- **CSV, XML, JSON** – Formatos de dados tratados no workflow.  
- **JavaScript** – Para scripts de visualização e manipulação de dados em gráficos.

---
## 7. Estrutura do trabalho


```
📁 Projeto_ETL/
│
├── 📂 27969-KNIME/
│ ├── dados/
│ │ ├── input/
│ │ │  ├── testar/
│ │ │  │  ├── Clientes.xml
│ │ │  │  └──  Livros.xml
│ │ │  ├── Livros.xml
│ │ │  ├── Orders.csv
│ │ │  └──  XML-Customers.xml
│ │ ├── output/
│ │ │  ├── logs/
│ │ │  │  ├── Email-Telefones-Invalidos-Clientes_0.xml
│ │ │  │  ├── Missing-Values-Clientes_0.xml
│ │ │  │  ├── Missing-Values-Livros_0.xml
│ │ │  │  ├── Missing-Values-Vendas_0.xml
│ │ │  │  ├── Preco-Negativo-Livros_0.xml
│ │ │  │  ├── Quantidade-Invalida-Vendas_0.xml
│ │ │  │  └──  Total-Amount-Negativo-Vendas_0.xml
│ │ │  ├── preparacao-dados/
│ │ │  │  ├── Clientes_0.xml
│ │ │  │  ├── Livros_0.xml
│ │ │  │  └──  vendas.csv
│ │ │  ├── Clientes-verificados_0.json
│ │ │  ├── Livros-Verificados_0.json
│ │ │  └──  Vendas-Verificadas_0.json
│ ├── dataInt/
│ │ ├── converterDados/
│ │ │  ├── csv para json.knwf
│ │ │  └── csv para xml v2.knwf
│ │ ├── projeto/
│ │ │  ├── ISI-Projeto-I.knwf
│ │ │  ├── ISI-Projeto-I-Desformatar.knwf
│ │ │  ├── ISI-Projeto-I-Jobs.knwf
│ │ │  └── ISI-Testar Email.knwf
│ ├── doc/
│ │ │  └── 27963_27969_doc.pdf
│ ├── src/
│ | ├── knime/
│ │ │  ├── Clientes_Pais_0.json
│ │ │  ├── index.html
│ │ │  ├── livros.html
│ │ │  ├── Livros_Por_Ano_0.json
│ │ │  ├── script.js
│ │ │  ├── style.css
│ │ │  ├── vendas.html
│ │ │  └── Vendas_Por_Ano_0.json
├── 📂 27963-PENTAHO/
│ ├── data/
│ │ ├── input/
│ │ │  ├── Books.xml
│ │ │  ├── Customers.xml
│ │ │  └── Orders.xml
│ │ ├── output/
│ │ │  ├── datavalid/
│ │ │  │  ├── clientes_validos.xml
│ │ │  │  ├── livros_validos.xml
│ │ │  │  └── pedidos_validos.xml
│ │ │  ├── Logs/
│ │ │  │  ├── Logs_Clientes.xml
│ │ │  │  ├── Logs_Livros.xml
│ │ │  │  └── Logs_Pedidos.xml
│ │ │  ├── Clientes.xml
│ │ │  ├── Livros.xml
│ │ │  └── Pedidos.xml
│ ├── dataint/
│ │ ├── Desformatacao.ktr
│ │ ├── FormatacaoValidacao.ktr
│ │ ├── Job_Principal.kjb
│ │ ├── LivrosVendidosPorgGenero.ktr
│ │ ├── SendeEmail.ktr
│ │ └── VendasPorPaises.ktr
│ ├── doc/
│ │ │  └── 27963_27969_doc.pdf
│ ├── Web/
│ │ ├── node_modules/
│ │ ├── index.html
│ │ ├── PedidosTotaisPorGenero_0.json
│ │ ├── script.js
│ │ ├── style.css
│ │ └── VendasPorPais_0.json
```


---
## 8. Conclusão

Apesar das dificuldades iniciais, estas foram ultrapassadas, permitindo concluir o projeto com sucesso.
