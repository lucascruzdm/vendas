git checkout -b <nome da branch> => isso cria uma branch nova

git checkout <nome da branch> => so muda pra uma branh que já existe

git pull => atualiza o conteúdo local com o da nuvem

git add <nome do arquivo/caminho> => adiciona arquivo alterado para staging

git commit -m "<comentario>" => adiciona os arquivos em staging com o comentário vinculado

git push origin <nome da branch> => envia a branch com as alterações para nuvem 

git status => mostra o que esta acontecendo

comandos git 
-------------------------------------------------------------------------------------------

ls => mostra os arquivos que estão na pasta

cd => altera de pasta 
	ex.: cd .. => volta pasta acima
	ex.: cd ./pasta => entra na pasta

mkdir <pasta> => cria uma pasta

touch <arquivo.extensao> => cria um arquivo

----------------------------------------------------
fluxo de trabalho =>

git checkout main
git pull
git checkout -b <nome nova branch>

Cria a alteracao no codigo

git add
git commit -m "<comentario sobre alteracao>"
git push origin <nome da branch>

----------------------------------------------------------
3 principais tipos de branch

feature => insere coisa nova
chore => ajuste pequeno(pequena alteracao que nao muda regra de negocio)
bugfix => consertando bug 

----------------------------------------------------------

CRIANDO UM PROJETO

criar nest.js

$ npm i -g @nestjs/cli
$ nest new project-name --skip-git => sem vincular o git

