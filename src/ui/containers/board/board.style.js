export default {
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#2e465b',
    },
    board: {
        height: 'calc(100% - 75px)',
        display: 'flex',
        flexDirection: 'column',
        marginRight: 0,
        position: 'relative',
        transition: 'margin .1s ease-in',
    },
    innerBoard: {
        position: 'relative',
        flexGrow: 1,
    },
    content: {
        userSelect: 'none',
        whiteSpace: 'nowrap',
        marginBottom: '8px',
        overflowX: 'auto',
        overflowY: 'hidden',
        paddingBottom: '8px',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        textAlign: 'left',
    },

    toast: {
        textAlign: 'left',
        '& .Toastify__toast--success': {
            borderRadius: 5,
            background: '#4caf50',
        },
        '& .Toastify__toast--error': {
            borderRadius: 5,
            background: '#f44336',
        }

    },

    newCardutton: {
        padding: 5,
        color: '#fff',
        background: '#fd7250',
        margin: '5px 0px',
        borderRadius: 5,
        cursor: 'pointer',
        marginRight: 10,
        paddingRight: 20,
        marginLeft: 10,
        paddingLeft: 20,
        boxShadow: '0px 2px 3px 0px #00000066',
        trasnsition: '0.3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 500,
        height: '56%',
        '&:active': {
            boxShadow:'0px 0px 0px 0px #848484',
        },
        '@media (max-width: 420px)': {
            display: 'none',
        }
        
    },
    newCarduttonMin: {
        padding: 5,
        color: '#fff',
        background: '#fd7250',
        margin: '5px 0px',
        borderRadius: 5,
        cursor: 'pointer',
        marginRight: 10,
        paddingRight: 20,
        marginLeft: 10,
        paddingLeft: 20,
        boxShadow: '0px 2px 3px 0px #00000066',
        trasnsition: '0.3s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 500,
        height: '56%',
        '&:active': {
            boxShadow:'0px 0px 0px 0px #848484',
        },
        '@media (min-width: 420px)': {
            display: 'none',
        }
        
    },
    logo: {
        height: '65%',
        margin: '0 28px 0 14px',
        '@media (max-width: 650px)': {
            objectFit: 'cover',
            objectPosition: '-49px',
            width: '39px',
            margin: '0 5px',
        },
    }
}