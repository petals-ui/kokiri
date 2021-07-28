import { getComponentConfig, BaseHeadlessComponent } from '@petals/basic';

import { INavMenuItemGroupComponent } from '../typing';

class NavMenuItemGroupHeadlessComponent extends BaseHeadlessComponent<INavMenuItemGroupComponent> {
  public getComponentName(): string {
    return getComponentConfig('navMenuItemGroup', 'name') || 'NavMenuItemGroup';
  }
}

export { NavMenuItemGroupHeadlessComponent };
