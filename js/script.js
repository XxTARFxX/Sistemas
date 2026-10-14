
const contenedorEstrellas = document.getElementById("estrellas");

const pantallaInicial = document.getElementById("pantallaInicial");
const viaje = document.getElementById("viaje");
const pantallaPlanetas = document.getElementById("pantallaPlanetas");

const botonEntrar = document.getElementById("botonEntrar");
const botonContinuar = document.getElementById("botonContinuar");
const volverGalaxia = document.getElementById("volverGalaxia");

const mensajePlaneta = document.getElementById("mensajePlaneta");
const tituloMensaje = document.getElementById("tituloMensaje");
const textoMensaje = document.getElementById("textoMensaje");
const cerrarMensaje = document.getElementById("cerrarMensaje");

// 1. Crear las estrellas del universo.
for (let i = 0; i < 150; i++) {
    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    const tamano = Math.random() * 3 + 1;

    estrella.style.width = `${tamano}px`;
    estrella.style.height = `${tamano}px`;
    estrella.style.left = `${Math.random() * 100}%`;
    estrella.style.top = `${Math.random() * 100}%`;
    estrella.style.animationDelay = `${Math.random() * 3}s`;

    contenedorEstrellas.appendChild(estrella);
}

// 2. Entrar al universo.
botonEntrar.addEventListener("click", function () {
    pantallaInicial.classList.add("oculto");
    viaje.classList.remove("oculto");
    document.body.classList.add("en-viaje");
});

// 3. Ir a la pantalla de los planetas.
botonContinuar.addEventListener("click", function () {
    viaje.classList.add("oculto");
    pantallaPlanetas.classList.remove("oculto");

    mensajePlaneta.classList.add("oculto");
    cartaCompleta.classList.add("oculto");

    pantallaPlanetas.scrollTop = 0;
});

// 4. Mensajes de cada planeta.
const mensajes = {
    significado: {
        titulo: "Lo que significas para mí ❤️",
        texto:
            "Quiero que sepas que sigues siendo una persona " +
            "muy especial para mí.\n\n" +
            "Desde que volviste a acercarte, he sentido una " +
            "felicidad que me cuesta explicar. Tenerte nuevamente " +
            "cerca me ha devuelto una ilusión que todavía " +
            "guardaba dentro de mí.\n\n" +
            "Pero también han aparecido dudas y preguntas que " +
            "quiero aprender a expresar contigo. No te lo cuento " +
            "para presionarte, sino porque quiero ser sincero " +
            "con lo que siento y con lo que deseo para nosotros."
    },

    recuerdos: {
        titulo: "Lo que extraño de nosotros ✨",
        texto:
            "Extraño nuestras conversaciones, nuestras risas, " +
            "las salidas y esas llamadas en las que podíamos " +
            "pasar tanto tiempo hablando sin aburrirnos.\n\n" +
            "Extraño poder contarte cualquier cosa, compartir " +
            "mi día contigo y disfrutar de esos momentos en " +
            "los que no necesitábamos hacer nada extraordinario.\n\n" +
            "Porque para mí, muchas veces, lo especial no era " +
            "el plan ni el lugar. Era compartirlo contigo."
    },

    futuro: {
        titulo: "Lo que deseo para nosotros 💜",
        texto:
            "Quiero que las cosas cambien para bien. Que " +
            "podamos hablar con sinceridad, escucharnos, " +
            "respetar nuestras diferencias y mejorar aquello " +
            "que nos hizo daño.\n\n" +
            "También quiero recuperar esa complicidad que " +
            "teníamos, sin exigir que todo vuelva a ser " +
            "exactamente como antes.\n\n" +
            "No sé qué nos espera en el futuro, pero si " +
            "algún día volvemos a elegirnos como pareja, " +
            "quiero que sea porque ambos lo deseamos y " +
            "estamos dispuestos a construir algo más sano."
    }
};

// 5. Mostrar el mensaje de cada planeta.
const planetas = document.querySelectorAll(".planeta");

