# EPIC Junior Ambato — Material

**Jueves 22 de octubre de 2026 · 14h00 – 15h30 · Unidad Educativa Bilingüe Indoamérica, salón B14 · Ambato**

Ponente principal: Fis. Abigail Rivadeneira (docente de Física, UEBI).
Facilitador: Fis. Ángel David Rodríguez Ocaña (docente de Matemática, UEBI / Maestría en Física, Yachay Tech).

## Contenido

| Archivo | Qué es |
|---|---|
| `entre_estrellas_y_agujeros_negros.pdf` | Diapositivas de la charla. **Pendiente de subir.** |
| `entre_estrellas_y_agujeros_negros.ipynb` | Notebook del tutorial de Python (Google Colab). |
| `estrellas_hr.csv` | Copia de respaldo del catálogo estelar. Lo normal es que los datos del Tema 2 se exporten del applet H–R con el botón **⬇ Exportar datos (CSV)** → `datos_estrellas_hr.csv`. Mismas 40 filas y mismas columnas: `nombre, temperatura, luminosidad, radio, espectro, grupo, tiene_planetas`. |
| `objetos_compactos.csv` | 10 objetos compactos: `nombre, tipo, masa_soles, radio_km`. Se usa en la tarea final. No sale del applet: las estrellas de neutrones y los agujeros negros no aparecen en el diagrama H–R. |

## Para subir la charla

Coloca el PDF en esta carpeta con el nombre exacto:

```
entre_estrellas_y_agujeros_negros.pdf
```

Los botones "Ver PDF" y "Descargar" de `libro_epic_junior_ii_ambato.html` ya apuntan ahí:
no hay que editar la página.

## Enlaces del evento

- Página del evento: <https://ciencialatitud0.github.io/EPIC_6/EPIC_JR_Ambato.html>
- Libro de trabajo: <https://ciencialatitud0.github.io/EPIC_6/libro_epic_junior_ii_ambato.html>
- Notebook en Colab: <https://colab.research.google.com/github/ciencialatitud0/EPIC_6/blob/main/EPIC_Junior_Ambato/entre_estrellas_y_agujeros_negros.ipynb>
- Simulador H–R: <https://cphysplus.github.io/fisica-interactiva/Hertzsprung-Russell.html>

## Notas para el instructor

El notebook sigue el estilo de `EPIC_Junior/Day_1/1_python_para_ciencia.ipynb`:
código mínimo, datos en `.csv` que se cargan con `files.upload()` y nada que instalar.

La tarea final tiene tres líneas marcadas con `ESCRIBE_AQUI`. Las respuestas son:

1. `objetos["radio_schwarzschild"] = 2.95 * objetos["masa_soles"]`
2. `objetos["densidad"] = masa_kg / volumen`
3. `plt.scatter(grupo["masa_soles"], grupo["radio_km"], s=90, label=tipo)`

## Applet H–R

El botón de exportación vive en `Hertzsprung-Russell.html` del repositorio
`cphysplus/fisica-interactiva`. Si se actualiza ese applet, hay que conservar
el bloque `<script>` final con `exportarDatosCSV()`.
