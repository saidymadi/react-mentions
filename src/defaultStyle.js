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
    zIndex: 9999,
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 14,
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },

    item: {
      padding: '12px 12px',
      borderBottom: '1px solid rgb(204, 204, 204)',
      '&focused': {
        backgroundColor: '#cee4e5',
      },
    },
  },
})
