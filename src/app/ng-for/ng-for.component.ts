import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  arrayFotos: any = [
    {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngVozMMrNPhA2WkVeXm0lZzulY2UmeirDvQ&usqp=CAU",
       description:"Centu"
     },
     {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheQkpSYor3V6_zKVwo1FWAXre7P4FC1YpGQ&usqp=CAU",
       description:"Mati"
     },
     {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjVIEa4SofD0404OvxoKnD5IUM7MMhSGKVA&usqp=CAU",
       description:"Paolo"
     },
     {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7whTaNPmKXD__gI6NG8GRfy7b0pzGOkxlAA&usqp=CAU",
       description:"Enzo"
     },
     {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZPjv-a-jNWvA6_RfqnW4NqP1VL4ZwpxDKQ&usqp=CAU",
       description:"Diego"
     }
   ]
}
