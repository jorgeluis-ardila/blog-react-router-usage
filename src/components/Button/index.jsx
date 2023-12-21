import cn from 'classnames';
import { ButtonStyled } from './style';

const Button = ({ className, children, ...props }) => {
  return (
    <ButtonStyled className={cn('main-button', className)} {...props}>
      {children}
    </ButtonStyled>
  );
};

export { Button };
