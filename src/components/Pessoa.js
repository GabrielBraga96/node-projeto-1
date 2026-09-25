function Pessoa({ nome, idade, profissao, MinhaFoto}) {
    return (
        <div>
            <img src={MinhaFoto}  alt={nome} width='150px'/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa