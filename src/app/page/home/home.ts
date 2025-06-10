import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.ng.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
