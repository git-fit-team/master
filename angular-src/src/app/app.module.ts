// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

// Component Imports
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ChatsComponent } from './components/chats/chats.component';
import { SettingsComponent } from './components/settings/settings.component';

// Service Imports
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { StartProfileComponent } from './components/start-profile/start-profile.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'chats', component: ChatsComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'progress', component: ProgressComponent},
  {path:'register', component: RegisterComponent},
  {path:'settings', component: SettingsComponent},
  {path:'user-profile', component: UserProfileComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    UserProfileComponent,
    ProgressComponent,
    ChatsComponent,
    SettingsComponent,
    StartProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }