# Proyecto A - El uno por ciento que falta

Investigación guiada para EPIC Jr II 2026. Un equipo de tres estudiantes de secundaria utiliza observaciones reales de TESS para estimar el período orbital de WASP-18 b, la profundidad de sus tránsitos y el cociente entre los radios del planeta y la estrella.

## Estructura

```text
project_A/
|-- prepare_data.py
|-- student_data/
|   `-- wasp18_sector2.csv
|-- student_notebook.ipynb
|-- mentor_notes.md
|-- reference_notebook.ipynb
`-- README.md
```

- `student_notebook.ipynb`: versión sin resultados guardados, con tareas breves marcadas para los estudiantes.
- `reference_notebook.ipynb`: solución completa y ejecutada para validación de autores y mentores.
- `mentor_notes.md`: rangos, errores frecuentes y ruta de rescate progresiva.
- `prepare_data.py`: adquisición y preparación reproducible; requiere internet y es solo para autores.

## Ejecución

Los notebooks no necesitan internet ni `lightkurve`. Requieren que la carpeta `student_data` permanezca junto a ellos.

1. Abra el notebook correspondiente en Jupyter o VS Code.
2. Seleccione un kernel con NumPy, Pandas y Matplotlib.
3. Ejecute las celdas en orden. En la versión estudiantil, complete cada celda marcada como `TAREA` antes de continuar.

No ejecute `prepare_data.py` durante la actividad. Úselo únicamente si los autores necesitan regenerar el CSV desde MAST.

El archivo que se distribuye con la actividad es `student_data/wasp18_sector2.csv`.

## Procedencia de los datos

Consulta de Lightkurve realizada el **1 de agosto de 2026**:

```python
lk.search_lightcurve(
    "TIC 100100827",
    mission="TESS",
    author="SPOC",
    sector=2,
    exptime=120,
)
```

La consulta devolvió exactamente un producto:

| Campo | Valor |
|---|---|
| Misión | TESS Sector 2 |
| Año | 2018 |
| Autor del pipeline | SPOC |
| Cadencia | 120 segundos |
| Objetivo | TIC 100100827 |
| Distancia de búsqueda | 0.0 arcsec |
| Cámara / CCD | 2 / 2 |
| Intervalo observado | 2018-08-23 a 2018-09-20 |
| Archivo | `tess2018234235059-s0002-0000000100100827-0121-s_lc.fits` |
| MAST URI | `mast:TESS/product/tess2018234235059-s0002-0000000100100827-0121-s_lc.fits` |
| Versión del pipeline | `spoc-5.0.11-20200915` |
| Data release | 42 |

La serie utilizada es `PDCSAP_FLUX`, que ya contiene correcciones del pipeline de TESS y no representa flujo crudo del detector.

## Preparación del CSV

`prepare_data.py` descarga el producto con `quality_bitmask="none"`, conserva la columna de calidad y crea una máscara `use_point` combinando:

- tiempos, flujos y errores finitos;
- la máscara de calidad `default` de `TessQualityFlags`.

El flujo y su error se dividen por la mediana global del flujo aceptado. `time_days` representa días desde el comienzo utilizable de las observaciones. El CSV distribuido contiene únicamente:

```text
time_days, relative_flux, relative_flux_error, use_point
```

No se aplicó detrending adicional, suavizado, interpolación, sigma clipping libre ni normalización individual de cada tránsito.

## Entorno validado

| Componente | Versión |
|---|---:|
| Python | 3.13.5 |
| Lightkurve | 2.6.0 |
| NumPy | 2.1.3 |
| Pandas | 2.2.3 |
| Matplotlib | 3.10.0 |
| Astropy | 7.0.0 |

## Parámetros de la investigación

Ventanas de tres tránsitos consecutivos:

```text
8.64 < time_days < 9.00
9.58 < time_days < 9.94
10.52 < time_days < 10.88
```

Cada centro se estima con la mediana temporal de los diez puntos aceptados de menor flujo. Para medir la profundidad se usan:

- dentro del tránsito: `-0.03 <= phase <= 0.03`;
- fuera del tránsito: `-0.12 <= phase <= -0.08` y `0.08 <= phase <= 0.12`.

## Validación de resultados

| Cantidad | Resultado de referencia | Rango inicial aceptable |
|---|---:|---:|
| Período orbital | 0.94273 días | 0.92–0.96 días |
| Profundidad | 0.010381 = 1.0381 % | 0.007–0.012 |
| Cociente `Rp/Rstar` | 0.101887 | 0.084–0.110 |

El notebook de referencia fue ejecutado desde un kernel limpio usando el CSV local: 18 celdas de código, 0 errores. El notebook estudiantil no conserva resultados ni contiene los valores finales anteriores en sus celdas.

Estos rangos son controles para autores y mentores. No deben mostrarse a los estudiantes antes de que completen sus cálculos.
