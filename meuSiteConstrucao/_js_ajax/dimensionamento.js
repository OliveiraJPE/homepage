//Declaração de variáveis de escopo global
//Variáveis de raiz , Variáveis que recebem de caixas e botões
var registro;
var tabDim;
var nome;
var ERRO;
ERRO = "ERR.: DIMENSINAMENTO SEM ERROS. APLICATIVO RECEBEU PARÂMETROS CORRETOS. ";
var ender;
var data;
var depend;
var dependTempo;
var padrao;
var nCondutores1;
var nCondutores2;
var nCondutores3;
var caso;
var caso2;
var caso3;
var selTue;

//Variáveis de dimensões
var area = 0;
var perim = 0;
var perimetroCasa = 0;
var kvaM2 = 0;
var aCasa = 0;
var tensaoC = 0;
var tensaoC1f = 0;
var tensaoC2f = 0;
var tensaoC3f = 0;
var tensaoC4f = 0;
var tensaoC5f = 0;
var tensaoC6f = 0;


var tensaoC1I = 0;
var tensaoC2I = 0;
var tensaoC3I = 0;
var tensaoC4I = 0;
var tensaoC5I = 0;
var tensaoC6I = 0;


var tensaoC1 = 0;
var tensaoC2 = 0;
var tensaoC3 = 0;
var tensaoC4 = 0;
var tensaoC5 = 0;
var tensaoC6 = 0;

var quartoP_1 = 0;
var quartoP_2 = 0;
var quartoP_3 = 0;
var quartoP_4 = 0;
var quartoP_5 = 0;
var salaP_1 = 0;
var salaP_2 = 0;
var salaP_3 = 0;
var banheiroP_1 = 0;
var banheiroP_2 = 0;
var banheiroP_3 = 0;
var banheiroP_4 = 0;
var banheiroP_5 = 0;
var banheiroP_6 = 0;
var cozinhaCopaP_1 = 0;
var cozinhaCopaP_2 = 0;
var areaServicoP_1 = 0;
var areaServicoP_2 = 0;
var varandaP_1 = 0;
var varandaP_2 = 0;
var garagemStonPoraoP_1 = 0;
var garagemStonPoraoP_2 = 0;
var terracoSala_FestaArea_LazerP_1 = 0;
var terracoSala_FestaArea_LazerP_2 = 0;
var escritorioBilbioltecaP = 0;

var EscCarga;
var EscCargaf;

var quartoA_1 = 0;
var quartoA_2 = 0;
var quartoA_3 = 0;
var quartoA_4 = 0;
var quartoA_5 = 0;
var salaA_1 = 0;
var salaA_2 = 0;
var salaA_3 = 0;
var banheiroA_1 = 0;
var banheiroA_2 = 0;
var banheiroA_3 = 0;
var banheiroA_4 = 0;
var banheiroA_5 = 0;
var banheiroA_6 = 0;
var cozinhaCopaA_1 = 0;
var cozinhaCopaA_2 = 0;
var areaServicoA_1 = 0;
var areaServicoA_2 = 0;
var varandaA_1 = 0;
var varandaA_2 = 0;
var garagemStonPoraoA_1 = 0;
var garagemStonPoraoA_2 = 0;
var terracoSala_FestaArea_LazerA_1 = 0;
var terracoSala_FestaArea_LazerA_2 = 0;
var escritorioBilbioltecaA = 0;

//Variáveis de quantidades
var tugQuarto_1 = 0;
var tugQuarto_2 = 0;
var tugQuarto_3 = 0;
var tugQuarto_4 = 0;
var tugQuarto_5 = 0;
var tugSala_1 = 0;
var tugSala_2 = 0;
var tugSala_3 = 0;
var tugBanheiro_1 = 0;
var tugBanheiro_2 = 0;
var tugBanheiro_3 = 0;
var tugBanheiro_4 = 0;
var tugBanheiro_5 = 0;
var tugBanheiro_6 = 0;
var tugCozinhaCopa_1 = 0;
var tugCozinhaCopa_2 = 0;
var tugAreaServico_1 = 0;
var tugAreaServico_2 = 0;
var tugVaranda_1 = 0;
var tugVaranda_2 = 0;
var tugGaragemStonPorao_1 = 0;
var tugGaragemStonPorao_2 = 0;
var tugTerracoSala_FestaArea_Lazer_1 = 0;
var tugTerracoSala_FestaArea_Lazer_2 = 0;
var tugEscritorioBilbiolteca = 0;

//Variaveis de Potencia
var potTugQuarto_1 = 0;
var potTugQuarto_2 = 0;
var potTugQuarto_3 = 0;
var potTugQuarto_4 = 0;
var potTugQuarto_5 = 0;
var potTugSala_1 = 0;
var potTugSala_2 = 0;
var potTugSala_3 = 0;
var potTugBanheiro_1 = 0;
var potTugBanheiro_2 = 0;
var potTugBanheiro_3 = 0;
var potTugBanheiro_4 = 0;
var potTugBanheiro_5 = 0;
var potTugBanheiro_6 = 0;
var potTugCozinhaCopa_1 = 0;
var potTugCozinhaCopa_2 = 0;
var potTugAreaServico_1 = 0;
var potTugAreaServico_2 = 0;
var potTugVaranda_1 = 0;
var potTugVaranda_2 = 0;
var potTugGaragemStonPorao_1 = 0;
var potTugGaragemStonPorao_2 = 0;
var potTugTerracoSala_FestaArea_Lazer_1 = 0;
var potTugTerracoSala_FestaArea_Lazer_2 = 0;
var potTugEscritorioBilbiolteca = 0;

var potEsp;
var pot1Esp;

var FPEsp;

var Fagrup;
var Fagrupf;

var distCirc;

var nCarregados;

var condutorCCirc;
var condutorIlumCirc1;
var condutorIlumCirc2;
var condutorIlumCirc3;
var condutorIlumCirc4;
var condutorIlumCirc5;
var condutorIlumCirc6;
var condutorIlumCirc7;
var condutorIlumCirc8;
var condutorIlumCirc9;

var condutorTugCirc1;
var condutorTugCirc2;
var condutorTugCirc3;
var condutorTugCirc4;
var condutorTugCirc5;
var condutorTugCirc6;
var condutorTugCirc7;
var condutorTugCirc8;
var condutorTugCirc9;

var condutorC2Circ1;
var condutorC2Circ2;
var condutorC2Circ3;
var condutorC2Circ4;
var condutorC2Circ5;
var condutorC2Circ6;
var condutorC2Circ7;
var condutorC2Circ8;
var condutorC2Circ9;

var condutorC3Circ1;
var condutorC3Circ2;
var condutorC3Circ3;
var condutorC3Circ4;
var condutorC3Circ5;
var condutorC3Circ6;
var condutorC3Circ7;
var condutorC3Circ8;
var condutorC3Circ9;

var condutorC4Circ1;
var condutorC4Circ2;
var condutorC4Circ3;
var condutorC4Circ4;
var condutorC4Circ5;

var condutorC5Circ1;
var condutorC5Circ2;
var condutorC5Circ3;
var condutorC5Circ4;
var condutorC5Circ5;

var condutorC6Circ1;
var condutorC6Circ2;
var condutorC6Circ3;
var condutorC6Circ4;
var condutorC6Circ5;

var condutorCCircA;
var condutorCCircB;

var disjTue;

var disjIlum1;
var disjIlum2;
var disjIlum3;
var disjIlum4;
var disjIlum5;
var disjIlum6;
var disjIlum7;
var disjIlum8;
var disjIlum9;

var disjTug1;
var disjTug2;
var disjTug3;
var disjTug4;
var disjTug5;
var disjTug6;
var disjTug7;
var disjTug8;
var disjTug9;

var disjTueC21;
var disjTueC22;
var disjTueC23;
var disjTueC24;
var disjTueC25;
var disjTueC26;
var disjTueC27;
var disjTueC28;
var disjTueC29;

var disjTueC31;
var disjTueC32;
var disjTueC33;
var disjTueC34;
var disjTueC35;
var disjTueC36;
var disjTueC37;
var disjTueC38;
var disjTueC39;

var disjTueC41;
var disjTueC42;
var disjTueC43;
var disjTueC44;
var disjTueC45;

var disjTueC51;
var disjTueC52;
var disjTueC53;
var disjTueC54;
var disjTueC55;

var disjTueC61;
var disjTueC62;
var disjTueC63;
var disjTueC64;
var disjTueC65;

var ilumQuarto_1 = 0;
var ilumQuarto_2 = 0;
var ilumQuarto_1 = 0;
var ilumQuarto_2 = 0;
var ilumQuarto_3 = 0;
var ilumQuarto_4 = 0;
var ilumQuarto_5 = 0;
var ilumSala_1 = 0;
var ilumSala_2 = 0;
var ilumSala_3 = 0;
var ilumBanheiro_1 = 0;
var ilumBanheiro_2 = 0;
var ilumBanheiro_3 = 0;
var ilumBanheiro_4 = 0;
var ilumBanheiro_5 = 0;
var ilumBanheiro_6 = 0;
var ilumCozinhaCopa_1 = 0;
var ilumCozinhaCopa_2 = 0;
var ilumAreaServico_1 = 0;
var ilumAreaServico_2 = 0;
var ilumVaranda_1 = 0;
var ilumVaranda_2 = 0;
var ilumGaragemStonPorao_1 = 0;
var ilumGaragemStonPorao_2 = 0;
var ilumTerracoSala_FestaArea_Lazer_1 = 0;
var ilumTerracoSala_FestaArea_Lazer_2 = 0;
var ilumEscritorioBilbiolteca = 0;

//Variáveis de Carga instalada, Demanda de TUE, TUG e ILUMINAÇÃO.

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c6 = 0;
var c5 = 0;

var c2t1 = 0;
var c2t2 = 0;
var c2t3 = 0;
var c2t4 = 0;
var c2t5 = 0;
var c2f = 0;

var c3t1 = 0;
var c3t2 = 0;
var c3t3 = 0;
var c3t4 = 0;
var c3t5 = 0;
var c3f = 0;

var c4t1 = 0;
var c4t2 = 0;
var c4t3 = 0;
var c4t4 = 0;
var c4t5 = 0;
var c4f = 0;

var c5t1 = 0;
var c5t2 = 0;
var c5t3 = 0;
var c5t4 = 0;
var c5t5 = 0;
var c5f = 0;

var c6t1 = 0;
var c6t2 = 0;
var c6t3 = 0;
var c6t4 = 0;
var c6t5 = 0;
var c6f = 0;

var qC2 = 0;
var qC3 = 0;
var qC4 = 0;
var qC6 = 0;
var qC5 = 0;
var qC1Ilum = 0;
var qC1Tug = 0;

var qC2t1 = 0;
var qC3t1 = 0;
var qC4t1 = 0;
var qC6t1 = 0;
var qC5t1 = 0;

var qC2f = 0;
var qC3f = 0;
var qC4f = 0;
var qC6f = 0;
var qC5f = 0;

var qC2t2 = 0;
var qC3t2 = 0;
var qC4t2 = 0;
var qC6t2 = 0;
var qC5t2 = 0;

var qC2t3 = 0;
var qC3t3 = 0;
var qC4t3 = 0;
var qC6t3 = 0;
var qC5t3 = 0;

var qC2t4 = 0;
var qC3t4 = 0;
var qC4t4 = 0;
var qC6t4 = 0;
var qC5t4 = 0;

var qC2t5 = 0;
var qC3t5 = 0;
var qC4t5 = 0;
var qC6t5 = 0;
var qC5t5 = 0;

var iterarIlum = 0;
var iterarTug = 0;
var iterarqC2 = 0;
var iterarqC3 = 0;
var iterarqC4 = 0;
var iterarqC5 = 0;
var iterarqC6 = 0;

var cEsp;
var qCEsp;

var DG;
var DR;
var d1 = 0;
var d2 = 0;
var d3 = 0;
var d4 = 0;
var d5 = 0;
var d6 = 0;

var d2Tipo1 = 0;
var d2Tipo2 = 0;
var d2Tipo3 = 0;
var d2Tipo4 = 0;
var d2Tipo5 = 0;

var d3Tipo1 = 0;
var d3Tipo2 = 0;
var d3Tipo3 = 0;
var d3Tipo4 = 0;
var d3Tipo5 = 0;

var d4Tipo1 = 0;
var d4Tipo2 = 0;
var d4Tipo3 = 0;
var d4Tipo4 = 0;
var d4Tipo5 = 0;

var d5Tipo1 = 0;
var d5Tipo2 = 0;
var d5Tipo3 = 0;
var d5Tipo4 = 0;
var d5Tipo5 = 0;

var d6Tipo1 = 0;
var d6Tipo2 = 0;
var d6Tipo3 = 0;
var d6Tipo4 = 0;
var d6Tipo5 = 0;

//Variaveis de Soma, potencia e demanda.
var numeroTugs = 0;
var potTugs = 0;
var potTugsDem = 0;
var numeroTues = 0;
var potIlum = 0;
var potTotalDem = 0;
var potFinalInst = 0;
var numeroCirc = 0;

//Variáveis da função cases
var retornoCase;
var P = 0;
var A = 0;
var tug = 0;
var potTug = 0;
var ilum = 0;
var iterar = 0;
var iterarCarga = 0;
var somaCirc = 0;

//p16 chama função de dimensionamento
//cria caixa de identificação com validações
function dimens() {
    tabDim = window.document.querySelector("div#tabDim");
    nome = window.document.querySelector("#nome");
    ender = window.document.querySelector("input#ender");
    data = window.document.querySelector("input#data");
    depend = window.document.querySelector("input#depend");
    validaNome();
}
function validaNome() {
    if (!nome.value) {
        alert("Preencha com seu primeiro nome e somente depois pressione 'Continuar'.");
    } else if (!ender.value) {
        alert("Preencha com sua Cidade/Estado e somente depois pressione 'Continuar'.");
    } else if (!data.value) {
        alert("Preencha com uma data e somente depois pressione 'Continuar'.");
    } else if (!depend.value) {
        alert("Preencha com o número de dependências e somente depois pressione 'Continuar'.");
    } else {
        registro = `<h3> Dados para relatório final.</h3>
        <p>Obs.: Os dados digitados não serão gravados. Serão usados somente para melhorar a experiência do usuário e na construção do seu relatório final com os  dados calculados.</p>
        <p>Registro de consulta:</p>
        <br>
        <ol>
        <li> Data: ${data.value}.</li>
        <li> Local: ${ender.value}.</li>
        <li> Usuário: ${nome.value}.</li>
        <li> Nº de dependencias: ${depend.value}.</li>
        </ol>
        <br> 
        <p>OBS.: O dimensionamento será feito considerando o padrão urbano LIGHT-RJ 15KVA: de UM1 até T2 - (RECON-BT 2023).</p> <p><a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">Download RECON-BT 2023-LIGHT</a> </P>`;

        tabDim.innerHTML = registro;
        tabDim.innerHTML += `<br><br><input type="button" value="Continuar" onclick="continua()">`;
    }
}

