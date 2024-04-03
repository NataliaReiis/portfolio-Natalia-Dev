import RecomFabio from "../../assets/image/recommendation-Fabio.png"
import RecomCelso from "../../assets/image/recommendation-Celso.png"


export default function Recommendation(){
    return (
    <div className="recommendation">
        <h1>Recomendações</h1>
        <span>
            <div><img src={RecomFabio} alt="" /></div>
            <div><img src={RecomCelso} alt="" /></div>
        </span>
        
    </div>
    )
}