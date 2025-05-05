import './App.css'
import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="E-mail ou CPF" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
    </Form>
  );
}

export default App
