import { defineType, defineField } from 'sanity'

export const proyecto = defineType({
  name: 'proyecto',
  title: 'Mis Proyectos',
  type: 'document',
  fields: [
    defineField({ 
      name: 'titulo', 
      type: 'string', 
      title: 'Título' 
    }),
    
    defineField({ 
      name: 'categoria', 
      type: 'string', 
      title: 'Categoría', 
      options: { 
        list: [
          { title: 'Concept Art', value: 'Concept Art' },
          { title: 'Characters', value: 'Characters' }
        ] 
      } 
    }),

    defineField({
      name: 'procesoGaleria',
      title: 'Galería del Proceso',
      description: 'Sube las imágenes de tu proceso. La primera será la portada (Arte Final).',
      type: 'array',
      of: [
        defineField({
          name: 'paso',
          type: 'image',
          title: 'Imagen del Proceso',
          options: { hotspot: true },
          fields: [
            {
              name: 'descripcionPaso',
              type: 'string',
              title: '¿Qué paso es este?',
              placeholder: 'Ej: Boceto inicial, Lineart, Render final...'
            }
          ]
        })
      ],
      options: {
        layout: 'grid' 
      }
    }),
  ],
})