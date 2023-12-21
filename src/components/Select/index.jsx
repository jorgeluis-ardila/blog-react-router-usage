import cn from 'classnames';
import { SelectStyled } from './style';

const Select = ({ classname, ...props }) => <SelectStyled className={cn('main-select', classname)} {...props} />;

export { Select };
