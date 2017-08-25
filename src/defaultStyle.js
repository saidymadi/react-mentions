export default ({
  control: {
      display: 'inline-block',
      width: '100%',
      margin: '0',
      backgroundColor: '#fff',
      fontSize: '16px',
      fontWeight: 'normal',
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  input: {
    margin: '0',
  },

  '&singleLine': {
    control: {
     
    },

    highlighter: {
      padding: '12px',
      border: '2px inset transparent',
      fontSize: '16px',
    },

    input: {
      fontSize: '16px',
      border: '1px solid #D0D2D3',
      boxSizing: 'border-box',
      padding: '12px',
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },

  '&multiLine': {
    highlighter: {
      padding: '12px',
      border: '2px inset transparent',
      fontSize: '16px',
    },

    input: {
      fontSize: '16px',
      border: '1px solid #D0D2D3',
      boxSizing: 'border-box',
      padding: '12px',
      fontFamily: 'National2, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },

  suggestions: {
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 10,
    },

    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',

      '&focused': {
        backgroundColor: '#cee4e5',
      },
    },
  },
})
