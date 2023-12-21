import cn from 'classnames';
import { MessageText } from './style';

const Message = ({ classname, children, ...props }) => (
  <MessageText className={cn('message', classname)} {...props}>
    {children}
  </MessageText>
);

export { Message };