function continua() {

    //Cria caixas para receber dimensões de cada comodo.
    //Incluir TUGs e Iluminação
    tabDim.innerHTML = `<h3>Cálculo de demanda de Iluminação e TUGs.</h3>`
    tabDim.innerHTML += `<h4>Informe as dimensões da dependência.</h4>
<table>
    <tr>
        <td>
        <form action="">
    <fieldset>
    <legend>DEPENDÊNCIA</legend>
            <select name="selMenu2" id="selMenu2">		
                <option class="op" value=0>Selecione</option>
                <option class="op" value=1>Quarto_1</option>
                <option class="op" value=2>Quarto_2</option>
                <option class="op" value=3>Quarto_3</option>
                <option class="op" value=4>Quarto_4</option>
                <option class="op" value=5>Quarto_5</option>
                <option class="op" value=6>Sala_1</option>
                <option class="op" value=7>Sala_2</option>
                <option class="op" value=8>Sala_3</option>
                <option class="op" value=9>Banheiro_1</option>
                <option class="op" value=10>Banheiro_2</option>
                <option class="op" value=11>Banheiro_3</option>
                <option class="op" value=12>Banheiro_4</option>
                <option class="op" value=13>Banheiro_5</option>
                <option class="op" value=14>Banheiro_6</option>
                <option class="op" value=15>Cozinha/Copa_1</option>
                <option class="op" value=16>Cozinha/Copa_2</option>
                <option class="op" value=17>Área_Serviço_1</option>
                <option class="op" value=18>Área_Serviço_2</option>
                <option class="op" value=19>Varanda_1</option>
                <option class="op" value=20>Varanda_2</option>
                <option class="op" value=21>Garagem/sóton/porão_1</option>
                <option class="op" value=22>Garagem/sóton/porão_2</option>
                <option class="op" value=23>Terraço/Sala_Festa/Área_Lazer_1</option>
                <option class="op" value=24>Terraço/Sala_Festa/Área_Lazer_2</option>
                <option class="op" value=25>Escritório/Bilbiolteca</option>
            </select>
            </fieldset>
            </form>
            <br><br>
        </td>
    </tr>
    <tr>
        <td>
        <form action="">
    <fieldset>
    <legend>Área da dependência em 'm²'</legend>
            <input type="number" name="area" id="area"> 
            </fieldset>
            </form>
            <br><br>
        </td>
    </tr>
    <tr>
        <td>
        <form action="">
    <fieldset>
    <legend>Perímetro da dependência em metros</legend>     
         <label for="perim"><input type="number" name="perim" id="perim">
         </fieldset>
         </form>    
         <br><br>
        </td>
    </tr>
</table>

<input type="button" name="incluir" id="incluir" value="Incuir Área e Perímetro" onClick="rodarIncluir()">`

}
function rodarIncluir() {
    dependTempo = window.document.querySelector("#selMenu2");
    caso = dependTempo.options[dependTempo.selectedIndex].value;

    //Seleção de Tug e Iluminação
    switch (caso) {
        case "0": alert("Selecione uma dependência e depois 'Incluir'. Ao terminar as inclusões click em 'Calcular'.");
            break;
        //1 até 5 quarto.                                                        
        case "1":

            retornoCase = cases_5();
            tugQuarto_1 = retornoCase.Rtug;
            potTugQuarto_1 = retornoCase.RpotTug;
            ilumQuarto_1 = retornoCase.Rilum;
            quartoA_1 = retornoCase.RA;
            quartoP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p> Quarto incluido!</p>`
            break;
        case "2":

            retornoCase = cases_5();
            tugQuarto_2 = retornoCase.Rtug;
            potTugQuarto_2 = retornoCase.RpotTug;
            ilumQuarto_2 = retornoCase.Rilum;
            quartoA_2 = retornoCase.RA;
            quartoP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p> Quarto incluido!</p>`
            break;
        case "3":

            retornoCase = cases_5();
            tugQuarto_3 = retornoCase.Rtug;
            potTugQuarto_3 = retornoCase.RpotTug;
            ilumQuarto_3 = retornoCase.Rilum;
            quartoA_3 = retornoCase.RA;
            quartoP_3 = retornoCase.RP;
            tabDim.innerHTML += `<p> Quarto incluido!</p>`
            break;
        case "4":

            retornoCase = cases_5();
            tugQuarto_4 = retornoCase.Rtug;
            potTugQuarto_4 = retornoCase.RpotTug;
            ilumQuarto_4 = retornoCase.Rilum;
            quartoA_4 = retornoCase.RA;
            quartoP_4 = retornoCase.RP;
            tabDim.innerHTML += `<p> Quarto incluido!</p>`
            break;
        case "5":

            retornoCase = cases_5();
            tugQuarto_5 = retornoCase.Rtug;
            potTugQuarto_5 = retornoCase.RpotTug;
            ilumQuarto_5 = retornoCase.Rilum;
            quartoA_5 = retornoCase.RA;
            quartoP_5 = retornoCase.RP;
            tabDim.innerHTML += `<p> Quarto incluido!</p>`
            break;
        //6 até 8 sala
        case "6":

            retornoCase = cases_5();
            tugSala_1 = retornoCase.Rtug;
            potTugSala_1 = retornoCase.RpotTug;
            ilumSala_1 = retornoCase.Rilum;
            salaA_1 = retornoCase.RA;
            salaP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p> Sala incluido!</p>`
            break;
        case "7":

            retornoCase = cases_5();
            tugSala_2 = retornoCase.Rtug;
            potTugSala_2 = retornoCase.RpotTug;
            ilumSala_2 = retornoCase.Rilum;
            salaA_2 = retornoCase.RA;
            salaP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p> Sala incluido!</p>`
            break;
        case "8":

            retornoCase = cases_5();
            tugSala_3 = retornoCase.Rtug;
            potTugSala_3 = retornoCase.RpotTug;
            ilumSala_3 = retornoCase.Rilum;
            salaA_3 = retornoCase.RA;
            salaP_3 = retornoCase.RP;
            tabDim.innerHTML += `<p> Sala incluido!</p>`
            break;
        //9 até 14 banheiro
        case "9":

            retornoCase = cases_35();
            tugBanheiro_1 = retornoCase.Rtug;
            potTugBanheiro_1 = retornoCase.RpotTug;
            ilumBanheiro_1 = retornoCase.Rilum;
            banheiroA_1 = retornoCase.RA;
            banheiroP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p> Banheiro incluido!</p>`
            break;
        case "10":

            retornoCase = cases_35();
            tugBanheiro_2 = retornoCase.Rtug;
            potTugBanheiro_2 = retornoCase.RpotTug;
            ilumBanheiro_2 = retornoCase.Rilum;
            banheiroA_2 = retornoCase.RA;
            banheiroP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p> Banheiro incluido!</p>`
            break;
        case "11":
            retornoCase = cases_35();
            tugBanheiro_3 = retornoCase.Rtug;
            potTugBanheiro_3 = retornoCase.RpotTug;
            ilumBanheiro_3 = retornoCase.Rilum;
            banheiroA_3 = retornoCase.RA;
            banheiroP_3 = retornoCase.RP;
            tabDim.innerHTML += `<p> Banheiro incluido!</p>`
            break;
        case "12":
            retornoCase = cases_35();
            tugBanheiro_4 = retornoCase.Rtug;
            potTugBanheiro_4 = retornoCase.RpotTug;
            ilumBanheiro_4 = retornoCase.Rilum;
            banheiroA_4 = retornoCase.RA;
            banheiroP_4 = retornoCase.RP;
            tabDim.innerHTML += `<p> Banheiro incluido!</p>`
            break;
        case "13":
            retornoCase = cases_35();
            tugBanheiro_5 = retornoCase.Rtug;
            potTugBanheiro_5 = retornoCase.RpotTug;
            ilumBanheiro_5 = retornoCase.Rilum;
            banheiroA_5 = retornoCase.RA;
            banheiroP_5 = retornoCase.RP;
            tabDim.innerHTML += `<p> Banheiro incluido!</p>`
            break;
        case "14":
            retornoCase = cases_35();
            tugBanheiro_6 = retornoCase.Rtug;
            potTugBanheiro_6 = retornoCase.RpotTug;
            ilumBanheiro_6 = retornoCase.Rilum;
            banheiroA_6 = retornoCase.RA;
            banheiroP_6 = retornoCase.RP;
            tabDim.innerHTML += `<p> Banheiro incluido!</p>`
            break;
        //15 até 16 cozinha
        case "15":
            retornoCase = cases_35();
            tugCozinhaCopa_1 = retornoCase.Rtug;
            potTugCozinhaCopa_1 = retornoCase.RpotTug;
            ilumCozinhaCopa_1 = retornoCase.Rilum;
            cozinhaCopaA_1 = retornoCase.RA;
            cozinhaCopaP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p> Copa/Cozinha incluido!</p>`
            break;
        case "16":
            retornoCase = cases_35();
            tugCozinhaCopa_2 = retornoCase.Rtug;
            potTugCozinhaCopa_2 = retornoCase.RpotTug;
            ilumCozinhaCopa_2 = retornoCase.Rilum;
            cozinhaCopaA_2 = retornoCase.RA;
            cozinhaCopaP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p> Copa/Cozinha incluido!</p>`
            break;

        //17 até 18 Area de serviço
        case "17":
            retornoCase = cases_35();
            tugAreaServico_1 = retornoCase.Rtug;
            potTugAreaServico_1 = retornoCase.RpotTug;
            ilumAreaServico_1 = retornoCase.Rilum;
            areaServicoA_1 = retornoCase.RA;
            areaServicoP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p> Área de serviço incluido!</p>`
            break;
        case "18":
            retornoCase = cases_35();
            tugAreaServico_2 = retornoCase.Rtug;
            potTugAreaServico_2 = retornoCase.RpotTug;
            ilumAreaServico_2 = retornoCase.Rilum;
            areaServicoA_2 = retornoCase.RA;
            areaServicoP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p> Área de serviço incluido!</p>`
            break;
        //19 ate 20 varanda
        case "19":
            retornoCase = cases_5();
            tugVaranda_1 = retornoCase.Rtug;
            potTugVaranda_1 = retornoCase.RpotTug;
            ilumVaranda_1 = retornoCase.Rilum;
            varandaA_1 = retornoCase.RA;
            varandaP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p> Varanda incluido!</p>`
            break;
        case "20":
            retornoCase = cases_5();
            tugVaranda_2 = retornoCase.Rtug;
            potTugVaranda_2 = retornoCase.RpotTug;
            ilumVaranda_2 = retornoCase.Rilum;
            varandaA_2 = retornoCase.RA;
            varandaP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p> Varanda incluido!</p>`
            break;
        //21 ate 22 Garagem/sóton/porão
        case "21":
            retornoCase = cases_5();
            tugGaragemStonPorao_1 = retornoCase.Rtug;
            potTugGaragemStonPorao_1 = retornoCase.RpotTug;
            ilumGaragemStonPorao_1 = retornoCase.Rilum;
            garagemStonPoraoA_1 = retornoCase.RA;
            garagemStonPoraoP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p>GAragem/Soton/Porão incluido!</p>`
            break;
        case "22":
            retornoCase = cases_5();
            tugGaragemStonPorao_2 = retornoCase.Rtug;
            potTugGaragemStonPorao_2 = retornoCase.RpotTug;
            ilumGaragemStonPorao_2 = retornoCase.Rilum;
            garagemStonPoraoA_2 = retornoCase.RA;
            garagemStonPoraoP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p>GAragem/Soton/Porão incluido!</p>`
            break;
        //23 até 24 Terraço/Sala_Festa/Área_Lazer
        case "23":
            retornoCase = cases_5();
            tugTerracoSala_FestaArea_Lazer_1 = retornoCase.Rtug;
            potTugTerracoSala_FestaArea_Lazer_1 = retornoCase.RpotTug;
            ilumTerracoSala_FestaArea_Lazer_1 = retornoCase.Rilum;
            terracoSala_FestaArea_LazerA_1 = retornoCase.RA;
            terracoSala_FestaArea_LazerP_1 = retornoCase.RP;
            tabDim.innerHTML += `<p>Terraço/Salão de festas/Área de lazer incluido!</p>`
            break;
        case "24":
            retornoCase = cases_5();
            tugTerracoSala_FestaArea_Lazer_2 = retornoCase.Rtug;
            potTugTerracoSala_FestaArea_Lazer_2 = retornoCase.RpotTug;
            ilumTerracoSala_FestaArea_Lazer_2 = retornoCase.Rilum;
            terracoSala_FestaArea_LazerA_2 = retornoCase.RA;
            terracoSala_FestaArea_LazerP_2 = retornoCase.RP;
            tabDim.innerHTML += `<p>Terraço/Salão de festas/Área de lazer incluido!</p>`
            break;
        //25 Escritório/Bilbiolteca
        case "25":
            retornoCase = cases_5();
            tugEscritorioBilbiolteca = retornoCase.Rtug;
            potTugEscritorioBilbiolteca = retornoCase.RpotTug;
            ilumEscritorioBilbiolteca = retornoCase.Rilum;
            escritorioBilbioltecaA = retornoCase.RA;
            escritorioBilbioltecaP = retornoCase.RP;
            tabDim.innerHTML += `<p>Escritário/Biblioteca incluido!</p>`
            break;

        default:
            alert("ERR: Opção inválida. Selecione uma dependência e depois 'Incluir'. Ao terminar as inclusões click em 'Calcular'.");
            break;
    }

    tabDim.innerHTML = `
            <form>
            <fieldset>
             <legend>Incluir nova dependencia ou calcular D1</legend>
             <input type="button" name="okdepend" id="okdepend" value="Incluir dependência" onclick="continua()">
             <&nbsp;&nbsp;>
             <input type="button" name="calc" id="calc" value="Calcular D1" onClick="calculo()"><br><br>
             </fieldset>
            </form>`;

}
function cases_5() {

    area = window.document.querySelector("input#area").value;
    perim = window.document.querySelector("input#perim").value;
    if (!area) {
        alert("Preencha o campo área com um valor numérico e somente depois pressione 'Incluir'.");

    } else if (!perim) {
        alert("Preencha o campo perimetro com um valor numérico e somente depois pressione 'Incluir'.");
    } else {
        P = parseFloat(perim);
        A = parseFloat(area);
        if (P < 5) {
            tug = 1;
            potTug = tug * 100;
        } else if (P % 5 == 0) {
            tug = P / 5;
            potTug = tug * 100;
        } else {
            tug = parseInt(P / 5) + 1;
            potTug = tug * 100;
        }
        if (A <= 6) {
            ilum = 100;
        } else {
            ilum = 100;
            for (var i = A - 6; i >= 4; i -= 4) {
                ilum += 60;
            }
        }
        tug += parseInt(prompt("Para esta dependência, o sistema calculou o número MÍNIMO de  " + tug + " TUGs, conforme a NBR5410. Se desejar acrescentar mais TUGs, digite um número de Tugs extra à dependência ou digite '0', e depois 'OK'. Casos deixe o Prompt em branco o cálculo apresentará erro. Após, para incluir nova dependência, selecione-a e click 'incluir'. Ao fim de todas as inclusões finalize o calculo clicando 'Calcular D1'  "));

        potTug = tug * 100;

    }

    var Rtug = tug,
        RpotTug = potTug,
        Rilum = ilum,
        RA = A,
        RP = P;
    //alert("Rtug, RpotTug, Rilum, RA, RP"+ Rtug + RpotTug+ Rilum+ RA+ RP);
    return { Rtug, RpotTug, Rilum, RA, RP };
}
function cases_35() {

    area = window.document.querySelector("input#area").value;
    perim = window.document.querySelector("input#perim").value;
    if (!area) {
        alert("Preencha o campo área com um valor numérico e somente depois pressione 'Incluir'.");

    } else if (!perim) {
        alert("Preencha o campo perimetro com um valor numérico e somente depois pressione 'Incluir'.");
    } else {
        switch (caso) {
            case "9":
            case "10":
            case "11":
            case "12":
            case "13":
            case "14":
                tug = 1;
                potTug = 600;
                break;
            default:
                P = parseFloat(perim);
                A = parseFloat(area);

                if (P < 3.5) {
                    tug = 1;
                    potTug = tug * 600;
                } else if (P % 3.5 == 0) {
                    tug = P / 3.5;
                    if (tug <= 3) {
                        potTug = tug * 600;
                    } else {
                        potTug = 1800 + ((tug - 3) * 100);
                    }

                } else {

                    tug = parseInt(P / 3.5) + 1;
                    if (tug <= 3) {
                        potTug = tug * 600;
                    } else {
                        potTug = 1800 + ((tug - 3) * 100);
                    }
                }
                break;
        }
        if (A <= 6) {
            ilum = 100;
        } else {
            ilum = 100;
            for (var i = A - 6; i >= 4; i -= 4) {
                ilum += 60;
            }
        }
        tug += parseInt(prompt("Para esta dependência, o sistema calculou o número MÍNIMO de  " + tug + " TUGs, conforme a NBR5410. Se desejar acrescentar mais TUGs, digite um número de Tugs extra à dependência ou digite '0', e depois 'OK'. Casos deixe o Prompt em branco o cálculo apresentará erro. Após, para incluir nova dependência, selecione-a e click 'incluir'. Ao fim de todas as inclusões finalize o calculo clicando 'Calcular D1'  "));
        if (tug <= 3) {
            potTug = tug * 600;
        } else {
            potTug = 1800 + ((tug - 3) * 100);
        }
    }

    var Rtug = tug,
        RpotTug = potTug,
        Rilum = ilum,
        RA = A,
        RP = P;
    return { Rtug, RpotTug, Rilum, RA, RP };
}


