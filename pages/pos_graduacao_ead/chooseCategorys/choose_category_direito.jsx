import courseEx from '../../assets/balance.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ChooseCategory() {

    const posgrad = [
        {
            id: 1,
            title: 'Direito Administrativo',
            objectives:
                'Especializar profissionais para que estejam preparados a atuar na e frente à administração pública, com o embasamento teórico e prático necessário a enfrentar as peculiaridades decorrentes do regime jurídico-administrativo.',
            targetPeoples:
                'Graduados em Direito e áreas afins que pretendam aprofundar seus conhecimentos sobre a atividade estatal, tais como: advogados administrativistas, servidores públicos de carreira, aspirantes a ocupar cargo público nas áreas jurídica, fiscal, bancária ou policial.',
            about: 'A atividade administrativa do Estado é tema de importância reconhecida para as mais diversas áreas de atuação. Conhecer em profundidade como o Estado se estrutura, se organiza, como contrata, quem são e quais são as competências daqueles que atuam em seu nome, são alguns dos assuntos que compõem esse curso. O conteúdo é apresentado com a profundidade teórica necessária para o nível de pós-graduação, aliado às experiências práticas aptas a proporcionar a especialização do profissional que atuará junto à administração pública.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Direito Administrativo: contextualização',
                    contents: [
                        'Formas de Estado e de Governo',
                        'Introdução ao Direito Administrativo',
                        'Organização da Administração Pública',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Administração pública',
                    contents: [
                        'Serviço público',
                        'Poderes administrativos',
                        'Atos administrativos',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Licitações e Contratos Administrativos',
                    contents: [
                        'Aspectos gerais da licitação',
                        'Modalidades das licitações',
                        'Contratos administrativos',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Responsabilidade Civil e Controle da Administração Pública',
                    contents: [
                        'Responsabilidade civil da Administração Pública',
                        'Controle da Administração Pública',
                        'Processo Administrativo',
                    ],
                },
            },
        },
        {
            id: 2,
            title: 'Direito Constitucional',
            objectives:
                'Especializar profissionais aptos a atuar no ramo de Direito Constitucional, permitindo ao aluno compreender o seu histórico de formação, bem como o manejo de ferramentas constitucionais adequadas a sua correta defesa.',
            targetPeoples:
                'Profissionais graduados em Direito que atuam ou pretendem atuar na área, magistrados, promotores de Justiça, defensores públicos, advogados privados e públicos em qualquer de suas esferas (municipal, estadual e federal), bacharéis e servidores públicos.',
            about: 'Na atualidade, o Direito Constitucional se apresenta como fruto de relevantes transformações, o que impõe um olhar crítico sobre seu processo formativo e seus desdobramentos na atualidade. Ao longo dos anos, mudaram-se não apenas os valores e conceitos da sociedade brasileira, mas também a forma e a intensidade que cercam a sua defesa. O campo de análise deste ramo do Direito indica que temos ainda um vasto campo em construção, de modo que o estudo do Direito Constitucional contemporâneo se apresenta como indispensável para a correta interpretação e compreensão das questões e embates constitucionais da modernidade.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - O Estado e a separação dos poderes',
                    contents: [
                        'O Estado',
                        'Organização dos Poderes I',
                        'Organização dos Poderes II',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - O Estado e suas relações com a Democracia, a Constituição e a Economia',
                    contents: [
                        'Estado e Democracia',
                        'Estado e Constituição',
                        'Estado e Economia',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - A Constituição e a proteção dos Direitos',
                    contents: [
                        'Estado e Economia',
                        'Hermenêutica e Diritos Fundamentais',
                        'Direitos Individuais, Sociais e da Nacionalidade',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Ações Constitucionais',
                    contents: [
                        'Garantias e Ações constitucionais',
                        'Ações Constitucionais I',
                        'Ações Constitucionais II',
                    ],
                },
            },
        },
        {
            id: 3,
            title: 'Direito Empresarial',
            objectives:
                'Especializar profissionais para que estejam preparados a prestar consultoria e assessoria jurídica para empresas de pequeno, médio e grande porte, entregando fundamentos teóricos e práticos suficientes para que o aluno esteja capacitado com habilidades especificas de gestão jurídica para empresas',
            targetPeoples:
                'Graduados em Direito e profissionais de áreas afins que desejem se capacitar, de forma teórica e prática, com a finalidade de prestar consultoria e assessoria jurídicas para empresas.',
            about: 'A atividade empresarial no Brasil é tema de muita relevância, uma vez que, no Brasil, estão ativas, atualmente, mais de 17 milhões de empresas, distribuídas entre diversas atividades econômicas. Considerando esse cenário, que revela excelentes oportunidades de negócios, é fundamental conhecer em profundidade a estrutura jurídica e os negócios jurídicos que podem ser realizados por meio dessas empresas. Dessa forma, este curso irá capacitar o aluno para atuar em diferentes frentes no âmbito da gestão jurídica empresarial, por meio do aprofundamento em temas modernos sobre Direito Empresarial. O conteúdo é composto de temas teóricos relacionados a habilidades específicas de gestão jurídica para empresas, atrelados a questões práticas, por meio de videoaulas, desafios, estudos de caso, exercícios entre outros recursos, possibilitando uma reflexão entre a teoria e a prática',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Teoria geral da empresa',
                    contents: [
                        'Fundamentos do direito empresarial',
                        'As espécies de sociedade empresarial',
                        'O empresário e a empresa',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Contratos empresariais',
                    contents: [
                        'Espécies de contrato e sua extinção',
                        'Cláusulas contratuais',
                        'Contratos internacionais',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Recuperação de empresas e falência',
                    contents: [
                        'A recuperação judicial e o direito dos credores',
                        'A continuidade da atividades da empresa em recuperação a falência',
                        'A mediação, conciliação e arbitragem',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Direito penal econômico',
                    contents: [
                        'Direito societario e globalização',
                        'Elementos de identificação da atividade empresarial',
                        'A liberdade econômica',
                    ],
                },
            },
        },
        {
            id: 4,
            title: 'Direito Processual Civil',
            objectives:
                'O curso de pós-graduação em Direito Processual Civil tem como objetivo a atualização, qualificação e aprimoramento dos alunos graduados para um melhor desempenho nas atividades profissionais e acadêmicas.',
            targetPeoples:
                'Graduados na área do Direito que desejem exercer atividade profissional voltada ao Direito Processual Civil, para profissionais que almejam o aprimoramento na atuação prática forense e para estudantes de cursos preparatórios para concursos que buscam o aprofundamento na área de Direito Processual Civil, indispensável para a realização de concorridos concursos públicos.',
            about: 'No curso de pós-graduação em Direito Processual Civil, serão apresentados os principais referenciais teóricos em uma abordagem comparativa às questões mais relevantes e controvertidas relacionadas ao processo e procedimento cível, fornecendo, para tanto, instrumentos hábeis e práticos para melhor aprendizagem.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Aspectos Iniciais do Direito Processual Civil',
                    contents: [
                        'Noções Gerais de Processo Civil',
                        'Normas, Jurisdição e Pressupostos Processuais',
                        'O Juiz, audiência e a tutela provisória',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Direito Processual Civil: Recursos',
                    contents: [
                        'Noções Gerais, apelação e Agravo de instrumento',
                        'Recursos em Processo Civil I',
                        'Recursos em Processo Civil II',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Execução no Processo Civil',
                    contents: [
                        'Título Executivo Judicial e Extrajudicial',
                        'Execução: da penhora à averbação',
                        'Execução e cumprimento provisório da sentença',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Processo Civil: Aspectos Práticos',
                    contents: [
                        'Prática de Processo Civil I',
                        'Prática de Processo Civil II',
                        'Prática de Processo Civil III',
                    ],
                },
            },
        },
        {
            id: 5,
            title: 'Direito Público',
            objectives:
                'Aprofundar os conhecimentos em Direito Público, em especial nas áreas de Direito Constitucional, Administrativo, Tributário e Ambiental. Disponibilizar uma visão mais holística dessas áreas do Direito em suas relações com outros segmentos como ecologia, reforma agrária, pobreza, finanças, ou seja, suas interfaces com matérias sensíveis à sociedade contemporânea.',
            targetPeoples:
                'O curso destina-se a bacharéis em Direito, administração, agentes públicos, bem como a todos aqueles que atuam direta ou indiretamente com a administração pública, como empregados de concessionárias, permissionárias e organizações sociais. Direciona-se, também, a pessoas que já atuam na área de Direito Administrativo, Constitucional e Tributário e pretendem aprofundar seus conhecimentos nessas áreas.',
            about: 'A sociedade, desde a Antiguidade, vive de maneira organizada. Uma das formas de organização do ser humano é em Estado, um ente abstrato que tem diversos compromissos. O Direito Público é o ramo do Direito que organiza, estrutura e limita, entre outras funções, o Estado, assim como a sua relação com a sociedade. Portanto, todos, de forma direta ou indireta, estão submetidos ao Estado. Neste curso, serão trabalhados diversos temas que tratam dessa relação sociedade/Estado, bem como serão abordadas temáticas sensíveis e contemporâneas, como as limitações ao Estado ao poder de tributar, o respeito deste aos direitos fundamentais, sua organização, o respeito ao meio ambiente. Para isso, o curso contará com uma plataforma diferenciada de aprendizagem, com podcasts, entrevistas, estudos de casos, infográficos, entre outros conteúdos, direcionados para uma compreensão mais facilitada da matéria.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Estrutura do Estado Democrático de Direito',
                    contents: [
                        'Direitos e Garantias Fundamentais I',
                        'Direitos e Garantias Fundamentais II',
                        'Organização do Estado',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Estrutura da Administração Pública e Contratações Públicas',
                    contents: [
                        'Organização dos Poderes',
                        'Organização da Administração Pública',
                        'Licitações e Contratos Administrativos',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Finanças Públicas, Tributação e Desenvolvimento',
                    contents: [
                        'Intervenção do Estado na Propriedade',
                        'Intervenção do Estado na Ordem Econômica',
                        'Direito Financeiro e Tributário',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Concretização de Direitos e Cidadania na Era Global',
                    contents: [
                        'Direitos Humanos na Ordem Jurídica Internacional',
                        'Desenvolvimento Sustentável',
                        'Efetividade de direitos',
                    ],
                },
            },
        },
        {
            id: 6,
            title: 'Direito Tributário',
            objectives:
                'Capacitar o profissional para a atuação na área do Direito Tributário.',
            targetPeoples:
                'Operadores do Direito, bacharéis em Direito, advogados, procuradores, defensores, promotores, juízes, auditores fiscais, delegados, professores, estudantes para concurso e quem desejar ter domínio sobre Direito Tributário.',
            about: 'O curso de pós-graduação em Direito Tributário contempla a teoria e a prática. Organizado em quatro eixos, o Direito Tributário é abordado de maneira a tornar o profissional apto para a atuação no mercado de trabalho dentro dessa área. A organização das disciplinas permite o desenvolvimento dos temas, possibilitando a correlação com toda a legislação necessária ao conhecimento da matéria. Neste curso, serão abordadas a legislação tributária nacional, as tendências, a atualidade da área de atuação e a execução fiscal como processo.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Introdução ao Direito Tributário',
                    contents: [
                        'Contexto da legislação tributária',
                        'Aspectos introdutórios do Direito Tributário',
                        'Noções históricas , fontes e integração.',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Sistema Tributário Nacional',
                    contents: [
                        'Autonomia e princípios de Direito Tributário',
                        'Aspectos relevantes do Sistema Tributário Nacional',
                        'Sistema Tributário: Limitações e aspectos constitucionais',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Competência, Fato gerador, Lançamento e Classificação da tributação',
                    contents: [
                        'Competência e Fato Gerador em materia tributária',
                        'Classificação dos Tributos I',
                        'Classficação dos Tributos II',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Tópicos Especiais em Direito Tributário',
                    contents: [
                        'Aspectos tributários na esfera Estadual',
                        'Fiscalização Tributária: Mecanismos, objetivos e procedimentos',
                        'Impostos, Execução Fiscal e questões atuais em Direito Tributário',
                    ],
                },
            },
        },
        {
            id: 7,
            title: 'Direito e processo penal',
            objectives:
                'Especializar profissionais da área de Direito, sociologia, psicologia e demais interessados em especializar seus estudos acerca do tratamento do fenômeno delitual pelo Estado, a partir do estudo do processo penal e criminologia, destacando as principais reflexões sobre os desafios existentes no contexto do sistema penal. Oferecer aportes teóricos e práticos para a atuação na área penal.',
            targetPeoples:
                'Graduados nos cursos de Direito, sociologia, psicologia, antropologia, filosofia, gestores públicos, professores e demais profissionais ligados ao sistema penal que busquem aprimorar os seus conhecimentos no campo dogmático e prático. O curso destina-se, em especial, aos profissionais que pretendem se aperfeiçoar ou ingressar na área penal.',
            about: 'Em linhas gerais, o processo penal trata das regras que servem de aplicação do Direito Penal Material para instrumentalizar a discussão entre as partes para se chegar à conclusão sobre a aplicabilidade da pena. Esse procedimento, no entanto, é melhor compreendido a partir da visão multidisciplinar dedicada à compreensão do próprio fenômeno delitual pela criminologia. A partir desse conhecimento, o profissional poderá discutir, de maneira aprofundada, os mecanismos procedimentais e ter uma visão robusta sobre os princípios que permeiam a norma procedimental. Na pós-graduação em Direito e Processo Penal, o conteúdo é apresentado com a profundidade teórica necessária ao nível de pós-graduação, aliado a experiências práticas aptas a proporcionar a especialização do profissional que atuará nas áreas ligadas ao Direito Penal, propondo reflexões sobre os principais desafios que requerem uma análise jurídica e criminológica de qualidade.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Diálogos entre o Direito e outras Ciências',
                    contents: [
                        'Sociologia jurídica I',
                        'Sociologia Jurídica II',
                        'Ética, antropologia e sociologia',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Filosofia Aplicada ao Direito: As relações entre o Homem e a Sociedade',
                    contents: [
                        'Filosofia do Direito',
                        'Filosofia do Direito II',
                        'O Homem, o Direito e a Sociedade',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Direito Processual Penal: Dos Princípios à Ação Penal ',
                    contents: [
                        'Fundamentos, Princípios e Aplicabilidade da Lei processual Penal',
                        'Aspectos relevantes do Inquérito Policial',
                        'Ação Processual Penal e Acordo de não Persecução Penal',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Causas e Efeitos da Criminalidade',
                    contents: [
                        'História da criminologia',
                        'Psicologia e criminalidade',
                        'Comportamento e violência',
                    ],
                },
            },
        },
        {
            id: 8,
            title: 'Direito contratual',
            objectives:
                'Especializar profissionais para que estejam preparados para prestar consultoria e assessoria jurídicas para pessoas físicas e empresas de pequeno, médio e grande porte, entregando fundamentos teóricos e práticos suficientes para que o aluno esteja capacitado com habilidades especificas de gestão contratual (elaboração, intepretação e parecer jurídico).',
            targetPeoples:
                'Graduados em Direito e profissionais de áreas afins que desejem capacitar-se, de forma teórica e prática, para prestar consultoria e assessoria jurídicas para empresas e pessoas físicas, especialmente de forma preventiva, orientando e assessorando diversos profissionais na intermediação de negociações',
            about: 'Antigamente, até poucas décadas, o Direito só era pensado como meio de resolver conflitos por meio da atuação do Poder Judiciário. Porém a judicialização dos conflitos mostrou-se ineficaz diante de um judiciário cada vez mais abarrotado de processos, os quais demoram anos para chegar a uma solução, e que nem sempre é a melhor ou a mais justa. Por outro lado, o Direito moderno está cada vez menos voltado para a judicialização dos conflitos entre as partes e cada vez mais inclinado para a conciliação ou mediação como formas de resolução de conflitos. Considerando esse cenário, que revela excelentes oportunidades de negócios, é fundamental conhecer em profundidade a estrutura jurídica dos contratos. Bons contratos podem oportunizar excelentes acordos extrajudiciais. Ademais, contratos bem elaborados podem evitar demandas jurídicas futuras. Este curso pretende capacitar o aluno a elaborar e interpretar diferentes espécies de contratos, por meio do aprofundamento em temas modernos sobre Direito Contratual. O conteúdo é composto de temas teóricos relacionados a habilidades específicas de gestão contratual, atrelados a questões práticas, por meio de videoaulas, desafios, estudos de caso, exercícios e outros recursos, possibilitando uma articulação entre teoria e prática.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Contratos: parte geral',
                    contents: [
                        'Teoria Geral dos Contratos',
                        'Teoria Geral dos Contratos: disposições comuns',
                        'Teoria Geral dos Contratos: especificidades',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Contratos em espécie',
                    contents: [
                        'Da compra e venda e da prestação de serviços',
                        'Do empréstimo, da doação e da troca ou permuta',
                        'Demais contratos em espécie',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Contratos especiais',
                    contents: [
                        'Contratos empresariais',
                        'Outras espécies de contratos',
                        'Contratos especiais na contemporaneidade',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - A responsabilidade civil contratual',
                    contents: [
                        'A relação entre contratos e responsabilidade civil',
                        'Descumprimento contratual',
                        'Obrigação de indenizar',
                    ],
                },
            },
        },
        {
            id: 9,
            title: 'Direito de família e sucessões',
            objectives:
                'Especializar profissionais para que estejam preparados para atuar nas causas de família e sucessões, tanto no consultivo, quanto no contencioso, quer seja na condição de advogado ou de representante do Estado, com o embasamento teórico e prático necessário para enfrentar as singularidades decorrentes das relações familiares.',
            targetPeoples:
                'Graduados em Direito e áreas afins que se interessem pelas searas familiarista e sucessória. O curso destina-se a advogados, agentes públicos das mais diversas áreas e àqueles que pretendam atuar em alguma atividade que envolva tais conhecimentos.',
            about: 'O Direito de Família e o Direito das Sucessões talvez componham o maior nicho de atuação para o exercício da advocacia. As causas que envolvem as relações familiares e o Direito Sucessório mantêm as varas especializadas nesses temas sempre lotadas de processos. Hoje se busca cada vez mais o entendimento consensual quando o assunto se refere a esses ramos. Além disso, o reconhecimento das diversas conformações familiares demanda do profissional que atua nessa área a atualização necessária para que esteja apto a atender, com sensibilidade e respeito, a todos aqueles que necessitem de auxílio. Portanto, as formas adequadas de resolução de conflitos familiares e as variadas conformações estatais são alguns dos assuntos que compõem esse curso.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Das famílias',
                    contents: [
                        'O regime jurídico do Direito das Famílias',
                        'Os novos arranjos familiares',
                        'Os filhos',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Das uniões e das dissoluções das relações',
                    contents: [
                        'Do regime de bens do casamento e da união estável',
                        'Fim do vínculo conjugal e suas consequências',
                        'A atuação judicial nas causas de família',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Da morte e da sucessão',
                    contents: [
                        'Sucessões: noções gerais',
                        'Da herança e dos legados',
                        'A herança sem dono e o testamento',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Da sucessão testamentária e do inventário',
                    contents: [
                        'Das disposições testamentárias',
                        'Das características da execução do testamento',
                        'Do inventário e da partilha de bens',
                    ],
                },
            },
        },
        {
            id: 10,
            title: 'Direito material e processual do trabalho',
            objectives:
                'Capacitar o profissional para a atuação na área do Direito Trabalhista Material e Processual.',
            targetPeoples:
                'Este curso destina-se aos operadores do Direito, aos bacharéis em Direito, advogados, procuradores, defensores, promotores, juízes, delegados, professores, estudantes para concurso e quem desejar ter domínio sobre esta área.',
            about: 'O curso de pós-graduação em Direito Material e Processual do Trabalho é uma especialização que contempla a teoria e a prática. Organizado em quatro eixos, o Direito Trabalhista é apresentado de acordo com a legislação de Direito Material e de Direito Processual. Assim, o profissional torna-se apto para a atuação no mercado de trabalho dentro dessa área. A organização das disciplinas permite o desenvolvimento dos temas, possibilitando a correlação com toda a legislação necessária ao conhecimento da matéria.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Direito do Trabalho e Processo do Trabalho: contextualização',
                    contents: [
                        'Dos princípios e fontes do Direito e do Processo do Trabalho',
                        'Dos sujeitos da relação de trabalho',
                        'Do contrato de trabalho',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Regulamentação do contrato de trabalho',
                    contents: [
                        'Das normas gerais de tutela do trabalho',
                        'Das normas especiais de tutela do trabalho',
                        'Tópicos especiais em Direito do Trabalho',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Direito coletivo do trabalho e previdência do trabalhador',
                    contents: [
                        'Dos sindicatos',
                        'Do direito coletivo do trabalho',
                        'Dos direitos previdenciários do trabalhador',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Processo do trabalho',
                    contents: [
                        'Da triangulação da relação processual trabalhista',
                        'Da instrução processual',
                        'Do encerramento do processo',
                    ],
                },
            },
        },
    ];

    
        return (
            <div className="choose_container">
                <div className="choose_courses">
                    <p className="choose_title">Cursos em Direito</p>
                    <p className="choose_title subtitle">
                        Pós Graduação | EAD
                    </p>
                    <div className="courses_grid">
                        {posgrad.map((item, i) => (
                            <Link href={`direito/details/${i}`} key={i}>
                                <div className="choose_course" key={i}>
                                    <div className="course_container">
                                        <Image
                                            alt="a"
                                            className="img_course"
                                            src={courseEx}
                                        ></Image>
                                        <div className="course_datas">
                                            <h1 className="course_title">
                                                {item.title}
                                            </h1>
                                            <h3 className="course_subtitle">
                                                Pós Graduação / Direito
                                            </h3>
    
                                            <h3
                                                className="course_subtitle"
                                                id="start_data"
                                            >
                                                Inicio das aulas em 01/08/2022
                                            </h3>
                                            <h3 className="course_price">
                                                18 x R$ 277,75
                                            </h3>
                                        </div>
                                    </div>
    
                                    <div className="more_btn">Saiba mais</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
   
}
