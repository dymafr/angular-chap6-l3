import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective implements OnInit {
  @HostListener("mouseenter", ["$event"]) private surligne(e: MouseEvent) {
    console.log(e);
    this.el.nativeElement.style.color = "red";
  }

  @HostListener("mouseleave") private normal() {
    this.el.nativeElement.style.color = "black";
  }

  @HostListener("window:click", ["$event"]) private test(e: MouseEvent) {
    console.log(e);
  }

  constructor(private el: ElementRef<HTMLLIElement>) {}

  ngOnInit() {}
}
