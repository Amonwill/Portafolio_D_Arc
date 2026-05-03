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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Haz clic en "Generate" después de escribir el título',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'estado',
      title: 'Estado del Proyecto',
      type: 'string',
      options: {
        list: [
          { title: 'En Proceso', value: 'PROCESO' },
          { title: 'Terminado', value: 'TERMINADO' },
        ],
        layout: 'radio' 
      },
      initialValue: 'TERMINADO'
    }),
    defineField({
      name: 'version',
      title: 'Versión del Dibujo',
      type: 'string',
      placeholder: 'Ej: 1.0.4',
      initialValue: '1.0.0'
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
      name: 'descripcionLargo',
      type: 'text',
      title: 'Descripción del Proyecto',
      description: 'Cuéntame la historia detrás de esta obra.'
    }),
    defineField({
      name: 'procesoGaleria',
      title: 'Galería del Proceso',
      description: 'Sube las imágenes de tu proceso. La primera será la portada (Arte Final).',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'descripcionPaso',
              type: 'string',
              title: '¿Qué paso es este?',
              placeholder: 'Ej: Boceto inicial, Lineart, Render final...'
            }
          ]
        }
      ],
      options: {
        layout: 'grid' 
      }
    }),
  ],
})