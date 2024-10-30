# Projeto_Airlink

Este projeto implementa uma API para controle do ar-condicionado através de requisições HTTP. Você pode ligar, desligar e verificar o status do ar-condicionado.

## Endpoints

### 1. **Verificar Status do Ar-Condicionado**

- **Método:** `GET`
- **Endpoint:** `/ac/status`
- **Descrição:** Retorna o status atual do ar-condicionado.
- **Resposta:**
  - **Código 200:** Status retornado com sucesso.
  - **Formato da Resposta:**
    ```json
    {
      "state": true  // true se o ar-condicionado estiver ligado, false caso contrário
    }
    ```

### 2. **Ligar Ar-Condicionado**

- **Método:** `POST`
- **Endpoint:** `/ac/on`
- **Descrição:** Liga o ar-condicionado.
- **Resposta:**
  - **Código 200:** Ar-condicionado ligado com sucesso.
  - **Formato da Resposta:**
    ```json
    {
      "message": "Ar-condicionado ligado com sucesso."
    }
    ```

### 3. **Desligar Ar-Condicionado**

- **Método:** `POST`
- **Endpoint:** `/ac/off`
- **Descrição:** Desliga o ar-condicionado.
- **Resposta:**
  - **Código 200:** Ar-condicionado desligado com sucesso.
  - **Formato da Resposta:**
    ```json
    {
      "message": "Ar-condicionado desligado com sucesso."
    }
    ```

## Como Usar

1. **Configuração do Projeto:**
   - Clone o repositório e instale as dependências necessárias.
   - Certifique-se de que o servidor da API está em execução.

2. **Requisições:**
   - Use ferramentas como Postman ou Insomnia para enviar requisições HTTP para os endpoints listados.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
