import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const Header = styled.h1`
    font-size: ${ p => p.theme.fontSizes.xl};

`;

export const Label = styled.label`
    font-size: ${p => p.theme.fontSizes.l};
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
    width: ${p => p.theme.sizes.form};
`;

export const Input = styled(Field)`
    
`;

export const InputError = styled(ErrorMessage)`    
    color: ${p => p.theme.colors.error};
    font-size: ${p => p.theme.fontSizes.s};
`;