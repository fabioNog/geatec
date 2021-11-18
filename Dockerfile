# Imagem de Origem
FROM node:15.13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /geatec
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV VIRTUAL_HOST geatec.soitic.com.br.com,www.geatec.soitic.com.br
# Instalando dependências da aplicação e armazenando em cache.
COPY . . 

RUN npm install

RUN npm install react-scripts

RUN npm run build


# Inicializa a aplicação
CMD ["npm", "start"]