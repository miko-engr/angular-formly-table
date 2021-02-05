import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { TableType, HideColumnsBodyPipe } from './table-type.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [{
        name: 'table',
        component: TableType
      }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [
    TableType,
    AppComponent,
    HideColumnsBodyPipe
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */