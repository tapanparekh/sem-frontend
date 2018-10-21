import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Basic YWRtaW46YWRtaW4=')
    .set('x-api-key', `tp@123`);
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:8088/sem/index.php/api/product/product', { headers: this.headers });
  }

  sendQuotation(quotationDetail): Observable<any> {
    var data = "name=" + quotationDetail.name + "&address=" + quotationDetail.address + "&email=" + quotationDetail.email + "&products=" + quotationDetail.products.join(',') + "&multiplayingFactor=" + quotationDetail.multiplayingFactor;
    return this.http.post('http://localhost:8088/sem/index.php/api/product/pdf', data, { headers: this.headers });
  }
}
