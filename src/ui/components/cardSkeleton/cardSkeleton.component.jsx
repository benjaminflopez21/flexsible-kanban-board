/** @jsx jsx */
import { jsx } from '@emotion/core'
import Style from './cardSkeleton.style';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
    return (<div css={Style.card}>
        <div css={Style.content}>
            <Skeleton css={Style.title}/>
            <Skeleton count={2} css={Style.description}/> 
            <div css={Style.row}>
                <Skeleton height={16} width={60}/>
                <Skeleton height={16} width={80}/>
            </div>
            <Skeleton height={13} width={100}/>
        </div>
        
    </div>);
};

export default CardSkeleton;
