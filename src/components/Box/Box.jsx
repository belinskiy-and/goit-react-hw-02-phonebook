import styled from "styled-components";
import { color, border, space, typography, layout } from 'styled-system';

const Box = styled('div')(
    color,
    border,
    space,
    typography,
    layout,
);

export default Box;