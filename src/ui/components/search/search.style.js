export default {
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        background: '#fff',
        margin: '0 47px 0 20px',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        boxShadow: '0px 2px 3px 0px #00000066',
        '@media (max-width: 470px)': {
            margin: 0,
        }
    },
    input: {
        padding: '10px 9px',
        width: 180,
        border: 'none',
        outline: 'none',
    },
    searchButton:  {
        padding: 10,
        color: '#8c8c8c',
        background: '#fff',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 500,
    },

}