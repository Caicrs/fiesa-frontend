import courseEx from '../../assets/balance.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ChooseCategory() {
    const posgrad = [
        {
            id: 1,
            title: 'ciência de dados e big data analytics',
            objectives:
                'Especializar profissionais para serem capazes de realizar análise de negócios e big data, buscando o desenvolvimento e gerenciamento de projetos que analisem enormes quantidades de dados, de modo a enfrentar a grande competitividade nos negócios.',
            targetPeoples:
                'Graduados em tecnologia da informação e nas mais diversas áreas, que desejem adquirir ou aprofundar seus conhecimentos sobre modelagem de dados, tecnologia e tomada de decisões estratégicas a partir da ciência de dados e big data analytics.',
            about: 'Com o constante avanço tecnológico, são cada vez maiores os volumes de dados gerados diariamente. Dessa forma, ciência de dados e big data analytics aproveitam o poder desses dados para novos insights, sendo de grande importância para obter vantagem competitiva nos negócios. Portanto, este curso inclui uma variedade de atividades, métodos, processos e ferramentas que um cientista de dados deve conhecer. Ou seja, com o curso de pós-graduação em ciência de dados e big data analytics, os novos profissionais da área conquistam competências e habilidades para entendimento de estratégias e necessidades do negócio, sendo capazes de desenvolver e gerenciar soluções para analisar grandes volumes de dados.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Tópicos especiais em inteligência de negócios',
                    contents: [
                        'Fundamentos da Segurança do Trabalho',
                        'O trabalho e os riscos',
                        'Preocupações com a saúde do trabalhador',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Fundamentos em inteligência de negócios',
                    contents: [
                        'Riscos no ambiente de trabalho',
                        'Gerenciamento de riscos',
                        'Proteção do meio ambiente',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Projeto de soluções em data warehouse',
                    contents: [
                        'Legislação relacionada à segurança do trabalho',
                        'Deveres e responsabilidades',
                        'Melhoria contínua da segurança',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Inteligência de marketing',
                    contents: [
                        'Fundamentos da Ergonomia',
                        'Análise ergonômica',
                        'O ambiente e o ser humano',
                    ],
                },
            },
        },
        {
            id: 2,
            title: 'Engenharia de Redes de Computadores',
            objectives:
                'Transmitir aos alunos e aos demais interessados na área de computação, negócios, gestão da informação, engenharias, dentre outras afins, conhecimentos acerca de sistemas de informação, gerenciamento de dados, redes de computadores, enfatizando projetos e gerenciamento de sistemas de redes de computadores, de forma que sejam compreendidas as etapas de requisitos, configurações, segurança, auditoria, seleção de serviços e dispositivos, armazenamento, comunicação de dados, além de especializar profissionais das áreas citadas para elaboração, planejamento, construção e gerenciamento de projetos e engenharias de redes de computadores.',
            targetPeoples:
                'Graduados em cursos de informática, engenharias, gestão, administração, que tenham interesse em obter uma especialização em redes e infraestrutura de redes, bem como o desenvolvimento de projetos e protocolos para melhorias de comunicação de dados para a atuar na gestão sociogovernamental, com o intuito de elaborar, implementar e gerenciar projetos e processos de redes de computadores, além de exercer assessoria e consultoria para tecnologia da informação e comunicação.',
            about: 'O curso de engenharia de redes de computadores enfatiza o projeto, a instalação e o suporte da rede de área local (LAN), da rede de longa distância (WAN), do segmento de rede, da internet ou do sistema de intranet de uma organização. Os alunos do programa estarão preparados para fornecer suporte administrativo diário no local para uma variedade de ambientes de trabalho, incluindo escritórios profissionais, pequenas empresas, escolas, agências governamentais e grandes corporações. Nesse avanço tecnológico cada vez mais rápido e complexo no que diz respeito à variedade de sistemas e dispositivos físicos, a consolidação de dados e a aplicação de uma inteligência de negócios permitem que diversas organizações armazenem padrões e informações preciosas de outras organizações e potenciais cliente. Dessa forma, o curso de engenharia de redes de computadores prevê um estudo mais focado no gerenciamento de projeto, na gestão de serviços de tecnologia da informação (TI) e redes de computadores, na otimização, na comunicação e na segurança de dados, contribuindo para uma análise fundamentada de tecnologias e serviços voltados à personalização de usuários comuns e empresariais, ao armazenamento, à obtenção e ao tratamento de conteúdo em nuvem.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Redes e Tecnologias para a Distribuição da Informação',
                    contents: [
                        'Fundamentos de Redes de Telecomunicações',
                        'Redes de Computadores e Redes de Banda Larga',
                        'Tecnologia e Infraestrutura de Telecomunicações',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Internet das Coisas (IoT)',
                    contents: [
                        'Conceitos Básicos de IoT',
                        'Tecnologias e Dispositivos para IoT na Prática',
                        'Segurança da Informação na IoT',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Tópicos Especiais em Sistemas de Informação',
                    contents: [
                        'Ethical Hacker e CyberWar',
                        'Computação em Nuvem',
                        'Big Data e IoT',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Princípios de Gestão em Tecnologia da Informação',
                    contents: [
                        'Governança de Tecnologia da Informação',
                        'Gestão da Informação e do Conhecimento',
                        'Gestão de Projetos',
                    ],
                },
            },
        },
        {
            id: 3,
            title: 'Gestão de Custos e Formação de Preços',
            objectives:
                'Especializar profissionais que atuem ou desejem atuar nos segmentos do comércio, serviço ou indústria, desenvolvendo competências e habilidades que possibilitem a esse profissional analisar e gerenciar estratégias de administração de marketing, a fim de compreender o ambiente em que as organizações estão inseridas, com foco no mapeamento de custos e na formação do preço de venda.',
            targetPeoples:
                'Este curso destina-se a empreendedores das mais diversas áreas, que desejam atuar em empresas nos segmentos do comércio, serviço ou indústria, que operam nos processos de decisão empresarial, análise e definição de custos e investimentos e na definição de planos e estratégias de marketing.',
            about: 'Esta especialização aborda as principais estratégias de venda e marketing, salientando desde as principais técnicas de negociação, administração de conflitos e análise de tendências de vendas até o planejamento em marketing. O curso contempla, ainda, elementos como gerenciamento de custos, pesquisa de mercado e inteligência competitiva, destacando os principais métodos de custeio e como os gastos de uma empresa devem ser organizados de forma estratégica nas decisões de investimento e na formação do preço de venda.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Gestão de vendas e formação de preços',
                    contents: [
                        'Gestão Estratégica de Vendas',
                        'Negociação Empresarial e Técnicas de Vendas',
                        'Formação de preços',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Marketing para formação de preços',
                    contents: [
                        'Marketing e Vendas',
                        'Pesquisa de Mercado e Inteligência Competitiva',
                        'Comportamento do consumidor',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Gestão de custos',
                    contents: [
                        'Fundamentos da Gestão de custos',
                        'Análise de custo',
                        'Métodos de custeio',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Análise de custos e investimentos',
                    contents: [
                        'Custos para decisão e margem de segurança',
                        'Decisões baseadas em custos',
                        'Apresentação da Análises de Investimentos',
                    ],
                },
            },
        },
        {
            id: 4,
            title: 'Administração hospitalar',
            objectives:
                'Especializar profissionais das mais diversas áreas na gestão eficiente de hospitais públicos ou privados, de pequeno, médio ou grande porte, com foco na lucratividade, sem a perda da qualidade dos serviços e da segurança do paciente.',
            targetPeoples:
                'Graduados em qualquer área de formação, em especial nas áreas de saúde, Direito e administração, que tenham como objetivo se tornar destaque na ampla área de administração hospitalar.',
            about: 'Nos últimos anos, independente das oscilações do mercado, um dos segmentos que mais cresceu foi o da saúde. Nesse contexto, a lucratividade associada à responsabilidade social permite que empresas ligadas à saúde, em especial hospitais, despontem como empresas lucrativas no mercado. O curso de pós-graduação em administração hospitalar assegura ao egresso conhecimentos para lidar com um mercado competitivo e lucrativo em tempos em que o diferencial é ser o melhor no que se propõe.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Gestão Estratégica',
                    contents: [
                        'Estratégia Organizacional',
                        'Liderança e Gestão de Equipes',
                        'Gestão por Processo e Qualidade',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Gestão Organizacional',
                    contents: [
                        'Gestão Organizacional',
                        'Finanças Corporativas',
                        'Marketing e Vendas',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Gestão de Estoque e Custos em Hospitais',
                    contents: [
                        'Gestão de Pessoas em Ambiente Hospitalar',
                        'Gestão de Eficiente de Estoque e Compras em Estabelecimentos de Saúde',
                        'Gestão de custos, Lucratividade e Crescimento Empresarial',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Arquitetura, Hotelaria e Auditoria em Gestão Hospitalar ',
                    contents: [
                        'Arquitetura e Segurança no Ambiente Hospitalar',
                        'Implantação e Gestão da Hotelaria Hospitalar com foco no paciente',
                        'Procedimentos de Auditoria Administrativa',
                    ],
                },
            },
        },
        {
            id: 5,
            title: 'gestão financeira e orçamentária em organizações públicas',
            objectives:
                'O curso de pós-graduação em gestão financeira e orçamentária em organizações públicas visa a apresentar os principais conceitos, termos e legislações, além das principais aplicações necessárias para uma gestão eficiente e eficaz nas finanças públicas nacionais.',
            targetPeoples:
                'Profissionais que atuam de forma direta ou indireta em organizações públicas ou que prestem algum tipo de serviço para esses órgãos. Este curso também é indicado para todos os profissionais que atuam nos setores financeiros, contábeis e de projetos dos órgãos públicos.',
            about: 'Ao considerarmos que a sociedade é beneficiária dos serviços executados pelo setor público e de que esse setor é detentor do capital que está sendo utilizado para essa finalidade, temos que a principal forma encontrada pela sociedade para efetuar o devido controle de como estão sendo investidos os valores recolhidos pelo governo na forma de impostos, taxas e tributos ocorre por meio das demonstrações contábeis e financeiras. Em nossa pós-graduação o aluno conhecerá todos os aspectos necessários aos profissionais que atuem direta ou indiretamente junto a essas organizações devem buscar compreender como funciona a gestão financeira e orçamentária que é utilizada nas organizações públicas. Assegurar que os profissionais que estiverem atuando nas organizações públicas compreendam os conceitos utilizados por gestores, contadores, políticos e de mais profissionais garantam todas as possibilidades existentes que a gestão pública oferece.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Gestão pública e suas características',
                    contents: [
                        'Administração Pública Direta e Indireta',
                        'A Administração Pública na Contemporaneidade',
                        'Introdução a Ação de Planejar do Ente Público',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Orçamento nas entidades públicas',
                    contents: [
                        'Planejamento e Orçamento Público',
                        'Instrumento de Planejamento e Orçamento Público',
                        'Introdução ao Controle Público',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Finanças públicas',
                    contents: [
                        'Introdução às finanças públicas',
                        'Crimes nas finanças públicas',
                        'Compras e contratações governamentais',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Auditoria e fiscalização das finanças públicas',
                    contents: [
                        'Auditoria Governamental e suas características',
                        'Controladoria aplicada as finanças públicas',
                        'Leis e normas aplicadas a auditoria e controladorias nas finanças públicas',
                    ],
                },
            },
        },
        {
            id: 6,
            title: 'Sustentabilidade Empresarial',
            objectives:
                'Especializar profissionais para exercer ações voltadas para sustentabilidade, meio ambiente e gestão, desenvolvendo as competências necessárias para atuação em diversas áreas e segmentos que envolvam direta ou indiretamente a sustentabilidade empresarial.',
            targetPeoples:
                'O curso de especialização lato sensu em sustentabilidade empresarial se destina a empresários, gestores, consultores, servidores públicos e àqueles que desejam buscar competências para atuar como agentes transformadores relacionados à sustentabilidade nas organizações.',
            about: 'O curso de pós-graduação em sustentabilidade empresarial visa a preparar profissionais para atuação no mercado diante das tendências atuais corporativas, que prestigiam práticas sustentáveis e de responsabilidade socioambiental. O curso permeia áreas transversais e multidisciplinares, que resgatam fundamentos do trato ambiental e seu aparato legal, proporcionando uma discussão de métodos em prol do desenvolvimento sustentável, além de enaltecer práticas empreendedoras socioambientais. O curso ainda conta com uma estrutura moderna, voltada para aspectos mercadológicos e operacionais das organizações, visando à inovação, à otimização de processos e à perenidade organizacional.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Tópicos Introdutórios de Sustentabilidade e Meio Ambiente',
                    contents: [
                        'Educação e Meio Ambiente',
                        'Contemporaneidade Ambiental',
                        'Desenvolvimento Sustentável',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Aspectos da Gestão e Sustentabilidade Empresarial',
                    contents: [
                        'Sistema de Gestão Ambiental (SGA)',
                        'Logística Ambiental',
                        'Finanças e Sustentabilidade',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Tópicos Especializados em Legislação e Gestão Socioambiental',
                    contents: [
                        'Aspectos de Legislação Ambiental',
                        'Gestão Socioambiental Estratégica',
                        'Análise da Sustentabilidade Empresarial',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Empreendedorismo, Inovação e Sustentabilidade Empresarial',
                    contents: [
                        'Empreendedorismo e Competitividade Organizacional',
                        'Inovação e Sustentabilidade',
                        'Responsabilidade Socioambiental e Ética',
                    ],
                },
            },
        },
        {
            id: 7,
            title: 'Sustentabilidade Empresarial',
            objectives:
                'Especializar profissionais para exercer ações voltadas para sustentabilidade, meio ambiente e gestão, desenvolvendo as competências necessárias para atuação em diversas áreas e segmentos que envolvam direta ou indiretamente a sustentabilidade empresarial.',
            targetPeoples:
                'O curso de especialização lato sensu em sustentabilidade empresarial se destina a empresários, gestores, consultores, servidores públicos e àqueles que desejam buscar competências para atuar como agentes transformadores relacionados à sustentabilidade nas organizações.',
            about: 'O curso de pós-graduação em sustentabilidade empresarial visa a preparar profissionais para atuação no mercado diante das tendências atuais corporativas, que prestigiam práticas sustentáveis e de responsabilidade socioambiental. O curso permeia áreas transversais e multidisciplinares, que resgatam fundamentos do trato ambiental e seu aparato legal, proporcionando uma discussão de métodos em prol do desenvolvimento sustentável, além de enaltecer práticas empreendedoras socioambientais. O curso ainda conta com uma estrutura moderna, voltada para aspectos mercadológicos e operacionais das organizações, visando à inovação, à otimização de processos e à perenidade organizacional.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Tópicos Introdutórios de Sustentabilidade e Meio Ambiente',
                    contents: [
                        'Educação e Meio Ambiente',
                        'Contemporaneidade Ambiental',
                        'Desenvolvimento Sustentável',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Aspectos da Gestão e Sustentabilidade Empresarial',
                    contents: [
                        'Sistema de Gestão Ambiental (SGA)',
                        'Logística Ambiental',
                        'Finanças e Sustentabilidade',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Tópicos Especializados em Legislação e Gestão Socioambiental',
                    contents: [
                        'Aspectos de Legislação Ambiental',
                        'Gestão Socioambiental Estratégica',
                        'Análise da Sustentabilidade Empresarial',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Empreendedorismo, Inovação e Sustentabilidade Empresarial',
                    contents: [
                        'Empreendedorismo e Competitividade Organizacional',
                        'Inovação e Sustentabilidade',
                        'Responsabilidade Socioambiental e Ética',
                    ],
                },
            },
        },
        {
            id: 8,
            title: 'Auditoria, Compliance e Gestão de Riscos',
            objectives:
                'Fornecer o conhecimento teórico e prático que habilite o participante a atuar nas áreas relacionadas à gestão de riscos, compliance, controles internos e auditoria, seja na atuação direta ou nas áreas de suporte.',
            targetPeoples:
                'O curso é destinado a contadores, administradores, advogados e profissionais das áreas de auditoria e controles internos, em todos os níveis de uma companhia. Outros profissionais, como os que atuam no mercado financeiro, relações com investidores e consultoria empresarial, também receberão aportes importantes deste curso',
            about: 'O contexto das corporações tem passado por um momento único. Nos últimos anos, em nível mundial, diversas iniciativas foram empreendidas para que as organizações aprimorassem as suas práticas de compliance e gestão de risco, haja vista os inúmeros casos de fraude e corrupção frequentes na mídia. O programa traz a contabilidade com uma abordagem estratégica. O curso de pós-graduação em auditoria, compliance e gestão de riscos é estruturado em quatro eixos – gestão contábil (eixo 1), gestão de riscos (eixo 2), auditoria (eixo 3) e controles internos e governança (Eixo 4) –, que proporcionarão uma bagagem sólida acerca dos temas mais “quentes” da contabilidade no momento.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Gestão Contábil',
                    contents: [
                        'Contabilidade Empresarial e Governança',
                        'Planejamento Financeiro e Orçamentário',
                        'Avaliação de Empresa',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Gestão de Riscos',
                    contents: [
                        'Custo de Capital',
                        'Avaliação de investimentos',
                        'Gerenciamento de Riscos',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Auditoria',
                    contents: [
                        'Introdução a Auditoria',
                        'Perspectivas de Trabalhos de Auditoria',
                        'Procedimentos de Auditoria',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Controles Internos e Governança',
                    contents: [
                        'Controles Internos',
                        'Governança Corporativa',
                        'Compliance',
                    ],
                },
            },
        },
        {
            id: 9,
            title: 'engenharia de software com métodos ágeis',
            objectives:
                'Especializar profissionais para que estejam preparados para atuar no desenvolvimento de software com métodos ágeis, com o embasamento teórico e prático necessário.',
            targetPeoples:
                'Graduados em análise e desenvolvimento de sistemas e áreas afins que busquem ampliar seus conhecimentos na área de engenharia de software aliados às metodologias reconhecidas como métodos ágeis. O curso destina-se a analistas de sistemas, desenvolvedores e àqueles que pretendam ingressar em alguma dessas atividades.',
            about: 'O desenvolvimento de sistemas computacionais é tema de importância reconhecida para as mais diversas áreas de aplicação. O que são metodologias ágeis e como aplicá-las no contexto da engenharia de software são alguns dos assuntos que compõem este curso. O conteúdo é apresentado com a profundidade teórica necessária ao nível de pós-graduação, aliado a experiências práticas aptas a proporcionar a especialização do profissional que utilizará essas tecnologias para atender rapidamente às mudanças nos requisitos de negócios das organizações.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Engenharia de software',
                    contents: [
                        'Fundamentos de Engenharia de Software',
                        'Requisitos de software',
                        'Gerenciamento de projeto de software',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Metodologias tradicionais e ágeis',
                    contents: [
                        'Metodologias tradicionais',
                        'Metodologias ágeis',
                        'Projetos ágeis com XP, TDD e DevOps',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Aplicação de metodologias ágeis no desenvolvimento de software',
                    contents: [
                        'Práticas de desenvolvimento ágil I',
                        'Práticas de desenvolvimento ágil II',
                        'Tópicos avançados em metodologias ágeis',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Projetos ágeis com Scrum',
                    contents: [
                        'Introdução a Scrum',
                        'Scrum e engenharia de requisitos',
                        'Scrum: planejamento e gerenciamento',
                    ],
                },
            },
        },
    ];
    return (
        <div className="choose_container">
            <div className="choose_courses">
                <p className="choose_title">Cursos em Tecnologia</p>
                <p className="choose_title subtitle">
                    Pós Graduação | EAD
                </p>
                <div className="courses_grid">
                    {posgrad.map((item, i) => (
                        <Link href={`tecnologia/details/${i}`} key={i}>
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
