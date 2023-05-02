import { Component, Input, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{

  @Input() columnas! : string[];
  @Input() data!: any[];

  exportColumns!: any[];

  ngOnInit(): void {


  }


//   exportPdf() {
//     import('jspdf').then((jsPDF) => {
//         import('jspdf-autotable').then((x) => {
//             const doc = new jsPDF.default('p', 'px', 'a4');
//             (doc as any).autoTable(this.exportColumns, this.data);
//             doc.save('products.pdf');
//         });
//     });
// }


}
