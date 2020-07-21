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
        height: '100%',
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
    }

}