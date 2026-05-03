import { defineType, defineField } from 'sanity'

export const habilidades = defineType({
  name: 'habilidades',
  title: 'Habilidades Técnicas',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la Herramienta',
      type: 'string',
    }),
    defineField({
      name: 'icono',
      title: 'Icono (SVG/PNG)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})