import Image from 'next/image';
import Arrow from '../../assets/arrow_circ.svg';
import Arrow180 from '../../assets/arrow_circ_180.svg';
import Check from '../../assets/check.svg';
import useCollapse from 'react-collapsed';
import { useState } from 'react';
export default function Content_details() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    const data = [
        {
            title: 'ASPECTOS INTRODUTÓRIOS DA ADVOCACIA CRIMINAL',
            content: [
                'Nichos da Advocacia Criminal',
                'O mindset defensivo',
                'A qualificação e atualização do Advogado Criminalista',
                'A experiência',
                'A oratória',
            ],
        },
        {
            title: 'ATUAÇÃO DO ADVOGADO CRIMINALISTA EM SEDE POLICIAL',
            content: [
                'Introdução e modalidades de investigação',
                'Finalidade do inquérito policial',
                'O pacote anticrime',
                'Atribuição das Polícias e Acompanhamento do Inquérito',
                'Postura do Advogado no Inquérito e Cuidados',
                'Participação do Advogado no Inquérito e Requerimentos',
                'Advocacia Investigativa',
                'Apuração do Ato Infracional atribuído a adolescente',
            ],
        },
        {
            title: 'AUDIÊNCIA DE CUSTÓDIA',
            content: [
                'Conceito e origem da Audiência de Custódia',
                'As espécies de prisão e sua relação com a audiência de custódia',
                'A realização da audiência de custódia na prática: Atuação do Advogado Criminalista',
                'Os pedidos na audiência de custódia',
            ],
        },
        {
            title: 'O ADVOGADO CRIMINALISTA E O PROCESSO PENAL',
            content: [
                'Nulidades no Processo Penal – Conceito e Classificação',
                'Nulidades no Processo Penal – Atos Inexistentes, Atos Nulos…',
                'Nulidades no Processo Penal – Nulidades Absolutas e Relativas',
                'Nulidades no Processo Penal – Análise do artigo 564',
                'Nulidades no Processo Penal – Análise do artigo 571 e o momento de alegação',
                'Nulidades no Processo Penal – Princípios e Alegações das Nulidades',
                'Introdução e Juiz de Garantias',
                'Finalidade Defensiva no Processo Penal',
                'Procedimentos',
                'Prazos',
                'Citação',
                'Resposta à Acusação',
                'Preliminares em Resposta à acusação',
                'Teses de Mérito em Resposta à Acusação',
                'A queixa crime na ação penal privada',
                'Exceções e HC',
                'Instrução Probatória',
                'Momento Processual dos Memoriais',
                'Espécies de Absolvição',
                'Fundamentação dos Memoriais',
                'Prazo para Memoriais',
                'Estrutura da Peça em Memoriais / Preliminares em Memoriais',
                'Teses de Mérito em Memoriais',
                'Pedidos em Memoriais',
                'Conclusão, Modelos e Assistente de Acusação em Memoriais',
            ],
        },
        {
            title: 'AUDIÊNCIA DE CUSTÓDIA',
            content: [
                'Conceito e origem da Audiência de Custódia',
                'As espécies de prisão e sua relação com a audiência de custódia',
                'A realização da audiência de custódia na prática: Atuação do Advogado Criminalista',
                'Os pedidos na audiência de custódia',
            ],
        },
        {
            title: 'O RESGUARDO DA LIBERDADE DO CLIENTE NA AUDIÊNCIA DE CUSTÓDIA E NAS PEÇAS DE LIBERDADE',
            content: [
                'Requerendo a liberdade',
                'Relaxamento de prisão',
                'Liberdade provisória',
                'Revogação da prisão',
            ],
        },
        {
            title: 'TEORIA DOS JOGOS NO PROCESSO PENAL',
            content: [
                'Introdução à Teoria dos Jogos',
                'Esquema básico de compreensão',
                'Quem são os jogadores',
                'Quais são as regras dos jogadores',
                'Recompensas do jogo',
                'A partir do dilema do prisioneiro',
                'O jogo da investigação estatal',
                'O jogo da investigação defensiva',
                'Como se joga no ANPP',
                'Prisão e custódia',
                'Audiência de instrução',
                'Decisão, ações e recursos',
            ],
        },
        {
            title: 'PSIQUIATRIA FORENSE',
            content: [],
        },
        {
            title: 'A CONSTRUÇÃO DA PROVA NO PROCESSO PENAL',
            content: [
                'Teoria Geral das Provas',
                'Cadeia de Custódia da Prova',
                'Provas em espécie - Prova Pericial',
                'Provas em espécie - Prova Pericial e Exame de Corpo de Delito',
                'Provas em espécie - Exame de Corpo de Delito',
                'Provas em espécie - Lei 12654/12 - Intervenção sobre o corpo',
                'Provas em espécie - Interrogatório e Prova Testemunhal',
                'Provas em espécie - Testemunhas, Reconhecimento de Coisas e pessoas',
                'Provas antecipadas, não repetíveis e cautelares',
            ],
        },
        {
            title: 'FASER RECURSAL',
            content: [
                'Conceitos, características e princípios',
                'Princípios, Pressupostos e Prazos dos Recursos',
                'Prazos Recursais',
                'Efeitos dos Recursos',
                'Recursos em espécie - Recurso em Sentido Estrito',
                'Recurso em Sentido Estrito - Procedimento e Estrutura',
                'Apelação - Procedimento e Cabimento',
                'Apelação - Estrutura',
                'Revogação da prisão',
            ],
        },
        {
            title: 'O MANEJO DO HABEAS CORPUS NA ADVOCACIA CRIMINAL',
            content: [
                'Natureza e Cabimento do HC',
                'Fundamentos e Competência',
                'Endereçamento do HC e do ROC',
                'Estrutura do HC e do ROC',
            ],
        },
        {
            title: 'TESES DE DEFESA NA PARTE GERAL DO CÓDIGO PENAL',
            content: [
                'Princípios de Direito Penal',
                'Aplicação da Lei Penal no Tempo',
                'Aplicação da Lei Penal no Espaço',
                'Teses para afastamento do Crimes (Análise de casos de atipicidade, Excludentes de ilicitude e de culpabilidade)',
                'Causas extintivas da punibilidade (Análise das teses de defesa, incluindo prescrição)',
                'Dosimetria da pena',
                'Suspensão condicional da execução da pena',
                'Substituição da pena',
                'Concurso de pessoas',
                'Concurso de crimes',
            ],
        },
        {
            title: 'TESES DE DEFESA NA PARTE ESPECIAL DO CÓDIGO PENAL',
            content: [
                'Crimes contra a vida',
                'Crimes contra a integridade física',
                'Crimes contra a honra',
                'Crimes patrimoniais',
                'Crimes contra a dignidade sexual',
                'Crimes contra a Administração Pública',
            ],
        },
    ];

    const [selected, setSelect] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelect(null);
        }
        setSelect(i);
    };
    return (
        <div className="content_container">
            <div className="box_content">
                <div className="line_content"></div>
                <h1 className="title_content">Conteúdos</h1>
            </div>
            <div className="dropdown_grid">
                {data.map((item, i) => (
                    <div className="full_content">
                        <div className="drop_content" onClick={() => toggle(i)}>
                            <div className="info_title">{item.title}</div>
                            <div className="icon_check">
                                {selected == i ? (
                                    <Image
                                        width={20}
                                        height={20}
                                        src={Arrow180}
                                    ></Image>
                                ) : (
                                    <Image
                                        width={20}
                                        height={20}
                                        src={Arrow}
                                    ></Image>
                                )}
                            </div>
                        </div>
                        <div
                            className={
                                selected == i
                                    ? 'expand_content show'
                                    : 'expand_content '
                            }
                        >
                            {item.content.map((txt) => (
                                <div className="block_point">
                                    <div className="icon_check">
                                        <Image
                                            width={20}
                                            height={20}
                                            src={Check}
                                        ></Image>
                                    </div>

                                    <h4 className="text_check">{txt}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
