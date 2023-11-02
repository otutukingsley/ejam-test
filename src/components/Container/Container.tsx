import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string
  children: ReactNode
}

const PageContainer = forwardRef(function PageContainer({
  as: Comp = 'div',
  className = "",
  children = null,
  ...rest
}: PageContainerProps, ref) {
  return (
    <Comp
      ref={ ref }
      className={ classnames('container', className) }
      { ...rest }
    >
      { children }
    </Comp>
  );
});

export default PageContainer;