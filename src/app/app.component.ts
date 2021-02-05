import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';


@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  form = new FormGroup({});
  // 'ped': [ { "test": "1", "test1": "a" }, { "test": "2", "test1": "b" }, { "test": "3", "test1": "c" } ]
  model: any = {
    'ped': []
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'table',
      key: 'ped',
      templateOptions: {
        removeAddItem: false,
        removeLabelFields: true,
        theme: {
          table: {
            style: {},
            class: ''
          },
          thead: {
            general: {
              style: {},
              class: ''
            },
            tr: {
              style: {},
              class: ''
            },
            th: {
              style: {},
              class: ''
            }
          },
          tbody: {
            general: {
              style: {},
              class: ''
            },
            tr: {
              style: {},
              class: ''
            },
            td: {
              style: {},
              class: ''
            }
          }
        }
      },
      fieldArray: {
        fieldGroup: [
          {
              key: 'test',
              type: 'input',
              templateOptions: {
                  required: true,
                  label: 'Test',
                  appearance: 'outline',
                  tableFieldOptions: {
                    // className: 'w-10',
                    // theme: {
                    //   'max-width': '50px'
                    // }
                  }                  
              }
          },
          {
              key: 'testexp 1',
              type: 'input',
              templateOptions: {
                  required: true,
                  label: 'Test exp 1',
                  appearance: 'outline'
              },
              hideExpression: (model) => {
                return !model || !model['test'] ? true : false;
              }
          },
          { 
              key: 'test1',
              type: 'input',
              templateOptions: {
                  required: true,
                  label: 'Test 1',
                  appearance: 'outline'
              }
          },
          {
              key: 'testexp',
              type: 'input',
              templateOptions: {
                  required: true,
                  label: 'Test exp',
                  appearance: 'outline'
              },
              hideExpression: (model) => {
                return !model || !model['test'] ? true : false;
              }
          }
        ]
      }
    }
  ];

}