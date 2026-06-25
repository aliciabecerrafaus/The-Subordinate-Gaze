# DESIGN.md — The Subordinate Gaze

**Version:** 1.0.0  
**Last Updated:** 2026-06-08  
**Status:** Decisions Confirmed

---

## Purpose

This document captures the design decisions, creative vision, and user experience principles for *The Subordinate Gaze*. It serves as a living reference to guide all future design and development choices.

The project is an interactive web experience exploring identity, self-construction, memory, desire, vulnerability, and collective reflection — inspired by Simone de Beauvoir, The Unsent Project, and Learning to Love You More.

It should feel like a **living archive**, not a social network.

---

## 1. Concept & Narrative

### Promesa Emocional Core

When a visitor completes an interaction, they should feel:

- **Un sentido de ser visto** — recognized, acknowledged
- **Una herramienta para el auto-descubrimiento** — a mirror and a map
- **Un acto político de visibilidad** — personal expression as collective power

### Audiencia

| Segment | Description |
|---------|-------------|
| **Primary** | Gente joven en sus 20s, con interés político, con ganas de aprender, reivindicativos, una generación Z que quiere ser deconstruida para sacar lo mejor de sí mismos |
| **Secondary** | Cualquier persona con ganas de ser deconstruida, puedes querer empatizar o formar parte de este movimiento sin necesidad de ser tan joven |
| **Explicitly Excluded** | Público de mente cerrada |

### Anonimato — Cuatro Pilares

| Pilar | Significado |
|-------|-------------|
| **Protección** | Identidades vulnerables resguardadas |
| **Igualador** | Elimina jerarquías — todos son iguales |
| **Intimidad** | Confidarse en el vacío, sin juicio |
| **Arte** | El mensaje sin el mensajero |

### Significado de "Subordinate Gaze"

> El sujeto se mira a sí mismo a través de la colectividad.

### Relación entre lo Personal y lo Político

Hay un sutil posicionamiento político no explícito en el proyecto. El usuario es libre de querer posicionarse de forma segura sin miedo a la crítica, siempre y cuando este lo haga dentro de unos límites sociales.

### Referencias de Influencia

| Referencia | Score | Rol |
|------------|-------|-----|
| **Simone de Beauvoir, *The Second Sex*** | 5/5 | Su filosofía adaptada a la jerga de los jóvenes de hoy en día es el motor del proyecto |
| **The Unsent Project** | 3/5 | Inspiración como concepto de usuario anónimo que encuentra un espacio seguro para expresarse |
| **Learning to Love You More** | 3/5 | Inspiración a la hora de trabajar con los assignments |

---

## 2. User Experience

### Acción Principal del Usuario

1. **Seleccionar assignments/prompt** — elegir qué explorar
2. **Explorar un archivo/archive** — leer, contemplar, conectar

### Cómo se Encuentran los Usuarios con los Assignments

✅ **Colecciones temáticas** — agrupadas por identidad, deseo, memoria, etc.

### Qué Pasa Después de Enviar

✅ Entrada en el **archivo vivo** (living archive) + un estado de **espera / contemplación**.

### Duración Esperada de Sesión

✅ **Open-ended** — sin límite. El usuario entra cuando quiere y sale cuando quiere.

### Onboarding

✅ **Instrucciones sutiles, integradas en la interfaz** — sin tutoriales invasivos, sin modales explicativos. La interfaz se guía sola.

---

## 3. Visual Identity

### Mood Visual

- ✅ **Minimal** — sin ruido, sin distracciones
- ✅ **Elegante** — refinado, cuidado, respetuoso

### Institucional vs Íntimo

Equilibrio entre ambos: que parezca una **biblioteca de archivos** con los distintos temáticos de los assignments, pero que no deje de sentirse íntimo para que el usuario se sienta cómodo a compartir sus experiencias.

### Nivel de "Ruido" Visual

