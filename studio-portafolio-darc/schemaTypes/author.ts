export default {
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'text',
    },
  ],
}