function calculo() {

    //Soma de Número de tugs
    numeroTugs = tugQuarto_1 + tugQuarto_2 + tugQuarto_3 + tugQuarto_4 + tugQuarto_5 + tugSala_1 + tugSala_2 + tugSala_3 + tugBanheiro_1 + tugBanheiro_2 + tugBanheiro_3 + tugBanheiro_4 + tugBanheiro_5 + tugBanheiro_6 + tugCozinhaCopa_1 + tugCozinhaCopa_2 + tugAreaServico_1 + tugAreaServico_2 + tugVaranda_1 + tugVaranda_2 + tugGaragemStonPorao_1 + tugGaragemStonPorao_2 + tugTerracoSala_FestaArea_Lazer_1 + tugTerracoSala_FestaArea_Lazer_2 + tugEscritorioBilbiolteca;
    //soma de Potência de tugs
    potTugs = potTugQuarto_1 + potTugQuarto_2 + potTugQuarto_3 + potTugQuarto_4 + potTugQuarto_5 + potTugSala_1 + potTugSala_2 + potTugSala_3 + potTugBanheiro_1 + potTugBanheiro_2 + potTugBanheiro_3 + potTugBanheiro_4 + potTugBanheiro_5 + potTugBanheiro_6 + potTugCozinhaCopa_1 + potTugCozinhaCopa_2 + potTugAreaServico_1 + potTugAreaServico_2 + potTugVaranda_1 + potTugVaranda_2 + potTugGaragemStonPorao_1 + potTugGaragemStonPorao_2 + potTugTerracoSala_FestaArea_Lazer_1 + potTugTerracoSala_FestaArea_Lazer_2 + potTugEscritorioBilbiolteca;

    //Soma de potencia de iluminação
    potIlum = ilumQuarto_1 + ilumQuarto_2 + ilumQuarto_3 + ilumQuarto_4 + ilumQuarto_5 + ilumSala_1 + ilumSala_2 + ilumSala_3 + ilumBanheiro_1 + ilumBanheiro_2 + ilumBanheiro_3 + ilumBanheiro_4 + ilumBanheiro_5 + ilumBanheiro_6 + ilumCozinhaCopa_1 + ilumCozinhaCopa_2 + ilumAreaServico_1 + ilumAreaServico_2 + ilumVaranda_1 + ilumVaranda_2 + ilumGaragemStonPorao_1 + ilumGaragemStonPorao_2 + ilumTerracoSala_FestaArea_Lazer_1 + ilumTerracoSala_FestaArea_Lazer_2 + ilumEscritorioBilbiolteca;

    //soma de TUES C1
    //Dimensões Totais: Incluir Variáveis de área e perímetro no Switch (caso) para receber valores..

    aCasa = salaA_1 + salaA_2 + salaA_3 + quartoA_1 + quartoA_2 + quartoA_3 + quartoA_4 + quartoA_5 + varandaA_1 + varandaA_2 + banheiroA_1 + banheiroA_2 + banheiroA_3 + banheiroA_4 + banheiroA_5 + banheiroA_6 + areaServicoA_1 + areaServicoA_2 + cozinhaCopaA_2 + cozinhaCopaA_1 + garagemStonPoraoA_1 + garagemStonPoraoA_2 + terracoSala_FestaArea_LazerA_1 + terracoSala_FestaArea_LazerA_2 + escritorioBilbioltecaA;

    perimetroCasa = salaP_1 + salaP_2 + salaP_3 + quartoP_1 + quartoP_2 + quartoP_3 + quartoP_4 + quartoP_5 + varandaP_1 + varandaP_2 + banheiroP_1 + banheiroP_2 + banheiroP_3 + banheiroP_4 + banheiroP_5 + banheiroP_6 + areaServicoP_1 + areaServicoP_2 + cozinhaCopaP_2 + cozinhaCopaP_1 + garagemStonPoraoP_1 + garagemStonPoraoP_2 + terracoSala_FestaArea_LazerP_1 + terracoSala_FestaArea_LazerP_2 + escritorioBilbioltecaP;
    //Demenda de tug e Iluminação
    //por Unidade Consumidora 0,03 KVA/m2
    kvaM2 = 30 * aCasa;

    //Demenda de tug e Iluminação
    //por FD%

    c1 = potIlum + potTugs;

    //Comparar m´todos de demanda por metro quadrado e por atribuição de VA por ponto.
    //alert("d1 antes: "+d1+ "VA, kvaM2: "+ kvaM2+"VA")
    alert("O sistema calculou pelo método Kva*m²: " + kvaM2 + " VA instalados(C1). Considerando as dimensões:  área total da residência de " + aCasa + " m², e  perimetro total da residência de " + perimetroCasa + " m, que resultou em: Número de TUGs: " + numeroTugs + " unidades, Potência atribuida à TUGs: " + potTugs + " VA, Potência atribuida à Iluminação: " + potIlum + " VA, C1 resultou em: " + c1 + " VA.  O sistema, atendendo o RECON-BT 2023 - LIGHT, para dimsnsionamento de unidade residêncial, adotou o maior valor calculado para o dimensionamento, comparando o resultado dos dois métodos.");

    if (kvaM2 > c1) {
        c1 = kvaM2;
    }

    if (c1 <= 1000) {
        d1 = c1 * 0.8;
    } else if (c1 <= 2000) {
        d1 = 1000 * 0.8 + (c1 - 1000) * 0.75;
    } else if (c1 <= 3000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + (c1 - 2000) * 0.65;
    } else if (c1 <= 4000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + (c1 - 3000) * 0.6;
    } else if (c1 <= 5000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + (c1 - 4000) * 0.5;
    } else if (c1 <= 6000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + 1000 * 0.5 + (c1 - 5000) * 0.45;
    } else if (c1 <= 7000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + 1000 * 0.5 + 1000 * 0.45 + (c1 - 6000) * 0.40;
    } else if (c1 <= 8000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + 1000 * 0.5 + 1000 * 0.45 + 1000 * 0.40 + (c1 - 7000) * 0.35;
    } else if (c1 <= 9000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + 1000 * 0.5 + 1000 * 0.45 + 1000 * 0.40 + 1000 * 0.35 + (c1 - 8000) * 0.30;
    } else if (c1 <= 10000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + 1000 * 0.5 + 1000 * 0.45 + 1000 * 0.40 + 1000 * 0.35 + 1000 * 0.30 + (c1 - 9000) * 0.27;
    } else if (c1 > 10000) {
        d1 = 1000 * 0.8 + 1000 * 0.75 + 1000 * 0.65 + 1000 * 0.6 + 1000 * 0.5 + 1000 * 0.45 + 1000 * 0.40 + 1000 * 0.35 + 1000 * 0.30 + 1000 * 0.27 + (c1 - 10000) * 0.24;
    }

    // Demanda de TUES
    //Demanda Total
    //alert("A demanda d1 resultou em: " + d1 + " VA.");

    InserirTipoGeralTue();
}

function InserirTipoGeralTue() {


    tabDim.innerHTML = `<br><table>`
    tabDim.innerHTML += `<tr><h3>Cálculo de demanda de TUEs.</h3></tr>`
    tabDim.innerHTML += `<tr><h4>Informe o tipo, quantidade e soma de potencias para TUEs do mesmo tipo. </h4></tr>`
    tabDim.innerHTML += `<tr>`
    tabDim.innerHTML += `<td>
<br>
<form action="">
    <fieldset>
    <legend>TIPO GERAL</legend>
<select name="selMenu3" id="selMenu3">		
<option class="op1" value=0>Selecione</option>
<option class="op1" value=1>Aparelho de aquecimento_C2</option>
<option class="op1" value=2>Condicionador de Ar_C3</option>
<option class="op1" value=3>Self Contained(Similares_C4</option>
<option class="op1" value=4>Motores, Maq. de solda (motor-gerador)_C5</option>
<option class="op1" value=5>MAq solda_trafo, equip Hospitalar_C6</option>
</select>
</fieldset>
</form>
<br><br>
</td>

<td>   
<fieldset>
<legend>ATENÇÃO</legend>
<p>CLASSIFIQUE O TIPO: Refere-se a facilitar incluir diferentes tipos de TUE na mesma classificação geral, ou seja um Aparelho de aquecimento Tipo 1 será demandada 100%, enquanto dois Aparelhos de aquecimento Tipo 2 serão em 70%. <fieldset> Exemplo: Uma casa possui 03 Chuveiros, 02 torneiras e 01 tanque. Declare a soma das potências dos chuveiros como TIPO 1 e a QUANTIDADE como 03,  a soma das potencias das torneiras como TIPO 2, e a QUANTIDADE como 02, a potencia do tanque como Tipo 03 e Quantidade 01. Anote os valores individuais das potências para uso na tabela final para impressão. </fieldset></p>    
</fieldset> 
<br><br>
</td>
<td>
<form action="">
    <fieldset>
    <legend>CLASSIFIQUE O TIPO</legend>
<select name="selMenu4" id="selMenu4">		
<option class="op1" value=0>Selecione</option>
<option class="op1" value=1>Tipo 1</option>
<option class="op1" value=2>Tipo 2</option>
<option class="op1" value=3>Tipo 3</option>
<option class="op1" value=4>Tipo 4</option>
<option class="op1" value=5>Tipo 5</option>
</select>
</fieldset>
</form>
<br><br>    
</td>
<td>
<form action="">
    <fieldset>
    <legend>QUANT. DE TUEs DO MESMO TIPO</legend>     
<input type="number" name="qtue" id="qtue">
</fieldset>
</form> 
<br><br>    
</td>
<td>
<form action="">
    <fieldset>
    <legend>SOMA DAS POTÊNCIAS DAS CARGAS DESTE TIPO</legend>
    <input type="number" name="tue" id="tue"> 
    </fieldset>
    </form>
    <br><br>
</td>`

    tabDim.innerHTML += `<input type="button" name="incluirTue" id="incluirTue" value="Incuir Tues" onClick="rodarIncluirTue()">`

}

