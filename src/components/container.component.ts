import { Component } from "@angular/core";

@Component({
    selector: 'container-component',
    template: `
    <Header></Header>
     <!-- Main -->
     <main class="px-10 max-h-[91vh]">
        <router-outlet></router-outlet>
    </main>
    <!-- Footer -->
    <footer></footer>

    `,
    styles: []
})
export class ContainerComponent {

}