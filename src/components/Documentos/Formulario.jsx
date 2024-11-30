import React, { useState, useEffect } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <h1 style={isMobile ? { ...styles.title, fontSize: '20px', margin: '20px' } : styles.title} >
        Entre em contato com a regularização:
      </h1>
      <div style={isMobile ? { ...styles.container, width: '90%', padding: '10px', height: 'auto' } : styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={isMobile ? { ...styles.jhow, flexDirection: 'column', gap: '10px' } : styles.jhow}>
            <div style={styles.inputGroup}>
              <input
                placeholder='Nome:'
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                style={isMobile ? { ...styles.input, width: '82vw', margin: '5px 0' } : styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                placeholder='E-mail:'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={isMobile ? { ...styles.input, width: '82vw', margin: '5px 0' } : styles.input}
              />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <textarea
              name="mensagem"
              placeholder="Mensagem:"
              value={formData.mensagem}
              onChange={handleChange}
              style={isMobile ? { ...styles.textarea, width: '100%', height: '200px', resize: 'none' } : { ...styles.textarea, resize: 'none' }}
            />
          </div>
          <div style={isMobile ? { ...styles.buttonContainer, position: 'static', marginTop: '10px', justifyContent: 'center' } : styles.buttonContainer}>
            <button type="submit" style={styles.button}>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#1A5276',
    padding: '20px',
    borderRadius: '10px',
    width: '1000px',
    height: '650px',
    margin: '0 auto',
    marginBottom: '50px',
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    color: '#000000',
    fontSize: '26px',
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
    backgroundColor: '#FF6926',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
  },

  jhow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
};

export default Formulario;