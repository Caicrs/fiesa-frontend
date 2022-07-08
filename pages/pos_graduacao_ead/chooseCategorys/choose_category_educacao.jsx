import courseEx from '../../assets/balance.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ChooseCategory() {

    const posgrad = [
        {
            id: 1,
            title: 'Psicopedagogia',
            objectives:
                'Especializar profissionais da área da educação e demais interessados em aprimorar seus estudos acerca da psicopedagogia, destacando as principais reflexões sobre os desafios de aprendizagem existentes no contexto educacional, por meio de aportes teóricos e práticos que abordam a identificação, o tratamento e a prevenção de dificuldades e transtornos de aprendizagem.',
            targetPeoples:
                'Graduados em cursos de licenciatura, professores das redes de ensino público e privado, bem como demais profissionais interessados em aprimorar os seus conhecimentos no campo educacional. O curso destina-se, em especial, aos interessados que pretendem se aperfeiçoar ou ingressar na área da psicopedagogia.',
            about: 'A relação existente entre a aprendizagem e a mente humana é alvo de estudo da psicopedagogia, que busca compreender as dificuldades de aprendizagem e auxilia nos processos de assimilação do conhecimento. A psicopedagogia pode ser compreendida como a junção da psicologia com a pedagogia. Utiliza técnicas clínicas, bem como o conhecimento da cognição humana. O profissional psicopedagogo atua na identificação, no tratamento e na prevenção de dificuldades e transtornos de aprendizagem.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Fundamentos da Aprendizagem',
                    contents: [
                        'Teorias de Desenvolvimento e Aprendizagem',
                        'Aprendizagem: Outras Perspectivas',
                        'Aprendizagem em Diferentes Abordagens',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Os problemas de Aprendizagem na Perspectiva Psicopedagógica',
                    contents: [
                        'Processos Cognitivos',
                        'O Olhar Psicopedagógico sobre os Transtornos Globais do Desenvolvimento',
                        'Problemas na Aprendizagem',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Processos Psicopedagógicos Institucionais',
                    contents: [
                        'Altas Habilidades e Superdotação',
                        'Pesquisa e Intervenção Psicopedagógica',
                        'Psicopedagogia Institucional',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - A Psicopedagogia Clínica em Estudos Transdisciplinares',
                    contents: [
                        'Psicopedagogia Clínica',
                        'Diálogo Transdisciplinar na Psicopedagogia',
                        'O Lúdico no Atendimento Psicopedagógico',
                    ],
                },
            },
        },
        {
            id: 2,
            title: 'educação infantil',
            objectives:
                'Especializar profissionais para a docência na educação infantil, por meio de uma formação reflexiva e crítica sobre a infância na contemporaneidade, tendo como destaque o aprofundamento dos estudos sobre a aprendizagem e o desenvolvimento integral de crianças de 0 a 5 anos de idade.',
            targetPeoples:
                'Graduados em pedagogia e áreas afins que se interessam pelos estudos acerca da infância. O curso se destina também a professores da educação infantil e dos anos iniciais do ensino fundamental, bem como aos demais interessados que possuam o desejo de qualificar a sua prática pedagógica na docência de crianças de 0 a 5 anos de idade.',
            about: 'A educação infantil, primeira etapa da educação básica, se constitui a partir do binômio inseparável cuidar-educar, provendo o desenvolvimento integral de crianças de 0 a 5 anos de idade, fazendo uso de práticas pedagógicas que promovam a garantia dos direitos fundamentais da infância. O conteúdo do curso é apresentado com a profundidade teórica necessária para o nível de pós-graduação, aliado a experiências práticas aptas a proporcionar a especialização do profissional que atuará junto à educação infantil, primeira etapa da educação básica.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Desenvolvimento e aprendizagem',
                    contents: [
                        'A infância e o desenvolvimento biopsicossocial',
                        'Teorias da aprendizagem',
                        'Infância e ludicidade',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - O currículo da infância',
                    contents: [
                        'A BNCC e a formação do currículo da infância',
                        'A brincadeira e o desenvolvimento infantil',
                        'Infância e a educação inclusiva',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - A infância e suas linguagens',
                    contents: [
                        'A linguagem oral e escrita na infância',
                        'A linguagem corporal e artística das crianças',
                        'A linguagem matemática na infância',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Práticas pedagógicas na educação para a infância',
                    contents: [
                        'Práticas pedagógicas na educação infantil e no ensino fundamental',
                        'Avaliação na educação de 0 a 10 anos',
                        'A continuidade da educação infantil para o ensino fundamental',
                    ],
                },
            },
        },
        {
            id: 3,
            title: 'gestão escolar',
            objectives:
                'Especializar profissionais da área da educação e demais interessados em aprimorar seus estudos acerca da gestão escolar, destacando as principais reflexões sobre os desafios existentes no contexto educacional. Oferecer aportes teóricos e práticos para a organização do trabalho pedagógico e administrativo na escola.',
            targetPeoples:
                'Graduados em cursos de licenciatura, professores e demais profissionais das redes de ensino público e privado que tenham interesse em aprimorar os seus conhecimentos no campo educacional. O curso destina-se em especial aos profissionais que pretendem se aperfeiçoar ou ingressar na área da gestão escolar.',
            about: 'O cotidiano escolar é repleto de situações que desafiam diariamente os profissionais que atuam como gestores. Por isso, torna-se de fundamental importância o aprimoramento dos conhecimentos sobre a organização de um trabalho pedagógico que aborde especificamente questões pertinentes à gestão escolar, dispondo de subsídios para a resolução de situações administrativas e pedagógicas que se apresentam cotidianamente nas instituições escolares. Na pós-graduação em gestão escolar, o conteúdo é apresentado com a profundidade teórica necessária ao nível de pós-graduação, aliado a experiências práticas aptas a proporcionar a especialização do profissional que atuará na área de educação, propondo reflexões sobre os principais desafios escolares que requerem uma intervenção educativa de qualidade.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Fundamentos da Gestão Educacional',
                    contents: [
                        'O Fundamentos para a Atuação do Gestor',
                        'As Políticas Públicas na Gestão Educacional',
                        'A Gestão dos Sistemas Educacionais Contemporâneos',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Gestão de Pessoas e Processos Escolares',
                    contents: [
                        'Gestão Escolar',
                        'A Organização: Práticas da Gestão Escolar',
                        'Relações Humanas no Espaço Escolar e a Atuação Gestora',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Gestão dos Processos Escolares',
                    contents: [
                        'Gestão do Ensino e Aprendizagem e a Formação na Escola',
                        'Gestão de Resultados: Políticas e Práticas de Avaliação e Monitoramento',
                        'Avaliação e Qualidade na Educação Básica',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Gestão do Currículo e de Pessoas',
                    contents: [
                        'Aprendizagem em Diferentes Abordagens',
                        'Plano de Gestão Escolar',
                        'Supervisão de Currículo',
                    ],
                },
            },
        },
        {
            id: 4,
            title: 'tecnologias e educação a distância',
            objectives:
                'Construir conhecimentos que ampliem a visão pedagógica, com fundamentação teórico-metodológica que possibilite atuação profissional de modo crítico sobre os diferentes problemas que envolvem o uso de tecnologias digitais em diferentes espaços de promoção de saberes, utilizando-se de novas tecnologias, múltiplos olhares e diferentes linguagens na educação presencial ou a distância.',
            targetPeoples:
                'Graduados em pedagogia, sistemas de informação e áreas afins que se interessem pela atividade relacionada ao uso de tecnologias no âmbito educacional presencial, híbrido ou a distância. O curso destina-se a pedagogos, a profissionais da área da educação em geral, além de profissionais com formação tecnológica. O curso também é recomendado para aqueles que pretendam atuar em algumas dessas atividades.',
            about: 'O curso de pós-graduação em tecnologias e educação a distância procura mostrar como a tecnologia está imbricada no processo de formação educacional do aprendiz e como a colaboração ativa entre os atores nesse novo cenário de educação disruptiva é permeado por um gigantesco rol de ferramentas inovadoras. O curso foi desenhado seguindo uma lógica crescente de encadeamento de conteúdos que apresentam um panorama global da educação a distância. Os estudos estão apoiados em teorias pedagógicas que abordam essa modalidade de ensino e aprendizagem levando em conta as diferentes mídias utilizadas, favorecendo o encontro com situações de construção do conhecimento nessa área. O curso tem como objetivo mostrar como as tecnologias de informação e comunicação são utilizadas por intermédio da internet, possibilitando situações inovadoras de ensino e aprendizagem no ciberespaço, como é o caso do uso de espaços de aprendizagem massivos. O curso foca ainda questões relacionadas ao uso da tecnologia assistiva e acessibilidade para pessoas com necessidades educacionais especiais. Por fim, destaca-se a relevância do uso de dispositivos móveis em salas presenciais, ou mesmo na modalidade a distância, visto que a prática tem conseguido ampliar o alcance das atividades educacionais que buscam promover o engajamento de alunos e professores em situações de ensino e aprendizagem inovadoras.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Panorama Global da EAD',
                    contents: [
                        'Fundamentos da Educação a Distância',
                        'Educação a Distância e as diferentes Mídias para Aprendizagem',
                        'Teorias Pedagógicas e a Educação a Distância',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Educação Disruptiva e Espaços Alternativos de Aprendizagem',
                    contents: [
                        'Educação Disruptiva: Ensino Híbrido ou Blended Learning',
                        'Espaços Alternativos de Aprendizagem mediada pelas Tecnologias',
                        'O uso da tecnologia em diferentes situações educacionais',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Fluxo Significativo da Informação em Espaços Virtuais de Aprendizagem',
                    contents: [
                        'Tecnologia e Educação',
                        'spaços Massivos de Aprendizagem',
                        'Ambientes Virtuais de aprendizagem',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Gestão do Currículo e de Pessoas',
                    contents: [
                        'Tecnologia Educacional em Perspectiva',
                        'Acessibilidade e Tecnologia Assistiva em EAD',
                        'O uso da tecnologia durante o processo de avaliação do aprendiz em EAD',
                    ],
                },
            },
        },
        {
            id: 5,
            title: 'Docência no ensino superior',
            objectives:
                'Oferecer um conjunto de possibilidades e ações que envolvem a prática das metodologias ativas no contexto da docência no ensino superior a partir da elaboração de estratégias, habilidades, planejamentos e metodologias ativas nos processos de ensino e a aprendizagem.',
            targetPeoples:
                'O curso é destinado aos profissionais, licenciados e bacharéis, de diferentes áreas do conhecimento, que visam ao aprimoramento de suas práticas de ensino ou almejam o ingresso na carreira do magistério superior.',
            about: 'De forma dinâmica e consistente, o curso aborda os fundamentos e referências acerca da aprendizagem, em especial as práticas docentes direcionadas ao ensino superior. Além disso, os eixos contemplam as discussões sobre as políticas educacionais para o ensino superior, a diversidade e os direitos humanos, os princípios do planejamento educacional, a construção de projetos e o desenvolvimento de estratégias de ensino a partir das metodologias ativas e híbridas. O curso fornece caminhos para a construção de práticas docentes que envolvem estratégias, habilidades, planejamentos de metodologias ativas nos para a docência no ensino superior.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Fundamentos da aprendizagem',
                    contents: [
                        'Teorias de desenvolvimento e aprendizagem',
                        'Aprendizagem: outras perspectivas',
                        'Aprendizagem em diferentes abordagens',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Diversidade, políticas e direitos humanos no contexto educacional',
                    contents: [
                        'Diversidade e direitos humanos na educação',
                        'Políticas educacionais para o ensino superior',
                        'Educação e cultura organizacional',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Projetos, planejamento e saberes na docência superior',
                    contents: [
                        'Construção de projetos pedagógicos',
                        'Princípios do planejamento educacional',
                        'Saberes, complexidade e globalização',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Ensino híbrido, novas tecnologias e metodologias ativas na prática docente',
                    contents: [
                        'O ensino híbrido e a educação contemporânea',
                        'Práticas docentes e as novas tecnologias',
                        'Metodologias ativas e avaliação',
                    ],
                },
            },
        },
        {
            id: 6,
            title: 'Metodologias Ativas e Prática Docente',
            objectives:
                'O curso tem como objetivo aperfeiçoar a formação dos profissionais das licenciaturas e demais graduações para atuação no desenvolvimento de metodologias e sistemas educativos destinados tanto ao ensino escolar quanto à educação corporativa.',
            targetPeoples:
                'O curso é destinado aos profissionais das licenciaturas em educação e demais graduados que desejam atuar no desenvolvimento de novas metodologias e sistemas de ensino para a educação escolar e para o ensino corporativo.',
            about: 'O curso de pós-graduação em metodologias ativas e prática docente tem como objetivo capacitar profissionais para atuação nos ensinos básico e superior, em todas as disciplinas, aplicando os pressupostos das novas TIC e recursos interativos na educação. O conteúdo é apresentado aliado a experiências práticas, com a profundidade teórica necessária ao nível de pós-graduação, proporcionando vivência e especialização ao profissional que atuará em classes escolares e não escolares (ensino in company), contribuindo para a criação de planos e métodos de ensino com fundamentação na gestão estratégica de competências. As possibilidades de atuação profissional incluem ambientes virtuais de ensino destinados à formação de alunos, produção de materiais didáticos e áreas específicas de setores como indústria e serviços, por exemplo.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - Projetos, Planejamento e Saberes na Docência Superior',
                    contents: [
                        'Construção de Projetos Pedagógicos',
                        'Princípios do Planejamento Educacional',
                        'Saberes, complexidade e Globalização',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Ensino Híbrido, Novas Tecnologias e Metodologias Ativas na Prática Docente',
                    contents: [
                        'O ensino híbrido e a educação contemporânea',
                        'Práticas docentes e as novas tecnologias',
                        'Metodologias Ativas e Avaliação',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Diversidade, Competências e Práticas Ativas no Contexto Educacional',
                    contents: [
                        'Diversidade e Direitos Humanos na Educação',
                        'Novas Competências para o Professor do Século XXI',
                        'Práticas Ativas em Aulas Tradicionais',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Aprendizagem em Diferentes Contextos',
                    contents: [
                        'Teorias Contemporâneas da Aprendizagem',
                        'Aprendizagem Organizacional',
                        'Aprendizagem por Competências',
                    ],
                },
            },
        },
        {
            id: 7,
            title: 'pedagogia empresarial e educação corporativa',
            objectives:
                'Especializar profissionais da educação para que atuem em espaços educativos não escolares. Subsidiar a ação dos pedagogos em espaços não formais de aprendizagem.',
            targetPeoples:
                'Pedagogos que queiram ampliar seus conhecimentos sobre os diferentes espaços e possibilidades de atuação dos egressos do curso de pedagogia.',
            about: 'O curso se propõe a subsidiar a ação de pedagogos que se disponham a atuar em contextos não escolares, na educação não formal, planejando e implementando práticas educativas capazes de promover a construção de novos conhecimentos para os educandos, respeitando suas especificidades e suas demandas. Ao aprofundar os conhecimentos sobre as teorias da aprendizagem e os diferentes contextos nos quais ela ocorre, o curso visa a oportunizar a reflexão em relação ao papel do professor nos diferentes contextos de atuação e a ampliar os conhecimentos sobre diferentes aspectos que devem ser contemplados no planejamento e na implementação das práticas educativas.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Fundamentos da Aprendizagem',
                    contents: [
                        'Teorias de Desenvolvimento e Aprendizagem',
                        'Aprendizagem: Outras Perspectivas',
                        'Aprendizagem em Diferentes Abordagens',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Aprendizagem em Diferentes Contextos',
                    contents: [
                        'Teorias Contemporâneas da Aprendizagem',
                        'Aprendizagem Organizacional',
                        'Aprendizagem por Competências',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - A Organização como Espaço de Aprendizagem',
                    contents: [
                        'As Organizações na Contemporaneidade e os Processos de Construção do Conhecimento',
                        'O Campo Educacional no Âmbito das Organizações',
                        'Metodologias Ativas e Desenvolvimento da Aprendizagem na Organização',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - O Pedagogo em Espaços Não Escolares',
                    contents: [
                        'O Perfil do Pedagogo em Espaços Não Escolares',
                        'Indentidade Profissional com Atuação em Espaços Sociais',
                        'Espaços Educacionais Não Escolares',
                    ],
                },
            },
        },
        {
            id: 8,
            title: 'Tutoria em educação a distância',
            objectives:
                'Oferecer uma gama de competências e didáticas necessárias aos alunos, a fim de especializar e capacitar profissionais para a gestão e tutoria.',
            targetPeoples:
                'Os novos paradigmas trouxeram uma crescente demanda na educação a distância, exigindo profissionais graduados em qualquer área do conhecimento e especializados em gestão e tutoria de cursos a distância.',
            about: 'O curso de pós-graduação em tutoria em educação a distância proporciona conhecimentos indispensáveis à compreensão do processo de ensino e aprendizagem em ambientes virtuais de aprendizagem (AVA). O curso tem como propósito atender a uma demanda incremental de mercado, provendo aos profissionais conhecimentos e habilidades para exercer a profissão de tutor em AVAs. Os fundamentos apresentados visam a habilitar os alunos a lidar com ferramentas da educação a distância (EAD) de forma a transformá-la num canal qualificado de ensino e aprendizagem adequado às demandas do século XXI.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Tutor em Contextos Diferenciados',
                    contents: [
                        'Educação Corporativa e EaD: Lifelong Learning em perspectiva',
                        'Tutoria em Ambientes Alternativos de Aprendizagem',
                        'O papel da Tutoria em situações de Aprendizagem',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Tutoria e os Processos Avaliativos Junto aos Aprendizes',
                    contents: [
                        'Experiência de Aprendizagem: Um olhar para o aprendiz EAD',
                        'Avaliação do Tutor em práticas da EAD',
                        'Avaliação do Aprendiz em Ambientes alternativos de Aprendizagem',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Protagonismo do Aprendiz em Espaços Virtuais',
                    contents: [
                        'Educação Aberta em Ead',
                        'O Processo de Avaliação em Ead',
                        'O aprendiz como protagonista no processo de ensino e aprendizagem baseado em Metodologias Ativas',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Metodologias Ativas de Aprendizagem',
                    contents: [
                        'Brainstorming e Brainwriting; Blended Learning; Rotação por Estações.',
                        'Aprendizagem Baseada em Projetos; Aprendizagem Baseada em Problemas; Grupo de Verbalização e Grupo de Observação; Design Thinking',
                        'Peer Instruction; Gamificação; Storyboard/storytelling',
                    ],
                },
            },
        },
        {
            id: 9,
            title: 'Alfabetização e letramento e psicopedagogia institucional',
            objectives:
                'Especializar professores da educação infantil e dos anos iniciais do ensino fundamental para o processo de alfabetização e letramento, destacando a importância da função social da leitura e da escrita para crianças, jovens e adultos. Apresentar, por meio de ferramentas teóricas e práticas, dois conceitos distintos que devem ser articulados em uma metodologia que alfabetize letrando.',
            targetPeoples:
                'Graduados em pedagogia e áreas afins que se interessam pelos estudos acerca da alfabetização e do letramento. O curso se destina aos professores da educação infantil e dos anos iniciais do ensino fundamental, bem como aos demais interessados que têm o objetivo de qualificar a sua prática pedagógica no processo alfabetizador de crianças, jovens e adultos.',
            about: 'A alfabetização e o letramento são processos semelhantes, mas ao mesmo tempo que têm aproximações, os distanciamentos se fazem presentes. Sendo assim, a alfabetização é o processo que desenvolve a competência dos alunos para leitura e para a escrita. Já o letramento, se apresenta a partir da função social que a leitura e a escrita representam na vida de cada aluno. O conteúdo do curso é apresentado aliado a experiências práticas, com a profundidade teórica necessária ao nível de pós-graduação, proporcionando a especialização do profissional que atuará na alfabetização e no letramento de crianças, jovens e adultos.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Desenvolvimento e Aprendizagem',
                    contents: [
                        'A Infância e o Desenvolvimento Biopsicossocial',
                        'Teorias da Aprendizagem',
                        'Infância e Ludicidade',
                    ],
                },
                mod2: {
                    titleMod:
                        'MODULO 2 - Processos Psicopedagógicos Institucionais',
                    contents: [
                        'Altas Habilidades e Superdotação',
                        'Pesquisa e Intervenção Psicopedagógica',
                        'Psicopedagogia Institucional',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - A Psicogênese da Língua Escrita',
                    contents: [
                        'Psicogênese da Aquisição da Escrita',
                        'A Literatura Infantil e a Formação do Leitor',
                        'A Avaliação como Parte do Processo Alfabetizador',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - A Prática Docente no Processo de Alfabetização',
                    contents: [
                        'A Formação do Professor Alfabetizador',
                        'O Ambiente Alfabetizador',
                        'O Processo de Alfabetização e a Base Nacional Comum Curricular',
                    ],
                },
            },
        },
        {
            id: 10,
            title: 'pedagogia',
            objectives:
                'Instrumentalizar o profissional da educação nas bases teóricas da educação em ação com o fazer pedagógico no contexto contemporâneo digital.',
            targetPeoples:
                'A pós-graduação em pedagogia foi desenvolvida para profissionais que atuam com o ensino infantil, fundamental, médio e superior. Por ser um curso de estruturação generalista, pode ser frequentado por graduados e licenciados em pedagogia, história, arte, biologia, física, psicologia e áreas afins. É um curso para interessados em conhecer melhor a dinâmica do ensinar e aprender em tempos de transformação educacional, além de instrumentalizar o profissional da educação com bases teóricas da educação em ação, com o fazer pedagógico no contexto contemporâneo digital.',
            about: 'Curso desenvolvido para atender as demandas do mercado educacional e para melhor preparar o profissional da educação a desenvolver seu fazer pedagógico dentro e fora da sala de aula.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Bases Teóricas da Pedagogia',
                    contents: [
                        'História e Fundamentos da Pedagogia',
                        'Aprendizagem: aspectos gerais',
                        'Fundamentos gerais do Ensino',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Gestão de Pessoas e Processos Escolares',
                    contents: [
                        'A Organização: Práticas da Gestão Escolar',
                        'Gestão do Ensino e Aprendizagem e a Formação na Escola',
                        'Relações Humanas no Espaço Escolar e a Atuação Gestora',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - O Pedagogo em Espaços Não Escolares',
                    contents: [
                        'O Perfil do Pedagogo em Espaços Não Escolares',
                        'Indentidade Profissional com Atuação em Espaços Sociais',
                        'Espaços Educacionais Não Escolares',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Ensino Híbrido, Novas Tecnologias e Metodologias Ativas na Prática Docente',
                    contents: [
                        'O ensino híbrido e a educação contemporânea',
                        'Práticas docentes e as novas tecnologias',
                        'Metodologias Ativas e Avaliação',
                    ],
                },
            },
        },
        {
            id: 11,
            title: 'Metodologia do ensino de Língua Inglesa',
            objectives:
                'Especializar profissionais da educação para que estejam preparados para propor boas situações de aprendizagens para a construção de novos conhecimentos em língua inglesa.',
            targetPeoples:
                'Graduados no curso de letras – língua inglesa que queiram atuar como docentes dessa língua. Docentes de língua inglesa que queiram ampliar seus conhecimentos sobre os processos de aprendizagem e sobre as metodologias de ensino que contribuem para a construção de novos saberes.',
            about: 'A promoção de boas situações de aprendizagem em língua inglesa demanda conhecimentos que embasem a atuação do professor, levando em consideração as especificidades dos estudantes, os aspectos fundamentais da própria língua e os conhecimentos didáticos. O curso se propõe a abordar, de maneira aprofundada, diferentes concepções de aprendizagem e suas implicações para as práticas de ensino, noções fundamentais da língua inglesa, no que diz respeito aos seus aspectos fonéticos, morfológicos e sintáticos, e aspectos relevantes para o planejamento de boas situações de ensino e de aprendizagem (diferentes metodologias e práticas, subsídios para o desenvolvimento de competências linguísticas, a importância da contextualização dos conteúdos, a perspectiva formativa da avaliação e o papel docente na construção de novos conhecimentos).',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Fundamentos da aprendizagem',
                    contents: [
                        'Teorias de Desenvolvimento e Aprendizagem',
                        'Aprendizagem: Outras Perspectivas',
                        'Aprendizagem em Diferentes Abordagens',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Noções fundamentais da Língua Inglesa',
                    contents: [
                        'Introdução ao sistema de notação fonética do Inglês',
                        'Aspectos fonéticos',
                        'Aspectos morfológicos e sintáticos de língua inglesa',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Metodologia do ensino de língua inglesa',
                    contents: [
                        'Abordagem didática: panorama dos métodos',
                        'Práticas discursivas de ensino',
                        'Ensino por competências comunicativas',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Atividade docente em Língua Inglesa',
                    contents: [
                        'Perspectivas para o ensino contextualizado de inglês',
                        'Atuação docente',
                        'Avaliação escolar',
                    ],
                },
            },
        },
        {
            id: 12,
            title: 'Pedagogia Social e Gestão de Projetos Sociais',
            objectives:
                'Formar profissionais capacitados para atuar em diferentes espaços de práticas pedagógicas com aplicação de conhecimento pedagógico e habilidades de gestão de projetos sociais.',
            targetPeoples:
                'O curso foi desenvolvido para profissionais que atuam na educação formal e não formal, e que desejam aprofundar seus conhecimentos sobre as diferentes práticas pedagógicas que conduzem à educação com viés emancipatório, adquirindo, assim, uma formação mais completa e de qualidade.',
            about: 'Como as práticas pedagógicas são articuladas nos diferentes contextos sociais? Quais são as novas exigências à ação profissional para a formação de cidadãos críticos e atuantes na sociedade? Diante desses questionamentos, educadores e profissionais que trabalham na educação buscam estratégias para desenvolver suas habilidades e competências, ampliando as possibilidades de inserção profissional. A pós-graduação em pedagogia social e gestão de projetos sociais tem por objetivo preparar profissionais para atuação em áreas de educação formal e não formal com habilidades e capacidades para planejar e executar práticas educativas direcionadas à emancipação humana.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Fundamentos da Aprendizagem',
                    contents: [
                        'Teorias de desenvolvimento e aprendizagem',
                        'Educação e escolarização',
                        'Bases do sistema educacional brasileiro',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Atuação do pedagogo em espaços sociais',
                    contents: [
                        'Processo de formação profissional do pedagogo',
                        'Campo de atuação e identidade profissional',
                        'A prática profissional em diferentes contextos',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Diversidade, Políticas e Direitos Humanos no Contexto Educacional',
                    contents: [
                        'Diversidade e Direitos Humanos na Educação',
                        'Políticas Educacionais para o Ensino Superior',
                        'Educação e Cultura Organizacional',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - Projetos Sociais e pedagogia',
                    contents: [
                        'Articulação entre pedagogia e projetos sociais',
                        'Projetos pedagógicos no contexto das organizações',
                        'Gestão em educação',
                    ],
                },
            },
        },
        {
            id: 13,
            title: 'Psicomotricidade',
            objectives:
                'Promover a capacitação em psicomotricidade para que profissionais de educação física, pedagogia, terapia ocupacional, psicoterapias e áreas afins atuem na organização, planejamento e educação psicomotora, construindo um planejamento de intervenção psicomotora para estimular o desenvolvimento motor, cognitivo e social de alunos de diferentes idades em espaços de educação formais, informais e terapêuticos.',
            targetPeoples:
                'Profissionais de educação física, pedagogos, terapeutas ocupacionais, psicoterapeutas, entre outros profissionais da saúde e da educação.',
            about: 'A pós-graduação em psicomotricidade irá abordar a psicomotricidade em sua totalidade. O curso inicia-se contextualizando essa área do conhecimento e analisando o processo histórico de sua construção. Em seguida, será vista sua aplicação, de forma prática, nas diferentes etapas da educação básica. Por fim, será abordada a importância do desenvolvimento psicomotor na fase adulta e na senilidade, dessa forma capacitando o profissional para um trabalho qualificado com psicomotricidade em todas as fases da vida.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Introdução à Psicomotricidade',
                    contents: [
                        'Aspectos Históricos e Conceituais da Psicomotricidade',
                        'A Psicomotricidade e seu Processo Evolutivo',
                        'Motricidade e Pensamento',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Psicomotricidade ao Longo da Vida',
                    contents: [
                        'Psicomotricidade na Infância',
                        'Psicomotricidade na Adolescência',
                        'Psicomotricidade na Vida Adulta e no Idoso',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Aprendizagem e Desenvolvimento Motor',
                    contents: [
                        'Aprendizagem das Habilidades Motoras',
                        'Crescrimento, Maturação e Desenvolvimento Humano',
                        'Desenvolvimento Motor, Cognitivo e Social',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Estratégias de Desenvolvimento Psicomotor',
                    contents: [
                        'Intervenção em Aprendizagem Motora',
                        'Intervenção Através dos Jogos',
                        'Intervenção através do Ritmo',
                    ],
                },
            },
        },
        {
            id: 14,
            title: 'ciências da educação',
            objectives:
                'O curso de pós-graduação em ciências da educação visa à qualificação dos profissionais que atuam na educação formal e não formal, em diferentes espaços educativos. Busca-se contribuir para o desenvolvimento das habilidades e competências necessárias ao exercício profissional, bem como para a formação de um profissional ético, crítico, reflexivo, ciente do papel social da educação e comprometido com a aprendizagem de todos os seus educandos.',
            targetPeoples:
                'O curso é dirigido a pedagogos, coordenadores pedagógicos, supervisores de ensino e professores de diversas áreas do conhecimento, que atuem em diferentes níveis e modalidades de ensino, que queiram ampliar seus conhecimentos sobre os múltiplos fatores que interferem nos contextos educativos e sobre aqueles que determinam a efetividade das ações pedagógicas a partir das contribuições das principais ciências da educação.',
            about: 'Com o objetivo de subsidiar a ação de profissionais da educação para que planejem e implementem ações educativas que promovam, efetivamente, as aprendizagens pretendidas, o curso de pós-graduação em ciências da educação desenvolve competências docentes para a compreensão do papel da escola na sociedade contemporânea, do contexto no qual as ações educativas serão desenvolvidas, das especificidades dos alunos e das inter-relações entre esses fatores. O curso abordará os aportes teóricos de quatro ciências da educação (pedagogia, sociologia, filosofia e psicologia da educação e do desenvolvimento), visando a elucidar as contribuições de cada uma, desde a sua origem até os dias atuais, para a compreensão dos fatores que interagem nos contextos educativos e na aprendizagem dos educandos.',
            modules: {
                mod1: {
                    titleMod: 'MODULO 1 - Pedagogia',
                    contents: [
                        'Pensamento pedagógico',
                        'A formação do pedagogo',
                        'Áreas de atuação do pedagogo',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Sociologia da educação',
                    contents: [
                        'Objetivo de estudo da sociologia da educação',
                        'Sociologia da educação e suas implicações para a educação',
                        'Sociologia e questões da escola contemporânea',
                    ],
                },
                mod3: {
                    titleMod: 'MODULO 3 - Filosofia da educação',
                    contents: [
                        'Objetos de estudo da filosofia',
                        'Filosofia, educação, formação docente e desafios da escola',
                        'Conhecimento filosófico e questões que permeiam o cotidiano escolar',
                    ],
                },
                mod4: {
                    titleMod:
                        'MODULO 4 - Psicologia da educação e do desenvolvimento',
                    contents: [
                        'Objeto de estudo da psicologia da educação',
                        'Psicologia e desenvolvimento humano',
                        'Contribuições da psicologia para a compreensão da complexidade escolar',
                    ],
                },
            },
        },
        {
            id: 15,
            title: 'literatura infantil',
            objectives:
                'Oferecer fundamentos aos ingressantes do curso de pós-graduação em literatura infantil sobre o significado do ensino de literatura na formação de leitores, a partir de diversos aspectos que estimulem o imaginário infantojuvenil, como afeto, artes, leitura, entre outros.',
            targetPeoples:
                'Professores do ensino básico ou superior, portadores de diploma de licenciatura, além de portadores de diploma de cursos superiores reconhecidos pelo Ministério da Educação que estejam interessados em conhecer mais sobre o universo infantil e infantojuvenil da literatura.',
            about: 'Este curso tem como objetivo aprimorar a capacidade crítica e literária dos participantes, além de buscar estratégias para a formação de leitores de textos literários e não literários. Portanto, visa a fornecer equipamentos para profissionais que atuam em diversas áreas ou que desejam se engajar na prática da leitura, para a formação de cidadãos críticos, autônomos e criativos em literatura infantil e infantojuvenil, partindo do entendimento de bases literárias à aplicabilidade natural da literatura infantil em sala de aula.',
            modules: {
                mod1: {
                    titleMod:
                        'MODULO 1 - O universo literário na escrita e oralidade',
                    contents: [
                        'A literatura e algumas conexões',
                        'Narrativas literárias: da geral à infantil',
                    ],
                },
                mod2: {
                    titleMod: 'MODULO 2 - Formação do leitor',
                    contents: [
                        'Os aspectos primários da leitura',
                        'A formação do leitor literário',
                        'A leitura infantil em sala de aula',
                    ],
                },
                mod3: {
                    titleMod:
                        'MODULO 3 - Prática literária infantil e infantojuvenil',
                    contents: [
                        'O histórico da literatura infantil no Brasil',
                        'A literatura infantil e juvenil no espaço escolar',
                        'As contribuições da literatura infantil em sala de aula',
                    ],
                },
                mod4: {
                    titleMod: 'MODULO 4 - A lírica infantil e infantojuvenil',
                    contents: [
                        'Primeiros conceitos poéticos',
                        'Da poesia geral à concreta',
                        'A poesia infantil e infantojuvenil',
                    ],
                },
            },
        },
    ];

    
        return (
            <div className="choose_container">
                <div className="choose_courses">
                    <p className="choose_title">Cursos em Educação</p>
                    <p className="choose_title subtitle">
                        Pós Graduação | EAD
                    </p>
                    <div className="courses_grid">
                    {posgrad.map((item, i) => (
                        <Link href={`educacao/details/${i}`} key={i}>
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