function rodarIncluirTue() {
    //Seleção de Tue
    selTue = window.document.querySelector("#selMenu3");
    caso2 = selTue.options[selTue.selectedIndex].value;
    switch (caso2) {
        case "0":
            alert("Selecione o tipo de TUE e depois incluir. Ao terminar as inclusões click em calcular.");

            break;
        case "1":
            c2 = window.document.querySelector('#tue').value;
            qC2 = parseInt(window.document.querySelector('#qtue').value);
            cEsp = c2;
            qCEsp = qC2;

            alert("Aparelho de aquecimento_C2:  " + qC2 + " = " + c2 + "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'");
            tipoTue = window.document.querySelector('#selMenu4');
            caso3 = tipoTue.options[tipoTue.selectedIndex].value;
            switch (caso3) {
                case "0": alert("Selecione um tipo e depois incluir.");
                    break;
                case "1":
                    d2Tipo1 = C2();
                    c2t1 = c2;
                    qC2t1 = qC2;
                    break;
                case "2":
                    d2Tipo2 = C2();
                    c2t2 = c2;
                    qC2t2 = qC2;
                    break;
                case "3":
                    d2Tipo3 = C2();
                    c2t3 = c2;
                    qC2t3 = qC2;
                    break;
                case "4":
                    d2Tipo4 = C2();
                    c2t4 = c2;
                    qC2t4 = qC2;
                    break;
                case "5":
                    d2Tipo5 = C2();
                    c2t5 = c2;
                    qC2t5 = qC2;
                    break;
                default:
                    alert("ERR.")
                    break;
                    function C2() {
                        var c = c2, d = 0, qC = qC2;
                        if (qC == 0) {
                            d = 0;
                        } else if (qC == 1) {
                            d = c * 1;
                        } else if (qC == 2) {
                            d = c * 0.75;
                        } else if (qC == 3) {
                            d = c * 0.7;
                        } else if (qC == 4) {
                            d = c * 0.66;
                        } else if (qC == 5) {
                            d = c * 0.62;
                        } else if (qC == 6) {
                            d = c * 0.59;
                        } else if (qC == 7) {
                            d = c * 0.56;
                        } else if (qC == 8) {
                            d = c * 0.53;
                        } else if (qC == 9) {
                            d = c * 0.51;
                        } else if (qC >= 10) {
                            alert("ERR: Neste Aplicativos o número de aparelhos é limitado a 09 unidades.");
                        }
                        return d;
                    }
            }
            d2 = d2Tipo1 + d2Tipo2 + d2Tipo3 + d2Tipo4 + d2Tipo5;
            c2f = parseFloat(c2t1) + parseFloat(c2t2) + parseFloat(c2t3) + parseFloat(c2t4) + parseFloat(c2t5);
            qC2f = parseFloat(qC2t1) + parseFloat(qC2t2) + parseFloat(qC2t3) + parseFloat(qC2t4) + parseFloat(qC2t5);

            break;
        case "2":
            c3 = window.document.querySelector('#tue').value;
            qC3 = parseInt(window.document.querySelector('#qtue').value);
            cEsp = c3;
            qCEsp = qC3;
            alert("Condicionador de Ar_C3:  " + qC3 + " = " + c3 + "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'");
            tipoTue = window.document.querySelector('#selMenu4');
            caso3 = tipoTue.options[tipoTue.selectedIndex].value;
            switch (caso3) {
                case "0": alert("Selecione um tipo e depois incluir.");
                    break;
                case "1":
                    d3Tipo1 = C3();
                    c3t1 = c3;
                    qC3t1 = qC3;
                    break;
                case "2":
                    d3Tipo2 = C3();
                    c3t2 = c3;
                    qC3t2 = qC3;
                    break;
                case "3":
                    d3Tipo3 = C3();
                    c3t3 = c3;
                    qC3t3 = qC3;
                    break;
                case "4":
                    d3Tipo4 = C3();
                    c3t4 = c4;
                    qC3t4 = qC3;
                    break;
                case "5":
                    d3Tipo5 = C3();
                    c3t5 = c3;
                    qC3t5 = qC3;
                    break;
                default:
                    alert("ERR.")
                    break;
                    function C3() {
                        var c = c3, d = 0, qC = qC3;
                        if (qC == 0) {
                            d = 0;
                        } else if (qC <= 4) {
                            d = c * 1;
                        } else if (qC <= 10) {
                            d = c * 0.7;
                        } else if (qC > 10) {
                            alert("ERR: Neste Aplicativos o número de aparelhos é limitado a 10 unidades.");
                        }
                        return d;
                    }

            }
            d3 = d3Tipo1 + d3Tipo2 + d3Tipo3 + d3Tipo4 + d3Tipo5;
            c3f = parseFloat(c3t1) + parseFloat(c3t2) + parseFloat(c3t3) + parseFloat(c3t4) + parseFloat(c3t5);
            qC3f = parseFloat(qC3t1) + parseFloat(qC3t2) + parseFloat(qC3t3) + parseFloat(qC3t4) + parseFloat(qC3t5);

            break;
        case "3":
            c4 = window.document.querySelector('#tue').value;
            qC4 = parseInt(window.document.querySelector('#qtue').value);
            cEsp = c4;
            qCEsp = qC4;
            alert("Self Contained(Similares_C4):  " + qC4 + " = " + c4 + "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'");
            tipoTue = window.document.querySelector('#selMenu4');
            caso3 = tipoTue.options[tipoTue.selectedIndex].value;
            switch (caso3) {
                case "0": alert("Selecione um tipo e depois incluir.");
                    break;
                case "1":
                    d4Tipo1 = C4();
                    c4t1 = c4;
                    qC4t1 = qC4;
                    break;
                case "2":
                    d4Tipo2 = C4();
                    c4t2 = c4;
                    qC4t2 = qC4;
                    break;
                case "3":
                    d4Tipo3 = C4();
                    c4t3 = c4;
                    qC4t3 = qC4;
                    break;
                case "4":
                    d4Tipo4 = C4();
                    c4t4 = c4;
                    qC4t4 = qC4;
                    break;
                case "5":
                    d4Tipo5 = C4();
                    c4t5 = c4;
                    qC4t5 = qC4;
                    break;
                default:
                    alert("ERR.")
                    break;
                    function C4() {
                        var c = c4, d = 0, qC = qC4;
                        if (qC == 0) {
                            d = 0;
                        } else if (qC4 <= 10) {
                            d = c * 1;
                        } else if (qC > 10) {
                            alert("ERR: Neste Aplicativos o número de aparelhos é limitado a 10 unidades.");
                        }
                        return d;
                    }
            }
            d4 = d4Tipo1 + d4Tipo2 + d4Tipo3 + d4Tipo4 + d4Tipo5;
            c4f = parseFloat(c4t1) + parseFloat(c4t2) + parseFloat(c4t3) + parseFloat(c4t4) + parseFloat(c4t5);
            qC4f = parseFloat(qC4t1) + parseFloat(qC4t2) + parseFloat(qC4t3) + parseFloat(qC4t4) + parseFloat(qC4t5);

            break;
        case "4":
            c5 = window.document.querySelector('#tue').value;
            qC5 = parseInt(window.document.querySelector('#qtue').value);
            cEsp = c5;
            qCEsp = qC5;
            alert("Motores, Maq. de solda (motor-gerador)_C5;  " + qC5 + " = " + c5 + "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'");
            tipoTue = window.document.querySelector('#selMenu4');
            caso3 = tipoTue.options[tipoTue.selectedIndex].value;
            switch (caso3) {
                case "0": alert("Selecione um tipo e depois incluir.");
                    break;
                case "1":
                    d5Tipo1 = C5();
                    c5t1 = c5;
                    qC5t1 = qC5;
                    break;
                case "2":
                    d5Tipo2 = C5();
                    c5t2 = c5;
                    qC5t2 = qC5;
                    break;
                case "3":
                    d5Tipo3 = C5();
                    c5t3 = c5;
                    qC5t3 = qC5;
                    break;
                case "4":
                    d5Tipo4 = C5();
                    c5t4 = c5;
                    qC5t4 = qC5;
                    break;
                case "5":
                    d5Tipo5 = C5();
                    c5t5 = c5;
                    qC5t5 = qC5;
                    break;
                default:
                    alert("ERR.")
                    break;
                    function C5() {
                        var c = c5, d = 0, qC = qC5;
                        if (qC == 0) {
                            d = 0;
                        } else if (qC == 1) {
                            d = c * 1;
                        } else if (qC == 2) {
                            d = c * 0.75;
                        } else if (qC == 3) {
                            d = c * 0.6333;
                        } else if (qC == 4) {
                            d = c * 0.5750;
                        } else if (qC == 5) {
                            d = c * 0.54;
                        } else if (qC == 6) {
                            d = c * 0.5;
                        } else if (qC == 7) {
                            d = c * 0.4714;
                        } else if (qC == 8) {
                            d = c * 0.45;
                        } else if (qC == 9) {
                            d = c * 0.4333;
                        } else if (qC >= 10) {
                            d = c * 0.42;
                        }
                        return d;
                    }
            }
            d5 = d5Tipo1 + d5Tipo2 + d5Tipo3 + d5Tipo4 + d5Tipo5;
            c5f = parseFloat(c5t1) + parseFloat(c5t2) + parseFloat(c5t3) + parseFloat(c5t4) + parseFloat(c5t5);
            qC5f = parseFloat(qC5t1) + parseFloat(qC5t2) + parseFloat(qC5t3) + parseFloat(qC5t4) + parseFloat(qC5t5);
            break;

        case "5":
            c6 = window.document.querySelector('#tue').value;
            qC6 = parseInt(window.document.querySelector('#qtue').value);
            cEsp = c6;
            qCEsp = qC6;
            alert("MAq solda_trafo, equip Hospitalar_C6:  " + qC6 + " = " + c6 + "VA, incluido. Para incluir nova TUE, selecione-a e click 'incluir'. para finalizar click 'calcular'");
            tipoTue = window.document.querySelector('#selMenu4');
            caso3 = tipoTue.options[tipoTue.selectedIndex].value;
            switch (caso3) {
                case "0": alert("Selecione um tipo e depois incluir.");
                    break;
                case "1":
                    d6Tipo1 = C6();
                    c6t1 = c6;
                    qC6t1 = qC6;
                    break;
                case "2":
                    d6Tipo2 = C6();
                    c6t2 = c6;
                    qC6t2 = qC6;
                    break;
                case "3":
                    d6Tipo3 = C6();
                    c6t3 = c6;
                    qC6t3 = qC6;
                    break;
                case "4":
                    d6Tipo4 = C6();
                    c6t4 = c6;
                    qC6t4 = qC6;
                    break;
                case "5":
                    d6Tipo5 = C6();
                    c6t5 = c6;
                    qC6t5 = qC6;
                    break;
                default:
                    alert("ERR.")
                    break;
                    function C6() {
                        var c = c6, d = 0, qC = qC6;
                        if (qC == 0) {
                            d = 0;
                        } else if (qC == 1) {
                            d = c * 1;
                        } else if (qC <= 3) {
                            d = c * 0.7;
                        } else if (qC <= 7) {
                            d = c * 0.6;
                        } else if (qC > 7) {
                            alert("ERR: Neste Aplicativos o número de aparelhos é limitado a 7 unidades.");
                        }
                        return d;
                    }
            }
            d6 = d6Tipo1 + d6Tipo2 + d6Tipo3 + d6Tipo4 + d6Tipo5;
            c6f = parseFloat(c6t1) + parseFloat(c6t2) + parseFloat(c6t3) + parseFloat(c6t4) + parseFloat(c6t5);
            qC6f = parseFloat(qC6t1) + parseFloat(qC6t2) + parseFloat(qC6t3) + parseFloat(qC6t4) + parseFloat(qC6t5);
            break;
    }

    //Incluir TUE

    tabDim.innerHTML = ` <form>
        <fieldset>
         <legend>Incluir nova TUE ou Calcular</legend>
         <input type="button" name="incluirTues" id="incluirTues" value="Incuir Tues" onClick="InserirTipoGeralTue()">
         <&nbsp;&nbsp;>
         <input type="button" name="calcTue" id="calcTue" value="Calcular" onClick="rodarCalcTue()"><br><br>
         </fieldset>
        </form>`;
}

function rodarCalcTue() {
    potTotalDem = parseFloat(d1) + parseFloat(d2) + parseFloat(d3) + parseFloat(d4) + parseFloat(d5) + parseFloat(d6);
    potFinalInst = parseFloat(c1) + parseFloat(c2f) + parseFloat(c3f) + parseFloat(c4f) + parseFloat(c5f) + parseFloat(c6f);
    numeroTues = parseFloat(qC2f) + parseFloat(qC3f) + parseFloat(qC4f) + parseFloat(qC5f) + parseFloat(qC6f);

    tabDim.innerHTML = `
                                            <h3> Resultado do dimensionamento</h3>`
    tabDim.innerHTML += ` <h4>Registro de consulta:</h4>
                                            <br>
                                            <ol>
                                            <li> Data: ${data.value}.</li>
                                            <li> Local: ${ender.value}.</li>
                                            <li> Usuário: ${nome.value}.</li>
                                            </ol>
                                        <br>`
    tabDim.innerHTML += `<p>OBS.: O dimensionamento foi feito considerando o padrão urbano LIGHT-RJ 15KVA: de UM1 até T2 - (RECON-BT 2023).</p><p><a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">Download RECON-BT 2023-LIGHT</a> </p><br>`

    tabDim.innerHTML += `<p>Nesta consulta foram encontrados os seguintes resultados: </p>`
    tabDim.innerHTML += `<ol>
                                            <li>Número de depenêdncias: ${depend.value} dependências.</li>
                                            <li>Área total da residência: ${aCasa} m².</li>
                                            <li>Perímetro total da residência: ${perimetroCasa} m.</li>
                                            <li>Número de TUGs: ${numeroTugs} TUGs.</li> 
                                            <li>Número de TUES: ${numeroTues} TUEs</li>
                                            <li>Potência Instalada de TUGs: ${potTugs} VA. </li>
                                            <li>Potência Instalada de Iluminação: ${potIlum} VA. </li>
                                            <li>Potencia Instalada resultante C1 (kVA * m² // Tug + Iluminação): ${c1} VA.</li>
                                            <li>Potencia Instalada resultante C2: ${c2f} VA.</li>
                                            <li>Potencia Instalada resultante C3: ${c3f} VA.</li>
                                            <li>Potencia Instalada resultante C4: ${c4f} VA.</li>
                                            <li>Potencia Instalada resultante C5: ${c5f} VA.</li>
                                            <li>Potencia Instalada resultante C6: ${c6f} VA.</li>
                                            <li>Potencia Final Instalada resultante C: ${potFinalInst} VA.</li>
                                            <li>Potencia demandada resultante D1 (kVA * m² // Tug + Iluminação): ${d1} VA.</li>
                                            <li>Potencia demandada resultante D2: ${d2} VA.</li>
                                            <li>Potencia demandada resultante D3: ${d3} VA.</li>
                                            <li>Potencia demandada resultante D4: ${d4} VA.</li>
                                            <li>Potencia demandada resultante D5: ${d5} VA.</li>
                                            <li>Potencia demandada resultante D6: ${d6} VA.</li>
                                            <li>Potencia Final demandada D: ${potTotalDem} VA.</li>
                                            </ol><br>`

    tabDim.innerHTML += `<h3> Tabela para medidor LIGHT - Ligações novas e alterações de carga, com carga demandada até 15 kVA (40 A), sem obrigatoriedade de apresentação de ART, RRT ou TRT.</h3>`

    if (potTotalDem <= 4000) {
        padrao = "UM1";
        tabDim.innerHTML += `
                                            <fieldset>
                                            <legend>Padrão Urbano Monofáfico 1 - UM1</legend>
                                            <ul>
                                            <li>Potencia demanda: ${potTotalDem} VA.</li>
                                            <li>Tensão Nominal(V): 127V.</li>
                                            <li>Nº de fases: 01.</li>
                                            <li>Demanda (KVA): D<= 4 KVA.</li>
                                            <li>Proteção Geral (A): 32A - 1F+1N.</li>
                                            <li>Condutores(mm²):  06 mm²</li>
                                            </ul>
                                            </fieldset>`
        tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem <= 5000) {
        padrao = "UM2";
        tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão Urbano Monofásico 2 - UM2</legend>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 127V.</li>
                                                <li>Nº de fases: 01.</li>
                                                <li>Demanda (KVA): D<= 5 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 1F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`
        tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem <= 7000) {
        padrao = "UB1";
        tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão: Urbano Monofásico 3 - UM3 ou Urbano Bifásico 1 - UB1</legend>
                                                <h4>Urbano Monofásico 3 - UM3</h4>
                                                <p>Obs.: UM3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 127V.</li>
                                                <li>Nº de fases: 01.</li>
                                                <li>Demanda (KVA): D<= 8 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 1F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Urbano Bifásico 1 - UB1</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 7 KVA.</li>
                                                <li>Proteção Geral (A): 32A - 2F+1N.</li>
                                                <li>Condutores(mm²):  06 mm²</li>
                                                </ul>
                                                </fieldset>`
        tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem <= 8000) {
        padrao = "UB2";
        tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão: Urbano Monofásico 3 - UM3 ou Urbano Bifásico 2 - UB2</legend>
                                                <h4>Urbano Monofásico 3 - UM3</h4>
                                                <p>Obs.:UM3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 127V.</li>
                                                <li>Nº de fases: 01.</li>
                                                <li>Demanda (KVA): D<= 8 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 1F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Urbano Bifásico 2 - UB2</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 8 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 2F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`
        tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem <= 12000) {
        padrao = "T1";
        tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Urbano Bifásico 3 - UB3 ou Padrão Trifásico 1 - T1</legend>
                                                <h4>Urbano Bifásico 3 - UB3</h4>
                                                <p>Obs.: UB3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 13 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 2F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Padrão Trifásico 1 - T1</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220/127V.</li>
                                                <li>Nº de fases: 03.</li>
                                                <li>Demanda (KVA): D<= 12 KVA.</li>
                                                <li>Proteção Geral (A): 32A - 03F+1N.</li>
                                                <li>Condutores(mm²):  06 mm²</li>
                                                </ul>
                                                </fieldset>`
        tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem <= 13000) {
        padrao = "T2";
        tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Urbano Bifásico 3 - UB3 ou Padrão Trifásico 2 - T2</legend>
                                                <h4>Urbano Bifásico 3 - UB3</h4>
                                                <p>Obs.:UB3 - Padrão 15kVA(63A):Obrigatoriedade de apresentação de ART, RRT ou TRT</p>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220V/127V.</li>
                                                <li>Nº de fases: 02.</li>
                                                <li>Demanda (KVA): D<= 13 KVA.</li>
                                                <li>Proteção Geral (A): 63A - 2F+1N.</li>
                                                <li>Condutores(mm²):  16 mm²</li>
                                                </ul>

                                                <h4>Padrão Trifásico 2 - T2</h4>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220/127V.</li>
                                                <li>Nº de fases: 03.</li>
                                                <li>Demanda (KVA): D<= 15 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 03F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`
        tabDim.innerHTML += `<br>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem <= 15000) {
        padrao = "T2";
        tabDim.innerHTML += `
                                                <fieldset>
                                                <legend>Padrão Trifásico 2 - T2</legend>
                                                <ul>
                                                <li>Potencia demanda: ${potTotalDem} VA.</li>
                                                <li>Tensão Nominal(V): 220/127V.</li>
                                                <li>Nº de fases: 03.</li>
                                                <li>Demanda (KVA): D<= 15 KVA.</li>
                                                <li>Proteção Geral (A): 40A - 03F+1N.</li>
                                                <li>Condutores(mm²):  10 mm²</li>
                                                </ul>
                                                </fieldset>`
        tabDim.innerHTML += `<br><p>Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p><br>`
    } else if (potTotalDem > 15000) {
        tabDim.innerHTML += `
                                            <h4>Padrão Trifásico - Maior do que 
                                             15KVA</h4>
        
                                             <p>  ERRO:  Acima de 15KVA é necessário contratar um técnico ou engenheiro com obrigatoriedade de apresentação de ART, RRT ou TRT</p><br>
                                             <p>Consulte: Tabela de dimensionamento de materiais (RECON-BT 2023-LIGHT, Capitulo 5, pag 149), e os diagramas do ponto de entrada até 24kVA (RECON-BT 2023-LIGHT, Capitulo 6, pg153(), podem ser acessados no <a href="http://www.light.com.br/Repositorio/Recon/RECON-BT%202023.pdf"  target="_blank">RECON-BT 2023-LIGHT</a>, ou entre em contato para maiores informações.</p>
                                             <p><a href="mailto:missao.filosofica@gmail.com">Missão: Instalações Elétricas.</a> </p><br>`

    }


    tabDim.innerHTML += ` <form>
    <fieldset>
     <legend>Dimensionamento de Circuitos</legend>
     <input type="button" name="DimenCirc" id="DimenCirc" value="Dimensionar de CKT" onClick="rodarDimenCirc()">
     <&nbsp;&nbsp;>
     <input type="button" value="Imprimir esta página"  onClick="window.print()">
     </fieldset>
    </form>`;
}

