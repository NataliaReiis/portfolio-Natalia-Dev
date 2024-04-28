import ImageProfile from "../../assets/image/image-profile.png"

import ToTeacher from "../../assets/image/ToTeach.png"
import Learn from "../../assets/image/learn.png"
import Search from "../../assets/image/Search.png"


export default function About(){

    const dataAbout =  [
        {
            title: 'Ensinar',
            description:'Durante a graduação, posso ensinar através de atividades como monitoria e grupos de estudo, onde desenvolvo minhas habilidades de comunicação e didática ao auxiliar colegas de classe.' ,
            image: ToTeacher,
        },
        {
            title: 'Aprender',
            description:'Como estudante universitário, estou constantemente absorvendo novos conhecimentos e perspectivas em cada disciplina, projeto e interação com colegas e professores.' ,
            image: Learn,
        },
        {
            title: 'Pesquisar',
            description:'Participo de atividades de pesquisa, como iniciação científica, onde aprimoro minhas habilidades de investigação, análise crítica e elaboração de relatórios acadêmicos.' ,
            image: Search,
        },
    ]

    return (
        <div className="about">
            <div className="image-about">
                <img src={ImageProfile} alt="" />
            </div>
            <div className="description-about">
                <h3>Expertises que competem minha formação acadêmica e profissional</h3>
                <div className="content-description-about">
                    {dataAbout.map((about, index) => (
                     <div key={index}>
                        <img src={about.image} alt="" />
                        <h2>{about.title}</h2>
                        <p>{about.description}</p>
                    </div>        
                    ))}
                    
                </div>
            </div>
        </div>
    )
}