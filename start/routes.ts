/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }

})

Route.group(()=>{
  Route.get('/listar-usuarios','UsuariosController.getListarUsuarios')
  Route.get('/buscar-id/:id','UsuariosController.buscarPorId')
  Route.put('/actualizar/:id','UsuariosController.actualizarUsuario')
  Route.delete('/eliminar-usuario/:id','UsuariosController.eliminarUsuario')
  Route.get('/filtrar-usuario/:name','UsuariosController.filtrarPorNombre')
  Route.get('/listar-perfil','PerfilsController.getListarUsuariosYPerfil')
  Route.get('/listar-publicaciones','PublicacionController.getListarUsuariosGrupos')

  Route.post('/registro-usuarios','UsuariosController.setRegistrarUsuarios')
  Route.post('/registro-perfil','PerfilsController.setRegistrarPerfil')
  Route.post('/registro-publicacion','PublicacionController.setRegistroPublicacion')
  Route.post('/registro-grupo','GruposController.setRegistrarGrupo')
  Route.post('/registro-usuario-grupo','GrupoUsuariosController.setRegistrarUsuarioGrupo')

}).prefix('/api')
