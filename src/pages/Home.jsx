function Home() {
  return (
    <div className="grid m-2">
      <div className="grid gap-y-4 mb-5">
        <h2 className="text-4xl font-bold">¿Qué es Low Battery Code?</h2>
        <p className="font-normal text-lg w-1/2">
          El proyecto Low Battery Code es un proyecto de desarrollo web que
          utiliza diferentes tecnologías y tiene como objetivo crear soluciones
          open source gratuitas para otros desarrolladores. El enfoque principal
          del proyecto es la optimización del rendimiento en las aplicaciones
          web, y el objetivo es fomentar una comunidad de desarrolladores
          comprometidos con la creación de tecnologías eficientes.
        </p>
      </div>
      <div className="grid gap-y-4">
        <h2 className="text-4xl font-bold">¿Qué tecnologias usan?</h2>
        <p className="font-normal text-lg mb-9">
          El proyecto Low Battery Code utiliza una variedad de tecnologías para
          el desarrollo de su sitio web, incluyendo HTML, CSS, Vite, React,
          JavaScript y Tailwind. HTML y CSS se utilizan para la estructura y el
          estilo de la página, mientras que Vite se utiliza como un sistema de
          compilación de JavaScript para mejorar la velocidad y la eficiencia.
          React se utiliza para la creación de componentes reutilizables y la
          gestión de datos, mientras que JavaScript se utiliza para la
          programación interactiva. Finalmente, Tailwind se utiliza como un
          framework de CSS que permite un diseño más eficiente y fácil de
          mantener. La combinación de estas diferentes tecnologías permite al
          equipo de Low Battery Code crear una plataforma web sólida y
          eficiente.
        </p>
      </div>
      <ModuloIzquierda
        imagen="https://drive.google.com/uc?id=1tKT4H_2S7ohuIOujMTmfBI1JDrStRxMX"
        titulo={"Prueba"}
        texto={"prueba prueba prueba"}
      />
    </div>
  );
}

function ModuloIzquierda({ imagen, titulo, texto }) {
  return (
    <div className="grid grid-cols-4 bg-teal-400">
      <img src={imagen} className=" w-80 col-span-1 p-2 shadow-sm" />
      <div className="grid ml-2 col-span-3 grid-rows-4">
        <h3 className="text-4xl row-span-1">{titulo}</h3>
        <p className="row-span-3">{texto}</p>
      </div>
    </div>
  );
}

export default Home;
