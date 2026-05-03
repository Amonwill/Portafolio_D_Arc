import { defineType, defineField } from 'sanity'

export const destacados = defineType({
  name: 'destacados',
  title: 'Configuración de Destacados',
  type: 'document',
  fields: [
    defineField({
      name: 'proyectosDestacados',
      title: 'Proyectos en el Hero Slider',
      description: 'Selecciona y ordena los proyectos que aparecerán en la parte superior del portafolio.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'proyecto' }]
        }
      ],
      validation: (Rule) => Rule.max(6).warning('Se recomienda un máximo de 6 proyectos para no saturar el slider.')
    }),
  ],
})