import readlinesync = require("readline-sync");


    let opcao: number;

   

        console.log("*****************************************************");
        console.log("                Tudo para seu Pet                    ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Se cadastar na loja                  ");
        console.log("            2 - Listar os produtos                   ");
        console.log("            3 - Buscar produto desejado              ");
        console.log("            4 - Atualizar produtos                   ");
        console.log("            5 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        
        switch (opcao) {
            case 1:
                console.log("\n\nSe cadastar na loja\n\n");

                break;
            case 2:
                console.log("\n\nListar os produtos \n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto desejado\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar produtos\n\n");

                break;
        
        }

        if (opcao == 5) {
            console.log("\nMelhores produtos para seu Aumiguinho!");
        }