planetas.forEach(function (planeta) {
    planeta.addEventListener("click", function () {
        const nombrePlaneta = planeta.dataset.planeta;
        const mensaje = mensajes[nombrePlaneta];

        if (!mensaje) {
            console.error("No se encontró el mensaje del planeta.");
            return;
        }

        cartaCompleta.classList.add("oculto");

        tituloMensaje.textContent = mensaje.titulo;
        textoMensaje.textContent = mensaje.texto;

        mensajePlaneta.classList.remove("oculto");

        mensajePlaneta.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});

// 6. Cerrar el mensaje del planeta.
cerrarMensaje.addEventListener("click", function () {
    mensajePlaneta.classList.add("oculto");
});

// 7. Carta completa.
const parrafosCarta = [
    `No sé muy bien por dónde empezar, porque hay tantas
    cosas que he sentido últimamente que a veces ni siquiera
    sé cómo ponerlas en palabras. Pero, si estoy creando
    todo esto para ti, quiero que sea por una razón: quiero
    que puedas conocer lo que pasa por mi corazón, incluso
    esas cosas que a veces me cuesta expresar cuando estamos
    hablando.`,

    `Desde que volviste a acercarte a mí, he sentido una
    felicidad que no te imaginas. Tenerte nuevamente cerca,
    saber que todavía existe la posibilidad de compartir
    cosas contigo y sentir que quizá nuestra historia no
    ha terminado por completo me ha devuelto una ilusión
    que, de alguna manera, seguía guardando dentro de mí.`,

    `Pero, junto con esa felicidad, también ha llegado
    la incertidumbre.

    A veces me pregunto si realmente me elegiste a mí,
    si de verdad quieres construir algo conmigo o si
    simplemente estamos volviendo a acercarnos porque
    todavía existe cariño entre nosotros. No te digo esto
    para cuestionar tus sentimientos ni para hacerte sentir
    mal. Te lo digo porque quiero ser sincero contigo:
    después de todo lo que vivimos, hay una parte de mí
    que quiere ilusionarse sin miedo, pero otra que todavía
    necesita sentirse segura de que esta vez los dos
    queremos lo mismo.`,

    `Y creo que eso es algo que no puedo resolver solamente
    con mis pensamientos. Necesito que lo hablemos, que nos
    escuchemos y que, con el tiempo, podamos demostrarnos
    mediante nuestras acciones lo que realmente queremos.`,

    
    `También hay cosas que pasan dentro de mí que necesito
    aprender a manejar mejor. Hay situaciones relacionadas
    con la ropa, las redes sociales y las amistades que me
    generan incomodidad y sentimientos que a veces ni yo
    mismo sé cómo explicar.

    No quiero fingir que no me afectan, pero tampoco quiero
    que pienses que mi intención es decirte cómo tienes que
    vestirte, qué puedes publicar o con quién puedes
    relacionarte.`,

    `Quiero que entiendas que, cuando algo de estas situaciones
    me hace sentir incómodo, detrás de eso hay pensamientos,
    emociones y temores que necesito aprender a expresar
    de una manera sana. Sé que también tengo inseguridades
    que debo trabajar y no quiero convertirlas en una carga
    para ti.

    Pero para mí, estar en una relación también significa
    poder hablar de esas cosas con confianza, sin miedo a
    que el otro se moleste, sin sentir que debemos ocultar
    lo que pensamos y sin que una conversación difícil
    termine convirtiéndose en una pelea.`,

    `Me gustaría que pudiéramos sentarnos a hablar de estos
    temas con tranquilidad. Que yo pueda explicarte cómo
    me siento y por qué algunas cosas me afectan, pero que
    tú también tengas la libertad de contarme cómo lo ves,
    qué piensas y qué cosas son importantes para ti.

    No quiero que solamente escuches mi posición; también
    quiero comprender la tuya.`,

    `Me gustaría que pudiéramos llegar a acuerdos con los
    que los dos nos sintamos cómodos, acuerdos que nazcan
    de la comprensión y del respeto, no de la obligación
    ni del miedo a perder al otro.

    Entiendo que somos dos personas diferentes, que no
    siempre vamos a pensar igual y que querernos no significa
    tener exactamente las mismas opiniones sobre todo.`,

    `No espero que dejes de ser tú misma para estar conmigo.
    Lo que deseo es que podamos encontrar ese punto en el
    que ambos sintamos que nuestra relación se cuida, que
    nuestras emociones importan y que podemos expresar
    lo que necesitamos sin que ninguno sienta que está
    perdiendo su libertad.`,

    `También quiero aprender a escuchar cuando algo que yo
    hago te incomoda. No sería justo pedirte que tengas en
    cuenta mis sentimientos si yo no estoy dispuesto a tener
    en cuenta los tuyos.

    Quiero que el respeto, la consideración y la comunicación
    funcionen en ambas direcciones.`,

    `Sé que una conversación no va a solucionar todo de
    inmediato, pero creo que puede ser un comienzo. Prefiero
    que hablemos con sinceridad, aunque tengamos opiniones
    diferentes, a que guardemos cosas que con el tiempo
    puedan convertirse en distancia o resentimiento.

    No quiero que ninguno de los dos tenga que callarse
    para mantener al otro contento. Quiero que podamos
    hablar, comprendernos y decidir juntos qué estamos
    dispuestos a construir.`,

    `No te estoy pidiendo que cambies todo por mí. Te estoy
    diciendo que hay cosas que necesito compartir contigo
    porque me importas, porque quiero que podamos
    entendernos y porque, si algún día volvemos a elegirnos,
    me gustaría que fuera desde la confianza, la consideración
    y el deseo sincero de hacernos bien.`,


    `Yo también tengo cosas que mejorar. Sé que no siempre
    expreso lo que siento de la mejor manera, que a veces
    puedo ser brusco al hablar o dejar que mis emociones
    se noten más de lo que quisiera. No quiero justificar
    mis errores; quiero reconocerlos y trabajar en ellos.
    Si deseo que las cosas entre nosotros cambien para bien,
    también tengo que estar dispuesto a cambiar aquello
    que depende de mí.`,

    `Sin embargo, hay algo que me cuesta admitir: a veces
    siento que ya no existe la misma chispa, el mismo interés
    o esa manera en la que antes me hacías sentir que querías
    estar conmigo. Y, aunque entiendo que las cosas no
    pueden volver a ser exactamente como antes, extraño
    esa sensación de sentirte ilusionada conmigo, de notar
    que también te nace acercarte a mí, buscarme y compartir
    conmigo.`,

    `No espero que todo sea perfecto ni que tengas que
    demostrarme tu cariño a cada instante. Simplemente
    quiero sentir que esta ilusión no vive solamente
    dentro de mí, que los dos tenemos ganas de conocernos
    de nuevo, de recuperar la confianza y de descubrir
    qué podemos llegar a ser si hacemos las cosas de
    una manera diferente.`,

    `Hay algo que quizás nunca he sabido explicarte del
    todo, y es lo que significabas para mí en mi día a día.

    Antes de ti, yo ya era una persona bastante sola en
    cuanto a amistades. Tenía personas a mi alrededor,
    pero pocas veces encontraba esa conexión que me
    hiciera sentir que realmente podía ser yo mismo.
    Y cuando llegaste tú, te convertiste en esa persona
    con la que podía hablar de cualquier cosa, reírme
    hasta por las cosas más simples, salir, hacer llamadas
    durante horas y compartir mi día sin sentir que
    necesitaba algo más para estar bien.`,

    `Contigo, hasta los momentos más sencillos tenían
    algo especial. Podíamos estar hablando de cualquier
    tontería y yo no me aburría. Podíamos reírnos,
    contarnos lo que nos había pasado o simplemente
    acompañarnos. Tú eras mi persona de confianza,
    la que me escuchaba, con la que quería compartir
    mis cosas y a quien me nacía contarle lo que me pasaba.`,

    `Por eso, cuando te fuiste, sentí un vacío que no
    era solamente el de dejar de tener una novia.
    Era dejar de tener a esa persona con la que había
    construido una parte tan grande de mi vida cotidiana.

    Siempre he sido una persona que disfruta las cosas
    de una manera diferente. No soy mucho de fiestas,
    de salir a tomar o de ciertos ambientes en los que
    otras personas encuentran diversión. No es que esté
    mal, simplemente no es lo mío. Tengo mi manera de
    ver la vida, mis gustos y mi forma de disfrutar el
    tiempo, y no siento la necesidad de cambiar eso
    para encajar en un círculo social.`,

    `Contigo encontré a alguien con quien podía compartir
    mi mundo sin sentir que tenía que ser diferente.
    Alguien con quien podía reírme, hablar durante horas,
    salir o quedarme en una llamada sin necesidad de
    hacer nada extraordinario. No necesitaba un plan
    increíble ni un lugar especial; muchas veces,
    simplemente tenerte al otro lado del teléfono
    era suficiente para hacerme feliz.`,

    `Por eso tu ausencia me dolió tanto. Porque no se
    trataba solamente de dejar de tener una pareja,
    sino de extrañar a esa persona con la que había
    encontrado una conexión que no sentía de la misma
    manera con los demás.`,

    `Y ahora que has vuelto a acercarte, me he sentido
    feliz. Muchísimo. Pero también me ha pasado algo
    que me cuesta explicar: extraño sentir contigo
    lo que sentía antes.

    Extraño esa naturalidad, esas ganas de hablar contigo,
    esa sensación de que podía contarte cualquier cosa
    y que simplemente disfrutábamos de estar juntos.
    Extraño esa chispa que hacía que hasta una llamada
    cualquiera se convirtiera en uno de mis momentos
    favoritos del día.`,

    `Y me duele un poquito reconocer que, aunque ahora
    estás nuevamente cerca, no siempre siento lo mismo.
    No sé si es porque las cosas cambiaron, porque todavía
    estamos intentando encontrar nuestro lugar o porque
    ambos tenemos cosas que sanar. No quiero asumir que
    ya no sientes lo mismo por mí, pero tampoco quiero
    mentirte y fingir que no noto la diferencia.`,

    `Quizás una parte de mí esperaba que, al volver a
    acercarnos, esa conexión regresara de inmediato.
    Pero entiendo que no podemos obligarnos a sentir
    lo mismo de un día para otro y que, después de todo
    lo que pasó, también tenemos que aprender a
    relacionarnos de una manera diferente.`,

    `No te cuento esto para que sientas que tienes que
    llenar mi soledad ni para hacerte responsable de mi
    felicidad. Te lo cuento porque quiero que entiendas
    por qué tu ausencia me dolió tanto y por qué tenerte
    nuevamente cerca significa tanto para mí.`,

    `No extraño solamente tenerte como pareja. Extraño
    ser esa persona que podía compartir contigo hasta
    el detalle más pequeño de su día. Extraño nuestra
    complicidad, nuestras risas, nuestras conversaciones
    y esa sensación de que, incluso cuando no había
    nada especial que hacer, estar contigo ya era suficiente.`,

    `Y si algún día logramos construir algo nuevo,
    me gustaría que pudiéramos recuperar esa cercanía,
    no exactamente como era antes, sino de una manera
    más bonita, más sana y más consciente. Quiero volver
    a disfrutar de tu compañía, sentir que nos nace
    buscarnos y descubrir que todavía podemos encontrar
    alegría en las cosas más sencillas.

    Porque, en el fondo, no quiero regresar al pasado
    como si nada hubiera sucedido. Quiero que podamos
    construir algo que nos haga sentir bien a los dos
    en el presente.`,

    `Porque yo sí quiero que las cosas cambien para bien.
    No quiero que volvamos a vivir lo mismo, que repitamos
    nuestros errores o que terminemos haciéndonos daño
    por no saber escucharnos. Quiero que, si algún día
    decidimos volver a estar juntos, sea porque hemos
    aprendido, porque nos comprendemos mejor y porque
    los dos sentimos que vale la pena intentarlo.`,

    `Y, sobre todo, quiero que sea una decisión libre.
    No quiero que estés conmigo por costumbre, por miedo
    a estar sola o porque sabes que siempre tendrás un
    lugar en mi vida. Quiero que estés conmigo porque
    realmente lo deseas, porque me eliges conociendo
    quién soy, con mis virtudes, mis errores y todo
    aquello que todavía estoy aprendiendo a mejorar.`,

    `Yo no puedo prometerte que nunca volveremos a tener
    dificultades. Sería mentirte. Pero sí puedo decirte
    que quiero aprender a enfrentarlas de una manera
    diferente, hablar en lugar de herir, escuchar en
    lugar de asumir y demostrar con hechos aquello
    que muchas veces las palabras no alcanzan a explicar.`,

    `No sé qué nos espera más adelante. No sé si nuestros
    caminos volverán a unirse de la manera que alguna
    vez imaginamos. Pero hoy sé que todavía hay sentimientos
    en mí, que me importas y que me hace feliz tenerte
    nuevamente cerca.`,

    `Por eso hice esta pequeña galaxia para ti. Porque,
    de alguna manera, quería encontrar un lugar donde
    pudiera guardar todo lo que llevo dentro y compartirlo
    contigo. Cada estrella, cada planeta y cada palabra
    forman parte de algo que quizás no siempre sé decirte
    mirándote a los ojos.`,

    `No quiero que leas esto como una petición para que
    me des una respuesta ahora, ni como una promesa de
    que tenemos que volver. Quiero que lo leas sabiendo
    que detrás de cada palabra hay alguien que siente
    mucho por ti, que tiene miedo de volver a salir
    lastimado, pero que también conserva la ilusión de
    que podamos hacer las cosas mejor.`,

    `Si algo deseo de esta nueva etapa, es que podamos
    ser sinceros, que tengamos la confianza de hablar
    de lo que nos duele y la voluntad de trabajar juntos
    en lo que queremos construir.`,

    `Porque, a pesar de las dudas, de lo que pasó y de
    todo lo que todavía necesitamos aprender, hay algo
    que quiero que sepas: mi deseo no es simplemente
    volver a tenerte en mi vida; es que, si volvemos
    a elegirnos, podamos hacernos bien.`,

    `Y si esta galaxia tiene algo que representar,
    quiero que sea eso: no la promesa de que todo será
    perfecto, sino la esperanza de que todavía podemos
    descubrir algo bonito, siempre que los dos queramos
    caminar hacia ello.`,

    `Con todo lo que siento y con todo lo que todavía
    estoy aprendiendo a decirte,

    Alguien que te quiere de verdad. ❤️`
];

// 8. Crear el botón para abrir la carta completa.
const botonCarta = document.createElement("button");

botonCarta.id = "botonCartaCompleta";
botonCarta.className = "boton-volver";
botonCarta.textContent = "Leer mi carta para ti ❤️";

pantallaPlanetas.insertBefore(botonCarta, volverGalaxia);

// 9. Crear el espacio donde aparecerá la carta.
const cartaCompleta = document.createElement("article");

cartaCompleta.id = "cartaCompleta";
cartaCompleta.className = "mensaje-planeta oculto";
cartaCompleta.setAttribute("aria-live", "polite");

const tituloCarta = document.createElement("h3");

tituloCarta.textContent = "Lo que llevo en el corazón ❤️";

cartaCompleta.appendChild(tituloCarta);

// Cada párrafo se crea por separado para conservar
// los espacios y facilitar la lectura.
parrafosCarta.forEach(function (parrafo) {
    const elementoParrafo = document.createElement("p");

    elementoParrafo.textContent = parrafo.trim();

    cartaCompleta.appendChild(elementoParrafo);
});

// Botón para cerrar la carta.
const cerrarCarta = document.createElement("button");

cerrarCarta.className = "boton-volver";
cerrarCarta.textContent = "Volver a los planetas ✨";

cartaCompleta.appendChild(cerrarCarta);

const sorpresaFinal = document.createElement("div");
sorpresaFinal.className = "sorpresa-final";

sorpresaFinal.innerHTML = `
    <div class="sorpresa-estrella">✦ 💜 ✦</div>
    <h3>Un último deseo para ti...</h3>
    <p>
        Hay cosas que no necesitan una respuesta inmediata.
        A veces, basta con expresar lo que llevamos en el corazón
        y dejar que el tiempo nos muestre el camino.
    </p>
    <button type="button" id="botonSorpresa">
        Descubrir mi último mensaje ✨
    </button>
    <p id="mensajeSorpresa" class="oculto">
        Si algún día volvemos a elegirnos, me gustaría que fuera
        desde una versión más bonita y sana de nosotros.
        Sin olvidar lo vivido, pero construyendo algo nuevo,
        con amor, respeto, tranquilidad y hechos que acompañen
        las palabras. ❤️
    </p>
`;

cartaCompleta.insertBefore(sorpresaFinal, cerrarCarta);

const botonSorpresa = sorpresaFinal.querySelector("#botonSorpresa");
const mensajeSorpresa = sorpresaFinal.querySelector("#mensajeSorpresa");

botonSorpresa.addEventListener("click", function () {
    mensajeSorpresa.classList.remove("oculto");
    botonSorpresa.classList.add("oculto");

    mensajeSorpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});


pantallaPlanetas.insertBefore(cartaCompleta, volverGalaxia);

// 10. Mostrar la carta completa al pulsar el botón.
botonCarta.addEventListener("click", function () {
    mensajePlaneta.classList.add("oculto");
    cartaCompleta.classList.remove("oculto");

    cartaCompleta.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// 11. Cerrar la carta y regresar a los planetas.
cerrarCarta.addEventListener("click", function () {
    cartaCompleta.classList.add("oculto");

    botonCarta.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// 12. Cerrar un mensaje de planeta y volver a explorar.
cerrarMensaje.addEventListener("click", function () {
    mensajePlaneta.classList.add("oculto");
});

// 13. Volver a la galaxia anterior.
volverGalaxia.addEventListener("click", function () {
    pantallaPlanetas.classList.add("oculto");
    viaje.classList.remove("oculto");

    mensajePlaneta.classList.add("oculto");
    cartaCompleta.classList.add("oculto");
});
