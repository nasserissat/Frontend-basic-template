import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'page1-page',
    template: `
    <h1 class="text-3xl font-bold underline text-success">
        Hello world!
    </h1>
    `,
    styles: []
})
export class ExamplePage {
    constructor(private toastr: ToastrService) {
        this.showSuccess();
    }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}