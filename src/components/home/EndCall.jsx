import bgStone from "../../assets/image/bg-stone.png"
import mackbook from "../../assets/image/MacBook-NatDev.png"



export default function EndCall(){
    return (
        <div className="endCall">
            <div className="container-endCall">
                <div className="content-text-endCall">
                    <h3>Obrigada por explorar meu mundo criativo. Que nossos caminhos se cruzem novamente em novas aventuras e descobertas!</h3>
                    <button>Entrar em contato</button>
                </div>
                <div className="content-image-endCall">
                    <img src={mackbook} alt="" />
                </div>
            </div>
            <div className="bgStone">
                  <img src={bgStone} alt="" />
            </div>
        </div>
    )
}