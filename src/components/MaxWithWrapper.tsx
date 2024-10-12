import { ReactNode } from "react";
import style from './components.module.css'; 

interface MaxWithWrapperProps {
  className?: string; 
  children: ReactNode; 
}

const MaxWithWrapper = ({ className, children }: MaxWithWrapperProps) => {
  return (
    <div style={{ margin:" 0 25px"}}>
      {children}
    </div>
  );
}

export default MaxWithWrapper;
