import{
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy
} from '@angular/core';

import{Product} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input()
    product!: Product; //recibe propiedad desde otro componente
 
    @Output()
    productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();
    
    constructor(){ // se construye el componente
        console.log('1. Constructor');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('2. ngOnChange');
        console.log(changes);
    }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }   

    addCard(){
        console.log('añadir al carritoo');
        this.productClicked.emit(this.product.id); //emito el id del producto al componente 
    }


}