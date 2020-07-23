export default {
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 18,
    },
    content: {
        textAlign: 'left',
    },
    field: {
        padding: 12,
        border: 'solid 1px #d8d8d8',
        borderRadius: 3,
        display: 'block',
        marginTop: 20,
        marginRight: 20,
        minWidth: '90%',
        resize: 'none',
        fontFamily: 'sans-serif',
        outline: 'none',
    },
    cancelButton: {
        padding: 5,
        margin: '5px 0px',
        borderRadius: 5,
        cursor: 'pointer',
        marginRight: 10,
        paddingRight: 20,
        marginLeft: 10,
        paddingLeft: 20,
    },
    saveButton: {
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
        boxShadow:'0px 2px 3px 0px #848484',
        trasnsition: '0.3s',
        '&:active': {
            boxShadow:'0px 0px 0px 0px #848484',
        }
    },
    row: {
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    },

    errorMessage: {
        color: '#ff4d22',
        fontSize: 12,
        paddingLeft: 6,
        
    }
}