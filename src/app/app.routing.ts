//importar los modulos de routing de angular
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componente que tengan paginas principales
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from  './components/formulario/formulario.component';


//Crear un Array de objetos (path de componentes)
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:nombre', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'formulario/:last', component: FormularioComponent}
]

//Exportar esa clase para el app module
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);