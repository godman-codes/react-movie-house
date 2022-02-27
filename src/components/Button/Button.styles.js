import styled from "styled-components";

export const Wrapper = styled.button`
   display: block;
   font-size: var(--fontMed);
   color: var(--white);
   background: var(--darkGrey);
   border-radius: 30px;
   width: 25%;
   min-width: 200px;
   height: 60px;
   margin: 20px auto;
   outline: none;
   cursor: pointer;
   transition: all 0.3s;

   :hover {
      opacity: 0.8;
   }
`;
