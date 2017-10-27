export default ({
  control: {
      width: '100%',
      margin: 0,
      backgroundColor: '#fff',
      fontSize: '16px',
      fontWeight: 'normal',
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif'
  },

  input: {
    margin: 0,
  },

  '&singleLine': {
    control: {
      display: 'inline-block',
      width: '100%',
    },

    highlighter: {
      padding: '12px',
      fontSize: '16px',
    },

    input: {
      fontSize: '16px',
      border: '1px solid #D0D2D3',
      padding: '12px',
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },

  '&multiLine': {
    highlighter: {
      padding: '12px',
      fontSize: '16px',
    },

    input: {
      fontSize: '16px',
      minHeight: '65px',
      border: '1px solid #D0D2D3',
      padding: '12px',
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },

  suggestions: {
    zIndex: 999,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.14)',
    margin: '18px 0 0 0',
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 13,
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: 400
    },

    item: {
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
      padding: '12px',
      color : '#333E48',
      wordWrap: 'break-word',
      borderBottom: '1px solid rgb(204, 204, 204)',
      '&focused': {
        backgroundColor: '#edeeee',
      },
    },
  },
})
