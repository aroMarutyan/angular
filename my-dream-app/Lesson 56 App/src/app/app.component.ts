import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Test server", content: "Testing" },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    ServerName: string;
    ServerContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.ServerName,
      content: blueprintData.ServerContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }
}