✅ **Limpio, mucho espacio en blanco** — la quietud es intencional.

### Uso de Imágenes

✅ **Formas abstractas / arte generativo**

Se imagina una página de entrada que parezca una **biblioteca con libros generados en 3D** y una pequeña animación que simule que el usuario coge el libro de su estantería para adentrarse en los assignments (previamente distribuidos en los libros según su temática).

### Logo

✅ **Sí, un logo distintivo** — identidad visual propia.

### Diseño Evolutivo

✅ **Identidad estática** — no cambia con el tiempo, es consistente.

---

## 4. Typography

### Typefaces

| Uso | Typeface | Estilo |
|-----|----------|--------|
| **Headings** | Inter | Sans-serif, moderno, limpio |
| **Body** | Lora | Serif, como leer una carta |

### Filosofía Tipográfica

- **Dos typefaces** — contraste entre heading y body
- **Texto como elemento visual** — la tipografía forma parte de la experiencia
- **Como leer una carta** — las submissions tienen intimidad tipográfica
- **Respeta las preferencias del sistema** — tamaño ajustable según accesibilidad

---

## 5. Color System

### Filosofía del Color

| Rol | Color | Hex |
|-----|-------|-----|
| **Primary** | Verde | `#039445` |
| **Secondary** | Rosa | `#f2abec` |
| **Accent 1** | Azul | `#4868d3` |
| **Accent 2** | Amarillo | `#ffcf00` |
| **Accent 3** | Borgoña | `#7b0040` |
| **Accent 4** | Rojo | `#e40000` |

### Significado del Color

✅ **Parcialmente semántico** — uso contextual, no rígido.

### Dark Mode

❌ **No** — la experiencia es **solo en luz** (light-only). La luz como metáfora de visibilidad, claridad, transparencia.

---

## 6. Layout & Grid

### Estructura Principal del Layout

✅ **Pantalla completa, inmersivo** — para la página de entrada. El usuario entra en un espacio, no en una página.

### Contenido Visible a la Vez

✅ **Unas pocas cosas** — contexto + foco. No abrumar, guiar.

### Layout Estático o Fluido

✅ **Fijo, estructurado, intencional** — cada elemento está en su lugar por razón.

### Estructura Visual del Archive

✅ **Temático (agrupado por tema)** — cada libro de la estantería es una temática de los assignments.

### Separadores Visuales

✅ **Transiciones / animaciones** — el movimiento como puente entre secciones.

---

## 7. Motion & Animation

### Rol del Movimiento

✅ **Funcional** — guiar la atención, no decorar.

### Transiciones entre Estados

✅ **Fade suave** — entrada y salida fluida entre vistas.

### Motion Ambiental

❌ **No** — la quietud es intencional. No hay movimiento de fondo innecesario.

### Texto con Animación

❌ **No** — aparición instantánea. El texto aparece completo, sin typing effect.

### Micro-interacciones

✅ **Sí, sutiles** — hover states, focus rings, feedback táctil.

---

## 8. Assignment Library

### Número de Assignments en Lanzamiento

✅ **25–50** — rico, sustancial, pero no abrumador.

### Categorización

✅ **Por tema** — identidad, deseo, memoria, vulnerabilidad, colectividad, etc.

### Niveles de Dificultad

❌ **No** — todos los assignments son iguales. No hay jerarquía de compromiso.

### Cómo se Añaden Nuevos Assignments

✅ **Comunidad-submitted** — la comunidad propone, la curación valida.

### Mostrar el Count de Assignments

❌ **No** — el misterio es mejor. No numerar, no cuantificar.

### Contexto de Assignments

✅ **Prompt + brief context** — suficiente para empezar, no tanto para limitar.

### Guardar Assignments para Después

❌ **No** — te comprometes ahora o no. La inmediatez como parte de la experiencia.

---

## 9. Archive Experience

### Estructura del Archive

✅ **Temático (agrupado por tema)** — cada libro de la estantería es una temática de los assignments.

