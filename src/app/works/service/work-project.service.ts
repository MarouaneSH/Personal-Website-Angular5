import { Injectable } from '@angular/core';
import { Project } from './project.model';


const projects: Project[] = [
  {
    name: 'Landing page for a mobile app',
    categorie: 'web',
    url : 'http://subey.pro/PDFCreator/',
    technology:[
      "Angular",
      "Materialize.css"
    ],
    defaultImage: '1.png',
    screenshots: [
      {url : 'screenshoots/pdfcreator1.png'},
      {url : 'screenshoots/pdfcreator2.png'},
      {url : 'screenshoots/pdfcreator3.png'},
    ]
  },
  {
    name: 'Mlo-Hosting agency',
    categorie: 'web',
    url : 'http://mlo-hosting.com',
    defaultImage: 'mlohosting.png',
    technology:[
      "Laravel",
      "jQuery",
      "Modernizer.js",
      "Bootstrap",
    ],
    screenshots: [
      {url : 'screenshoots/mlohosting1.png'},
    ]
  },
  {
    name: 'Freelancer Platform',
    categorie: 'web',
    url : 'http://subey.pro/PDFCreator/',
    technology:[
      "Laravel",
      "VueJs",
      "Materialize.css"
    ],
    defaultImage: '2.png'
  },
  {
    name: 'PDF Creator app IOS/Android',
    categorie: 'mobile',
    description:'This app allow users to scan documents using phone camera and convert images into PDF Format',
    url : 'https://codecanyon.net/item/pdf-creator-scan-documents-convert-images-to-pdf/21399831',
    technology:[
      "Ionic",
      "Angular",
      "Cordova native"
    ],
    defaultImage: 'pdfcreatorapp.png',
    screenshots: [
      {url : 'screenshoots/pdfcreatorapp2.png'},
      {url : 'screenshoots/pdfcreatorapp3.png'},
    ]
  },
  {
    name: 'Mlo Consulting agency',
    categorie: 'web',
    url : 'http://www.mlo-consulting.com/',
    technology:[
      "Laravel",
    ],
    defaultImage: 'mloconsulting.png',
    screenshots: [
      {url : 'screenshoots/mloconsulting.png'},
    ]
  },




];


@Injectable()
export class WorkProjectService {

  public projects;
  constructor() {
    this.projects = projects;
   }

}
