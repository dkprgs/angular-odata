import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid
            productsBinding
            [pageSize]="10"
            [pageable]="true"
            [sortable]="true"
            [height]="270">
        <kendo-grid-column field="ProductID" ></kendo-grid-column>
        <kendo-grid-column field="ProductName"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" format="{0:c}"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock"></kendo-grid-column>
       </kendo-grid>
    `
})
export class AppComponent {
}

