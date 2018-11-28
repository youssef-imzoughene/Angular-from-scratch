import { Directive, ElementRef,HostListener,Input } from '@angular/core';
import { on } from 'cluster';

@Directive({
  selector: '[pkmnBorderCard]' 
})
export class BorderCardDirective {
	constructor(private el: ElementRef) {
		this.setBorder('#f5f5f5');
		this.setHeight(180);
	}
    @Input('pkmnBorderCard') borderColor : string; //alias
    @HostListener('mouseenter') onmouseenter(){
        this.setBorder(this.borderColor || '#009688');
    }

    @HostListener('mouseleave') onmouseleave(){
        this.setBorder('#f5f5f5');
    }

   

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}