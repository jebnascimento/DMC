# DMC
Projeto desenvolvido para disciplina de Projeto Integrado da Universidade Federal do Rio de Janeiro, 
no curso de Engenharia Eletrônica e de Computação pelos alunos José Eduardo, Túlio Porto e Igor Abreu.

Introdução

O dispositivo de monitoramento cardíaco, DMC, é um projeto que tem como objetivo monitorar a frequência cardíaca de um indivíduo durante suas atividades diárias.

Motivação

Com o avanço das tecnologias voltada para dispositivos wearable e a integração cada vez maior entre medicina e tecnologia, trazendo novos conceitos como Smart Care, será cada vez mais possível criar soluções inteligentes e portáteis que visam melhorar a saúde e vida das pessoas.

Aplicação

O DMC irá armazenar em uma base de dados pública, informações sobre frequência cardíaca de indivíduos de deferentes idades, pesos, alturas e outras características durante o tempo de utilização
A ideia é monitorar como a frequência cardíaca para aquele usuário varia em relação ao período do dia e as atividades diárias, fornecendo assim uma base de dados para auxiliar possíveis diagnósticos e estatísticas de uma forma mais eficiente e rápida.
Futuramente, com o avanço desse projeto, almejamos agregar mais dados biológicos, expandinho nossa base de dados, a fim de aumentar a robustez e segurança na extração de dados biológicos do usuário, a fim de extrair informação útil. Com a ajuda de inteligência Artificial e bioestatística, buscamos obter excelência no diagnóstico de doenças e mais, estar a frente na prevenção monitorando possíveis quadros patológicos, tornando o prognóstico mais rápido, onde muitas vezes é essencial no tratamento de doenças aumentando consideravelmente as chances de cura e reversão total do quadro.

Lista de Materiais

▸ Sensor de pulso; 
▸ Arduino Pro mini; 
▸ Onion Omega2+; 
▸ Placa de fenolite universal; 
▸ Bateria LiPo 3.7V 1000 mAh; 
▸ Velcro, tecido; 
▸ Solda; 
▸ Diodos, resistores, fios, fita isolante etc


Basicamente, o projeto consiste de 3 partes essenciais, um sensor, um dispositivo para ler o sensor, processar o dado e transformar em informação e outro dispositivo capaz de disponibilizar essa informação na internet.

O sensor que estamos utilizando é um sensor ótico capaz de detectar a frequência cardíaca pelo dedo, e não somente isso, como também, é capaz sentir a intensidade do pulso que chega na mão do usuário, através de um método ótico. Além disso o sensor conta com um circuito de amplificação e de proteção contra ruídos, a fim de obtermos um dado mais acurado.

A seguir, estamos utilizando um Arduino Pro mini, para ler o sensor ótico que é um sensor analógico. Utilizamos a entrada analógica do Arduino para ler a saída do sensor e então podermos processar esse dado e transformá-lo em bpm que é o número de batimentos por minuto. Através da IDE do arduino, podemos visualizar o sinal cardíaco do usuário.

Para obtermos o número de batimentos por minuto, definimos um threshold de 520 e toda vez que se ultrapassa esse limite, iniciamos um contador que conta até o próximo pico. A partir daí, pegamos 10 intervalos entre picos, realizamos uma média aritmética e dividimos 1 min por esse resultado, obtendo o número de batimentos por minuto.

Por último, não menos importante, temos um microcomputador, o Omega2+ que roda um linux baseado na distribuição openWRT. No mesmo chip, temos um microprocessador MIPS de 580 MHz, 128 MB de RAM e 32 MB de armazenamento, com suporte a 2.4 GHz b/g/n WiFi, 12 GPIOs e microSD slot.

O Arduino envia os dados de bpm a cada 3 segundos para o Omega via Serial. A partir disso, criamos um script em nodejs que monitora a entrada serial do Omega, e uma vez detectado fluxo de dados, enviamos essa informação ao banco de dados backendless que é uma plataforma pronta com serviços e API mobile para visualização e armazenamento de dados.

O aplicativo foi desenvolvido utilizando cordova, visando celulares com ambiente Android e conta com 3 telas. A primeira, tem uma interface simples com o intuito de mostrar o bpm. A segunda tela, é utilizada para cadastro de usuários. Cada pulseira é atrelado a 1 usuário e o cadastro é realizado através dessa aba. A última tela é sobre o aplicativo e os desenvolvedores. 

O aplicativo está sincronizado com o banco de dados e toda vez que o arduino aquisita o dado e envia ao Omega2+, automaticamente o BPM é atualizado, permitindo assim um monitoramento em tempo real.
Interface do Banco de dados – Usuários

Por último, temos acesso ao banco de dados rodando na nuvem e podemos consultar e ver todo histórico de bpm atrelado a um usuário. 
É importante ressaltar que todo o sistema é dependente de uma conexão wifi com acesso a internet para funcionar corretamente.

Todo o projeto funciona perfeitamente dado certas condições. O sensor, apesar de cumprir seu papel, é sensor bem suscetível a ruído o que pode vir a prejudicar a acurácia do bpm. Portanto, como forma de melhoria, selecionar um sensor melhor para essa função aumenta a qualidade e confiabilidade do projeto. Outra melhoria que se busca é o aperfeiçoamento da autonomia energética por se tratar de um dispositivo wearable. Buscar por tecnoligias alternativas de microcontroladores e microcomputadores com consumo menor pode nos levar a uma maior autonomia, junto também a questão da bateria. Isso tudo recai sobre o aspecto da portabilidade e do tamanho, pois buscamos alcançar uma grande autonomia, utilizando um dispositivo portátil e confiável.

Link youtube:

