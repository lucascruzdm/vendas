# vendas

nao esquecer de colocar o arquivo .env no git ignore


passo a passo para conectar no db

1 => criar um docker-compose.yml para gerar um db (banco esta vazio mas ele existe)

2 => criar as tabelas -> 
como fazer isso ? 
ex.: usando Prisma

entao config prisma:

intalar prisma biblioteca
configurar schema.prisma(criando tabelas/modelos)
criar migration(sql que de fato cria as coisas no banco)
rodar a migration(aplica o script no db)
rodar o prima generate(cria os arq que o nestjs precisa)
config prisma.service.ts(importando dados) 




