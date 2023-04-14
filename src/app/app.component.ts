import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../Order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ui-app';
  datasource : Order [] = [];
  displayedColumns: string[] = ['id', 'orderDate', 'shippingAddress.addressLine1', 
  'shippingAddress.city', 'shippingAddress.state','shippingAddress.zipcode'];

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.getOders().subscribe (data => {
      this.datasource = data;
      debugger;
    })
  }

  getOders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:4752/order');
  }
}
