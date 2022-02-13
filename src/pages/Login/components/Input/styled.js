import styled from "styled-components";
import { ErrorMessage} from 'formik';

// .border-error {
//   border: 1px solid red;
// }





export const StyledError = styled(ErrorMessage)`
  width: 350px;
  position: absolute;
  font-size: 12px;
  line-height: 12px;
  color: #ff0000;
  left: 10px;
  top: 50px; 
`;

export const StyleInput = styled.input`
  box-sizing: border-box;
  background: #f5f8fa;
  border-radius: 8px;
  width: 350px;
  height: 45px;
  padding: 0 0 0 40px;
  outline: none;
  border: 1px solid #dbe0e4;
`;


export const FormGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
`; 
  
export const IconEye = styled.img`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  width: 25px;
  height: auto;
  cursor: pointer;
  padding: 3px;
`; 

export const StyledInputIcon = styled.img`
   position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  width: 20px;
  height: auto;
`; 
  
  




