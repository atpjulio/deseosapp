import { NgModule } from '@angular/core';
import { PlaceholderPipe } from './placeholder/placeholder';
import { PendientesPipe } from './pendientes/pendientes';
@NgModule({
	declarations: [PlaceholderPipe,
    PendientesPipe],
	imports: [],
	exports: [PlaceholderPipe,
    PendientesPipe]
})
export class PipesModule {}
