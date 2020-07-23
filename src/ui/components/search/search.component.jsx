/** @jsx jsx */
import { jsx } from '@emotion/core'
import Style from './search.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
    const {onFilter} = props;

    const handleChange = (e) => {
        onFilter(e.target.value)
    };

    return (<div css={Style.wrapper}>
        <div css={Style.content}>
            <div css={Style.searchButton}><FontAwesomeIcon icon={faSearch} /></div>
            <input css={Style.input} onChange={handleChange} type="search" />

        </div>
        
    </div>);
};

export default Search;