function rodarDimenCirc() {
    tabDim.innerHTML = `
<h3>Dimensionamento de Circuitos.</h3>

<fieldset>
<legend>Descrição:</legend>
<p class="txt">A fim de alcançar um dimensionamento seguro, temos que considerar os fenômenos que influenciam a formação da corrente elétrica, tais quais: Temperatura, Material do condutor, Distancia entre o ponto de consumo e/ou Quadro de distribuição e as cargas, Circuitos agrupados em eu mesmo eletroduto, tensão de alimentação da carga, entre outros, e Considerando o objetivo deste aplicativo, que é ajudar eletricistas iniciantes a dimensionar uma residencia até 15kVA, sem obrigatoriedade de ART, RRT ou TRT, necessitamos de algumas informações adcionais para o dimensionamento, aplicáveis à residências que cumprem os requisitos para obter fornecimento até esta grandeza de consumo.</p>
</fieldset><br><br>`

    if (padrao === "UM1" || padrao === "UM2") {

        tabDim.innerHTML += `
        <form action="">
        <fieldset>
        <legend>Tensão de cargas Tipo C1.</legend>
        <select name="selMenuC1" id="selMenuC1">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>
       
        </select>
        </fieldset>
        <br>
        <fieldset>
        <legend>Tensão de cargas Tipo C2</legend>
        <select name="selMenuC2" id="selMenuC2">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>
        
        </select>
        </fieldset>
        <br>
        <fieldset>
        <legend>Tensão de cargas Tipo C3</legend>
        <select name="selMenuC3" id="selMenuC3">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>
        
        </select>
        </fieldset>
        <br>
        <fieldset>
        <legend>Tensão de cargas Tipo C4</legend>
        <select name="selMenuC4" id="selMenuC4">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>
        
        </select>
        </fieldset>
        <br>
        <fieldset>
        <legend>Tensão de cargas Tipo C5</legend>
        <select name="selMenuC5" id="selMenuC5">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>
       
        </select>
        </fieldset>
        <br>
        <fieldset>
        <legend>Tensão de cargas Tipo C6</legend>
        <select name="selMenuC6" id="selMenuC6">	
        <option class="volt1" value=0 >Selecione</option>
        <option class="volt1" selected value=1 >127V</option>
        
        </select>
        </fieldset>
        <br>
        <br>
        </form>`

    } else if (padrao === "UB1" || padrao === "UB2") {
        tabDim.innerHTML += `
    <form action="">
    <fieldset>
    <legend>Tensão de cargas Tipo C1.</legend>
    <select name="selMenuC1" id="selMenuC1">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" selected value=1 >127V</option>
    <option class="volt2"  selected value=2>220v</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C2</legend>
    <select name="selMenuC2" id="selMenuC2">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C3</legend>
    <select name="selMenuC3" id="selMenuC3">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C4</legend>
    <select name="selMenuC4" id="selMenuC4">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C5</legend>
    <select name="selMenuC5" id="selMenuC5">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C6</legend>
    <select name="selMenuC6" id="selMenuC6">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2 >220v</option>
    </select>
    </fieldset>
    <br>
    <br>
    </form>`
    } else if (padrao === "T1" || padrao === "T2") {
        tabDim.innerHTML += `
    <form action="">
    <fieldset>
    <legend>Tensão de cargas Tipo C1.</legend>
    <select name="selMenuC1" id="selMenuC1">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" selected value=1 >127V</option>
    <option class="volt2"  selected value=2>220v - Bifásico</option>
    <option class="volt2"  value=3>220v -Trifásico</option>

    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C2</legend>
    <select name="selMenuC2" id="selMenuC2">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v - Bifásico</option>
    <option class="volt2"  value=3>220v -Trifásico</option>

    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C3</legend>
    <select name="selMenuC3" id="selMenuC3">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v - Bifásico</option>
    <option class="volt2"  value=3>220v -Trifásico</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C4</legend>
    <select name="selMenuC4" id="selMenuC4">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v - Bifásico</option>
    <option class="volt2"  value=3>220v -Trifásico</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C5</legend>
    <select name="selMenuC5" id="selMenuC5">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v - Bifásico</option>
    <option class="volt2"  value=3>220v -Trifásico</option>
    </select>
    </fieldset>
    <br>
    <fieldset>
    <legend>Tensão de cargas Tipo C6</legend>
    <select name="selMenuC6" id="selMenuC6">	
    <option class="volt1" value=0 >Selecione</option>
    <option class="volt1" value=1 >127V</option>
    <option class="volt2"  selected value=2>220v - Bifásico</option>
    <option class="volt2"  value=3>220v -Trifásico</option>
    </select>
    </fieldset>
    <br>
    <br>
    </form>`
    }

    tabDim.innerHTML += `<br><input type="button" name="tensao" id="tensao" value="Enviar" onClick="rodarCircuitos()">`
}

