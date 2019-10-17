import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    imports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatFormFieldModule
    ],
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
    ],
})
export class MaterialModule {}