import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieParamsType } from 'src/app/types/movieParams';
import { removeNonValueFields } from 'src/app/utils/objectUtil';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() onSearch: EventEmitter<MovieParamsType> =
    new EventEmitter<MovieParamsType>();

  public form: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {
    this.initForm();
  }

  public initForm() {
    this.form = this._formBuilder.group({
      name_like: []
    });
  }

  public getBy(event: SubmitEvent) {
    event.preventDefault();
    const params: MovieParamsType = removeNonValueFields(this.form.value);
    this.onSearch.emit(params);
  }
}