### Filtrar / Buscar

- ✅ **Buscar por keyword** — búsqueda directa
- ✅ **Text + theme tags** — filtrado por etiquetas temáticas

### Sentir la Escala

✅ **Sí** — total count visible. El usuario sabe que hay algo más grande que él.

### Reaccionar a Entradas del Archive

❌ **No** — witnessing es suficiente. No hay likes, no hay comentarios, no hay métricas de validación.

### Entries Destacadas

❌ **No** — todas las entries son iguales. Sin jerarquía de valor.

### Duración en el Archive

✅ **Permanentemente** — una vez publicado, permanece. La memoria como fundamento.

---

## 10. Forms & Participation

### Submission Form

✅ **Estructurado** — fields + textarea. Guiado pero libre.

### Límites de Caracteres/Palabras

❌ **No** — dejar que los usuarios escriban lo que necesitan. Sin restricciones de longitud.

### Confirmación tras Enviar

✅ **Una submission aleatoria emparejada** (anonymous pairing) — recibes otra voz al enviar la tuya. Conexión anónima.

### Editar/Borrar Submissions

✅ **Sí, siempre** — edit/delete always allowed. El control es del autor.

### Content Warning System

✅ **Antes de acceder al archivo, debe preguntar si eres mayor de 18 años** — verificación de edad como umbral de entrada.

---

## 11. Accessibility

### Nivel WCAG

⚠️ **No definido aún** — pendiente de decisión. Se recomienda WCAG AA como mínimo.

---

## 12. Responsive Behaviour

### Dispositivos Prioritarios

✅ **Igual prioridad para todos** — desktop, tablet, móvil.

### Experiencia en Móvil

✅ **Misma experiencia, escalada** — no una versión reducida, una versión adaptada.

### Tablet

✅ **Layout único para tablet** — experiencia propia, no intermedia entre desktop y móvil.

---

## 13. Technical Constraints

### Escala Esperada

⚠️ **Desconocida** — pendiente de definición técnica.

### Persistencia de Submissions

✅ **Sí** — almacenadas en base de datos. El archive es permanente.

---

## Resumen Visual

| Categoría | Decisión |
|-----------|----------|
| **Emoción** | Ser visto + auto-descubrimiento + visibilidad política |
| **Audiencia** | Gen Z (20s) política y reivindicativa |
| **Anonimato** | Protección, igualador, intimidad, arte |
| **Estética** | Minimal + Elegante |
| **Tipografía** | Inter (headings) + Lora (body) |
| **Color** | Verde `#039445` + Rosa `#f2abec` + 4 accents |
| **Layout** | Inmersivo, pantalla completa, estructurado |
| **Motion** | Funcional, fade suave, micro-interacciones sutiles |
| **Assignments** | 25-50, por tema, community-submitted |
| **Archive** | Temático, libros 3D, búsqueda por keyword |
| **Formulario** | Estructurado, anonymous pairing al enviar |
| **Verificación** | Pregunta +18 antes del archive |
| **Responsive** | Igual prioridad, layout tablet único |
| **Color Mode** | Light-only |
| **Entries** | Permanentes, sin jerarquía, sin reacciones |

---

## Pendientes (Open Decisions)

| Ítem | Prioridad | Notas |
|------|-----------|-------|
| WCAG level | Alta | Recomendar AA |
| Escala técnica | Media | Definir infraestructura |
| Moderación de community-submitted | Alta | Definir proceso de validación |
| Política de contenido +18 | Alta | Definir boundaries |

---

## Appendix: Inspiration References

- **Simone de Beauvoir** — *The Second Sex* — identity as construction, the concept of the Other
- **The Unsent Project** — anonymous emotional confession, intimacy at scale
- **Learning to Love You More** — collaborative artistic archive, prompt-based participation, visual and textual hybrid

---

*This document reflects confirmed design decisions. Update it only when decisions change.*