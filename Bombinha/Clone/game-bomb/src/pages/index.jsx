export default function Inicio() {
  return(
    <div className="">
      <h1 className="text-center m-5">Mão na massa</h1>
    <div className="row">
    <div className="col-5">
       <div className="card">
          <img src="../img/desarmador.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Desarmador</h5>
            <p className="card-text">Este jogador será reponsável por cortar fios, apertar botões e ser muito atento a todos os detalhes da bomba, e então desarma-lá </p>
        </div>
      </div>  
      <a href="#" class="btn btn-primary m-5">Go somewhere</a>  
    </div>
    <div className="col-2"> 
     <img src="..." alt="" />
    </div>
    <div className="col-5">
       <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Instrutor</h5>
            <p className="card-text">Este jogador será responsável por ler o manual de instruções do desarmamento da bomba, e informar quais são os passos a serem seguidos para evitar uma explosão</p>
        </div>
      </div>    
      <a href="#" class="btn btn-primary m-5">Go somewhere</a>
    </div>
        
    </div>
    </div>
  )
}