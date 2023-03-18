import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-title-body-input',
  templateUrl: './title-body-input.component.html',
  styleUrls: ['./title-body-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TitleBodyInputComponent),
      multi: true,
    },
  ],
})
export class TitleBodyInputComponent implements ControlValueAccessor {
  title = new FormControl('', Validators.required);
  body = new FormControl('', Validators.required);

  private onChange: (value: { title: string; body: string }) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: { title: string; body: string }): void {
    if (value) {
      this.title.setValue(value.title, { emitEvent: false });
      this.body.setValue(value.body, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: { title: string; body: string }) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.title.disable();
      this.body.disable();
    } else {
      this.title.enable();
      this.body.enable();
    }
  }

  onTitleBodyChange(): void {
    this.onChange({
      title: this.title.value ?? '',
      body: this.body.value ?? '',
    });
    this.onTouched();
  }
}
