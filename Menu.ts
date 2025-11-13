import readlinesync = require("readline-sync");


    let opcao: number;

   

        console.log("*****************************************************");
        console.log("                Tudo para seu Pet                    ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastar o produto                  ");
        console.log("            2 - Listar os produtos                   ");
        console.log("            3 - Buscar produto desejado              ");
        console.log("            4 - Deletar os produtos                   ");
        console.log("            5 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        
        switch (opcao) {
            case 1:
                console.log("\n\nCadastar o produto\n\n");

                break;
            case 2:
                console.log("\n\nListar os produtos \n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto desejado\n\n");

                break;
            case 4:
                console.log("\n\nDeletar os produtos\n\n");

                break;
        
        }

        if (opcao == 5) {
            console.log("\nMelhores produtos para seu Aumiguinho!");
            sobre()
        }

        function sobre(): void {
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: Jessica Berteloni Ferreira ")
    console.log("Generation Brasil - generation@generation.org")
    console.log("github.com/conteudoGeneration")
    console.log("*****************************************************")
}
