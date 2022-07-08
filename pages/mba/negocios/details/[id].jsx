import NavbarComp from '../../../components/navbar';
import SubNavbarComp from '../../../components/subnavbar';
import Contents_details from './content_details';
import Details from './details_1';
import Head from 'next/head';
import Cards from './details_cards';
import ContentMenus from './content_menus'
import Footer from '../../../components/homepage-content/footer';
import { useState } from 'react';

export const getStaticProps = async (context) => {
    const preid = await context.params.id;

    return {
        revalidate:10,
        props: { myId : preid }
    };
};

const Details_main = ( {myId}) => {

    const posgrad = [
        {
            id: 1,
            title: 'MBA em Gestão Empresarial',
            objectives:
                'Desenvolver as competências essenciais para que o gestor possa tomar as decisões mais assertivas em relação aos diversos níveis organizacionais, contribuindo não só com os objetivos da organização como também com os objetivos dos stakeholders de maneira ética e sustentável',
            targetPeoples:
                'O curso de especialização em gestão empresarial se destina a empresários, gestores e àqueles que desejam ingressar como gestores de diversas áreas organizacionais.',
            about: 'O curso de especialização em gestão empresarial é uma pós-graduação lato sensu que visa a desenvolver competências exigidas pelo mercado, integrando as estratégias à gestão, as práticas às melhorias da eficiência operacional, para engajar equipes e recursos em cenários de instabilidade e transformações, reconhecendo a importância da ética e da sustentabilidade em relação à gestão empresarial.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Estratégica',
                    contents: [
                        'Estratégia Organizacional',
                        'Liderança e Gestão de Equipes',
                        'Inovação',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Gestão Organizacional',
                    contents: [
                        'Gestão de Processo e Qualidade',
                        'Finanças Corporativas',
                        'Marketing e Vendas',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Gestão dos Soft Skills',
                    contents: [
                        'Aprendizagem Organizacional',
                        'Comunicação Organizacional',
                        'Gestão de Pessoas',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Gestão de Negócios',
                    contents: [
                        'Negociação e Tomada de Decisão',
                        'Sustentabilidade Organizacional',
                        'Logística e a Estratégia Empresarial',
                    ],
                },
            ]
        },
        {
            id: 2,
            title: 'MBA em Gestão Comercial de Produtos e Serviços de Instituições Financeiras',
            objectives:
                'Especializar profissionais para o desenvolvimento e a implementação de novos processos empresariais na área de gestão comercial de produtos e serviços de instituições financeiras, por meio de aplicações de técnicas quantitativas e qualitativas em sintonia com a realidade do mercado e com os atuais cenários competitivos.',
            targetPeoples:
                'Graduados com interesse em aprofundar seus conhecimentos na gestão comercial de produtos e serviços de instituições financeiras.',
            about: 'Considerando a transformação digital, bem como as mudanças comportamentais dos consumidores, tem-se a importância de os profissionais investirem na constante atualização de suas competências, com o objetivo de estarem aptos ao gerenciamento de produtos e serviços de forma assertiva. O reinventar desse profissional está interligado a sua capacidade de se adaptar ao novo contexto mercadológico, gerenciando produtos e serviços voltados às necessidades de seus clientes. Nesse sentido, o curso busca desenvolver essa visão sistêmica, com ferramentas que apoiam esse processo, maximizando os resultados.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Estratégica',
                    contents: [
                        'Estratégia Organizacional',
                        'Liderança e Gestão de Equipes',
                        'Inovação',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Mercado e Produto',
                    contents: [
                        'Pesquisa de Mercado e Inteligência Competitiva',
                        'Etapas do Design Thinking',
                        'Desenvolvimento de Produtos e Serviços',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Estratégias de Valor',
                    contents: [
                        'Definição do Posicionamento Estratégico',
                        'Valor como Estratégia Competitiva',
                        'Integração dos Canais ao Consumidor',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Gestão de Vendas',
                    contents: [
                        'Gestão Estratégica de Vendas',
                        'Negociação Empresarial e Técnicas de Vendas',
                        'Métrica e Análise de Resultados',
                    ],
                },
            ]
        },
        {
            id: 3,
            title: 'MBA em gestão financeira',
            objectives:
                'O curso de pós-graduação em gestão financeira visa a apresentar os principais conceitos, termos, legislações e aplicações necessárias para uma gestão eficiente e eficaz nas finanças de empresas de todos os tamanhos no Brasil. No curso, são apresentados aspectos legais, financeiros e contábeis essenciais para o desenvolvimento das competências requeridas aos profissionais da gestão financeira no país.',
            targetPeoples:
                'Profissionais que atuam de forma direta ou indireta no setor financeiro de empresas privadas, empresas públicas ou organizações do terceiro setor. O curso também é indicado para profissionais que atuam nos setores financeiro, contábil e de projetos em órgãos públicos.',
            about: 'As organizações estão buscando desenvolver suas vantagens competitivas, por isso é muito importante que todas as áreas da empresa possam colaborar nessa busca. A gestão financeira bem como todos os profissionais envolvidos na área devem procurar empregar os melhores conceitos, ferramentas e processos para proporcionar aos seus negócios uma gestão eficiente dos recursos financeiros. Ao longo deste curso, serão apresentadas importantes ferramentas de gestão que irão ajudar a atingir os melhores resultados financeiros em cada negócio. É importante destacar, ainda, que o curso de pós-graduação em gestão financeira, embasado em modernos processos e em uma teoria que já se encontra consolidada em todo o mundo, busca formar profissionais que estejam aptos a colaborar com as organizações em todos os seus processos internos e externos.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Estratégica',
                    contents: [
                        'Estratégia Organizacional',
                        'Liderança e Gestão de Equipes',
                        'Inovação',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Planejamento e Controle Financeiro',
                    contents: [
                        'Gestor e o Planejamento Financeiro',
                        'Gestão Financeira Operacional',
                        'Índices Financeiros de Resultado',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Gestão Contábil e Governança',
                    contents: [
                        'Contabilidade Empresarial e Governança',
                        'Auditoria',
                        'Gestão de Riscos Financeiros',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Mercado Financeiro',
                    contents: [
                        'Mercado de Capitais',
                        'Análise de Cenários Econômicos (nacional e internacional)',
                        'Avaliação de Empresa',
                    ],
                },
            ]
        },
        {
            id: 4,
            title: 'MBA em Gestão Estratégica em Compras',
            objectives:
                'O curso de pós-graduação em gestão financeira visa a apresentar os principais conceitos, termos, legislações e aplicações necessárias para uma gestão eficiente e eficaz nas finanças de empresas de todos os tamanhos no Brasil. No curso, são apresentados aspectos legais, financeiros e contábeis essenciais para o desenvolvimento das competências requeridas aos profissionais da gestão financeira no país.',
            targetPeoples:
                'Profissionais que atuam de forma direta ou indireta no setor financeiro de empresas privadas, empresas públicas ou organizações do terceiro setor. O curso também é indicado para profissionais que atuam nos setores financeiro, contábil e de projetos em órgãos públicos.',
            about: 'As organizações estão buscando desenvolver suas vantagens competitivas, por isso é muito importante que todas as áreas da empresa possam colaborar nessa busca. A gestão financeira bem como todos os profissionais envolvidos na área devem procurar empregar os melhores conceitos, ferramentas e processos para proporcionar aos seus negócios uma gestão eficiente dos recursos financeiros. Ao longo deste curso, serão apresentadas importantes ferramentas de gestão que irão ajudar a atingir os melhores resultados financeiros em cada negócio. É importante destacar, ainda, que o curso de pós-graduação em gestão financeira, embasado em modernos processos e em uma teoria que já se encontra consolidada em todo o mundo, busca formar profissionais que estejam aptos a colaborar com as organizações em todos os seus processos internos e externos.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Estratégica',
                    contents: [
                        'Estratégia Organizacional',
                        'Liderança e Gestão de Equipes',
                        'Inovação',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Gestão de Compras',
                    contents: [
                        'Fundamentos de Compras',
                        'Estratégias de Suprimento',
                        'Estratégias de Fornecimento',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Tópicos Especializados em Compras',
                    contents: [
                        'Compras no Setor Público',
                        'Aspectos logísticos voltados às Compras',
                        'Noções de Comércio Exterior',
                    ],
                },
                {
                    titleMod:
                        'MODULO 4 - Tecnologia, Sustentabilidade e Negociação em Compras',
                    contents: [
                        'Tecnologia em Compras',
                        'Compras e Sustentabilidade',
                        'Noções de Negociação',
                    ],
                },
            ]
        },
        {
            id: 5,
            title: 'MBA em Finanças Corporativas',
            objectives:
                'Capacitar o gestor financeiro para a tomada de decisões financeiras de curto e longo prazo, com o objetivo de aperfeiçoar os processos financeiros das organizações com a finalidade de manter e desenvolver a sua sustentabilidade financeira.',
            targetPeoples:
                'Profissionais da área financeira em atuação ou que busquem atuar nesta área.',
            about: 'Apresentar as funções fundamentais de gestão contábil, custos e análise de investimentos desenvolvidas nas organizações dentro de um contexto teórico/prático ao gestor financeiro. Capacitar os discentes na execução de suas atividades profissionais com ênfase no processo decisório empresarial.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Contábil',
                    contents: [
                        'Contabilidade Empresarial e Governança',
                        'Planejamento Financeiro e Orçamentário',
                        'Avaliação de Empresa',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Custos e Análise de Investimentos',
                    contents: [
                        'Apresentação da Análises de Investimentos',
                        'Métodos de Análise',
                        'Orçamento de Capital',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Gestão Financeira e de Investimentos',
                    contents: [
                        'Administração e Avaliação de Projetos',
                        'Análise de Cenários Econômicos (nacional e internacional)',
                        'Mercado de Capitais',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Análises avançadas de investimento',
                    contents: [
                        'Condições de risco e incerteza',
                        'Ajustes ao risco financeiro',
                        'Técnicas avançadas de análise financeira',
                    ],
                },
            ]
        },
        {
            id: 6,
            title: 'MBA em Controladoria e Finanças',
            objectives:
                'Formar gestores de finanças com visão abrangente das diversas áreas que compõem as organizações, aptos a interagir com os paradigmas que nortearão as transformações do novo milênio, em que competências e habilidades serão ferramentas para os processos gerenciais e estratégicos.',
            targetPeoples:
                'Graduados em administração, economia, ciências contábeis e áreas afins, que tenham interesse pelas atividades de finanças e controladoria. O curso se destina a profissionais que atuam em controladoria e finanças e/ou desejam aprofundar seus conhecimentos e obter qualificação em sintonia com as últimas tendências dessas áreas.',
            about: 'As atividades administrativas, mais especificamente controladoria e finanças, são de importância conhecida para as mais diversas áreas de atuação. Conhecer em profundidade os investimentos, os índices financeiros e a gestão contábil, como são feitos os controles e análises para a tomada de decisão, são alguns dos assuntos que compõem este curso. O conteúdo é apresentado com a profundidade teórica necessária ao nível de pós-graduação, aliado a experiências práticas aptas a proporcionar a especialização do profissional que vai atuar em controladoria e finanças.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Contábil',
                    contents: [
                        'Contabilidade Empresarial e Governança',
                        'Planejamento Financeiro e Orçamentário',
                        'Avaliação de Empresa',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Gestão Financeira e de Investimentos',
                    contents: [
                        'Administração e Avaliação de Projetos',
                        'Análise de Cenários Econômicos (nacional e internacional)',
                        'Mercado de Capitais',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Índices Financeiros',
                    contents: [
                        'Fundamentos Contábeis',
                        'Indicadores de Margem e Retorno financeiros',
                        'Indicadores de atividade financeira',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Custos e Análise de Investimentos',
                    contents: [
                        'Apresentação da Análises de Investimentos',
                        'Métodos de Análise',
                        'Orçamento de Capital',
                    ],
                },
            ]
        },
        {
            id: 7,
            title: 'MBA em Auditoria e Finanças',
            objectives:
                'Capacitar e agregar um conjunto de conceitos e instrumentos necessários para tomadas de decisões corporativas com base nas estratégias empresariais e seu relacionamento com o mercado',
            targetPeoples:
                'A todos os profissionais que estejam engajados na liderança ou que pretendem liderar equipes. Assim como profissionais de áreas de exatas e afins, pois o curso norteia estratégias para todos os gestores de diversas áreas na corporação.',
            about: 'Definir cadeia de valor e porque é importante para a formulação da estratégia da organização. Apresentar diferentes técnicas para avaliar as opções estratégicas. Apresentar diferentes técnicas para avaliar as opções estratégicas. Avaliar a influência de cada estilo de liderança no desempenho das pessoas numa organização. Analisar os resultados obtidos nos casos de inovação e empreendedorismo estudados. Identificar o papel da contabilidade na gestão empresarial. Aplicar as técnicas de qualidade nas informações das demonstrações contábeis. Avaliar riscos e incertezas a partir da simulação de cenários. Analisar a abrangência da combinação de negócios. Noções gerais sobre auditoria. Normas relativas à pessoa do auditor. Normas de execução do trabalho. Elaborar um planejamento de auditoria e um cronograma. Planejamento e supervisão. Programas de auditoria. Avaliação dos controles internos. Papéis de trabalho. Identificação das demonstrações contábeis e responsabilidade do auditor. Diferenciar os tipos de parecer de auditoria. Identificar como são feitos os testes e conhecer alguns tipos de fraudes comuns nas empresas. Adequação aos princípios contábeis. Sintetizar as etapas de um sistema de gestão de custos. Identificar os relatórios gerenciais usados na tomada de decisão. Projetar o lucro para determinado período. Analisar financeiramente as opções a fim de apontar a mais adequada para a aplicação dos recursos. Determinar o custo de capital da empresa.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão Estratégica',
                    contents: [
                        'Estratégia Organizacional',
                        'Liderança e Gestão de Equipes',
                        'Inovação',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Gestão de Contabilidade',
                    contents: [
                        'Introdução à Contabilidade',
                        'Contabilidade Intermediária',
                        'Contabilidade financeira',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Gestão de Auditoria',
                    contents: [
                        'Conceitos de Auditoria',
                        'Normas e Fundamentos de Auditoria',
                        'Auditoria das Demonstrações Contábeis',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Gestão Financeira',
                    contents: [
                        'Fundamentos de Finanças',
                        'Finanças Aplicadas',
                        'Finanças Corporativas',
                    ],
                },
            ]
        },
        {
            id: 9,
            title: 'MBA em marketing e varejo',
            objectives:
                'O objetivo geral do curso de MBA em marketing e varejo é o de capacitar o gestor para o desenvolvimento e a avaliação de planos de marketing para o varejo, destacando os contextos on-line e off-line, desenvolvendo competências que adicionem valor ao desempenho profissional, tanto da gestão estratégica do marketing como do gerenciamento da função de vendas para a entrega dos objetivos estratégicos do negócio.',
            targetPeoples:
                'Administradores, publicitários, contadores, economistas e demais profissionais de áreas afins que estejam interessados em aprofundar seus conhecimentos e desenvolver seus currículos nas áreas de gestão, negócios e ferramentas digitais, visando ao crescimento profissional no setor público e privado.',
            about: 'Com a transformação digital, a expansão dos multicanais eletrônicos e sua constante evolução, há a emergência de os profissionais do varejo se atualizarem sempre de forma a integrar, em suas competências, conhecimentos em estratégias para estabelecer conexões mais assertivas. O reinventar desse profissional está interligado a sua capacidade de se adaptar ao novo mindset, que trará competência para criação de novas experiências de marketing para seus usuários cada vez mais multiconectados e exigentes. Dessa forma, esse profissional irá assegurar que empresas e varejo possam otimizar uma transformação conjunta e colaborativa, utilizando inteligência e tecnologia de dados para gerar diferencial competitivo e inovar de forma consistente e sustentável.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Cenários do Varejo',
                    contents: [
                        'Mapeamento do Varejo',
                        'Estratégia e análise competitiva no varejo',
                        'Experiências de consumo dos novos consumidores',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Facilitadores tecnológicos em varejo',
                    contents: [
                        'Transformação digital',
                        'Modelos de processos e negócios baseados em dados',
                        'Mapeamento da jornada do consumidor e tendências',
                    ],
                },
                {
                    titleMod:
                        'MODULO 3 - Gestão de Marketing e Finanças no Varejo ',
                    contents: [
                        'Trade Marketing ',
                        'Gestão integrada de varejo 4.0',
                        'Aspectos e conceitos geradores de competitividade',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Inovação e Experiência ',
                    contents: [
                        'Metodologias ágeis',
                        'Design de Espaços  e interações',
                        'Skills para gestores em varejo',
                    ],
                },
            ]
        },
        {
            id: 10,
            title: 'MBA em comunicação corporativa',
            objectives:
                'Interpretar e avaliar as estratégias de gestão da comunicação corporativa, suas ferramentas e processos, para aplicá-las e avaliá-las em situações práticas.',
            targetPeoples:
                'O curso foi desenvolvido para todos os profissionais que atuam na comunicação social e na gestão organizacional e que desejam aprofundar seus conhecimentos, construir novas habilidades e estratégias nos campos da comunicação corporativa, e das estratégias de gestão interna e externa da imagem institucional.',
            about: 'O mundo contemporâneo ampliou as oportunidades de comunicação, atuação e negócios para as organizações. Com a visibilidade das redes digitais, a gestão da imagem institucional se tornou uma área fundamental em que circulam, simultaneamente, ações e estratégias diversas. Da inovação como valor à comunicação integrada da marca institucional, do marketing estratégico e de influência nas redes sociais à prevenção de crises de imagem e conflitos internos, essas são questões fundamentais para quem deseja aprofundar o conhecimento na área de gestão da comunicação corporativa. O MBA em comunicação corporativa tem por objetivo apresentar como a gestão da imagem institucional tem funcionado de modo integrado com as diversas áreas da organização, sua atuação e objetivos, planejamentos e estratégias, bem como referencial teórico e prático de suas atividades.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Gestão da Marca Institucional',
                    contents: [
                        'Identidade Corporativa e Gestão da marca Institucional',
                        'Inovação e Criação de Valor',
                        'Marca Institucional e as Redes Digitais',
                    ],
                },
                {
                    titleMod:
                        'MODULO 2 - Comunicação Integrada da Marca Institucional',
                    contents: [
                        'Comunicação Integrada e Imagem da Organização',
                        'Planejamento de Comunicação Integrada',
                        'RP, AI e PP na Comunicação Integrada',
                    ],
                },
                {
                    titleMod:
                        'MODULO 3 - Comunicação Mercadológica da Marca Institucional',
                    contents: [
                        'Comunicação Integrada de Marketing',
                        'Marketing Estratégico',
                        'Marketing de Influência',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Defesa da Marca Institucional',
                    contents: [
                        'Comunicação Interna e a identidade institucional',
                        'Gestão de Crises de Imagem e Reputação',
                        'A Defesa da Marca On e Off-line',
                    ],
                },
            ]
        },
        {
            id: 11,
            title: 'MBA em Engenharia de Produção',
            objectives:
                'Qualificar o aluno com uma sólida formação profissional, capacitando-o a identificar, analisar e solucionar problemas ligados às atividades de sistemas produtivos, considerando os aspectos humanos, econômicos, sociais e ambientais.',
            targetPeoples:
                'Engenheiros e graduados nas áreas de administração e cursos correlatos. Profissionais de indústria e logística que buscam aperfeiçoar seus conhecimentos em engenharia de produção e gestão das operações de produção e serviços.',
            about: 'O curso tem como objetivo qualificar os profissionais da área de engenharia, gestão e áreas afins para atuação especializada em engenharia de produção. O curso forma profissionais preparados para a realização de análises de processos produtivos, identificando perdas e improdutividades diversas, desenvolvendo métodos estruturados para eliminação de problemas e para maximização da produtividade dos sistemas e da riqueza das organizações, por meio de intervenções nas áreas de operações de produção e serviços.',
            modules: [
                {
                    titleMod: 'MODULO 1 - Fundamentos da Engenharia de Produção',
                    contents: [
                        'A Engenharia de Produção',
                        'Administração da Produção',
                        'Planejamento, Programação e Controle da Produção',
                    ],
                },
                {
                    titleMod: 'MODULO 2 - Gestão da Produção e Operações',
                    contents: [
                        'Ewngenharia Econômica',
                        'Gestão de Custos',
                        'Processo Geral de Solução de Problemas',
                    ],
                },
                {
                    titleMod: 'MODULO 3 - Aplicações da Qualidade',
                    contents: [
                        'Fundamentos da Qualidade',
                        'Controle Estatístico de Processos I',
                        'Controle Estatístico de Processos II',
                    ],
                },
                {
                    titleMod: 'MODULO 4 - Gestão Avançada da Produção',
                    contents: [
                        'Aumento da produtividade',
                        'O ser humano e o ambiente de trabalho',
                        'Otimização e Logística',
                    ],
                },
            ]
        },
    ];

    return (
        <>
            <NavbarComp></NavbarComp>
            <SubNavbarComp></SubNavbarComp>
            <Details title={posgrad[myId]?.title}></Details>
            <Cards></Cards>
            <ContentMenus about={posgrad[myId]?.about} objectives={posgrad[myId]?.objectives} targetPeoples={posgrad[myId]?.targetPeoples}></ContentMenus>
            <Contents_details modules={posgrad[myId]?.modules}></Contents_details>
            <Head>
                <title>
                {posgrad[myId]?.title} | Pós Graduação EAD{' '}
                </title>
                <meta name="description" content="Fiesa" />
                <link rel="icon" href="/favicon_fiesa.png" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                ></link>
            </Head>
            <Footer></Footer>
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}


export default Details_main;
