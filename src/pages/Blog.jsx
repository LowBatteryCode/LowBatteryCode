function Blog() {
  return (
    <div>
      <BloqueBlog 
      titulo={''}
      fecha={''}
      texto={'¡Hola a todos! Hoy estoy muy emocionado de compartirles la última actualización en mi página web. He estado trabajando duro en este proyecto y finalmente puedo presentarles una página completamente nueva y mejorada. Desde el cambio completo del código, hasta la implementación de React, estoy seguro de que esta actualización mejorará significativamente la experiencia de usuario.'}
      texto2={''}
      />
      <BloqueBlog 
      titulo={'Algunas de las cosas que estuve haciendo esta semana'}
      fecha={'22/02/2023'}
      texto={'¡Hola a todos! Estoy muy emocionado de compartir con ustedes una gran noticia: ¡he aprendido JavaScript y ahora estoy probando React! 🎉 || Sé que muchos de ustedes se preguntarán qué es eso y por qué es tan importante para mí. Pues bien, les voy a explicar un poco de qué se trata y cómo va a mejorar la calidad de mi página web. JavaScript es un lenguaje de programación que permite crear páginas web dinámicas e interactivas. || Es decir, páginas que cambian según las acciones del usuario o los datos que se reciben. Por ejemplo, con JavaScript se pueden hacer animaciones, juegos, formularios, mapas y muchas cosas más. React es una biblioteca de JavaScript que facilita el desarrollo de interfaces de usuario. Con React se pueden crear componentes reutilizables que se actualizan automáticamente cuando cambia el estado de la aplicación. Por ejemplo, con React se pueden hacer menús desplegables, listas filtrables, gráficos y muchas cosas más.  || ¿Y por qué me he decidido a aprender estas tecnologías? Pues porque creo que son muy útiles y populares en el mundo web. Además, me gustan los retos y siempre estoy buscando aprender cosas nuevas que me ayuden a mejorar mis habilidades como desarrollador web. Mi objetivo es incorporar JavaScript y React en mi página web para hacerla más moderna, atractiva y funcional. Quiero ofrecerles a mis lectores una mejor experiencia al navegar por mi contenido y al interactuar conmigo.Por eso les pido un poco de paciencia si ven que la actualización de hoy es pequeña. || Estoy dedicando mucho tiempo al aprendizaje de estas tecnologías y al desarrollo de mi nueva página web. Espero tenerla lista pronto y poder mostrarles el resultado.Les agradezco mucho su apoyo y su interés por mi trabajo. Sin ustedes nada de esto sería posible. Les prometo que valdrá la pena la espera y que les sorprenderé con una página web increíble. || Les mando un fuerte abrazo y nos vemos pronto.'}
      />
      <BloqueBlog 
      titulo={'Experimentando con JavaScript'}
      fecha={'14/02/2023'}
      texto={'Estoy empezando a experimentar con JS, aunque aún no implementaré nada de lo que haga. Esto lo hago principalmente para cuando llegue el momento de lanzar la primera gran actualización, que implementará muchas cosas y será un salto cualitativo enorme. Pero aún me queda mucho trabajo en la estructura básica de la página. || Algunas de las cosas que espero implementar es agregar algún sistema para poder escribir en el blog sin necesidad de tener que editar directamente el código, como estoy haciendo ahora. No sé si sea posible, pero de ser así, asumo que será difícil. Por eso estoy probando cosas.'}
      />
      <BloqueBlog
      titulo={'Trabajo con css'}
      fecha={'14/02/2023'}
      texto={'Esta ha sido una actualización que me tomó bastante trabajo, pero a pesar de eso, en comparación con los planes que tengo, es apenas una actualización mediana. Nunca he trabajado más allá de JS, así que estoy bastante emocionado por todo lo que está por venir, con lo que tendré que tener un mejor control de las herramientas, principalmente de Git. Pero volviendo al tema de CSS, ha sido un trabajo complicado y logré que, por lo menos, funcione y logré un parecido bastante bueno al de la maqueta, así que supongo que fue un éxito. Además, de la gran mejora que representa con respecto a la anterior página principal, aún queda actualizar el resto de páginas y optimizar el código, pero creo que este es un buen primer paso hacia un sinfín de mejoras.'}
      />
      <BloqueBlog
        titulo={"Primera 'entrada de blog'"}
        fecha={"14/02/2023"}
        texto={'Esta es la primera entrada de blog, entre comillas porque está en la página principal y no redirige a ningún lado. Escribo esto mientras sigo trabajando en la nueva página principal, es bastante trabajo (al menos para los estándares en los que trabajo por ahora) y aún queda mucho por hacer. Como dije, solo es la página principal porque no sé si actualizaré el resto de las páginas. Ya terminé con el header y avanzado bastante con la parte de los blogs, aunque debo hacer pruebas de cómo va a reaccionar esto cuando tenga más bloques de blog, y también estoy ajustando las proporciones. Estoy experimentando un poco con los fondos, pero de momento lo dejaré en un color sólido, además de algunos cambios de distribución. También tengo que trabajar en la parte de las actualizaciones, espero que no se crucen partes de código, aunque debo decir que me sorprende que dentro del desorden me estoy guiando bastante bien. En parte, supongo que ayudará comentar el código para no perderme. También cambié de editor, estaba en Atom pero cambié a VScode por temas de compatibilidades además de que está más actualizado.'}
      />
    </div>
  );
}

function BloqueBlog({ titulo, subtitulo, fecha, texto, texto2, texto3, texto4, texto5 }) {
  return (
    <div className="bg-emerald-400 bg-opacity-60 m-8 rounded-3xl p-3">
      <h2 className="text-3xl font-semibold text-zinc-800">{titulo}</h2>
      <h3 className="text-slate-700 font-normal">{subtitulo}</h3>
      <p className="text-slate-500 font-normal">Publicado {fecha}</p>
      <p>{texto}</p>
      <p>{texto2}</p>
      <p>{texto3}</p>
      <p>{texto4}</p>
      <p>{texto5}</p>
    </div>
  );
}

export default Blog;
