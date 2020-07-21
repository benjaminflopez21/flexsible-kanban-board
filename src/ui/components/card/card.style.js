export default {
    card: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 0 rgba(9,30,66,.25)',
        cursor: 'pointer',
        display: 'block',
        margin: 0,
        marginBottom: '8px',
        maxWidth: '300px',
        minHeight: '20px',
        position: 'relative',
        textDecoration: 'none',
        zIndex: 0,
    },
    content: {
        padding: 8,
    },
    title: {
        margin: 0,
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 3,
        paddingRight: 35,
    },
    menu: {
        position: 'absolute',
        right: 19,
        top: 6,
        color: 'gray',
    },
    
    description: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        color: '#172b4d',
        marginBottom: 5,
    },
    row: {
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        fontSize: 14,
        fontWeight: 500,
        color: '#747479'
    },
    dueDate: {
        fontSize: 13,
        color: '#b7b7b7',
    }
}