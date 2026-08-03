# Proyecto D: El chirrido de siete milisegundos
## Guía del estudiante

## La pregunta que van a responder

**¿Se puede reconocer la misma señal de onda gravitacional en dos detectores distintos, y qué nos dice la diferencia en su tiempo de llegada?**

El 14 de septiembre de 2015, dos observatorios —LIGO Hanford (**H1**, en Washington) y LIGO Livingston (**L1**, en Luisiana), separados por unos 3002 km— registraron una señal hoy conocida como **GW150914**. Se interpretó como la fusión de dos agujeros negros, y fue la primera detección directa de ondas gravitacionales. Ustedes van a recuperar, con su propio código, una de las piezas de evidencia centrales de ese descubrimiento: que una señal relacionada aparece en los dos detectores, con un retraso de llegada físicamente posible.

No van a reproducir el análisis completo de LIGO. No van a estimar masas de agujeros negros, ni la posición en el cielo, ni una significancia estadística formal. Van a hacer algo más concreto y igual de convincente: comparar dos mediciones reales, medir un retraso con correlación, y evaluar si ese retraso tiene sentido físico.

## Conceptos clave

### Strain

Una onda gravitacional produce un cambio fraccional minúsculo en las longitudes que mide un interferómetro:

$$h(t) = \frac{\Delta L(t)}{L}$$

El strain es **adimensional** — no es una distancia en metros, es una fracción.

### Datos crudos vs. datos condicionados

Los datos crudos que miden los detectores están dominados por ruido instrumental; la señal de GW150914 no es visible a simple vista en ellos. El equipo del proyecto ya les preparó una versión **condicionada** (whitening + filtro pasa-banda de 35–350 Hz + normalización), que reduce el peso de las frecuencias donde el ruido del detector es más grande y hace visible la oscilación característica.

**Importante:** los datos condicionados no son "los datos reales sin ruido" — son una representación transformada, con otras unidades. Nunca los describan como "strain crudo".

### El chirrido ("chirp")

Durante los últimos instantes de la fusión de dos objetos compactos, la órbita se acelera, y la frecuencia de la onda gravitacional sube rápidamente con el tiempo. En un diagrama tiempo-frecuencia (espectrograma), esto se ve como un rasgo que sube — un "chirrido".

### Diferencia en el tiempo de llegada

Van a usar la convención:

$$\Delta t_{HL} = t_{H1} - t_{L1}$$

- $\Delta t_{HL} > 0$: la señal llegó primero a Livingston.
- $\Delta t_{HL} < 0$: la señal llegó primero a Hanford.

Los dos sitios están separados por unos 3002 km. El tiempo máximo que la luz (o cualquier señal que viaje a esa velocidad, incluyendo una onda gravitacional) tarda en recorrer esa distancia es de aproximadamente **10.0 ms**. Un retraso medido fuera de ese rango sería físicamente incompatible con una única señal llegando a ambos sitios.

Una sola medición de retraso **no** determina una única dirección en el cielo — muchas direcciones distintas pueden producir la misma diferencia de tiempo proyectada.

## Estructura de tres sesiones (≈2 horas cada una)

### Sesión 1 — Encuentren el chirrido en los dos detectores

Antes de tocar los datos, van a discutir y escribir una predicción corta sobre qué esperarían ver si una misma onda gravitacional pasara por dos detectores distantes (sin buscar todavía el retraso publicado). Luego van a inspeccionar los datos preparados, comparar el strain crudo con el condicionado, y usar un espectrograma para ver el chirrido en tiempo y frecuencia. Al final de esta sesión deberían tener su **primera figura lista para presentación**.

### Sesión 2 — Midan el retraso entre detectores

Van a invertir la respuesta de Livingston (usando una convención de signos fija que se les explica en el cuaderno), escanear un rango de posibles desplazamientos temporales, calcular la correlación para cada uno, y quedarse con el que da la correlación más alta. Después, usando una función ya provista, van a desplazar la serie invertida de Livingston por ese retraso medido (sin envolver el arreglo circularmente) y superponerla sobre el strain condicionado de Hanford, para ver si las oscilaciones principales alinean mejor. Al final deberían tener su retraso medido (en muestras y en milisegundos), su figura de correlación, y esta comparación de formas de onda alineadas.

### Sesión 3 — Prueben e interpreten el resultado

Van a repetir exactamente el mismo procedimiento en un intervalo de puro ruido (sin evento), para comparar. Van a calcular el tiempo máximo de viaje de la luz y verificar que su retraso medido es físicamente posible. **Solo al final** de esta sesión el cuaderno les muestra el valor publicado por LIGO ($6.9^{+0.5}_{-0.4}$ ms), para que puedan comparar su propio resultado sin haber visto la respuesta antes. Las últimas 30–40 minutos de esta sesión son para armar su presentación — protéjanlos.

## Lo que sí van a programar

- Inspeccionar arreglos de NumPy.
- Construir selecciones booleanas para intervalos de tiempo fijos.
- Usar un loop o una list comprehension.
- Calcular correlaciones llamando a una función ya construida (`correlation_for_shift`).
- Usar `numpy.argmax`.
- Convertir muestras a milisegundos.
- Interpretar evidencia y explicitar limitaciones.

## Lo que NO necesitan hacer

- Descargar archivos de GWOSC ni leer HDF5.
- Convertir tiempo GPS.
- Diseñar filtros de whitening o pasa-banda.
- Estimar una densidad espectral de potencia.
- Usar `np.roll` para desplazar los datos (usen siempre las funciones de `gw_helpers.py`, que evitan el "wrap-around" circular).
- Interpolar a precisión sub-muestra.
- Hacer matched filtering ni calcular una probabilidad de falsa alarma.
- Estimar masas de agujeros negros.
- Instalar paquetes.

## Errores comunes a evitar

- **Llamar "strain crudo" a los datos condicionados.** Cada gráfico y cada frase debe dejar claro si están hablando de strain crudo o de strain condicionado.
- **Olvidar la inversión de signo de L1.** Sin ella, la correlación preferida puede ser más débil o tener la interpretación equivocada.
- **Usar `np.roll`.** Envuelve las muestras del final al principio del arreglo — usen `shift_for_plot`, que no lo hace.
- **Invertir la convención del retraso.** Recuerden: retraso positivo = Livingston recibió la señal primero.
- **Reportar demasiada precisión.** Con una resolución de ≈0.244 ms por muestra, no tiene sentido dar su resultado con más de dos o tres cifras decimales.
- **Tratar el máximo del intervalo de control como "otro evento".** Todo intervalo escaneado tiene algún máximo; lo que importa es si el evento es claramente más convincente.
- **Afirmar que la onda "viajó de Livingston a Hanford".** La onda llegó primero a Livingston, pero Livingston no fue la fuente — la fuente está a cientos de megaparsecs de distancia.

## Qué sí pueden concluir, y qué no

**Apoyado directamente por su trabajo:** una señal relacionada aparece en los dos detectores, con una diferencia de tiempo de llegada físicamente posible.

**Apoyado por el análisis público completo de LIGO (no por este proyecto):** GW150914 fue una onda gravitacional producida por la fusión de dos agujeros negros.

**No establecido por este proyecto:** las masas de los agujeros negros, la distancia a la fuente, la significancia estadística formal, la posición exacta en el cielo, la energía radiada, ni la exclusión de toda posible causa instrumental.

Su presentación final debe incluir al menos una limitación explícita de su propio análisis.
