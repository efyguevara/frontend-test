# Cornershop Frontend Test


## Link a la solución

Enlace a mi app [aquí](https://frontend-test-master.web.app/).


## Desarrollo

Inicialmente descargue la librerias que usaria para dedarrollar el proyecto

Como seria una app sencilla y para seguir el estilo de la app decidí no utilizar ninguna librería para los iconos sino utilizar un svg de los que estaban en las especificaciones de estilo.

Para la estructura del proyecto, decidí dividir  las vistas de los componentes en diferentes carpetas, y dentro crear una para cada componente con su respectivo archivo .css para no mezclar estilos.

A partir de allí comencé a conectar el store ya que es mas sencillo (a mi parecer) hacerlo antes de comenzar a desarrollar. Luego de eso probé la conexión con el servidor, decidí continuar utilizando fetch ya que los request que debía utilizar no eran complejos, y una vez conectado llene el store con la información del servidor (que aun estaba vacío porque no se había realizado ningún post).

Luego comencé a crear los componentes para el buscador y el footer, para asi comenzar a crear los botones para mostrar el modal de crear los contadores. Agregue la estructura básica del modal y conecte con el store para mostrarlo detonando un Action que seteaba en true la propiedad del initialState que guarda la información para mostrar el modal.

Una vez que se mostraba el modal comencé a crear el request para hacer el post, y a preparar el modal para enviar la información, para este caso, trabaje con un state que tenia como valor inicial un objeto con los keys que necesitaba el request para ejecutarse. Y este va cambiando a medida que se escribe en el input. Y una vez se presiona el botón de Guardar, dispara la función del servicio, que a su vez lee si el response es ok y despacha la acción que guarda el objeto (nuevo contador) en el store una vez que se realiza el post.

Entonces, una vez que se hacia exitosamente el post, se debía ver en el componente, para esto, utilice dos archivos, uno que contiene la lista que se muestra y el otro que crea dinámicamente el contenido/filas de esa lista. Para esto, conecte el archivo con el store, para que lea el state de la propiedad donde se guardan los post, y, dependiendo si tiene o no información cargue la lista de contadores o el mensaje por default de que no existen contadores para mostrar.

Luego, agregue los botones para incrementar y compartir los contadores y la barra de "estado" que cuenta cuantos hay. Para hacer la funcionalidad de los botones de  incrementar y disminuir solo llame al endpoint entregado y guarde la información en el store con un dispatch si el request se ejecutaba correctamente. Y, para la barra de "estado" de los contadores utilice la misma información que ya estaba contenida en el store y la sume recorriendo la propiedad count del arreglo y sumando cada valor al anterior de la variable que muestra la cuenta.

Los ejemplos de los contadores los coloque en otro modal, que se activa con el store una vez que se hace click en el link de "examples" del modal para crear contadores. Y para este, utilice un JSON con data mock de tres categorías y varios ejemplos para los contadores, se recorre el objeto y se crea una categoría con cada key, luego se recorre el value y se imprimen los botones, los cuales al ser clickeados guardan su valor en el store, cierra el modal y en el input del modal de nuevos contadores se llena su valor con el del ejemplo seleccionado leído del store.

Para realizar la función de eliminar, primero cree en el store una propiedad para guardar la información de los contadores seleccionados, lo que también me sirvió para mostrar el botón de borrar y de compartir solo cuando exista información dentro de esa propiedad, es decir que haya mas de un contador seleccionado. Luego de seleccionar un contador clickear en borrar, se dispara el Action que muestra la notificación para confirmar si se desea borrar el contador, al hacer click en Delete, se envía la información de el/los contadores seleccionados y se envía en el request, y si este responde con un ok, se dispara la acción para eliminar del store dicho contador.

Para compartir los contadores se utilizó la función del navegador  (navigator.clipboard.wrhiteText) que recibe como parámetro el texto que se desea copiar. Se utilizó un popover para mostrar esta funcionalidad.

En el caso de las notificaciones, también se utilizó una data mock, y está es leída desde el archivo con los servicios. 

y, Para poder mostrar las notificaciones correspondientes a cada situación utilice el store para enviar la información, y como en algunos casos se  debía colocar un Retry de la acción, decidí colocar en la función del request toda la información en variables (la url, y el método que se llamaría)  junto con una función que ejecutará el dispatch de los Actions del store si es que la respuesta es ok, pero en caso de que el navegador este offline y el usuario ejecute el Retry, que es una función que recibe como parámetros las variables antes mencionadas y la función que dispara los Actions.

Luego intente hacer los test peeeeeroo.... se acabó el tiempo :)
 
 
I died!
![Coffin dance](coffin.gif)
