import style from "./Home.module.css"

function Company() {
    return (
        <div className={style.container}>
            <h1>Sobre a empresa <span>Cost</span></h1>
            <p>Projeto criado em REACT com o objetivo em aprimorar os conhecimentos geral em programação.</p>
        </div>
        )
}

export default Company