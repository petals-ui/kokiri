import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { FormFieldStructuralComponent } from '@kokiri/core/dist/form';
import ElFormItem from 'element-ui/lib/form-item';

import { getComponentName, convertSize } from '../../basic';

@Component({
  name: getComponentName('formField'),
})
export default class FormField extends FormFieldStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      showMessage: !this.hideMessage,
      required: this.required,
      label: this.label,
      error: this.message,
    };

    if (this.controlSize) {
      props.size = convertSize(this.controlSize);
    }

    const { width } = this.labelOption || {};

    if (width) {
      props.labelWidth = width;
    }

    return h(ElFormItem, { props }, this.$slots.default);
  }
}