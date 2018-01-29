import React from 'react';
import List from './List';
import axios from 'axios';
//var results;

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			nome: '',
			ano: '',
			despesa: '',
			loading: false
		};

		this.handleChangeNome = this.handleChangeNome.bind(this);
		this.handleChangeAno = this.handleChangeAno.bind(this);
		this.handleChangeDespesa = this.handleChangeDespesa.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeNome(event) {
		this.setState({ nome: event.target.value });
	}

	handleChangeAno(event) {
		this.setState({ ano: event.target.value });
	}

	handleChangeDespesa(event) {
		this.setState({ despesa: event.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ results: [], loading: true });
		const url = `/${this.state.ano}/${this.state.nome}/${this.state.despesa}`;
		axios
			.get(url)
			.then(response => {
				this.setState({ results: response.data, loading: false });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Nome do Parlamentar:
					<select value={this.state.value} onChange={this.handleChangeNome}>
						<option value="" />
						<option value="ABEL MESQUITA JR.">ABEL MESQUITA JR. DEM-RR</option>
						<option value="ADAIL CARNEIRO">ADAIL CARNEIRO PP-CE</option>
						<option value="ADALBERTO CAVALCANTI">ADALBERTO CAVALCANTI AVANTE-PE</option>
						<option value="ADELMO CARNEIRO LEÃO">ADELMO CARNEIRO LEÃO PT-MG</option>
						<option value="ADELSON BARRETO">ADELSON BARRETO PR-SE</option>
						<option value="ADEMIR CAMILO">ADEMIR CAMILO PODE-MG</option>
						<option value="ADÉRMIS MARINI">ADÉRMIS MARINI PSDB-SP</option>
						<option value="ADILTON SACHETTI">ADILTON SACHETTI S.PART.-MT</option>
						<option value="AELTON FREITAS">AELTON FREITAS PR-MG</option>
						<option value="AFONSO FLORENCE">AFONSO FLORENCE PT-BA</option>
						<option value="AFONSO HAMM">AFONSO HAMM PP-RS</option>
						<option value="AFONSO MOTTA">AFONSO MOTTA PDT-RS</option>
						<option value="AGUINALDO RIBEIRO">AGUINALDO RIBEIRO PP-PB</option>
						<option value="ALAN RICK">ALAN RICK DEM-AC</option>
						<option value="ALBERTO FILHO">ALBERTO FILHO PMDB-MA</option>
						<option value="ALBERTO FRAGA">ALBERTO FRAGA DEM-DF</option>
						<option value="ALCEU MOREIRA">ALCEU MOREIRA PMDB-RS</option>
						<option value="ALESSANDRO MOLON">ALESSANDRO MOLON REDE-RJ</option>
						<option value="ALEX CANZIANI">ALEX CANZIANI PTB-PR</option>
						<option value="ALEX MANENTE">ALEX MANENTE PPS-SP</option>
						<option value="ALEXANDRE BALDY">ALEXANDRE BALDY PODE-GO</option>
						<option value="ALEXANDRE LEITE">ALEXANDRE LEITE DEM-SP</option>
						<option value="ALEXANDRE SERFIOTIS">ALEXANDRE SERFIOTIS PMDB-RJ</option>
						<option value="ALEXANDRE VALLE">ALEXANDRE VALLE PR-RJ</option>
						<option value="ALFREDO KAEFER">ALFREDO KAEFER PSL-PR</option>
						<option value="ALFREDO NASCIMENTO">ALFREDO NASCIMENTO PR-AM</option>
						<option value="ALICE PORTUGAL">ALICE PORTUGAL PCdoB-BA</option>
						<option value="ALIEL MACHADO">ALIEL MACHADO REDE-PR</option>
						<option value="ALTINEU CÔRTES">ALTINEU CÔRTES PMDB-RJ</option>
						<option value="ALUISIO MENDES">ALUISIO MENDES PODE-MA</option>
						<option value="ANA PERUGINI">ANA PERUGINI PT-SP</option>
						<option value="ANDERSON FERREIRA">ANDERSON FERREIRA PR-PE</option>
						<option value="ANDRÉ ABDON">ANDRÉ ABDON PP-AP</option>
						<option value="ANDRÉ AMARAL">ANDRÉ AMARAL PMDB-PB</option>
						<option value="ANDRÉ DE PAULA">ANDRÉ DE PAULA PSD-PE</option>
						<option value="ANDRÉ FIGUEIREDO">ANDRÉ FIGUEIREDO PDT-CE</option>
						<option value="ANDRÉ FUFUCA">ANDRÉ FUFUCA PP-MA</option>
						<option value="ANDRE MOURA">ANDRE MOURA PSC-SE</option>
						<option value="ANDRES SANCHEZ">ANDRES SANCHEZ PT-SP</option>
						<option value="ANGELA ALBINO">ANGELA ALBINO PCdoB-SC</option>
						<option value="ANGELIM">ANGELIM PT-AC</option>
						<option value="ANÍBAL GOMES">ANÍBAL GOMES PMDB-CE</option>
						<option value="ANTONIO BRITO">ANTONIO BRITO PSD-BA</option>
						<option value="ANTONIO BULHÕES">ANTONIO BULHÕES PRB-SP</option>
						<option value="ANTONIO CARLOS MENDES THAME">ANTONIO CARLOS MENDES THAME PV-SP</option>
						<option value="ANTONIO IMBASSAHY">ANTONIO IMBASSAHY PSDB-BA</option>
						<option value="ANTÔNIO JÁCOME">ANTÔNIO JÁCOME PODE-RN</option>
						<option value="ARIOSTO HOLANDA">ARIOSTO HOLANDA PDT-CE</option>
						<option value="ARLINDO CHINAGLIA">ARLINDO CHINAGLIA PT-SP</option>
						<option value="ARNALDO FARIA DE SÁ">ARNALDO FARIA DE SÁ PTB-SP</option>
						<option value="ARNALDO JARDIM">ARNALDO JARDIM PPS-SP</option>
						<option value="ARNALDO JORDY">ARNALDO JORDY PPS-PA</option>
						<option value="ARNON BEZERRA">ARNON BEZERRA PTB-CE</option>
						<option value="AROLDE DE OLIVEIRA">AROLDE DE OLIVEIRA PSC-RJ</option>
						<option value="ARTHUR LIRA">ARTHUR LIRA PP-AL</option>
						<option value="ARTHUR OLIVEIRA MAIA">ARTHUR OLIVEIRA MAIA PPS-BA</option>
						<option value="ARTHUR VIRGÍLIO BISNETO">ARTHUR VIRGÍLIO BISNETO PSDB-AM</option>
						<option value="ASSIS CARVALHO">ASSIS CARVALHO PT-PI</option>
						<option value="ASSIS DO COUTO">ASSIS DO COUTO PDT-PR</option>
						<option value="ASSIS MELO">ASSIS MELO PCdoB-RS</option>
						<option value="ÁTILA A. NUNES">ÁTILA A. NUNES PMDB-RJ</option>
						<option value="ÁTILA LINS">ÁTILA LINS PSD-AM</option>
						<option value="ÁTILA LIRA">ÁTILA LIRA PSB-PI</option>
						<option value="AUGUSTO CARVALHO">AUGUSTO CARVALHO SD-DF</option>
						<option value="AUGUSTO COUTINHO">AUGUSTO COUTINHO SD-PE</option>
						<option value="AUREO">AUREO SD-RJ</option>
						<option value="BACELAR">BACELAR PODE-BA</option>
						<option value="BALEIA ROSSI">BALEIA ROSSI PMDB-SP</option>
						<option value="BEBETO">BEBETO PSB-BA</option>
						<option value="BENEDITA DA SILVA">BENEDITA DA SILVA PT-RJ</option>
						<option value="BENITO GAMA">BENITO GAMA PTB-BA</option>
						<option value="BENJAMIN MARANHÃO">BENJAMIN MARANHÃO SD-PB</option>
						<option value="BETINHO GOMES">BETINHO GOMES PSDB-PE</option>
						<option value="BETO FARO">BETO FARO PT-PA</option>
						<option value="BETO MANSUR">BETO MANSUR PRB-SP</option>
						<option value="BETO ROSADO">BETO ROSADO PP-RN</option>
						<option value="BETO SALAME">BETO SALAME PP-PA</option>
						<option value="BILAC PINTO">BILAC PINTO PR-MG</option>
						<option value="BOHN GASS">BOHN GASS PT-RS</option>
						<option value="BONIFÁCIO DE ANDRADA">BONIFÁCIO DE ANDRADA PSDB-MG</option>
						<option value="BOSCO COSTA">BOSCO COSTA PROS-SE</option>
						<option value="BRUNA FURLAN">BRUNA FURLAN PSDB-SP</option>
						<option value="BRUNNY">BRUNNY PR-MG</option>
						<option value="BRUNO ARAÚJO">BRUNO ARAÚJO PSDB-PE</option>
						<option value="BRUNO COVAS">BRUNO COVAS PSDB-SP</option>
						<option value="CABO DACIOLO">CABO DACIOLO AVANTE-RJ</option>
						<option value="CABO SABINO">CABO SABINO PR-CE</option>
						<option value="CABUÇU BORGES">CABUÇU BORGES PMDB-AP</option>
						<option value="CACÁ LEÃO">CACÁ LEÃO PP-BA</option>
						<option value="CAETANO">CAETANO PT-BA</option>
						<option value="CAIO NARCIO">CAIO NARCIO PSDB-MG</option>
						<option value="CAJAR NARDES">CAJAR NARDES PODE-RS</option>
						<option value="CAPITÃO AUGUSTO">CAPITÃO AUGUSTO PR-SP</option>
						<option value="CAPITÃO FÁBIO ABREU">CAPITÃO FÁBIO ABREU PTB-PI</option>
						<option value="CARLOS ANDRADE">CARLOS ANDRADE PHS-RR</option>
						<option value="CARLOS BEZERRA">CARLOS BEZERRA PMDB-MT</option>
						<option value="CARLOS EDUARDO CADOCA">CARLOS EDUARDO CADOCA PDT-PE</option>
						<option value="CARLOS GOMES">CARLOS GOMES PRB-RS</option>
						<option value="CARLOS HENRIQUE GAGUIM">CARLOS HENRIQUE GAGUIM PODE-TO</option>
						<option value="CARLOS MANATO">CARLOS MANATO SD-ES</option>
						<option value="CARLOS MARUN">CARLOS MARUN PMDB-MS</option>
						<option value="CARLOS MELLES">CARLOS MELLES DEM-MG</option>
						<option value="CARLOS SAMPAIO">CARLOS SAMPAIO PSDB-SP</option>
						<option value="CARLOS SOUZA">CARLOS SOUZA PSDB-AM</option>
						<option value="CARLOS ZARATTINI">CARLOS ZARATTINI PT-SP</option>
						<option value="CARMEN ZANOTTO">CARMEN ZANOTTO PPS-SC</option>
						<option value="CÉLIO SILVEIRA">CÉLIO SILVEIRA PSDB-GO</option>
						<option value="CELSO JACOB">CELSO JACOB PMDB-RJ</option>
						<option value="CELSO MALDANER">CELSO MALDANER PMDB-SC</option>
						<option value="CELSO PANSERA">CELSO PANSERA PMDB-RJ</option>
						<option value="CELSO RUSSOMANNO">CELSO RUSSOMANNO PRB-SP</option>
						<option value="CÉSAR HALUM">CÉSAR HALUM PRB-TO</option>
						<option value="CÉSAR MESSIAS">CÉSAR MESSIAS PSB-AC</option>
						<option value="CESAR SOUZA">CESAR SOUZA PSD-SC</option>
						<option value="CHICO ALENCAR">CHICO ALENCAR PSOL-RJ</option>
						<option value="CHICO D'ANGELO">CHICO DANGELO PT-RJ</option>
						<option value="CHICO LOPES">CHICO LOPES PCdoB-CE</option>
						<option value="CHRISTIANE DE SOUZA YARED">CHRISTIANE DE SOUZA YARED PR-PR</option>
						<option value="CÍCERO ALMEIDA">CÍCERO ALMEIDA PODE-AL</option>
						<option value="CLARISSA GAROTINHO">CLARISSA GAROTINHO PRB-RJ</option>
						<option value="CLAUDIO CAJADO">CLAUDIO CAJADO DEM-BA</option>
						<option value="CLEBER VERDE">CLEBER VERDE PRB-MA</option>
						<option value="CONCEIÇÃO SAMPAIO">CONCEIÇÃO SAMPAIO PP-AM</option>
						<option value="COVATTI FILHO">COVATTI FILHO PP-RS</option>
						<option value="CREUZA PEREIRA">CREUZA PEREIRA PSB-PE</option>
						<option value="CRISTIANE BRASIL">CRISTIANE BRASIL PTB-RJ</option>
						<option value="DAGOBERTO NOGUEIRA">DAGOBERTO NOGUEIRA PDT-MS</option>
						<option value="DAMIÃO FELICIANO">DAMIÃO FELICIANO PDT-PB</option>
						<option value="DÂMINA PEREIRA">DÂMINA PEREIRA PSL-MG</option>
						<option value="DANIEL ALMEIDA">DANIEL ALMEIDA PCdoB-BA</option>
						<option value="DANIEL COELHO">DANIEL COELHO PSDB-PE</option>
						<option value="DANIEL VILELA">DANIEL VILELA PMDB-GO</option>
						<option value="DANILO CABRAL">DANILO CABRAL PSB-PE</option>
						<option value="DANILO FORTE">DANILO FORTE S.PART.-CE</option>
						<option value="DANRLEI DE DEUS HINTERHOLZ">DANRLEI DE DEUS HINTERHOLZ PSD-RS</option>
						<option value="DARCÍSIO PERONDI">DARCÍSIO PERONDI PMDB-RS</option>
						<option value="DAVI ALVES SILVA JÚNIOR">DAVI ALVES SILVA JÚNIOR PR-MA</option>
						<option value="DAVIDSON MAGALHÃES">DAVIDSON MAGALHÃES PCdoB-BA</option>
						<option value="DÉCIO LIMA">DÉCIO LIMA PT-SC</option>
						<option value="DEJORGE PATRÍCIO">DEJORGE PATRÍCIO PRB-RJ</option>
						<option value="DELEGADO ÉDER MAURO">DELEGADO ÉDER MAURO PSD-PA</option>
						<option value="DELEGADO EDSON MOREIRA">DELEGADO EDSON MOREIRA PR-MG</option>
						<option value="DELEGADO FRANCISCHINI">DELEGADO FRANCISCHINI SD-PR</option>
						<option value="DELEGADO WALDIR">DELEGADO WALDIR PR-GO</option>
						<option value="DELEY">DELEY PTB-RJ</option>
						<option value="DEOCLIDES MACEDO">DEOCLIDES MACEDO PDT-MA</option>
						<option value="DIEGO ANDRADE">DIEGO ANDRADE PSD-MG</option>
						<option value="DIEGO GARCIA">DIEGO GARCIA PHS-PR</option>
						<option value="DILCEU SPERAFICO">DILCEU SPERAFICO PP-PR</option>
						<option value="DIMAS FABIANO">DIMAS FABIANO PP-MG</option>
						<option value="DOMINGOS NETO">DOMINGOS NETO PSD-CE</option>
						<option value="DOMINGOS SÁVIO">DOMINGOS SÁVIO PSDB-MG</option>
						<option value="DR. JOÃO">DR. JOÃO PR-RJ</option>
						<option value="DR. JORGE SILVA">DR. JORGE SILVA PHS-ES</option>
						<option value="DR. SINVAL MALHEIROS">DR. SINVAL MALHEIROS PODE-SP</option>
						<option value="DUARTE NOGUEIRA">DUARTE NOGUEIRA PSDB-SP</option>
						<option value="DULCE MIRANDA">DULCE MIRANDA PMDB-TO</option>
						<option value="EDINHO ARAÚJO">EDINHO ARAÚJO PMDB-SP</option>
						<option value="EDINHO BEZ">EDINHO BEZ PMDB-SC</option>
						<option value="EDIO LOPES">EDIO LOPES PR-RR</option>
						<option value="EDMAR ARRUDA">EDMAR ARRUDA PSD-PR</option>
						<option value="EDMILSON RODRIGUES">EDMILSON RODRIGUES PSOL-PA</option>
						<option value="EDUARDO BARBOSA">EDUARDO BARBOSA PSDB-MG</option>
						<option value="EDUARDO BOLSONARO">EDUARDO BOLSONARO PSC-SP</option>
						<option value="EDUARDO CUNHA">EDUARDO CUNHA PMDB-RJ</option>
						<option value="EDUARDO CURY">EDUARDO CURY PSDB-SP</option>
						<option value="EDUARDO DA FONTE">EDUARDO DA FONTE PP-PE</option>
						<option value="EFRAIM FILHO">EFRAIM FILHO DEM-PB</option>
						<option value="ELCIONE BARBALHO">ELCIONE BARBALHO PMDB-PA</option>
						<option value="ELI CORRÊA FILHO">ELI CORRÊA FILHO DEM-SP</option>
						<option value="ELIZEU DIONIZIO">ELIZEU DIONIZIO PSDB-MS</option>
						<option value="ELIZIANE GAMA">ELIZIANE GAMA PPS-MA</option>
						<option value="ELMAR NASCIMENTO">ELMAR NASCIMENTO DEM-BA</option>
						<option value="ENIO VERRI">ENIO VERRI PT-PR</option>
						<option value="ERIKA KOKAY">ERIKA KOKAY PT-DF</option>
						<option value="ERIVELTON SANTANA">ERIVELTON SANTANA PEN-BA</option>
						<option value="EROS BIONDINI">EROS BIONDINI PROS-MG</option>
						<option value="ESPERIDIÃO AMIN">ESPERIDIÃO AMIN PP-SC</option>
						<option value="EVAIR VIEIRA DE MELO">EVAIR VIEIRA DE MELO PV-ES</option>
						<option value="EVANDRO GUSSI">EVANDRO GUSSI PV-SP</option>
						<option value="EVANDRO ROMAN">EVANDRO ROMAN PSD-PR</option>
						<option value="EXPEDITO NETTO">EXPEDITO NETTO PSD-RO</option>
						<option value="EZEQUIEL FONSECA">EZEQUIEL FONSECA PP-MT</option>
						<option value="EZEQUIEL TEIXEIRA">EZEQUIEL TEIXEIRA PODE-RJ</option>
						<option value="FABIANO HORTA">FABIANO HORTA PT-RJ</option>
						<option value="FÁBIO FARIA">FÁBIO FARIA PSD-RN</option>
						<option value="FABIO GARCIA">FABIO GARCIA S.PART.-MT</option>
						<option value="FÁBIO MITIDIERI">FÁBIO MITIDIERI PSD-SE</option>
						<option value="FÁBIO RAMALHO">FÁBIO RAMALHO PMDB-MG</option>
						<option value="FABIO REIS">FABIO REIS PMDB-SE</option>
						<option value="FÁBIO SOUSA">FÁBIO SOUSA PSDB-GO</option>
						<option value="FÁTIMA BEZERRA">FÁTIMA BEZERRA PT-RN</option>
						<option value="FAUSTO PINATO">FAUSTO PINATO PP-SP</option>
						<option value="FELIPE BORNIER">FELIPE BORNIER PROS-RJ</option>
						<option value="FELIPE CARRERAS">FELIPE CARRERAS PSB-PE</option>
						<option value="FELIPE MAIA">FELIPE MAIA DEM-RN</option>
						<option value="FÉLIX MENDONÇA JÚNIOR">FÉLIX MENDONÇA JÚNIOR PDT-BA</option>
						<option value="FERNANDO COELHO FILHO">FERNANDO COELHO FILHO PSB-PE</option>
						<option value="FERNANDO JORDÃO">FERNANDO JORDÃO PMDB-RJ</option>
						<option value="FERNANDO MONTEIRO">FERNANDO MONTEIRO PP-PE</option>
						<option value="FERNANDO TORRES">FERNANDO TORRES PSD-BA</option>
						<option value="FLÁVIA MORAIS">FLÁVIA MORAIS PDT-GO</option>
						<option value="FLAVIANO MELO">FLAVIANO MELO PMDB-AC</option>
						<option value="FLAVINHO">FLAVINHO PSB-SP</option>
						<option value="FLAVIO NOGUEIRA">FLAVIO NOGUEIRA PDT-PI</option>
						<option value="FLORIANO PESARO">FLORIANO PESARO PSDB-SP</option>
						<option value="FRANCISCO CHAPADINHA">FRANCISCO CHAPADINHA PODE-PA</option>
						<option value="FRANCISCO FLORIANO">FRANCISCO FLORIANO DEM-RJ</option>
						<option value="FRANKLIN">FRANKLIN PP-MG</option>
						<option value="GABRIEL GUIMARÃES">GABRIEL GUIMARÃES PT-MG</option>
						<option value="GENECIAS NORONHA">GENECIAS NORONHA SD-CE</option>
						<option value="GEORGE HILTON">GEORGE HILTON PSB-MG</option>
						<option value="GEOVANIA DE SÁ">GEOVANIA DE SÁ PSDB-SC</option>
						<option value="GERALDO RESENDE">GERALDO RESENDE PSDB-MS</option>
						<option value="GIACOBO">GIACOBO PR-PR</option>
						<option value="GILBERTO NASCIMENTO">GILBERTO NASCIMENTO PSC-SP</option>
						<option value="GIOVANI CHERINI">GIOVANI CHERINI PR-RS</option>
						<option value="GIUSEPPE VECCI">GIUSEPPE VECCI PSDB-GO</option>
						<option value="GIVALDO CARIMBÃO">GIVALDO CARIMBÃO PHS-AL</option>
						<option value="GIVALDO VIEIRA">GIVALDO VIEIRA PT-ES</option>
						<option value="GLAUBER BRAGA">GLAUBER BRAGA PSOL-RJ</option>
						<option value="GONZAGA PATRIOTA">GONZAGA PATRIOTA PSB-PE</option>
						<option value="GORETE PEREIRA">GORETE PEREIRA PR-CE</option>
						<option value="GOULART">GOULART PSD-SP</option>
						<option value="GUILHERME COELHO">GUILHERME COELHO PSDB-PE</option>
						<option value="GUILHERME MUSSI">GUILHERME MUSSI PP-SP</option>
						<option value="HEITOR SCHUCH">HEITOR SCHUCH PSB-RS</option>
						<option value="HELDER SALOMÃO">HELDER SALOMÃO PT-ES</option>
						<option value="HÉLIO LEITE">HÉLIO LEITE DEM-PA</option>
						<option value="HENRIQUE FONTANA">HENRIQUE FONTANA PT-RS</option>
						<option value="HERÁCLITO FORTES">HERÁCLITO FORTES PSB-PI</option>
						<option value="HERCULANO PASSOS">HERCULANO PASSOS PSD-SP</option>
						<option value="HERMES PARCIANELLO">HERMES PARCIANELLO PMDB-PR</option>
						<option value="HEULER CRUVINEL">HEULER CRUVINEL PSD-GO</option>
						<option value="HILDO ROCHA">HILDO ROCHA PMDB-MA</option>
						<option value="HIRAN GONÇALVES">HIRAN GONÇALVES PP-RR</option>
						<option value="HISSA ABRAHÃO">HISSA ABRAHÃO PDT-AM</option>
						<option value="HUGO LEAL">HUGO LEAL PSB-RJ</option>
						<option value="HUGO MOTTA">HUGO MOTTA PMDB-PB</option>
						<option value="ILDON MARQUES">ILDON MARQUES PSB-MA</option>
						<option value="INDIO DA COSTA">INDIO DA COSTA PSD-RJ</option>
						<option value="IRACEMA PORTELLA">IRACEMA PORTELLA PP-PI</option>
						<option value="IRAJÁ ABREU">IRAJÁ ABREU PSD-TO</option>
						<option value="IRMÃO LAZARO">IRMÃO LAZARO PSC-BA</option>
						<option value="IZAQUE SILVA">IZAQUE SILVA PSDB-SP</option>
						<option value="IVAN VALENTE">IVAN VALENTE PSOL-SP</option>
						<option value="IZALCI LUCAS">IZALCI LUCAS PSDB-DF</option>
						<option value="JAIME MARTINS">JAIME MARTINS PSD-MG</option>
						<option value="JAIR BOLSONARO">JAIR BOLSONARO PSC-RJ</option>
						<option value="JANDIRA FEGHALI">JANDIRA FEGHALI PCdoB-RJ</option>
						<option value="JANETE CAPIBERIBE">JANETE CAPIBERIBE PSB-AP</option>
						<option value="JARBAS VASCONCELOS">JARBAS VASCONCELOS PMDB-PE</option>
						<option value="JEAN WYLLYS">JEAN WYLLYS PSOL-RJ</option>
						<option value="JEFFERSON CAMPOS">JEFFERSON CAMPOS PSD-SP</option>
						<option value="JERÔNIMO GOERGEN">JERÔNIMO GOERGEN PP-RS</option>
						<option value="JÉSSICA SALES">JÉSSICA SALES PMDB-AC</option>
						<option value="JHC">JHC PSB-AL</option>
						<option value="JHONATAN DE JESUS">JHONATAN DE JESUS PRB-RR</option>
						<option value="JÔ MORAES">JÔ MORAES PCdoB-MG</option>
						<option value="JOÃO ARRUDA">JOÃO ARRUDA PMDB-PR</option>
						<option value="JOÃO CAMPOS">JOÃO CAMPOS PRB-GO</option>
						<option value="JOÃO CARLOS BACELAR">JOÃO CARLOS BACELAR PR-BA</option>
						<option value="JOÃO CASTELO">JOÃO CASTELO PSDB-MA</option>
						<option value="JOÃO DANIEL">JOÃO DANIEL PT-SE</option>
						<option value="JOÃO DERLY">JOÃO DERLY REDE-RS</option>
						<option value="JOÃO FERNANDO COUTINHO">JOÃO FERNANDO COUTINHO PSB-PE</option>
						<option value="JOÃO GUALBERTO">JOÃO GUALBERTO PSDB-BA</option>
						<option value="JOÃO MARCELO SOUZA">JOÃO MARCELO SOUZA PMDB-MA</option>
						<option value="JOÃO PAULO KLEINÜBING">JOÃO PAULO KLEINÜBING PSD-SC</option>
						<option value="JOÃO PAULO PAPA">JOÃO PAULO PAPA PSDB-SP</option>
						<option value="JOÃO RODRIGUES">JOÃO RODRIGUES PSD-SC</option>
						<option value="JOAQUIM PASSARINHO">JOAQUIM PASSARINHO PSD-PA</option>
						<option value="JONES MARTINS">JONES MARTINS PMDB-RS</option>
						<option value="JONY MARCOS">JONY MARCOS PRB-SE</option>
						<option value="JORGE BOEIRA">JORGE BOEIRA PP-SC</option>
						<option value="JORGE CÔRTE REAL">JORGE CÔRTE REAL PTB-PE</option>
						<option value="JORGE SOLLA">JORGE SOLLA PT-BA</option>
						<option value="JORGE TADEU MUDALEN">JORGE TADEU MUDALEN DEM-SP</option>
						<option value="JORGINHO MELLO">JORGINHO MELLO PR-SC</option>
						<option value="JOSÉ AIRTON CIRILO">JOSÉ AIRTON CIRILO PT-CE</option>
						<option value="JOSÉ CARLOS ALELUIA">JOSÉ CARLOS ALELUIA DEM-BA</option>
						<option value="JOSÉ CARLOS ARAÚJO">JOSÉ CARLOS ARAÚJO PR-BA</option>
						<option value="JOSÉ FOGAÇA">JOSÉ FOGAÇA PMDB-RS</option>
						<option value="JOSÉ GUIMARÃES">JOSÉ GUIMARÃES PT-CE</option>
						<option value="JOSÉ MENTOR">JOSÉ MENTOR PT-SP</option>
						<option value="JOSÉ NUNES">JOSÉ NUNES PSD-BA</option>
						<option value="JOSÉ OTÁVIO GERMANO">JOSÉ OTÁVIO GERMANO PP-RS</option>
						<option value="JOSÉ PRIANTE">JOSÉ PRIANTE PMDB-PA</option>
						<option value="JOSÉ REINALDO">JOSÉ REINALDO PSB-MA</option>
						<option value="JOSÉ ROCHA">JOSÉ ROCHA PR-BA</option>
						<option value="JOSE STÉDILE">JOSE STÉDILE PSB-RS</option>
						<option value="JOSI NUNES">JOSI NUNES PMDB-TO</option>
						<option value="JOSIAS GOMES">JOSIAS GOMES PT-BA</option>
						<option value="JOSUÉ BENGTSON">JOSUÉ BENGTSON PTB-PA</option>
						<option value="JOVAIR ARANTES">JOVAIR ARANTES PTB-GO</option>
						<option value="JOZI ARAÚJO">JOZI ARAÚJO PODE-AP</option>
						<option value="JÚLIA MARINHO">JÚLIA MARINHO PSC-PA</option>
						<option value="JULIÃO AMIN">JULIÃO AMIN PDT-MA</option>
						<option value="JÚLIO CESAR">JÚLIO CESAR PSD-PI</option>
						<option value="JÚLIO DELGADO">JÚLIO DELGADO PSB-MG</option>
						<option value="JULIO LOPES">JULIO LOPES PP-RJ</option>
						<option value="JUNIOR MARRECA">JUNIOR MARRECA PEN-MA</option>
						<option value="JUSCELINO FILHO">JUSCELINO FILHO DEM-MA</option>
						<option value="JUTAHY JUNIOR">JUTAHY JUNIOR PSDB-BA</option>
						<option value="KAIO MANIÇOBA">KAIO MANIÇOBA PMDB-PE</option>
						<option value="KEIKO OTA">KEIKO OTA PSB-SP</option>
						<option value="LAERCIO OLIVEIRA">LAERCIO OLIVEIRA SD-SE</option>
						<option value="LAERTE BESSA">LAERTE BESSA PR-DF</option>
						<option value="LAUDIVIO CARVALHO">LAUDIVIO CARVALHO SD-MG</option>
						<option value="LAURA CARNEIRO">LAURA CARNEIRO PMDB-RJ</option>
						<option value="LÁZARO BOTELHO">LÁZARO BOTELHO PP-TO</option>
						<option value="LEANDRE">LEANDRE PV-PR</option>
						<option value="LELO COIMBRA">LELO COIMBRA PMDB-ES</option>
						<option value="LEO DE BRITO">LEO DE BRITO PT-AC</option>
						<option value="LEONARDO MONTEIRO">LEONARDO MONTEIRO PT-MG</option>
						<option value="LEONARDO PICCIANI">LEONARDO PICCIANI PMDB-RJ</option>
						<option value="LEONARDO QUINTÃO">LEONARDO QUINTÃO PMDB-MG</option>
						<option value="LEÔNIDAS CRISTINO">LEÔNIDAS CRISTINO PDT-CE</option>
						<option value="LEOPOLDO MEYER">LEOPOLDO MEYER PSB-PR</option>
						<option value="LID.GOV-CD">LID.GOV-CD -</option>
						<option value="LID.GOV-CN">LID.GOV-CN -</option>
						<option value="LIDERANÇA DO PSDB">LIDERANÇA DO PSDB -</option>
						<option value="LIDERANÇA DO PT">LIDERANÇA DO PT -</option>
						<option value="LINCOLN PORTELA">LINCOLN PORTELA PRB-MG</option>
						<option value="LINDOMAR GARÇON">LINDOMAR GARÇON PRB-RO</option>
						<option value="LOBBE NETO">LOBBE NETO PSDB-SP</option>
						<option value="LOURIVAL GOMES">LOURIVAL GOMES PODE-RJ</option>
						<option value="LUANA COSTA">LUANA COSTA PSB-MA</option>
						<option value="LUCAS VERGILIO">LUCAS VERGILIO SD-GO</option>
						<option value="LUCIANA SANTOS">LUCIANA SANTOS PCdoB-PE</option>
						<option value="LUCIANO BIVAR">LUCIANO BIVAR PSL-PE</option>
						<option value="LUCIANO DUCCI">LUCIANO DUCCI PSB-PR</option>
						<option value="LUCIO MOSQUINI">LUCIO MOSQUINI PMDB-RO</option>
						<option value="LÚCIO VALE">LÚCIO VALE PR-PA</option>
						<option value="LUCIO VIEIRA LIMA">LUCIO VIEIRA LIMA PMDB-BA</option>
						<option value="LUIS CARLOS HEINZE">LUIS CARLOS HEINZE PP-RS</option>
						<option value="LUIS TIBÉ">LUIS TIBÉ AVANTE-MG</option>
						<option value="LUIZ CARLOS BUSATO">LUIZ CARLOS BUSATO PTB-RS</option>
						<option value="LUIZ CARLOS HAULY">LUIZ CARLOS HAULY PSDB-PR</option>
						<option value="LUIZ CARLOS RAMOS">LUIZ CARLOS RAMOS PODE-RJ</option>
						<option value="LUIZ CLÁUDIO">LUIZ CLÁUDIO PR-RO</option>
						<option value="LUIZ COUTO">LUIZ COUTO PT-PB</option>
						<option value="LUIZ FERNANDO FARIA">LUIZ FERNANDO FARIA PP-MG</option>
						<option value="LUIZ LAURO FILHO">LUIZ LAURO FILHO PSB-SP</option>
						<option value="LUIZ NISHIMORI">LUIZ NISHIMORI PR-PR</option>
						<option value="LUIZ SÉRGIO">LUIZ SÉRGIO PT-RJ</option>
						<option value="LUIZA ERUNDINA">LUIZA ERUNDINA PSOL-SP</option>
						<option value="LUIZIANNE LINS">LUIZIANNE LINS PT-CE</option>
						<option value="LUZIA FERREIRA">LUZIA FERREIRA PPS-MG</option>
						<option value="MACEDO">MACEDO PP-CE</option>
						<option value="MAGDA MOFATTO">MAGDA MOFATTO PR-GO</option>
						<option value="MAIA FILHO">MAIA FILHO PP-PI</option>
						<option value="MAJOR OLIMPIO">MAJOR OLIMPIO SD-SP</option>
						<option value="MANDETTA">MANDETTA DEM-MS</option>
						<option value="MANOEL JUNIOR">MANOEL JUNIOR PMDB-PB</option>
						<option value="MARA GABRILLI">MARA GABRILLI PSDB-SP</option>
						<option value="MARCELO AGUIAR">MARCELO AGUIAR DEM-SP</option>
						<option value="MARCELO ÁLVARO ANTÔNIO">MARCELO ÁLVARO ANTÔNIO PR-MG</option>
						<option value="MARCELO ARO">MARCELO ARO PHS-MG</option>
						<option value="MARCELO BELINATI">MARCELO BELINATI PP-PR</option>
						<option value="MARCELO CASTRO">MARCELO CASTRO PMDB-PI</option>
						<option value="MARCELO DELAROLI">MARCELO DELAROLI PR-RJ</option>
						<option value="MARCELO MATOS">MARCELO MATOS PHS-RJ</option>
						<option value="MARCELO SQUASSONI">MARCELO SQUASSONI PRB-SP</option>
						<option value="MARCIO ALVINO">MARCIO ALVINO PR-SP</option>
						<option value="MÁRCIO BIOLCHI">MÁRCIO BIOLCHI PMDB-RS</option>
						<option value="MÁRCIO MARINHO">MÁRCIO MARINHO PRB-BA</option>
						<option value="MARCO ANTÔNIO CABRAL">MARCO ANTÔNIO CABRAL PMDB-RJ</option>
						<option value="MARCO MAIA">MARCO MAIA PT-RS</option>
						<option value="MARCO TEBALDI">MARCO TEBALDI PSDB-SC</option>
						<option value="MARCON">MARCON PT-RS</option>
						<option value="MARCONDES GADELHA">MARCONDES GADELHA PSC-PB</option>
						<option value="MARCOS ABRÃO">MARCOS ABRÃO PPS-GO</option>
						<option value="MARCOS MEDRADO">MARCOS MEDRADO PODE-BA</option>
						<option value="MARCOS MONTES">MARCOS MONTES PSD-MG</option>
						<option value="MARCOS REATEGUI">MARCOS REATEGUI PSD-AP</option>
						<option value="MARCOS ROGÉRIO">MARCOS ROGÉRIO DEM-RO</option>
						<option value="MARCOS ROTTA">MARCOS ROTTA PMDB-AM</option>
						<option value="MARCOS SOARES">MARCOS SOARES DEM-RJ</option>
						<option value="MARCUS PESTANA">MARCUS PESTANA PSDB-MG</option>
						<option value="MARCUS VICENTE">MARCUS VICENTE PP-ES</option>
						<option value="MARGARIDA SALOMÃO">MARGARIDA SALOMÃO PT-MG</option>
						<option value="MARIA DO ROSÁRIO">MARIA DO ROSÁRIO PT-RS</option>
						<option value="MARIA HELENA">MARIA HELENA PSB-RR</option>
						<option value="MARIANA CARVALHO">MARIANA CARVALHO PSDB-RO</option>
						<option value="MARINALDO ROSENDO">MARINALDO ROSENDO PSB-PE</option>
						<option value="MARINHA RAUPP">MARINHA RAUPP PMDB-RO</option>
						<option value="MÁRIO HERINGER">MÁRIO HERINGER PDT-MG</option>
						<option value="MÁRIO NEGROMONTE JR.">MÁRIO NEGROMONTE JR. PP-BA</option>
						<option value="MARQUINHO MENDES">MARQUINHO MENDES PMDB-RJ</option>
						<option value="MARX BELTRÃO">MARX BELTRÃO PMDB-AL</option>
						<option value="MAURÍCIO QUINTELLA LESSA">MAURÍCIO QUINTELLA LESSA PR-AL</option>
						<option value="MAURO BENEVIDES">MAURO BENEVIDES PMDB-CE</option>
						<option value="MAURO LOPES">MAURO LOPES PMDB-MG</option>
						<option value="MAURO MARIANI">MAURO MARIANI PMDB-SC</option>
						<option value="MAURO PEREIRA">MAURO PEREIRA PMDB-RS</option>
						<option value="MAX FILHO">MAX FILHO PSDB-ES</option>
						<option value="MENDONÇA FILHO">MENDONÇA FILHO DEM-PE</option>
						<option value="MERLONG SOLANO">MERLONG SOLANO PT-PI</option>
						<option value="MIGUEL CORRÊA">MIGUEL CORRÊA PT-MG</option>
						<option value="MIGUEL HADDAD">MIGUEL HADDAD PSDB-SP</option>
						<option value="MIGUEL LOMBARDI">MIGUEL LOMBARDI PR-SP</option>
						<option value="MILTON MONTI">MILTON MONTI PR-SP</option>
						<option value="MIRO TEIXEIRA">MIRO TEIXEIRA REDE-RJ</option>
						<option value="MISAEL VARELLA">MISAEL VARELLA DEM-MG</option>
						<option value="MISSIONÁRIO JOSÉ OLIMPIO">MISSIONÁRIO JOSÉ OLIMPIO DEM-SP</option>
						<option value="MOEMA GRAMACHO">MOEMA GRAMACHO PT-BA</option>
						<option value="MOISÉS DINIZ">MOISÉS DINIZ PCdoB-AC</option>
						<option value="MORONI TORGAN">MORONI TORGAN DEM-CE</option>
						<option value="MOSES RODRIGUES">MOSES RODRIGUES PMDB-CE</option>
						<option value="NELSON MARCHEZAN JUNIOR">NELSON MARCHEZAN JUNIOR PSDB-RS</option>
						<option value="NELSON MARQUEZELLI">NELSON MARQUEZELLI PTB-SP</option>
						<option value="NELSON MEURER">NELSON MEURER PP-PR</option>
						<option value="NELSON NAHIM">NELSON NAHIM PSD-RJ</option>
						<option value="NELSON PADOVANI">NELSON PADOVANI PSDB-PR</option>
						<option value="NELSON PELLEGRINO">NELSON PELLEGRINO PT-BA</option>
						<option value="NEWTON CARDOSO JR">NEWTON CARDOSO JR PMDB-MG</option>
						<option value="NILMÁRIO MIRANDA">NILMÁRIO MIRANDA PT-MG</option>
						<option value="NILSON LEITÃO">NILSON LEITÃO PSDB-MT</option>
						<option value="NILSON PINTO">NILSON PINTO PSDB-PA</option>
						<option value="NILTO TATTO">NILTO TATTO PT-SP</option>
						<option value="NILTON CAPIXABA">NILTON CAPIXABA PTB-RO</option>
						<option value="NIVALDO ALBUQUERQUE">NIVALDO ALBUQUERQUE PRP-AL</option>
						<option value="NORMA AYUB">NORMA AYUB DEM-ES</option>
						<option value="ODAIR CUNHA">ODAIR CUNHA PT-MG</option>
						<option value="ODELMO LEÃO">ODELMO LEÃO PP-MG</option>
						<option value="ODORICO MONTEIRO">ODORICO MONTEIRO PSB-CE</option>
						<option value="ONYX LORENZONI">ONYX LORENZONI DEM-RS</option>
						<option value="ORLANDO SILVA">ORLANDO SILVA PCdoB-SP</option>
						<option value="OSMAR BERTOLDI">OSMAR BERTOLDI DEM-PR</option>
						<option value="OSMAR SERRAGLIO">OSMAR SERRAGLIO PMDB-PR</option>
						<option value="OSMAR TERRA">OSMAR TERRA PMDB-RS</option>
						<option value="OTAVIO LEITE">OTAVIO LEITE PSDB-RJ</option>
						<option value="PADRE JOÃO">PADRE JOÃO PT-MG</option>
						<option value="PAES LANDIM">PAES LANDIM PTB-PI</option>
						<option value="PASTOR EURICO">PASTOR EURICO PHS-PE</option>
						<option value="PASTOR LUCIANO BRAGA">PASTOR LUCIANO BRAGA PRB-BA</option>
						<option value="PATRUS ANANIAS">PATRUS ANANIAS PT-MG</option>
						<option value="PAUDERNEY AVELINO">PAUDERNEY AVELINO DEM-AM</option>
						<option value="PAULÃO">PAULÃO PT-AL</option>
						<option value="PAULO ABI-ACKEL">PAULO ABI-ACKEL PSDB-MG</option>
						<option value="PAULO AZI">PAULO AZI DEM-BA</option>
						<option value="PAULO FEIJÓ">PAULO FEIJÓ PR-RJ</option>
						<option value="PAULO FOLETTO">PAULO FOLETTO PSB-ES</option>
						<option value="PAULO FREIRE">PAULO FREIRE PR-SP</option>
						<option value="PAULO HENRIQUE LUSTOSA">PAULO HENRIQUE LUSTOSA PP-CE</option>
						<option value="PAULO MAGALHÃES">PAULO MAGALHÃES PSD-BA</option>
						<option value="PAULO MALUF">PAULO MALUF PP-SP</option>
						<option value="PAULO MARTINS">PAULO MARTINS PSDB-PR</option>
						<option value="PAULO PEREIRA DA SILVA">PAULO PEREIRA DA SILVA SD-SP</option>
						<option value="PAULO PIMENTA">PAULO PIMENTA PT-RS</option>
						<option value="PAULO TEIXEIRA">PAULO TEIXEIRA PT-SP</option>
						<option value="PDT">PDT -</option>
						<option value="PEDRO CHAVES">PEDRO CHAVES PMDB-GO</option>
						<option value="PEDRO CUNHA LIMA">PEDRO CUNHA LIMA PSDB-PB</option>
						<option value="PEDRO FERNANDES">PEDRO FERNANDES PTB-MA</option>
						<option value="PEDRO PAULO">PEDRO PAULO PMDB-RJ</option>
						<option value="PEDRO UCZAI">PEDRO UCZAI PT-SC</option>
						<option value="PEDRO VILELA">PEDRO VILELA PSDB-AL</option>
						<option value="PEPE VARGAS">PEPE VARGAS PT-RS</option>
						<option value="PHS">PHS -</option>
						<option value="PODE">PODE -</option>
						<option value="POLLYANA GAMA">POLLYANA GAMA PPS-SP</option>
						<option value="POMPEO DE MATTOS">POMPEO DE MATTOS PDT-RS</option>
						<option value="PR. MARCO FELICIANO">PR. MARCO FELICIANO PSC-SP</option>
						<option value="PROFESSOR SÉRGIO DE OLIVEIRA">PROFESSOR SÉRGIO DE OLIVEIRA PSD-PR</option>
						<option value="PROFESSOR VICTÓRIO GALLI">PROFESSOR VICTÓRIO GALLI PSC-MT</option>
						<option value="PROFESSORA DORINHA SEABRA REZENDE">
							PROFESSORA DORINHA SEABRA REZENDE DEM-TO
						</option>
						<option value="PROFESSORA MARCIVANIA">PROFESSORA MARCIVANIA PCdoB-AP</option>
						<option value="PROS">PROS -</option>
						<option value="PSOL">PSOL -</option>
						<option value="PTN">PTN -</option>
						<option value="RAFAEL MOTTA">RAFAEL MOTTA PSB-RN</option>
						<option value="RAIMUNDO GOMES DE MATOS">RAIMUNDO GOMES DE MATOS PSDB-CE</option>
						<option value="RAQUEL MUNIZ">RAQUEL MUNIZ PSD-MG</option>
						<option value="RAUL JUNGMANN">RAUL JUNGMANN PPS-PE</option>
						<option value="REGINALDO LOPES">REGINALDO LOPES PT-MG</option>
						<option value="REINHOLD STEPHANES">REINHOLD STEPHANES PSD-PR</option>
						<option value="REJANE DIAS">REJANE DIAS PT-PI</option>
						<option value="REMÍDIO MONAI">REMÍDIO MONAI PR-RR</option>
						<option value="RENATA ABREU">RENATA ABREU PODE-SP</option>
						<option value="RENATO ANDRADE">RENATO ANDRADE PP-MG</option>
						<option value="RENATO MOLLING">RENATO MOLLING PP-RS</option>
						<option value="RENZO BRAZ">RENZO BRAZ PP-MG</option>
						<option value="RICARDO BARROS">RICARDO BARROS PP-PR</option>
						<option value="RICARDO BENTINHO">RICARDO BENTINHO PRB-SP</option>
						<option value="RICARDO IZAR">RICARDO IZAR PP-SP</option>
						<option value="RICARDO TEOBALDO">RICARDO TEOBALDO PODE-PE</option>
						<option value="RICARDO TRIPOLI">RICARDO TRIPOLI PSDB-SP</option>
						<option value="ROBERTO ALVES">ROBERTO ALVES PRB-SP</option>
						<option value="ROBERTO BALESTRA">ROBERTO BALESTRA PP-GO</option>
						<option value="ROBERTO BRITTO">ROBERTO BRITTO PP-BA</option>
						<option value="ROBERTO DE LUCENA">ROBERTO DE LUCENA PV-SP</option>
						<option value="ROBERTO FREIRE">ROBERTO FREIRE PPS-SP</option>
						<option value="ROBERTO GÓES">ROBERTO GÓES PDT-AP</option>
						<option value="ROBERTO SALES">ROBERTO SALES PRB-RJ</option>
						<option value="ROBERTO TEIXEIRA">ROBERTO TEIXEIRA PP-PE</option>
						<option value="ROBINSON ALMEIDA">ROBINSON ALMEIDA PT-BA</option>
						<option value="ROCHA">ROCHA PSDB-AC</option>
						<option value="ROCHA LOURES">ROCHA LOURES PMDB-PR</option>
						<option value="RODRIGO DE CASTRO">RODRIGO DE CASTRO PSDB-MG</option>
						<option value="RODRIGO GARCIA">RODRIGO GARCIA DEM-SP</option>
						<option value="RODRIGO MAIA">RODRIGO MAIA DEM-RJ</option>
						<option value="RODRIGO MARTINS">RODRIGO MARTINS PSB-PI</option>
						<option value="RODRIGO PACHECO">RODRIGO PACHECO PMDB-MG</option>
						<option value="ROGÉRIO MARINHO">ROGÉRIO MARINHO PSDB-RN</option>
						<option value="ROGÉRIO PENINHA MENDONÇA">ROGÉRIO PENINHA MENDONÇA PMDB-SC</option>
						<option value="ROGÉRIO ROSSO">ROGÉRIO ROSSO PSD-DF</option>
						<option value="ROGÉRIO SILVA">ROGÉRIO SILVA PMDB-MT</option>
						<option value="RÔMULO GOUVEIA">RÔMULO GOUVEIA PSD-PB</option>
						<option value="RONALDO BENEDET">RONALDO BENEDET PMDB-SC</option>
						<option value="RONALDO CARLETTO">RONALDO CARLETTO PP-BA</option>
						<option value="RONALDO FONSECA">RONALDO FONSECA PROS-DF</option>
						<option value="RONALDO LESSA">RONALDO LESSA PDT-AL</option>
						<option value="RONALDO MARTINS">RONALDO MARTINS PRB-CE</option>
						<option value="RONALDO NOGUEIRA">RONALDO NOGUEIRA PTB-RS</option>
						<option value="RÔNEY NEMER">RÔNEY NEMER PP-DF</option>
						<option value="ROSÂNGELA CURADO">ROSÂNGELA CURADO PDT-MA</option>
						<option value="ROSANGELA GOMES">ROSANGELA GOMES PRB-RJ</option>
						<option value="ROSINHA DA ADEFAL">ROSINHA DA ADEFAL AVANTE-AL</option>
						<option value="ROSSONI">ROSSONI PSDB-PR</option>
						<option value="RUBENS BUENO">RUBENS BUENO PPS-PR</option>
						<option value="RUBENS OTONI">RUBENS OTONI PT-GO</option>
						<option value="RUBENS PEREIRA JÚNIOR">RUBENS PEREIRA JÚNIOR PCdoB-MA</option>
						<option value="SABINO CASTELO BRANCO">SABINO CASTELO BRANCO PTB-AM</option>
						<option value="SÁGUAS MORAES">SÁGUAS MORAES PT-MT</option>
						<option value="SAMUEL MOREIRA">SAMUEL MOREIRA PSDB-SP</option>
						<option value="SANDES JÚNIOR">SANDES JÚNIOR PP-GO</option>
						<option value="SANDRO ALEX">SANDRO ALEX PSD-PR</option>
						<option value="SARAIVA FELIPE">SARAIVA FELIPE PMDB-MG</option>
						<option value="SARNEY FILHO">SARNEY FILHO PV-MA</option>
						<option value="SDD">SDD -</option>
						<option value="SEBASTIÃO OLIVEIRA">SEBASTIÃO OLIVEIRA PR-PE</option>
						<option value="SÉRGIO BRITO">SÉRGIO BRITO PSD-BA</option>
						<option value="SÉRGIO MORAES">SÉRGIO MORAES PTB-RS</option>
						<option value="SÉRGIO REIS">SÉRGIO REIS PRB-SP</option>
						<option value="SERGIO SOUZA">SERGIO SOUZA PMDB-PR</option>
						<option value="SERGIO VIDIGAL">SERGIO VIDIGAL PDT-ES</option>
						<option value="SERGIO ZVEITER">SERGIO ZVEITER PODE-RJ</option>
						<option value="SEVERINO NINHO">SEVERINO NINHO PSB-PE</option>
						<option value="SHÉRIDAN">SHÉRIDAN PSDB-RR</option>
						<option value="SIBÁ MACHADO">SIBÁ MACHADO PT-AC</option>
						<option value="SILAS BRASILEIRO">SILAS BRASILEIRO PMDB-MG</option>
						<option value="SILAS CÂMARA">SILAS CÂMARA PRB-AM</option>
						<option value="SILAS FREIRE">SILAS FREIRE PODE-PI</option>
						<option value="SILVIO COSTA">SILVIO COSTA AVANTE-PE</option>
						<option value="SILVIO TORRES">SILVIO TORRES PSDB-SP</option>
						<option value="SIMÃO SESSIM">SIMÃO SESSIM PP-RJ</option>
						<option value="SIMONE MORGADO">SIMONE MORGADO PMDB-PA</option>
						<option value="SORAYA SANTOS">SORAYA SANTOS PMDB-RJ</option>
						<option value="SÓSTENES CAVALCANTE">SÓSTENES CAVALCANTE DEM-RJ</option>
						<option value="STEFANO AGUIAR">STEFANO AGUIAR PSD-MG</option>
						<option value="SUBTENENTE GONZAGA">SUBTENENTE GONZAGA PDT-MG</option>
						<option value="TADEU ALENCAR">TADEU ALENCAR PSB-PE</option>
						<option value="TAKAYAMA">TAKAYAMA PSC-PR</option>
						<option value="TAMPINHA">TAMPINHA PSD-MT</option>
						<option value="TENENTE LÚCIO">TENENTE LÚCIO PSB-MG</option>
						<option value="TEREZA CRISTINA">TEREZA CRISTINA PSB-MS</option>
						<option value="THIAGO PEIXOTO">THIAGO PEIXOTO PSD-GO</option>
						<option value="TIA ERON">TIA ERON PRB-BA</option>
						<option value="TIRIRICA">TIRIRICA PR-SP</option>
						<option value="TONINHO PINHEIRO">TONINHO PINHEIRO PP-MG</option>
						<option value="TONINHO WANDSCHEER">TONINHO WANDSCHEER PROS-PR</option>
						<option value="ULDURICO JUNIOR">ULDURICO JUNIOR PV-BA</option>
						<option value="VAIDON OLIVEIRA">VAIDON OLIVEIRA PROS-CE</option>
						<option value="VAL AMÉLIO">VAL AMÉLIO PRTB-AL</option>
						<option value="VALADARES FILHO">VALADARES FILHO PSB-SE</option>
						<option value="VALDIR COLATTO">VALDIR COLATTO PMDB-SC</option>
						<option value="VALMIR ASSUNÇÃO">VALMIR ASSUNÇÃO PT-BA</option>
						<option value="VALMIR PRASCIDELLI">VALMIR PRASCIDELLI PT-SP</option>
						<option value="VALTENIR PEREIRA">VALTENIR PEREIRA PSB-MT</option>
						<option value="VANDER LOUBET">VANDER LOUBET PT-MS</option>
						<option value="VANDERLEI MACRIS">VANDERLEI MACRIS PSDB-SP</option>
						<option value="VENEZIANO VITAL DO RÊGO">VENEZIANO VITAL DO RÊGO PMDB-PB</option>
						<option value="VICENTE ARRUDA">VICENTE ARRUDA PDT-CE</option>
						<option value="VICENTE CANDIDO">VICENTE CANDIDO PT-SP</option>
						<option value="VICENTINHO">VICENTINHO PT-SP</option>
						<option value="VICENTINHO JÚNIOR">VICENTINHO JÚNIOR PR-TO</option>
						<option value="VICTOR MENDES">VICTOR MENDES PSD-MA</option>
						<option value="VINICIUS CARVALHO">VINICIUS CARVALHO PRB-SP</option>
						<option value="VINICIUS GURGEL">VINICIUS GURGEL PR-AP</option>
						<option value="VITOR LIPPI">VITOR LIPPI PSDB-SP</option>
						<option value="VITOR VALIM">VITOR VALIM PMDB-CE</option>
						<option value="WADIH DAMOUS">WADIH DAMOUS PT-RJ</option>
						<option value="WADSON RIBEIRO">WADSON RIBEIRO PCdoB-MG</option>
						<option value="WALDENOR PEREIRA">WALDENOR PEREIRA PT-BA</option>
						<option value="WALDIR MARANHÃO">WALDIR MARANHÃO AVANTE-MA</option>
						<option value="WALNEY ROCHA">WALNEY ROCHA PEN-RJ</option>
						<option value="WALTER ALVES">WALTER ALVES PMDB-RN</option>
						<option value="WALTER IHOSHI">WALTER IHOSHI PSD-SP</option>
						<option value="WASHINGTON REIS">WASHINGTON REIS PMDB-RJ</option>
						<option value="WELITON PRADO">WELITON PRADO PROS-MG</option>
						<option value="WELLINGTON ROBERTO">WELLINGTON ROBERTO PR-PB</option>
						<option value="WEVERTON ROCHA">WEVERTON ROCHA PDT-MA</option>
						<option value="WILLIAM WOO">WILLIAM WOO PP-SP</option>
						<option value="WILSON BESERRA">WILSON BESERRA PMDB-RJ</option>
						<option value="WILSON FILHO">WILSON FILHO PTB-PB</option>
						<option value="WLADIMIR COSTA">WLADIMIR COSTA SD-PA</option>
						<option value="WOLNEY QUEIROZ">WOLNEY QUEIROZ PDT-PE</option>
						<option value="XUXU DAL MOLIN">XUXU DAL MOLIN PSC-MT</option>
						<option value="YEDA CRUSIUS">YEDA CRUSIUS PSDB-RS</option>
						<option value="ZÉ AUGUSTO NALIN">ZÉ AUGUSTO NALIN PMDB-RJ</option>
						<option value="ZÉ CARLOS">ZÉ CARLOS PT-MA</option>
						<option value="ZÉ GERALDO">ZÉ GERALDO PT-PA</option>
						<option value="ZÉ SILVA">ZÉ SILVA SD-MG</option>
						<option value="ZECA CAVALCANTI">ZECA CAVALCANTI PTB-PE</option>
						<option value="ZECA DIRCEU">ZECA DIRCEU PT-PR</option>
						<option value="ZECA DO PT">ZECA DO PT PT-MS</option>
						<option value="ZENAIDE MAIA">ZENAIDE MAIA PR-RN</option>
					</select>
				</label>
				<label>
					Ano:
					<select value={this.state.value} onChange={this.handleChangeAno}>
						<option value="" />
						<option value="2016">2016</option>
						<option value="2017">2017</option>
					</select>
				</label>
				<label>
					Tipo de despesa:
					<select value={this.state.value} onChange={this.handleChangeDespesa}>
						<option value="" />
						<option value="MANUTENÇÃO DE ESCRITÓRIO DE APOIO À ATIVIDADE PARLAMENTAR">
							MANUTENÇÃO DE ESCRITÓRIO DE APOIO À ATIVIDADE PARLAMENTAR
						</option>
						<option value="COMBUSTÍVEIS E LUBRIFICANTES.">COMBUSTÍVEIS E LUBRIFICANTES.</option>
						<option value="CONSULTORIAS, PESQUISAS E TRABALHOS TÉCNICOS.">
							CONSULTORIAS, PESQUISAS E TRABALHOS TÉCNICOS
						</option>
						<option value="DIVULGAÇÃO DA ATIVIDADE PARLAMENTAR.">
							DIVULGAÇÃO DA ATIVIDADE PARLAMENTAR
						</option>
						<option value="SERVIÇO DE SEGURANÇA PRESTADO POR EMPRESA ESPECIALIZADA.">
							SERVIÇO DE SEGURANÇA PRESTADO POR EMPRESA ESPECIALIZADA
						</option>
						<option value="TELEFONIA">TELEFONIA</option>
						<option value="SERVIÇOS POSTAIS">SERVIÇOS POSTAIS</option>
						<option value="FORNECIMENTO DE ALIMENTAÇÃO DO PARLAMENTAR">
							SERVIÇOS FORNECIMENTO DE ALIMENTAÇÃO DO PARLAMENTAR
						</option>
						<option value="LOCAÇÃO OU FRETAMENTO DE VEÍCULOS AUTOMOTORES">
							LOCAÇÃO OU FRETAMENTO DE VEÍCULOS AUTOMOTORES
						</option>
						<option value="ASSINATURA DE PUBLICAÇÕES">ASSINATURA DE PUBLICAÇÕES</option>
						<option value="HOSPEDAGEM ,EXCETO DO PARLAMENTAR NO DISTRITO FEDERAL.">
							HOSPEDAGEM ,EXCETO DO PARLAMENTAR NO DISTRITO FEDERAL
						</option>
						<option value="LOCAÇÃO OU FRETAMENTO DE VEÍCULOS AUTOMOTORES">
							LOCAÇÃO OU FRETAMENTO DE VEÍCULOS AUTOMOTORES
						</option>
						<option value="LOCAÇÃO OU FRETAMENTO DE EMBARCAÇÕES">
							LOCAÇÃO OU FRETAMENTO DE EMBARCAÇÕES
						</option>
						<option value="LOCAÇÃO OU FRETAMENTO DE AERONAVES">LOCAÇÃO OU FRETAMENTO DE AERONAVES</option>
						<option value="SERVIÇO DE TÁXI, PEDÁGIO E ESTACIONAMENTO">
							SERVIÇO DE TÁXI, PEDÁGIO E ESTACIONAMENTO
						</option>
						<option value="PASSAGENS TERRESTRES, MARÍTIMAS OU FLUVIAIS">
							PASSAGENS TERRESTRES, MARÍTIMAS OU FLUVIAIS
						</option>
						<option value="PARTICIPAÇÃO EM CURSO, PALESTRA OU EVENTO SIMILAR">
							PARTICIPAÇÃO EM CURSO, PALESTRA OU EVENTO SIMILAR
						</option>

						<option value="Emissão Bilhete Aéreo'">EMISSÃO BILHETE AÉREO</option>
					</select>
				</label>
				<input type="submit" value="Pesquisar" className="btn btn-default" />
				<List results={this.state.results} loading={this.state.loading} />
			</form>
		);
	}
}

export default Form;
