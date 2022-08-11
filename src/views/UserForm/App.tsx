import { useState } from 'react'

import { Button, Card, Form, List, Modal } from '@components'

type User = {
  name: string
  age: string
}

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showModal, setShowModal] = useState(false)

  function handleChangeName(event: any) {
    setName(event.target.value)
  }

  function handleChangeAge(event: any) {
    setAge(event.target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()

    if (!name || !age) {
      setShowModal(true)
      return
    }

    setUsers(users => [...users, { name, age }])
    setName('')
    setAge('')
  }

  return (
    <>
      <Card className="mb-10">
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="user-name">Name</Form.Label>
          <Form.Input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={handleChangeName}
          />
          <Form.Label htmlFor="user-age">Age (Years)</Form.Label>
          <Form.Input
            type="text"
            placeholder="Enter age..."
            value={age}
            onChange={handleChangeAge}
          />
          <Button type="submit">Add User</Button>
        </Form>
      </Card>
      <Card>
        <List>
          {users.map(({ name, age }, index) => (
            <List.Item
              className={users.length - 1 === index ? 'border-none' : ''}
              key={`${name}-${age}`}
            >
              <span>
                {name} ({age} Years Old)
              </span>
            </List.Item>
          ))}
        </List>
      </Card>
      <Modal show={showModal}>
        <span>Oh SHit!</span>
      </Modal>
    </>
  )
}
