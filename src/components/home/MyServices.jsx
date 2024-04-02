
export default function MyServices(){

    const services = [
        {
          image:"src/assets/image/site.png",
          title: "Criação de sites, landing page e sistemas ",
          description: "Meu foco está na programação de alta performance, garantindo que suas plataformas sejam rápidas, eficientes e escaláveis. Seja um site institucional, uma página de destino impactante ou um sistema de gerenciamento complexo, estou pronto para transformar suas ideias em realidade com código limpo e eficiente.",  
        },
        {
          image: "src/assets/image/ux.png",
          title: "Pesquisa e prototipagem Ux / Ui" ,
          description: "Entender o seu público-alvo e proporcionar uma experiência de usuário excepcional é crucial para o sucesso online. Utilizando técnicas de pesquisa e prototipagem, posso ajudar a identificar oportunidades de melhoria e criar interfaces intuitivas que cativam e engajam os usuários." ,
        },
        {
            image: "src/assets/image/art.png",
            title: "Design" ,
            description: " A estética e a usabilidade andam de mãos dadas. Combinando design gráfico criativo com princípios sólidos de UX/UI, desenvolvo interfaces visualmente atraentes e funcionais que elevam sua marca e entregam resultados tangíveis." ,
          }
    ];

    return (
        <> 
        <div className="services">
            <h1  className="title-service">Como posso te ajudar?</h1>
        <div className="myServices"> 
        {services.map((service, index) => (    
            <div key={index} className="container-service">
                <span className="content-service">
                    <img src={service.image} />
                    <h1>{service.title} </h1>
                </span>
                <p>{service.description}</p>
             </div> 
        ))}             
        </div>
        </div>
        </>
    )
}    