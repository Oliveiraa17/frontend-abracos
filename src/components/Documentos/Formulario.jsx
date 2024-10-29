import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <>
      <h1 style={styles.title}>Entre em contato com a regularização:</h1>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.jhow}>
            <div style={styles.inputGroup}>
              {/* <label style={{color: '#fff'}}>Nome:</label> */}
              <input
                placeholder='Nome:'
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              {/* <label style={{color: '#fff'}}>E-mail:</label> */}
              <input
                placeholder='E-mail::'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.inputGroup}>
            {/* <label style={{color: '#fff'}}>Mensagem:</label> */}
            <textarea
              name="mensagem"
              placeholder='Mensagem:'
              value={formData.mensagem}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#FF6600', 
    padding: '20px',
    borderRadius: '10px',
    width: '1000px', 
    height: '650px', 
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative', 
  },
  title: {
    color: '#000000', 
    fontSize: '30px', 
    marginBottom: '20px',
    textAlign: 'center', 
    margin: '50px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    height: '100%',
    paddingBottom: '50px', 
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  input: {
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '400px',
    margin: '10px 0px',

  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '90%',
    height: '400px',
    margin: 'auto'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: '20px',
    right: '20px',
  },
  button: {
    backgroundColor: '#1a5276',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  },
  jhow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }

};

export default Formulario;
