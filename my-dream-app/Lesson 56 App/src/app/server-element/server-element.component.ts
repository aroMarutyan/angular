import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  constructor() {
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
