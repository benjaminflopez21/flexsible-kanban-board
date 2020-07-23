/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Style from './column.style';
import CardSkeleton from '../cardSkeleton/cardSkeleton.component';
import React, { useMemo } from 'react';

const Column = React.forwardRef((props, ref) => {
    const {
        title,
        loading,
        placeHolderCount,
        isDraggingOver,
        ...rest
    } = props;

    const loadingComponents = useMemo(()=>{
        return [...new Array(placeHolderCount)].map((value, index) => {
            return <CardSkeleton key={index} />;
        });
    }, [placeHolderCount]);


    const hasChildren = useMemo(() => {
        if(!props.children) {
            return false;
        }
        return React.Children.count(props.children) > 0;
    }, [props.children])
    

    return (<div ref={ref} css={Style.wrapper} {...rest} >
        <div css={Style.content}>
             <header css={Style.header}>
                <h2 css={Style.headerText}>{title}</h2>
            </header>
            <main css={Style.main}>
                {
                    !loading 
                    ? props.children 
                    : loadingComponents
                }

                {
                   (!loading && !hasChildren && !isDraggingOver) && <span css={Style.emptyCard}>No cards here</span>
                }
            </main>
            <footer css={Style.footer}>
            </footer>
        </div>
    </div>);
});

Column.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    isDraggingOver: PropTypes.bool.isRequired,
    placeHolderCount: PropTypes.number.isRequired,
};

export default Column;
