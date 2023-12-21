import cn from 'classnames';
import { InputStyled } from './style';

const Input = ({ classname, ...props }) => <InputStyled className={cn('main-input', classname)} {...props} />;

export { Input };
