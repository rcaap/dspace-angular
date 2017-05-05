import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../../../core/shared/item.model";
import { ItemPageSpecificFieldComponent } from "../item-page-specific-field.component";

@Component({
  selector: 'ds-item-page-uri-field',
  templateUrl: './item-page-uri-field.component.html'
})
export class ItemPageUriFieldComponent extends ItemPageSpecificFieldComponent implements OnInit {

  @Input() item: Item;
  separator : string;


  fields : string[] = [
    "dc.identifier.uri"
  ];
  label : string = "item.page.uri";

}