function rodarCircuitos() {

    tensaoC1 = window.document.querySelector("#selMenuC1");
    tensaoC1I = tensaoC1.options[tensaoC1.selectedIndex].value;

    switch (tensaoC1I) {
        case "0":
            alert("ERR: Selecione uma tensão e depois click em 'Enviar'.")
            break;
        case "1":
            tensaoC1f = 127;
            break;
        case "2":
            tensaoC1f = 220;
            break;

    }
    tensaoC2 = window.document.querySelector("#selMenuC2");
    tensaoC2I = tensaoC2.options[tensaoC2.selectedIndex].value;
    switch (tensaoC2I) {
        case "0":
            alert("ERR: Selecione uma tensão e depois click em 'Enviar'.")
            break;
        case "1":
            tensaoC2f = 127;
            break;
        case "2":
            tensaoC2f = 220;
            break;
        case "3":
            tensaoC2f = 1.73 * 220;
            break;
    }
    tensaoC3 = window.document.querySelector("#selMenuC3");
    tensaoC3I = tensaoC3.options[tensaoC3.selectedIndex].value;
    switch (tensaoC3I) {
        case "0":
            alert("ERR: Selecione uma tensão e depois click em 'Enviar'.")
            break;
        case "1":
            tensaoC3f = 127;
            break;
        case "2":
            tensaoC3f = 220;
            break;
        case "3":
            tensaoC3f = 1.73 * 220;
            break;
    }
    tensaoC4 = window.document.querySelector("#selMenuC4");
    tensaoC4I = tensaoC4.options[tensaoC4.selectedIndex].value;
    switch (tensaoC4I) {
        case "0":
            alert("ERR: Selecione uma tensão e depois click em 'Enviar'.")
            break;
        case "1":
            tensaoC4f = 127;
            break;
        case "2":
            tensaoC4f = 220;
            break;
        case "3":
            tensaoC4f = 1.73 * 220;
            break;
    }
    tensaoC5 = window.document.querySelector("#selMenuC5");
    tensaoC5I = tensaoC5.options[tensaoC5.selectedIndex].value;
    switch (tensaoC5I) {
        case "0":
            alert("ERR: Selecione uma tensão e depois click em 'Enviar'.")
            break;
        case "1":
            tensaoC5f = 127;
            break;
        case "2":
            tensaoC5f = 220;
            break;
        case "3":
            tensaoC5f = 1.73 * 220;
            break;
    }
    tensaoC6 = window.document.querySelector("#selMenuC6");
    tensaoC6I = tensaoC6.options[tensaoC6.selectedIndex].value;
    switch (tensaoC6I) {
        case "0":
            alert("ERR: Selecione uma tensão e depois click em 'Enviar'.")
            break;
        case "1":
            tensaoC6f = 127;
            break;
        case "2":
            tensaoC6f = 220;
            break;
        case "3":
            tensaoC6f = 1.73 * 220;
            break;
    }

    if (tensaoC1f == 127) {
        if (potIlum % 1270 == 0) {
            qC1Ilum = parseInt(potIlum / 1270);
        } else {
            qC1Ilum = parseInt(potIlum / 1270) + 1;
        }
    } else {
        if (potIlum % 2200 == 0) {
            qC1Ilum = parseInt(potIlum / 2200);
        } else {
            qC1Ilum = parseInt(potIlum / 2200) + 1;
        }

    }

    if (tensaoC1f == 127) {
        if (potTug % 1270 == 0) {
            qC1Tug = parseInt(potTug / 1270);
        } else {
            qC1Tug = parseInt(potTug / 1270) + 1;
        }
    } else {
        if (potTug % 2200 == 0) {
            qC1Tug = parseInt(potTug / 2200);
        } else {
            qC1Tug = parseInt(potTug / 2200) + 1;
        }

    }

    iterarIlum = qC1Ilum;
    iterarTug = qC1Tug;
    iterarqC2 = qC2f;
    iterarqC3 = qC3f;
    iterarqC4 = qC4f;
    iterarqC5 = qC5f;
    iterarqC6 = qC6f;
    rodarIncluirTueEsp()
}
function rodarIncluirTueEsp() {
    somaCirc = numeroTues + qC1Ilum + qC1Tug;
    iterarCarga += 1;

    if (iterarCarga <= somaCirc) {

        if (iterarqC2 > 0) {
            caso2 = "1";

            tabDim.innerHTML = `<h2> Dados para aparelhos de aquecimento - C2</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC2} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarqC2} selected>Carga ${iterarqC2}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`
            iterarqC2 -= 1;

        } else if (iterarqC3 > 0) {
            caso2 = "2";
            tabDim.innerHTML = `<h2> Dados para aparelhos de Ar condicionado - C3.</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC3} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarqC3} selected>Carga ${iterarqC3}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`

            iterarqC3 -= 1;

        } else if (iterarqC4 > 0) {
            caso2 = "3";

            tabDim.innerHTML = `<h2> Dados para aparelhos - C4.</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC4} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarqC4} selected>Carga ${iterarqC4}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`
            iterarqC4 -= 1;


        } else if (iterarqC5 > 0) {
            caso2 = "4";
            tabDim.innerHTML = `<h2> Dados para aparelhos - C5</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC5} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarqC5} selected>Carga ${iterarqC5}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`
            iterarqC5 -= 1;

        } else if (iterarqC6 > 0) {
            caso2 = "5";
            tabDim.innerHTML = `<h2> Dados para aparelhos - C6</h2>
<h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
<h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
<form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarqC6} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarqC6} selected>Carga ${iterarqC6}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`
            iterarqC6 -= 1;

        } else if (iterarIlum > 0) {
            caso2 = "6";

            tabDim.innerHTML = `<h2> Dados para Iluminação - C1</h2>
    <h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
    <h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
    <form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarIlum} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarIlum} selected>Carga ${iterarIlum}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`
            iterarIlum -= 1;

        } else if (iterarTug > 0) {
            caso2 = "7";
            tabDim.innerHTML = `<h2> Dados para TUGs - C1.</h2>
    <h3> Parâmetros para dimensionamento de disjuntores termomagnéticos - DIN classe C e dos condutores para os circuito, considerando o clima da região metropolitana do rio de janeiro no verão, o modo de instalar "B1", condutores de cobre, com isolamento de PVC-70, até 10mm², temperatura  de 40ºC-ambiente e 30ºC-solo. Admitindo-se 5% de queda de tensão entre a carga e e o quadro geral de distribuição(NBR5410:2004). </h3>
    <h4>CASO A POTÊNCIA INFORMADA SEJA EM "WATTS", INFORME O FP CONFORME ESCPECIFICAÇÃO, SENÃO FP = 1.</<h4>
    <form action="">
    <fieldset>
    <legend>INSIRA OS DADOS PARA CARGA ${iterarTug} DESTE TIPO</legend>
    <br><input type="number" name="tue1Esp" id="tue1Esp" value="100"> <label> Potência para esta carga.</label><br>
    <br><input type="number" name="fptue1Esp" id="fptue1Esp" min="0" max="1" step="0.01"  value="1"> <label>Fator de potencia para esta carga.</label><br>
    <br><input type="number" name="fagruptue1Esp" id="fagruptue1Esp" min="1" max="8"  value="1"> <label>Número de circuitos agrupados</label><br>
    <br><input type="number" name="comprtue1Esp" id="comprtue1Esp"  value="1"> <label>Distancia entre Carga e QLF.</label><br>
    <br><input type="number" name="carrtue1Esp" id="carrtue1Esp" min="2" max="3"  value="2"> <label>Número de condutores carregados.</label><br><br>
    
    <fieldset>
    <legend>Nº maximo: 09 cargas deste tipo.</legend>
    <br><select name="SelQtue" id="SelQtue">	
    <option class="1" value=0 >Selecione</option>
    <option class="1" value=${iterarTug} selected>Carga ${iterarTug}</option>       
    </select><label>Escolha nome para a carga</label>
    </fiedset>
    </fieldset>
    <br>
    <br>
    </form>    
    <br><input type="button" name="incluirTueEsp1" id="incluirTueEsp1" value="Enviar_${iterarCarga}" onClick="rodarIncluirTueEsp1()"><br>
    </fieldset>
    </form><br><br>`

            iterarTug -= 1;

        }
    }
}
function rodarIncluirTueEsp1() {

    pot1Esp = document.querySelector("#tue1Esp").value;//Potência em Watt
    FPEsp = document.querySelector("#fptue1Esp").value;//Fator de potência
    Fagrup = document.querySelector("#fagruptue1Esp").value;
    distCirc = document.querySelector("#comprtue1Esp").value;
    nCarregados = document.querySelector("#carrtue1Esp").value;
    EscCarga = document.querySelector("#SelQtue");
    EscCargaf = EscCarga.options[EscCarga.selectedIndex].value;
    potEsp = pot1Esp / FPEsp; //potência em VA

    switch (caso2) {
        case "0":
            alert("ERR: Selecione uma quantidade e depois click em 'Enviar'.")
            break;
        case "1": //aparelhos de aquecimento c2

            tensaoC = tensaoC2f;
            switch (EscCargaf) {
                case "1":

                    disjTue = desterminaDisjuntores();
                    disjTueC21 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ1 = 2.5;
                    } else {
                        condutorC2Circ1 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -1 : " + disjTueC21 + "A. Condutor C2 - 1 : " + condutorC2Circ1 + "mm²")
                    break;
                case "2":

                    disjTue = desterminaDisjuntores();
                    disjTueC22 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ2 = 2.5;
                    } else {
                        condutorC2Circ2 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -2 : " + disjTueC22 + "A. Condutor C2 - 2 : " + condutorC2Circ2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjTueC23 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ3 = 2.5;
                    } else {
                        condutorC2Circ3 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -3 : " + disjTueC23 + "A. Condutor C2 - 3 : " + condutorC2Circ3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjTueC24 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ4 = 2.5;
                    } else {
                        condutorC2Circ4 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -4 : " + disjTueC24 + "A. Condutor C2 - 4 : " + condutorC2Circ4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjTueC25 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ5 = 2.5;
                    } else {
                        condutorC2Circ5 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -5 : " + disjTueC25 + "A. Condutor C2 - 5 : " + condutorC2Circ5 + "mm²")
                    break;
                case "6":
                    disjTue = desterminaDisjuntores();
                    disjTueC26 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ6 = 2.5;
                    } else {
                        condutorC2Circ6 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -6 : " + disjTueC26 + "A. Condutor C2 - 6 : " + condutorC2Circ6 + "mm²")
                    break;
                case "7":
                    disjTue = desterminaDisjuntores();
                    disjTueC27 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ7 = 2.5;
                    } else {
                        condutorC2Circ7 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -7 : " + disjTueC27 + "A. Condutor C2 - 7 : " + condutorC2Circ7 + "mm²")
                    break;
                case "8":
                    disjTue = desterminaDisjuntores();
                    disjTueC28 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ8 = 2.5;
                    } else {
                        condutorC2Circ8 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -8 : " + disjTueC28 + "A. Condutor C2 - 8 : " + condutorC2Circ8 + "mm²")
                    break;
                case "9":
                    disjTue = desterminaDisjuntores();
                    disjTueC29 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC2Circ9 = 2.5;
                    } else {
                        condutorC2Circ9 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C2 -9 : " + disjTueC29 + "A. Condutor C2 - 9 : " + condutorC2Circ9 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de de aparelhos é limitado a 09 unidades.");
                    break;
            }
            break;
        case "2": //aparelhos de Ar C3

            tensaoC = tensaoC3f;
            switch (EscCargaf) {
                case "1":

                    disjTue = desterminaDisjuntores();
                    disjTueC31 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ1 = 2.5;
                    } else {
                        condutorC3Circ1 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -1 : " + disjTueC21 + "A. Condutor C3 - 1 : " + condutorC2Circ1 + "mm²")
                    break;
                case "2":

                    disjTue = desterminaDisjuntores();
                    disjTueC32 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ2 = 2.5;
                    } else {
                        condutorC3Circ2 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -2 : " + disjTueC32 + "A. Condutor C3 - 2 : " + condutorC3Circ2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjTueC33 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ3 = 2.5;
                    } else {
                        condutorC3Circ3 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -3 : " + disjTueC33 + "A. Condutor C3 - 3 : " + condutorC3Circ3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjTueC34 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ4 = 2.5;
                    } else {
                        condutorC3Circ4 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -4 : " + disjTueC34 + "A. Condutor C3 - 4 : " + condutorC3Circ4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjTueC35 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ5 = 2.5;
                    } else {
                        condutorC3Circ5 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -5 : " + disjTueC35 + "A. Condutor C3 - 5 : " + condutorC3Circ5 + "mm²")
                    break;
                case "6":
                    disjTue = desterminaDisjuntores();
                    disjTueC36 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ6 = 2.5;
                    } else {
                        condutorC3Circ6 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -6 : " + disjTueC36 + "A. Condutor C3 - 6 : " + condutorC3Circ6 + "mm²")
                    break;
                case "7":
                    disjTue = desterminaDisjuntores();
                    disjTueC37 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ7 = 2.5;
                    } else {
                        condutorC3Circ7 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -7 : " + disjTueC37 + "A. Condutor C3 - 7 : " + condutorC3Circ7 + "mm²")
                    break;
                case "8":
                    disjTue = desterminaDisjuntores();
                    disjTueC38 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ8 = 2.5;
                    } else {
                        condutorC3Circ8 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -8 : " + disjTueC38 + "A. Condutor C3 - 8 : " + condutorC3Circ8 + "mm²")
                    break;
                case "9":
                    disjTue = desterminaDisjuntores();
                    disjTueC39 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC3Circ9 = 2.5;
                    } else {
                        condutorC3Circ9 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C3 -9 : " + disjTueC39 + "A. Condutor C3 - 9 : " + condutorC3Circ9 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de de aparelhos é limitado a 09 unidades.");
                    break;
            }
            break;
        case "3": //C4
            tensaoC = tensaoC4f;
            switch (EscCargaf) {
                case "1":
                    disjTue = desterminaDisjuntores();
                    disjTueC41 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC4Circ1 = 2.5;
                    } else {
                        condutorC4Circ1 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C4 -1 : " + disjTueC41 + "A. Condutor C4 - 1 : " + condutorC4Circ1 + "mm²")
                    break;
                case "2":
                    disjTue = desterminaDisjuntores();
                    disjTueC42 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC4Circ2 = 2.5;
                    } else {
                        condutorC4Circ2 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C4 -2 : " + disjTueC42 + "A. Condutor C4 - 2 : " + condutorC4Circ2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjTueC43 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC4Circ3 = 2.5;
                    } else {
                        condutorC4Circ3 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C4-3 : " + disjTueC43 + "A. Condutor C4 - 3 : " + condutorC4Circ3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjTueC44 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC4Circ4 = 2.5;
                    } else {
                        condutorC4Circ4 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C4 -4 : " + disjTueC44 + "A. Condutor C4 - 4 : " + condutorC4Circ4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjTueC45 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC4Circ5 = 2.5;
                    } else {
                        condutorC4Circ5 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C4 -5 : " + disjTueC25 + "A. Condutor C4 - 5 : " + condutorC2Circ5 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de de aparelhos é limitado a 05 unidades");
                    break;
            }
            break;
        case "4": //C5
            tensaoC = tensaoC5f;
            switch (EscCargaf) {
                case "1":
                    disjTue = desterminaDisjuntores();
                    disjTueC51 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC5Circ1 = 2.5;
                    } else {
                        condutorC5Circ1 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C5 -1 : " + disjTueC51 + "A. Condutor C5 - 1 : " + condutorC5Circ1 + "mm²")
                    break;
                case "2":
                    disjTue = desterminaDisjuntores();
                    disjTueC52 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC5Circ2 = 2.5;
                    } else {
                        condutorC5Circ2 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C5 -2 : " + disjTueC52 + "A. Condutor C5 - 2 : " + condutorC5Circ2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjTueC53 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC5Circ3 = 2.5;
                    } else {
                        condutorC5Circ3 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C5-3 : " + disjTueC53 + "A. Condutor C5 - 3 : " + condutorC5Circ3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjTueC54 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC5Circ4 = 2.5;
                    } else {
                        condutorC5Circ4 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C5 -4 : " + disjTueC54 + "A. Condutor C5 - 4 : " + condutorC5Circ4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjTueC55 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC5Circ5 = 2.5;
                    } else {
                        condutorC5Circ5 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C5 -5 : " + disjTueC55 + "A. Condutor C5 - 5 : " + condutorC5Circ5 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de de aparelhos é limitado a 05 unidades");
                    break;
            }

            break;
        case "5": //C6
            tensaoC = tensaoC6f;
            switch (EscCargaf) {
                case "1":
                    disjTue = desterminaDisjuntores();
                    disjTueC61 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC6Circ1 = 2.5;
                    } else {
                        condutorC6Circ1 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C6 -1 : " + disjTueC61 + "A. Condutor C6 - 1 : " + condutorC6Circ1 + "mm²")
                    break;
                case "2":
                    disjTue = desterminaDisjuntores();
                    disjTueC62 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC6Circ2 = 2.5;
                    } else {
                        condutorC6Circ2 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C6 -2 : " + disjTueC62 + "A. Condutor C6 - 2 : " + condutorC6Circ2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjTueC63 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC6Circ3 = 2.5;
                    } else {
                        condutorC6Circ3 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C6 -3 : " + disjTueC63 + "A. Condutor C6 - 3 : " + condutorC6Circ3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjTueC64 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC6Circ4 = 2.5;
                    } else {
                        condutorC6Circ4 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C6 -4 : " + disjTueC64 + "A. Condutor C6 - 4 : " + condutorC6Circ4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjTueC65 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorC6Circ5 = 2.5;
                    } else {
                        condutorC6Circ5 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C6 -5 : " + disjTueC65 + "A. Condutor C6 - 5 : " + condutorC6Circ5 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de de aparelhos é limitado a 05 unidades");
                    break;
            }
            break;
        case "6": //Iluminação -C1

            tensaoC = tensaoC1f;
            switch (EscCargaf) {
                case "1":
                    disjTue = desterminaDisjuntores();
                    disjIlum1 = disjTue.disjC;
                    condutorIlumCirc1 = disjTue.condutorCCirc;
                    alert("Disjuntor Ilum C1 -1 : " + disjIlum1 + "A. Condutor ilum C1 - 1 : " + condutorIlumCirc1 + "mm²")
                    break;
                case "2":
                    disjTue = desterminaDisjuntores();
                    disjIlum2 = disjTue.disjC;
                    condutorIlumCirc2 = disjTue.condutorCCirc;
                    alert("Disjuntor Ilum C1 -2 : " + disjIlum2 + "A. Condutor Ilum C1 -2 : " + condutorIlumCirc2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjIlum3 = disjTue.disjC;
                    condutorIlumCirc3 = disjTue.condutorCCirc;
                    alert("Disjuntor Ilum C1 -3 : " + disjIlum3 + "A. Condutor Ilum C1 -3: " + condutorIlumCirc3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjIlum4 = disjTue.disjC;
                    condutorIlumCirc4 = disjTue.condutorCCirc;
                    alert("Disjuntor Ilum C1 -4 : " + disjIlum4 + "A. Condutor Ilum C1 -4 : " + condutorIlumCirc4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjIlum5 = disjTue.disjC;
                    condutorIlumCirc5 = disjTue.condutorCCirc;
                    alert("Disjuntor C1 -5 : " + disjIlum5 + "A. Condutor C1 - 5 : " + condutorIlumCirc5 + "mm²")
                    break;
                case "6":
                    disjTue = desterminaDisjuntores();
                    disjIlum6 = disjTue.disjC;
                    condutorIlumCirc6 = disjTue.condutorCCirc;
                    alert("Disjuntor C1 -6 : " + disjIlum6 + "A. Condutor C1 - 6 : " + condutorIlumCirc6 + "mm²")
                    break;
                case "7":
                    disjTue = desterminaDisjuntores();
                    disjIlum7 = disjTue.disjC;
                    condutorIlumCirc7 = disjTue.condutorCCirc;
                    alert("Disjuntor C1 -7 : " + disjIlum7 + "A. Condutor C1 - 7 : " + condutorIlumCirc7 + "mm²")
                    break;
                case "8":
                    disjTue = desterminaDisjuntores();
                    disjIlum8 = disjTue.disjC;
                    condutorIlumCirc8 = disjTue.condutorCCirc;
                    alert("Disjuntor C1 -8 : " + disjIlum8 + "A. Condutor C1 - 8 : " + condutorIlumCirc5 + "mm²")
                    break;
                case "9":
                    disjTue = desterminaDisjuntores();
                    disjIlum9 = disjTue.disjC;
                    condutorIlumCirc9 = disjTue.condutorCCirc;
                    alert("Disjuntor C1 -9 : " + disjIlum9 + "A. Condutor C1 - 9 : " + condutorIlumCirc9 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de CKT de Iluminação é limitado a 09 unidades.");
                    break;
            }
            break;
        case "7": //TUG - C1

            tensaoC = tensaoC1f;
            switch (EscCargaf) {
                case "1":

                    disjTue = desterminaDisjuntores();
                    disjTug1 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc1 = 2.5;
                    } else {
                        condutorTugCirc1 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -1 : " + disjTug1 + "A. Condutor C1 - 1 : " + condutorTugCirc1 + "mm²")
                    break;
                case "2":

                    disjTue = desterminaDisjuntores();
                    disjTug2 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc2 = 2.5;
                    } else {
                        condutorTugCirc2 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -2 : " + disjTug2 + "A. Condutor C1 -2 : " + condutorTugCirc2 + "mm²")
                    break;
                case "3":
                    disjTue = desterminaDisjuntores();
                    disjTug3 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc3 = 2.5;
                    } else {
                        condutorTugCirc3 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -3 : " + disjTug3 + "A. Condutor C1 -3 : " + condutorTugCirc3 + "mm²")
                    break;
                case "4":
                    disjTue = desterminaDisjuntores();
                    disjTug4 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc4 = 2.5;
                    } else {
                        condutorTugCirc4 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -4 : " + disjTug4 + "A. Condutor C1 -4 : " + condutorTugCirc4 + "mm²")
                    break;
                case "5":
                    disjTue = desterminaDisjuntores();
                    disjTug5 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc5 = 2.5;
                    } else {
                        condutorTugCirc5 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -5 : " + disjTug5 + "A. Condutor C1 -5 : " + condutorTugCirc5 + "mm²")
                    break;
                case "6":
                    disjTue = desterminaDisjuntores();
                    disjTug6 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc6 = 2.5;
                    } else {
                        condutorTugCirc6 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -6: " + disjTug6 + "A. Condutor C1 -6 : " + condutorTugCirc6 + "mm²")
                    break;
                case "7":
                    disjTue = desterminaDisjuntores();
                    disjTug7 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc7 = 2.5;
                    } else {
                        condutorTugCirc7 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -7 : " + disjTug7 + "A. Condutor C1 -7 : " + condutorTugCirc7 + "mm²")
                    break;
                case "8":
                    disjTue = desterminaDisjuntores();
                    disjTug8 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc8 = 2.5;
                    } else {
                        condutorTugCirc8 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -8 : " + disjTug8 + "A. Condutor C1 - 8 : " + condutorTugCirc8 + "mm²")
                    break;
                case "9":
                    disjTue = desterminaDisjuntores();
                    disjTug9 = disjTue.disjC;
                    if (disjTue.condutorCCirc == 1.5) {
                        condutorTugCirc9 = 2.5;
                    } else {
                        condutorTugCirc9 = disjTue.condutorCCirc;
                    }
                    alert("Disjuntor C1 -9 : " + disjTug9 + "A. Condutor C1 - 9 : " + condutorTugCirc9 + "mm²")
                    break;
                default:
                    alert("ERR: Neste Aplicativos o número de de aparelhos é limitado a 09 unidades.");
                    break;
            }
            break;
    }
    botoesAvancar();
}
function botoesAvancar() {

    iterar += 1;

    if (iterar < somaCirc) {
        rodarIncluirTueEsp();
    } else {
        rodarFinal();
    }
}

function desterminaDisjuntores() {

    var Ftemp45 = 0.9;
    if (Fagrup <= 1) {
        Fagrupf = 1;
    } else if (Fagrup <= 2) {
        Fagrupf = 0.8;
    } else if (Fagrup <= 3) {
        Fagrupf = 0.7;
    } else if (Fagrup <= 4) {
        Fagrupf = 0.65;
    } else if (Fagrup <= 5) {
        Fagrupf = 0.6;
    } else if (Fagrup <= 6) {
        Fagrupf = 0.57;
    } else if (Fagrup <= 7) {
        Fagrupf = 0.54;
    } else if (Fagrup <= 8) {
        Fagrupf = 0.52;
    } else {
        alert("ERR: Este aplicativo considera no máximo 8 circuitos agrupados em um eletroduto. Fator de agrupamento receberá 0.52 para continuar programa. Necessário redimensionar.");
        Fagrupf = 0.52;
        ERRO = "ERR.:FATOR DE AGRUPAMENTO.DIMENSINAMENTO RECEBEU PARÂMETROS INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
    }

    //ib<=in<=iz   i2<=1.45Iz in = coorente nominal disj, ib corrente proj,  iz= condutorCCirc - capacidade condutores 12 - corrente convenvencinal de de atuação do disjuntor @in=i2    @=1.45    1.45in<=1.45iz ic - corrente da tabela iz=ic*k1*k2*k3
    if (padrao == "UM1" || padrao == "UM2" || padrao == "UB1" || padrao == "UB2") {
        var Ib = potEsp / tensaoC;
        var iB = Ib / (Fagrupf * Ftemp45);
        var iN = iB;
    } else if (padrao == "T1" || padrao == "T2") {
        if (nCarregados == 2) {
            var Ib = potEsp / tensaoC;
            var iB = Ib / (Fagrupf * Ftemp45);
            var iN = iB;
        } else if (nCarregados == 3) {
            var Ib = potEsp / 1.73 * tensaoC;
            var iB = Ib / (Fagrupf * Ftemp45);
            var iN = iB;
        }
    }
    var disjC;


    if (padrao === "UM1") {

        if (iN <= 6) {
            disjC = 6;
        } else if (iN <= 10) {
            disjC = 10;
        } else if (iN <= 16) {
            disjC = 16;
        } else if (iN <= 20) {
            disjC = 20;
        } else if (iN <= 25) {
            disjC = 25;
        } else if (iN <= 32) {
            disjC = 32;
        } else {
            alert("ERR: O disjuntor máximo para este padrão 'UM1' é de 32A do tipo B, se a proteção geral for do Tipo 'C'. Disjuntor deste circuito receberá 32A, para continuar dimensionamento. Necessário redimensionar.");
            disjC = 32;
            ERRO = "ERR.:DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }
    } else if (padrao === "UM2") {

        if (iN <= 6) {
            disjC = 6;
        } else if (iN <= 10) {
            disjC = 10;
        } else if (iN <= 16) {
            disjC = 16;
        } else if (iN <= 20) {
            disjC = 20;
        } else if (iN <= 25) {
            disjC = 25;
        } else if (iN <= 32) {
            disjC = 32;
        } else if (iN <= 40) {
            disjC = 40;
        } else {
            alert("ERR: O disjuntor máximo para este padrão 'UM2' é de 40A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 40A, para continuar dimensionamento. Necessário redimensionar.");
            disjC = 40;
            ERRO = "ERR.:DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }
    } else if (padrao === "UB1") {

        if (iN <= 6) {
            disjC = 6;
        } else if (iN <= 10) {
            disjC = 10;
        } else if (iN <= 16) {
            disjC = 16;
        } else if (iN <= 20) {
            disjC = 20;
        } else if (iN <= 25) {
            disjC = 25;
        } else if (iN <= 32) {
            disjC = 32;
        } else {
            alert("ERR: O disjuntor máximo para este padrão 'UB1' é de 32A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 32A, para continuar dimensionamento. Necessário redimensionar.");
            disjC = 32;
            ERRO = "ERR.:DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }
    } else if (padrao === "UB2") {

        if (iN <= 6) {
            disjC = 6;
        } else if (iN <= 10) {
            disjC = 10;
        } else if (iN <= 16) {
            disjC = 16;
        } else if (iN <= 20) {
            disjC = 20;
        } else if (iN <= 25) {
            disjC = 25;
        } else if (iN <= 32) {
            disjC = 32;
        } else if (iN <= 40) {
            disjC = 40;
        } else {
            alert("ERR: O disjuntor máximo para este padrão 'UB1' é de 40A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 40A, para continuar dimensionamento. Necessário redimensionar.");
            disjC = 40;
            ERRO = "ERR.:DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }
    } else if (padrao === "T1") {

        if (iN <= 6) {
            disjC = 6;
        } else if (iN <= 10) {
            disjC = 10;
        } else if (iN <= 16) {
            disjC = 16;
        } else if (iN <= 20) {
            disjC = 20;
        } else if (iN <= 25) {
            disjC = 25;
        } else if (iN <= 32) {
            disjC = 32;
        } else {
            alert("ERR: O disjuntor máximo para este padrão 'T1' é de 32A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 32A, para continuar dimensionamento. Necessário redimensionar.");
            disjC = 32;
            ERRO = "ERR.:DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."

        }
    } else if (padrao === "T2") {

        if (iN <= 6) {
            disjC = 6;
        } else if (iN <= 10) {
            disjC = 10;
        } else if (iN <= 16) {
            disjC = 16;
        } else if (iN <= 20) {
            disjC = 20;
        } else if (iN <= 25) {
            disjC = 25;
        } else if (iN <= 32) {
            disjC = 32;
        } else if (iN <= 40) {
            disjC = 40;
        } else {
            alert("ERR: O disjuntor máximo para este padrão 'T2' é de 40A do tipo B, se a proteção geral for do Tipo 'C'.Disjuntor deste circuito receberá 40A, para continuar dimensionamento. Necessário redimensionar.");
            disjC = 40;
            ERRO = "ERR.:DISJUNTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }
    }

    if (nCarregados == 2) {
        if (disjC <= 16) {//NBR5410 . Condutores carregados 17.5A + Ajuste Light
            condutorCCircB = 1.5;
        } else if (disjC <= 20) {//NBR5410 . Condutores carregados 24A + Ajuste Light
            condutorCCircB = 2.5;
        } else if (disjC <= 25) { //NBR5410 . Condutores carregados 32A + Ajuste Light
            condutorCCircB = 4;
        } else if (disjC <= 32) {//NBR5410 . Condutores carregados 41A + Ajuste Light
            condutorCCircB = 6;
        } else if (disjC <= 40) {//NBR5410 . Condutores carregados 57A + Ajuste Light
            condutorCCircB = 10;
        } else {
            alert("ERR: Condutor resultou superior a 10mm². Redimensione!/nSerá atribuido 10mm² para finaliza o dimensionamento.")
            condutorCCircB = 10;
            ERRO = "ERR.:CONDUTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }

    } else if (nCarregados == 3) {
        if (disjC <= 10) {//NBR5410 . Condutores carregados 15,5A + Ajuste Light
            condutorCCircB = 1.5;
        } else if (disjC <= 20) {//NBR5410 . Condutores carregados 20A + Ajuste Light
            condutorCCircB = 2.5;
        } else if (disjC <= 25) { //NBR5410 . Condutores carregados 28A + Ajuste Light
            condutorCCircB = 4;
        } else if (disjC <= 32) { //NBR5410 . Condutores carregados 36A + Ajuste Light
            condutorCCircB = 6;
        } else if (disjC <= 40) {//NBR5410 . Condutores carregados 50A + Ajuste Light
            condutorCCircB = 10;
        } else {
            alert("ERR: Condutor resultou superior a 10mm². Redimensione!/nSerá atribuido 10mm² para finaliza o dimensionamento.")
            condutorCCircB = 10;
            ERRO = "ERR.:CONDUTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
        }

    } else {
        alert("ERR: Existem apenas duas possibilidades: 2 ou 3 condutores carregados.")
    }

    var queda = potEsp * distCirc;//Método Watt x metros
    if (queda <= 35081 && tensaoC == 127) {
        condutorCCircA = 1.5;
    } else if (queda <= 58468 && tensaoC == 127) {
        condutorCCircA = 2.5;
    } else if (queda <= 93548 && tensaoC == 127) {
        condutorCCircA = 4;
    } else if (queda <= 140322 && tensaoC == 127) {
        condutorCCircA = 6;
    } else if (queda <= 233871 && tensaoC == 127) {
        condutorCCircA = 10;
    } else if (queda <= 105270 && tensaoC == 220 && nCarregados == 2) {
        condutorCCircA = 1.5;
    } else if (queda <= 175450 && tensaoC == 220 && nCarregados == 2) {
        condutorCCircA = 2.5;
    } else if (queda <= 280720 && tensaoC == 220 && nCarregados == 2) {
        condutorCCircA = 4;
    } else if (queda <= 421080 && tensaoC == 220 && nCarregados == 2) {
        condutorCCircA = 6;
    } else if (queda <= 701800 && tensaoC == 220 && nCarregados == 2) {
        condutorCCircA = 10;
    } else if (queda <= (105270 * 0, 866) && tensaoC == 220 && nCarregados == 3) {
        condutorCCircA = 1.5;
    } else if (queda <= (175450 * 0, 866) && tensaoC == 220 && nCarregados == 3) {
        condutorCCircA = 2.5;
    } else if (queda <= (280720 * 0, 866) && tensaoC == 220 && nCarregados == 3) {
        condutorCCircA = 4;
    } else if (queda <= (421080 * 0, 866) && tensaoC == 220 && nCarregados == 3) {
        condutorCCircA = 6;
    } else if (queda <= (701800 * 0, 866) && tensaoC == 220 && nCarregados == 3) {
        condutorCCircA = 10;
    } else {
        alert("ERR: Condutor resultou superior a 10mm². Redimensione!/nSerá atribuido 10mm² para finaliza o dimensionamento.");
        condutorCCircA = 10;
        ERRO = "ERR.:CONDUTORES. DIMENSINAMENTO RECEBEU PARAMETRO INCORRETOS E DESOBEDECE A NBR5410:2004 E LIGHT 2023 - REDIMENSIONE."
    }

    if (condutorCCircA < condutorCCircB) {
        condutorCCirc = condutorCCircB;
    } else {
        condutorCCirc = condutorCCircA;
    }
    
    return {
        disjC,
        condutorCCirc
    }
}

function rodarFinal() {
    var contIlum = 0;
    var contTug = 0;
    var contC2 = 0;
    var contC3 = 0;
    var contC4 = 0;
    var contC5 = 0;
    var contC6 = 0;
    var DisjTodosIlum = [disjIlum1, disjIlum2, disjIlum3, disjIlum4, disjIlum5, disjIlum6, disjIlum7, disjIlum8, disjIlum9];
    var DisjTodosTug = [disjTug1, disjTug2, disjTug3, disjTug4, disjTug5, disjTug6, disjTug7, disjTug8, disjTug9];
    var DisjTodosC2 = [disjTueC21, disjTueC22, disjTueC23, disjTueC24, disjTueC25, disjTueC26, disjTueC27, disjTueC28, disjTueC29];
    var DisjTodosC3 = [disjTueC31, disjTueC32, disjTueC33, disjTueC34, disjTueC35, disjTueC36, disjTueC37, disjTueC38, disjTueC39];
    var DisjTodosC4 = [disjTueC41, disjTueC42, disjTueC43, disjTueC44, disjTueC45];
    var DisjTodosC5 = [disjTueC51, disjTueC52, disjTueC53, disjTueC54, disjTueC55];
    var DisjTodosC6 = [disjTueC61, disjTueC62, disjTueC63, disjTueC64, disjTueC65];
    var descFios;


    nCondutores1 = "1~ R+N+PE PVC-70. Cor: Verm - Azul - Verd."
    nCondutores2 = "2~ R+S+PE PVC-70. Cor: Verm - Pret - Verd."
    nCondutores3 = "3~ R+S+T+PE PVC-70. Cor: Verm - Pret - Branc - Verd."

    if (padrao == "UM1" || padrao == "UM2") {
        descFios = nCondutores1;
    } else if (padrao == "UB1" || padrao == "UB2") {
        if (tensaoC1f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC2f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC3f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC4f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC5f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC6f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC1f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC2f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC3f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC4f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC5f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC6f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        }

    } else if (padrao == "T1" || padrao == "T2") {
        if (tensaoC1f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC2f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC3f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC4f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC5f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC6f == 127) {
            descFios = nCondutores1//disjTue.nCondutores1;
        } else if (tensaoC1f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC2f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC3f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC4f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC5f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC6f == 220) {
            descFios = nCondutores2 //disjTue.nCondutores2;
        } else if (tensaoC2f == 1.73 * 220) {
            descFios = nCondutores3//disjTue.nCondutores3;
        } else if (tensaoC3f == 1.73 * 220) {
            descFios = nCondutores3//disjTue.nCondutores3;
        } else if (tensaoC4f == 1.73 * 220) {
            descFios = nCondutores3//disjTue.nCondutores3;
        } else if (tensaoC5f == 1.73 * 220) {
            descFios = nCondutores3//disjTue.nCondutores3;
        } else if (tensaoC6f == 1.73 * 220) {
            descFios = nCondutores3//disjTue.nCondutores3;
        }

    }

    var CondutorIlum = [condutorIlumCirc1, condutorIlumCirc2, condutorIlumCirc3, condutorIlumCirc4, condutorIlumCirc5, condutorIlumCirc6, condutorIlumCirc7, condutorIlumCirc8, condutorIlumCirc9];
    var CondutorTuG = [condutorTugCirc1, condutorTugCirc2, condutorTugCirc3, condutorTugCirc4, condutorTugCirc5, condutorTugCirc6, condutorTugCirc7, condutorTugCirc8, condutorTugCirc9];
    var CondutorC2 = [condutorC2Circ1, condutorC2Circ2, condutorC2Circ3, condutorC2Circ4, condutorC2Circ5, condutorC2Circ6, condutorC2Circ7, condutorC2Circ8, condutorC2Circ9];
    var CondutorC3 = [condutorC3Circ1, condutorC3Circ2, condutorC3Circ3, condutorC3Circ4, condutorC3Circ5, condutorC3Circ6, condutorC3Circ7, condutorC3Circ8, condutorC3Circ9];
    var CondutorC4 = [condutorC4Circ1, condutorC4Circ2, condutorC4Circ3, condutorC4Circ4, condutorC4Circ5];
    var CondutorC5 = [condutorC5Circ1, condutorC5Circ2, condutorC5Circ3, condutorC5Circ4, condutorC5Circ5];
    var CondutorC6 = [condutorC6Circ1, condutorC6Circ2, condutorC6Circ3, condutorC6Circ4, condutorC6Circ5];

    numeroCirc = qC1Ilum + qC1Tug + numeroTues;
   
    if (padrao == "UM1" || padrao == "UB1" || padrao == "T1") {
        DG = "32A - #6mm2";
        DR = "40A";
    } else {
        DG = "40A - #10mm²";
        DR = "40A";
    }
    if (padrao == "UM1" || padrao == "UM2") {

        tabDim.innerHTML = `<pre>
        <h3>${ERRO}</h3>
...............  
'  [ MEDIDOR ]  ' [Padrão: ${padrao}]
' PE   N   R    ' Prever DPS - Classe I 
'  |   |   |    ' DG e Condutor Geral= ${DG}
'  |___|   |    ' DG Monopolar Tipo C.
'  |   |   |    '
'  |---|---|---------------------------------
'..|...|...|....'                           | 
   Y   Y   Y                                |                                            
   .   .   .                                |                             
   .   .   .                                |                            
   .   .   .                                |
   Y   Y   Y                                |
 ...................................        |
'            [   QLF   ]            '       |
"   Y   Y   Y                       '       | 
'  PE   N   R                       '       |
'   |   |   |                       '       |
'   |   |   |          [Barramento] '       | [QLF]
'   |   |    )                 Y    '       | DG  e Condutor Geral= ${DG}
'   |   |   |                  |    '       | Mono - Tipo B
'   |   |   |-----[DPS]--------|    '       | DPS - Classe II
'   |   |---|--|--[DPS]--------|    '       | DR=${DR}
'   |---|---|--|---------------|    '       | 
'   |   |   |                  |----'-------|  
'   |   |   |                  |    '       |
'   | [''''''']                     '       |           
'   | [  IDR  ]                     '       |       
'   | [_______]                     ' [Aterramento]                
'   |   |   |                       '                      
'   |   |   |                       '     
'   |   |   |                       '                          
'   |   |   |                       '  
'   Y   Y   Y                       '                          
'   .   .   .                       '      
'   .   .   .                       '      
'   .   .   .                       '</pre>`
        var irefIlum = 1;
        for (; irefIlum <= qC1Ilum; irefIlum++) {
            tabDim.innerHTML += `<pre>          
'           Y                       '
'           |-----[D${irefIlum}]------> Circuito ${irefIlum} - Iluminação (${tensaoC1f}V)
'                                   ' D${irefIlum}: ${DisjTodosIlum[contIlum]}A - Condutores: ${CondutorIlum[contIlum++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`

        }
        var ireftug = irefIlum;
        for (; ireftug < qC1Tug + irefIlum; ireftug++) {
            tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${ireftug}]------> Circuito ${ireftug} - TUG - Tomadas (${tensaoC1f}V)
'                                   ' D${ireftug}: ${DisjTodosTug[contTug]}A - Condutores: ${CondutorTuG[contTug++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC2 = ireftug;

        for (; irefC2 < qC2f + ireftug; irefC2++) {
            tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC2}]------> Circuito ${irefC2} - Aparelho de Aquecimento C1 - (${tensaoC2f}V)
'                                   ' D${irefC2}: ${DisjTodosC2[contC2]}A - Condutores: ${CondutorC2[contC2++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`
        }
        alert("IrefIlum: " + irefIlum + "ireftug: " + ireftug + "irefC2: " + irefC2);
        var irefC3 = irefC2;
        for (; irefC3 < qC3f + irefC2; irefC3++) {
            tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC3}]------> Circuito ${irefC3}  - Ar Condicionado C3 - (${tensaoC3f}V)
'                                   ' D${irefC3}: ${DisjTodosC3[contC3]}A - Condutores: ${CondutorC3[contC3++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC4 = irefC3;
        for (; irefC4 < qC4f + irefC3; irefC4++) {
            tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC4}]------> Circuito ${irefC4} - Aparelhos tipo C4 - (${tensaoC4f}V)
'                                   ' D${irefC4}: ${DisjTodosC4[contC4]}A - Condutores: ${CondutorC4[contC4++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC5 = irefC4;
        for (; irefC5 < qC5f + irefC4; irefC5++) {
            tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC5}]------> Circuito ${irefC5} - Aparelhos tipo C5 - (${tensaoC5f}V)
'                                   ' D${irefC5}: ${DisjTodosC5[contC5]}A - Condutores: ${CondutorC5[contC5++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC6 = irefC5;
        for (; irefC6 < qC6f + irefC5; irefC6++) {
            tabDim.innerHTML += `<pre>         
'            Y                      '
'           |-----[D${irefC6}]------> Circuito ${irefC6} - Aparelhos tipo C6 - (${tensaoC6f}V)
'                                   ' D${irefC6}: ${DisjTodosC6[contC6]}A - Condutores: ${CondutorC6[contC6++]}mm².
'                                   ' Distribuição de Condutores: ${descFios}</pre>`
        }
        tabDim.innerHTML += `<pre>         
'                                   '
'...................................' 
<h6>${ERRO}</h6>
</pre>`
    } else if (padrao == "UB1" || padrao == "UB2") {
        tabDim.innerHTML = `
        <h3>${ERRO}</h3>
        <pre>
.................  
'    [MEDIDOR]    ' [Padrão: ${padrao}]
' PE   N   R   S  ' Prever DPS - Classe I 
'  |   |   |   |  ' DG e Condutor Geral = ${DG}
'  |___|   |   |  ' DG Bipolor Tipo C.
'  |   |   |   |  '
'  |---|---|---|------------------------------
'..|...|...|...|..'                           |
   Y   Y   Y   Y                              |                    
   .   .   .   .                              |
   .   .   .   .                              |
   .   .   .   .                              |
   Y   Y   Y   Y                              |                             
 .....................................        |
'            [   QLF   ]              '       |
'   Y   Y   Y   Y                     '       |
'  PE   N   R   S                     '       |
'   |   |   |   |                     '       |
'   |   |   |   |        [Barramento] '       | 
'   |   |    )---)               Y    '       | DG e Condutor Geral= ${DG}
'   |   |   |   |                |    '       | Bi-Tipo B
'   |   |   |   |---[DPS]--------|    '       | DPS - Classe II
'   |   |   |---|---[DPS]--------|    '       | DR=${DR}
'   |   |---|---|-|-[DPS]--------|    '       | 
'   |---|---|---|-|--------------|----'-------| 
'   |   |   |   |                     '       |
'   | [''''''''''']                   '       |           
'   | [    IDR    ]                   '       |       
'   | [___________]                   ' [Aterramento]                
'   |   |   |   |                     '                      
'   |   |   |   |                     '     
'   |   |   |   |                     '     
'   |   |   |   |                     '   
'   Y   Y   Y   Y                     '                            
'   .   .   .   .                     '       
'   .   .   .   .                     '       
'   .   .   .   .                     '</pre>`
        var irefIlum = 1;
        for (; irefIlum <= qC1Ilum; irefIlum++) {
            tabDim.innerHTML += `<pre>          
'           Y                         '
'           |-----[D${irefIlum}]------> Circuito ${irefIlum} - Iluminação (${tensaoC1f}V)
'                                     ' D${irefIlum}: ${DisjTodosIlum[contIlum]}A - Condutores: ${CondutorIlum[contIlum++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var ireftug = irefIlum;
        for (; ireftug < qC1Tug + irefIlum; ireftug++) {
            tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${ireftug}]------> Circuito ${ireftug} - TUG - Tomadas (${tensaoC1f}V)
'                                     ' D${ireftug}: ${DisjTodosTug[contTug]}A - Condutores: ${CondutorTuG[contTug++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC2 = ireftug;
        for (; irefC2 < qC2f + ireftug; irefC2++) {
            tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC2}]------> Circuito ${irefC2} - Aparelho de Aquecimento C1 - (${tensaoC2f}V)
'                                     ' D${irefC2}: ${DisjTodosC2[contC2]}A - Condutores: ${CondutorC2[contC2++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC3 = irefC2;
        for (; irefC3 < qC3f + irefC2; irefC3++) {
            tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC3}]------> Circuito ${irefC3} - Ar Condicionado C3 - (${tensaoC3f}V)
'                                     ' D${irefC3}: ${DisjTodosC3[contC3]}A - Condutores: ${CondutorC3[contC3++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC4 = irefC3;
        for (; irefC4 < qC4f + irefC3; irefC4++) {
            tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC4}]------> Circuito ${irefC4} - Aparelhos tipo C4 - (${tensaoC4f}V) 
'                                     ' D${irefC4}: ${DisjTodosC4[contC4]}A - Condutores: ${CondutorC4[contC4++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC5 = irefC4;
        for (; irefC5 < qC5f + irefC4; irefC5++) {
            tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC5}]------> Circuito ${irefC5} - Aparelhos tipo C5 - (${tensaoC5f}V)
'                                     ' D${irefC5}: ${DisjTodosC5[contC5]}A - Condutores: ${CondutorC5[contC5++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC6 = irefC5;
        for (; irefC6 < qC6f + irefC5; irefC6++) {
            tabDim.innerHTML += `<pre>         
'            Y                        '
'           |-----[D${irefC6}]------> Circuito ${irefC6} - Aparelhos tipo C6 - (${tensaoC6f}V)
'                                     ' D${irefC6}: ${DisjTodosC6[contC6]}A - Condutores: ${CondutorC6[contC6++]}mm².
'                                     ' Distribuição de Condutores: ${descFios}</pre>`
        }
        tabDim.innerHTML += `<pre>         
'                                     '
'.....................................' 
<h6>${ERRO}</h6>
</pre>`

    } else if (padrao == "T1" || padrao == "T2") {
        tabDim.innerHTML = `
        <h3>${ERRO}</h3>
        <pre>
......................  
'      [MEDIDOR]     ' [Padrão: ${padrao}]
' PE   N   R   S   T ' Prever DPS - Classe I 
'  |   |   |   |   | ' DG e Condutor Geral = ${DG}
'  |___|   |   |   | ' DG Tripolar Tipo C.
'  |   |   |   |   | '
'  |---|---|---|---|------------------------------
'..|...|...|...|...|.'                           |
   Y   Y   Y   Y   Y                             |                    
   .   .   .   .   .                             |
   .   .   .   .   .                             |
   .   .   .   .   .                             |
   Y   Y   Y   Y   Y                             |
 ........................................        |
'              [   QLF   ]               '       |
'   Y   Y   Y   Y   Y                    '       Y
'  PE   N   R   S   T                    '       |
'   |   |   |   |   |                    '       |
'   |   |   |   |   |       [Barramento] '       |
'   |   |    )---)---)              Y    '       | DG e Condutor Geral= ${DG} 
'   |   |   |   |   |               |    '       | Tri - Tipo B
'   |   |   |   |   |-----[DPS]-----|    '       | DPS - Classe II
'   |   |   |   |---|-----[DPS]-----|    '       | DR=${DR}
'   |   |   |---|---|-----[DPS]-----|    '       | 
'   |   |---|---|---|--|--[DPS]-----|----'-------|  
'   |---|---|---|---|--|------------|    '       |
'   |   |   |   |   |                    '       |
'   | [''''''''''''''']                  '       |           
'   | [      IDR      ]                  '       |       
'   | [_______________]                  ' [Aterramento]                
'   |   |   |   |   |                    '                      
'   |   |   |   |   |                    '     
'   |   |   |   |   |                    '     
'   |   |   |   |   |                    '
'   Y   Y   Y   Y   Y                    ' 
'   .   .   .   .   .                    '
'   .   .   .   .   .                    '
'   .   .   .   .   .                    '</pre>`
        var irefIlum = 1;
        for (; irefIlum <= qC1Ilum; irefIlum++) {
            tabDim.innerHTML += `<pre>
'           Y                            '
'           |-----[D${irefIlum}]------> Circuito ${irefIlum} - Iluminação (${tensaoC1f}V)
'                                        ' D${irefIlum}: ${DisjTodosIlum[contIlum]}A - Condutores: ${CondutorIlum[contIlum++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`

        }
        var ireftug = irefIlum;
        for (; ireftug < qC1Tug + irefIlum; ireftug++) {
            tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${ireftug}]------> Circuito ${ireftug} - TUG - Tomadas (${tensaoC1f}V)
'                                        ' D${ireftug}: ${DisjTodosTug[contTug]}A - Condutores: ${CondutorTuG[contTug++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC2 = ireftug;
        for (; irefC2 < qC2f + ireftug; irefC2++) {
            tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC2}]------> Circuito ${irefC2} - Aparelho de Aquecimento C1 - (${tensaoC2f}V)
'                                        ' D${irefC2}: ${DisjTodosC2[contC2]}A - Condutores: ${CondutorC2[contC2++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC3 = irefC2;
        for (; irefC3 < qC3f + irefC2; irefC3++) {
            tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC3}]------> Circuito ${irefC3} - Ar Condicionado C3 - (${tensaoC3f}V)
'                                        ' D${irefC3}: ${DisjTodosC3[contC3]}A - Condutores: ${CondutorC3[contC3++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC4 = irefC3;
        for (; irefC4 < qC4f + irefC3; irefC4++) {
            tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC4}]------> Circuito ${irefC4} - Aparelhos tipo C4 - (${tensaoC4f}V)
'                                        ' D${irefC4}: ${DisjTodosC4[contC4]}A - Condutores: ${CondutorC4[contC4++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC5 = irefC4;
        for (; irefC5 < qC5f + irefC4; irefC5++) {
            tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC5}]------> Circuito ${irefC5} - Aparelhos tipo C5 - (${tensaoC5f}V)
'                                        ' D${irefC5}: ${DisjTodosC5[contC5]}A - Condutores: ${CondutorC5[contC5++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`
        }
        var irefC6 = irefC5;
        for (; irefC6 < qC6f + irefC5; irefC6++) {
            tabDim.innerHTML += `<pre>         
'            Y                           '
'           |-----[D${irefC6}]------> Circuito ${irefC6} - Aparelhos tipo C6 - (${tensaoC6f}V)
'                                        ' D${irefC6}: ${DisjTodosC6[contC6]}A - Condutores: ${CondutorC6[contC6++]}mm².
'                                        ' Distribuição de Condutores: ${descFios}</pre>`
        }
        tabDim.innerHTML += `<pre>         
'                                        '
'........................................' 
<h6>${ERRO}</h6>
</pre>`
    }

    tabDim.innerHTML += `
    <fieldset>
     <legend>Finalizar</legend>
     <input type="button" value="Retornar ao início" onClick="requisicao('_paginas/p16_aplicacao_dimensionamento.html', 'conteudo')">
     <&nbsp;&nbsp;>
     <input type="button" value="Imprimir esta página"  onClick="window.print()">
     </fieldset>
    </form>`;

}



