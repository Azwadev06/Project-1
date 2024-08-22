import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseService } from './Services/course.service';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { PopularComponent } from './home/popular/popular.component';
import { ServiceComponent } from './home/service/service.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesService } from './Services/services.service';
import { RoutingModule } from './routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CourseComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    CourseDetailsComponent,
    TestimonyComponent,
    ContactUsComponent,
    BannerComponent,
    PopularComponent,
    ServiceComponent,
    CheckoutComponent
  ], 
  imports: [
    BrowserModule,
    RoutingModule,
    // AppRoutingModule,
    FormsModule
  
  ],
  providers: [CourseService,
   ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
