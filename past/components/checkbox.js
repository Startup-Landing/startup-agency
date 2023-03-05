/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { RiCheckboxBlankFill, RiCheckboxFill } from 'react-icons/ri';
import { jsx, Flex } from 'theme-ui';
import { rgba } from 'polished';

const Checkbox = ({ id, label, onClick, checked, onChange, sx, ...props }) => {
  return (
    <Flex sx={styles.checkbox} className={checked ? 'checked' : ''}>
      {checked ? (
        <RiCheckboxFill size="24px" />
      ) : (
        <RiCheckboxBlankFill size="24px" />
      )}
      <input
        id={id}
        type="checkbox"
        checked={checked ?? checked}
        onChange={onChange}
        {...props}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </Flex>
  );
};

export default React.memo(Checkbox);

const styles = {
  checkbox: {
    // backgroundColor: '#EFF3F7',
    position: 'relative',
    borderRadius: '4px',
    alignItems: 'center',
    svg: {
      position: 'absolute',
      borderRadius: 4,
      left: 0,
      top: '-5px',
      path: {
        color: '#EFF3F7',
      },
    },
    input: {
      position: 'absolute',
      opacity: 0,
      visibility: 'hidden',
    },
    label: {
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: 1,
      color: rgba('#9095AD', 0.9),
      paddingLeft: 30,
      zIndex: 10,
    },
    '&.checked': {
      'svg path': {
        color: 'secondary',
      },
    },
  },
};
