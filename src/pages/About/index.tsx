import ImgPerfil from '../../assets/imgs/Perfil/imgPerfil.svg'
export default function About() {
    return(
      <main className="bg-bannerFundo-image min-h-screen pt-52 flex flex-col items-center  text-white z-10">
      <article className="flex flex-col items-center text-center space-y-4">
        <p className="w-96 text-justify">
        um projeto de fã de oneshort aqui coloquei informações do jogo, de onde comprar, e gameplay dele, espero que goste 
        </p>
        <img src={ImgPerfil} alt="Perfil" className="w-32 h-32 object-cover rounded-full" />
        <span className="text-xl font-semibold">Gahh-gon</span>
        <button className="px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-200"><a href="https://github.com/Gahh-gon" target='_blank'>Ver perfil</a></button>
      </article>
    </main>
    );
  }