/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input as InputField } from 'theme-ui';
import { rgba } from 'polished';

const Input = ({ ...props }) => {
  return <InputField sx={styles.input} {...props} />;
};

export default Input;

const styles = {
  input: {
    backgroundColor: '#EFF3F7',
    borderRadius: '5px',
    fontFamily: 'body',
    flexGrow: 1,
    p: ['0 24px'],
    height: 'auto',
    minHeight: '60px',
    width: 'auto',
    '::placeholder': {
      color: rgba('#02073E', 0.4),
    },
  },
};
