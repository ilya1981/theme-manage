import React  from 'react';
import { type ThemeType } from '../types';
interface ManageThemeProps {
  theme: ThemeType;
}

export function manageTheme<P extends object>(
  WrappedComponent: React.ComponentType<P & ManageThemeProps>
) {
  const ComponentManageTheme = React.forwardRef<unknown, P & ManageThemeProps>(
    (props, ref) => {
      return <WrappedComponent {...props} ref={ref} />;
    }
  );

  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  ComponentManageTheme.displayName = `manageTheme(${wrappedComponentName})`;

  return ComponentManageTheme;
}
