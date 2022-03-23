// import React from 'react'
// import './Button.css'
// import styled from 'styled-components'

import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  cursor: pointer;
  &:hover {
    background: #ac0e77;
    border-color: #ac0e77;
  }
  `
// export default function Button(prop) {
//   return (
//     <div>
//       <button className='button' type={prop.type}>{prop.children}</button>
//     </div>
//   )
// }

export default Button;
