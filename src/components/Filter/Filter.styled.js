import styled from "styled-components";

export const Label = styled.label`
    font-size: ${p => p.theme.fontSizes.l};
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
    width: ${p => p.theme.sizes.form};
`;