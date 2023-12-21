import cn from 'classnames';
import { TextAreaStyled, TextAreaWrapper } from './style';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks';

const TextArea = ({ classname, children, onChange, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);

  const handleFocus = e => setIsFocused(true);

  const handleChange = e => onChange(e);

  const handleClickOutside = () => {
    setIsFocused(false);
    textareaRef.current.blur();
  };

  const wrapperRef = useOutsideClick(handleClickOutside);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.height = 'auto';
      wrapperRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [props.value]);

  return (
    <TextAreaWrapper
      ref={wrapperRef}
      onClick={() => textareaRef.current.focus()}
      className={cn({ focused: isFocused })}
    >
      <TextAreaStyled
        ref={textareaRef}
        className={cn('main-textarea', classname)}
        onChange={handleChange}
        onFocus={handleFocus}
        {...props}
      />
    </TextAreaWrapper>
  );
};

export { TextArea };
