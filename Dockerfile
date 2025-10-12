# Use a imagem oficial do Ruby
FROM ruby:3.2.3

# Instala dependências do sistema
RUN apt-get update -qq && apt-get install -y \
    nodejs \
    postgresql-client \
    build-essential \
    libpq-dev

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY Gemfile Gemfile.lock ./

# Instala as gems
RUN bundle install

# Copia todo o código da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando padrão para iniciar o servidor
CMD ["rails", "server", "-b", "0.0.0.0"]