import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskViewComponent } from "./pages/task-view/task-view.component";

const routs:Routes=[
    {path:'',component:TaskViewComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routs)],
    exports:[RouterModule]
})
export class AppRoutingModule {}