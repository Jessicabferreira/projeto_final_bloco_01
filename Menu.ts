import readlinesync = require("readline-sync");


    let opcao: number;

   

        console.log("*****************************************************");
        console.log("                Tudo para seu Pet                    ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Se cadastar na loja                     ");
        console.log("            2 - Listar os produtos                   ");
        console.log("            3 - Buscar produto desejado              ");
        console.log("            4 - Atualizar produtos                   ");
        console.log("            5 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("\nMelhores produtos para seu Aumiguinho!");
        }
