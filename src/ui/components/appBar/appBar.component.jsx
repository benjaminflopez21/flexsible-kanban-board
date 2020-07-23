/** @jsx jsx */
import { jsx } from '@emotion/core'
import Style from './appBar.style';

const AppBar = (props) => {
    

    return (<div css={Style.wrapper}>
        <header css={Style.content}>
            {props.children}
        </header>
    </div>);
};

export default AppBar;
