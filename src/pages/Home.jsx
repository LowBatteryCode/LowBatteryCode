function Home() {
  return (
    <div className="grid bg-emerald-50">
      <div className="grid grid-cols-2">
        <div className="grid">
          <div className="grid gap-y-4 mb-5 m-2 ml-5">
            <h2 className="text-4xl font-bold">¿Qué es Low Battery Code?</h2>
            <p className="font-normal text-lg">
              El proyecto Low Battery Code es un proyecto de desarrollo web que
              utiliza diferentes tecnologías y tiene como objetivo crear
              soluciones open source gratuitas para otros desarrolladores. El
              enfoque principal del proyecto es la optimización del rendimiento
              en las aplicaciones web, y el objetivo es fomentar una comunidad
              de desarrolladores comprometidos con la creación de tecnologías
              eficientes.
            </p>
          </div>
          <div className="grid gap-y-4 m-2 ml-5">
            <h2 className="text-4xl font-bold">¿Qué tecnologias usan?</h2>
            <p className="font-normal text-lg mb-9">
              El proyecto Low Battery Code utiliza una variedad de tecnologías
              para el desarrollo de su sitio web, incluyendo HTML, CSS, Vite,
              React, JavaScript y Tailwind. HTML y CSS se utilizan para la
              estructura y el estilo de la página, mientras que Vite se utiliza
              como un sistema de compilación de JavaScript para mejorar la
              velocidad y la eficiencia. React se utiliza para la creación de
              componentes reutilizables y la gestión de datos, mientras que
              JavaScript se utiliza para la programación interactiva.
              Finalmente, Tailwind se utiliza como un framework de CSS que
              permite un diseño más eficiente y fácil de mantener. La
              combinación de estas diferentes tecnologías permite al equipo de
              Low Battery Code crear una plataforma web sólida y eficiente.
            </p>
          </div>
        </div>
        <div className="p-5">
          <img
            src="https://drive.google.com/uc?id=1Cu1dniFFLDUNW7GR6Ei3m19Vg84F8wgc"
            alt="prueba"
            className="rounded-xl"
          />
        </div>
      </div>
      <ModuloIzquierda1
        imagen="https://drive.google.com/uc?id=1tKT4H_2S7ohuIOujMTmfBI1JDrStRxMX"
        titulo={"React"}
        texto={
          "React es una biblioteca de JavaScript de código abierto que se utiliza para construir interfaces de usuario altamente reutilizables y escalables. Se centra en la creación de componentes reutilizables que pueden ser utilizados en varias partes de una aplicación, lo que hace que el desarrollo sea mucho más rápido y eficiente. React utiliza una técnica llamada DOM virtual para minimizar las actualizaciones de la interfaz de usuario, lo que hace que las aplicaciones de React sean más rápidas y más responsivas que las aplicaciones construidas con otras bibliotecas. React tiene una gran comunidad de desarrolladores y herramientas disponibles para acelerar el desarrollo y resolver problemas comunes, lo que lo hace una excelente opción para cualquier persona que quiera desarrollar aplicaciones web modernas y dinámicas."
        }
      />
      <ModuloDerecha1 
      imagen='https://drive.google.com/uc?id=1WyTxXwguY8la0BhzE_vZkpwS-cjjx7Nb'
      titulo={'Vite'}
      texto={'Vite es una herramienta de construcción de proyectos web modernos que se enfoca en mejorar la velocidad y la eficiencia en el proceso de desarrollo. Utilizando una arquitectura de módulos y una estructura de dependencias basada en ES6, Vite permite una experiencia de desarrollo en tiempo real, donde los cambios en el código se reflejan de inmediato en la vista previa en vivo. Además, Vite es capaz de manejar diferentes tipos de archivos, como JavaScript, TypeScript, CSS, SASS y otros, lo que lo hace adecuado para una amplia variedad de proyectos web. Con herramientas y plugins integrados, Vite facilita la creación y personalización de proyectos web, lo que la convierte en una herramienta atractiva para los desarrolladores.'}
      />
      <ModuloIzquierda2 
      imagen='https://drive.google.com/uc?id=1GUWrMjEf8Td2Wt9lpnEe8SyFkuJHIRag'
      titulo={'JavaScript'}
      texto={'JavaScript es un lenguaje de programación interpretado, orientado a objetos y basado en prototipos, que se utiliza ampliamente en la creación de aplicaciones web y móviles. Es un lenguaje versátil que se adapta a diferentes necesidades y situaciones, y es compatible con muchos frameworks y librerías populares. JavaScript es un lenguaje dinámico y flexible, lo que significa que los desarrolladores pueden agregar y modificar fácilmente el código a medida que avanzan en su proyecto. Además, gracias a la creciente popularidad de Node.js, JavaScript se ha expandido más allá del front-end y se ha convertido en una opción viable para el desarrollo del back-end y de aplicaciones de línea de comandos. Con su amplia gama de usos y su creciente comunidad de desarrolladores, JavaScript sigue siendo un lenguaje de programación esencial en el mundo de la tecnología.'}
      />
    </div>
  );
}


function ModuloIzquierda1({ imagen, titulo, texto }) {
  return (
    <div className="grid grid-cols-4 bg-teal-300 rounded-2xl ml-10 mt-3 mb-5 mr-10">
      <img src={imagen} className=" w-80 col-span-1 p-2 shadow-sm" />
      <div className="grid ml-2 col-span-3 grid-rows-4 mt-9">
        <h3 className="text-5xl row-span-1 font-bold text-stone-900">
          {titulo}
        </h3>
        <p className="row-span-3 text-stone-900 mr-5">{texto}</p>
      </div>
    </div>
  );
}

function ModuloDerecha1({ imagen, titulo, texto }) {
  return (
    <div className="grid grid-cols-4 bg-indigo-600 rounded-2xl ml-10 mt-3 mb-5 mr-10">
      <div className="grid col-span-3 grid-rows-4 mt-9 ml-5">
        <h3 className="text-5xl row-span-1 font-bold text-stone-900">
          {titulo}
        </h3>
        <p className="row-span-3 text-stone-900">{texto}</p>
      </div>
      <img src={imagen} className=" w-80 col-span-1 p-2 shadow-sm" />
    </div>
  );
}

function ModuloIzquierda2({ imagen, titulo, texto }) {
  return (
    <div className="grid grid-cols-4 bg-yellow-500 rounded-2xl ml-10 mt-3 mb-5 mr-10">
      <img src={imagen} className=" w-80 col-span-1 p-2 shadow-sm rounded-2xl" />
      <div className="grid ml-2 col-span-3 grid-rows-4 mt-6">
        <h3 className="text-5xl row-span-1 font-bold text-stone-900">
          {titulo}
        </h3>
        <p className="row-span-3 text-stone-900 mr-5">{texto}</p>
      </div>
    </div>
  );
}

export default Home;
