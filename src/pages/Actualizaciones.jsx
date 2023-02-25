import React from 'react'

function Actualizaciones() {
  return (
    <div>
      <BloqueActualizacion 
      titulo={'Actualización 0.4'}
      subtitulo={'Actualización Grande'}
      fecha={'28/02/2023'}
      texto={'🚀 ¡Hemos realizado una gran actualización en nuestra página web! ¡Ahora nuestra página está hecha desde cero con React! Hemos cambiado completamente la página principal, brindando una experiencia de usuario más moderna y visualmente atractiva. Además, hemos agregado una sección que muestra las tecnologías que se utilizan en nuestra página, lo que facilita el conocimiento sobre cómo se construye y se mantiene nuestro sitio.'}
      texto2={'🔍 También estamos experimentando con nuevas fuentes para mejorar la legibilidad y la apariencia general de la página. Continuaremos buscando la fuente perfecta para garantizar la mejor experiencia de usuario posible.'}
      texto3={'👨‍💻 No solo hemos cambiado el diseño y la tecnología detrás de la página, sino que también hemos mejorado el rendimiento y la velocidad de carga. Ahora los usuarios pueden disfrutar de una experiencia de navegación más rápida y eficiente.'}
      texto4={'📰 Además, estamos emocionados de presentar nuestra nueva página de blog, donde compartiremos nuestras experiencias mejorando la página y otros temas relacionados con nuestro sitio. También hemos rediseñado la página de actualizaciones, brindando una mejor comprensión sobre las mejoras que realizamos en nuestro sitio. Y por último, pero no menos importante, hemos mejorado la página de contacto para que sea más fácil para nuestros usuarios comunicarse con nosotros.'}
      texto5={'📣 Queremos agradecer a nuestro equipo por trabajar arduamente en este proyecto, desde el desarrollo hasta el diseño y la implementación. Estamos emocionados de presentar esta nueva versión y esperamos que nuestros usuarios disfruten explorando la página. ¡Gracias por visitarnos y por su apoyo constante!'}
      />
      <BloqueActualizacion 
      titulo={'Actualización 0.3'}
      subtitulo={'Actualización pequeña'}
      fecha={'22/02/2023'}
      texto={'Hola a todos. Quiero contarles que hemos hecho una actualización pequeña en la página de "Actualizaciones". Hemos cambiado la estética de la página para que se vea más bonita y moderna. Es un cambio menor, pero es otro paso hacia adelante. Además, estamos trabajando en un "port" a React para mejorar el rendimiento de la web. Esperamos que les guste esta novedad y nos den su opinión.'}
      />
      <BloqueActualizacion 
      titulo={'Actualización 0.2'}
      subtitulo={'Actualización mediana'}
      fecha={'14/02/2023'}
      texto={'¡Bienvenidos a la nueva versión de nuestra página web! Hemos realizado varios cambios y mejoras, como la incorporación de un área de blog, el cambio en la fuente de letras a "Inter", la nueva barra de navegación y un resumen de actualizaciones en la página principal. También hemos actualizado la página de actualizaciones y agregado un icono para mejorar la apariencia de la página. Continuaremos trabajando para mejorar la experiencia de usuario y ofrecer el mejor servicio posible. ¡Gracias por visitarnos!'}
      />
      <BloqueActualizacion 
      titulo={'Actualización 0.1'}
      subtitulo={'Creación de pagina'}
      fecha={'09/02/2023'}
      texto={'Agregué contenido a la página, aunque aún queda mucho trabajo por hacer. Algunos de los cambios incluyen la adición de una lista en la parte superior con sus respectivas páginas. Es curioso que si haces clic en "principal", te lleva aquí mismo, aunque no quiero quitarlo porque creo que puede hacer que te pierdas. Otra cosa es que tuve un pequeño problema, no podía usar la "navegación rápida" desde otra página. Por ejemplo, si estaba en "principal", podía ir a cualquiera de las otras dos páginas, pero si estaba en "Contacto", solo podía volver a "principal" y no podía ir a "Acerca del proyecto". Aunque lo solucioné rápidamente, solo es temporal porque es poco eficiente.'}
      />
    </div>
  )
}

function BloqueActualizacion({ titulo, subtitulo, fecha, texto, texto2, texto3, texto4, texto5 }) {
  return (
    <div className="bg-gray-400 bg-opacity-70 m-8 rounded-3xl p-3">
      <h2 className="text-3xl font-semibold text-zinc-800">{titulo}</h2>
      <h3 className="text-slate-700 font-semibold">{subtitulo}</h3>
      <p className="font-normal">Publicado {fecha}</p>
      <p className="font-normal">{texto}</p>
      <p className="font-normal">{texto2}</p>
      <p className="font-normal">{texto3}</p>
      <p className="font-normal">{texto4}</p>
      <p className="font-normal">{texto5}</p>
    </div>
  );
}

export default Actualizaciones