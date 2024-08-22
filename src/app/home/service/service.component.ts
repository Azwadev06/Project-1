import { Component, inject, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
service: any;
servicesService = inject(ServicesService);
services: {
image: any;
title: string, description: string
}[] = [];

ngOnInit(){
    this.services = this.servicesService.services;
}

}
