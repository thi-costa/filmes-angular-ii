import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, debounceTime, filter } from 'rxjs';
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
  subject = new Subject<string>();

  public form: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {
    this.initForm();
    this.subscribeFormChanges();
  }

  public initForm() {
    this.form = this._formBuilder.group({
      name_like: [],
    });
  }

  public clearForm(event: SubmitEvent) {
    event.preventDefault();
    this.form.reset();
    const params: MovieParamsType = removeNonValueFields(this.form.value);
    console.log('Parameters:  ', params);
    console.log('Parameters:  ', removeNonValueFields(this.form.value));
    this.onSearch.emit(params);
  }

  subscribeFormChanges(): void {
    // Subscribe to form control changes and apply filtering logic
    this.form.valueChanges.subscribe((formValue) => {
      this.applyFilter(formValue);
    });
  }

  applyFilter(filterData: MovieParamsType): void {
    // Your filtering logic here based on the filterData
    // For example, update the movie list based on the applied filters
    // You can call a service or filter the data locally
    this.onSearch.emit(filterData);
  }

  public searchMovies(searchValue: string) {
    this.subject.next(searchValue);
  }

  // setConfigSubject(): void {
  //   this.subject
  //     .pipe(
  //       debounceTime(1000),
  //       filter((value) => value.length >= 3 || value == '')
  //     )
  //     .subscribe((searchValue: string) => {
  //       this. (searchValue);
  //     });
  // }
}
