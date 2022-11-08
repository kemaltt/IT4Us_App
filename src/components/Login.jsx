import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
export default function Login({ data, setIsLogin }) {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem('userData'))
  // }, [data])

  const userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData)

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
    } else {
      const [userEmail] = userData.filter((el) => {
        return el.userInfo.email === email
      })

      const [userPassword] = userData.filter((el) => {
        return el.userInfo.password === password
      })
      console.log(userEmail.userInfo.email)
      console.log(email)
      console.log(userEmail.userInfo.password)
      console.log(password)
      if (
        userPassword.userInfo.password === password &&
        userEmail.userInfo.email === email
      ) {
        setIsLogin(true)
        setTimeout(() => {
          navigate('/')
        }, 300)
        setMessage('Looks good!')
      } else if (userEmail !== email) {
        console.log('Please enter correct email')
        setMessage(
          <p style={{ color: 'red' }}>
            Please enter correct email or password
          </p>,
        )
      } else if (userPassword !== password) {
        console.log('Please enter correct password')
        setMessage(
          <p style={{ color: 'red' }}>
            Please enter correct email or password
          </p>,
        )
      }
    }

    setValidated(true)
  }

  return (
    <div className="register_container">
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              placeholder="Email"
            />
            <Form.Control.Feedback>{message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback>{message}</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="login_btn">
          <Button type="submit">Login</Button>
          <Button onClick={() => navigate('/register')}>Register</Button>
        </div>
      </Form>
    </div>
  )
}
