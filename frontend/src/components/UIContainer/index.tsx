import React from 'react';
import styles from './styles.module.scss';

interface IUIContainerProps {
    text?: string;
    visible?: boolean;
}

const UIContainer: React.FC<IUIContainerProps> = ({children, text, visible}) => {
    return (
      <>
      {visible ? 
      <div className={styles.uiContainer}>
            <div className={styles.text}>{text}</div>
          {children}
      </div> : null}
      </>
    );
  };
  
export default UIContainer;
  