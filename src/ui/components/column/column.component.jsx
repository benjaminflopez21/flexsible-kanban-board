/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './column.style';

const Column = (props) => {
    const {
        title,
    } = props;
    return (<div css={Style.wrapper}>
        <div css={Style.content}>
             <header css={Style.header}>
                <h2 css={Style.headerText}>{title}</h2>
            </header>
            <main css={Style.main}>
                {props.children}
            </main>
            <footer css={Style.footer}>
            </footer>
        </div>
    </div>);
};

Column.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Column;
