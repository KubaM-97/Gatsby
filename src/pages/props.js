import React from "react"
import styled from "styled-components"
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)
export default function UsersList() {
  return (
    <Container>
      <h1>About Styled Components</h1>
      <p>Styled Components is cool</p>
      <User
        username="Will Smith"
        avatar="https://images.freeimages.com/images/large-previews/e6b/yellow-beetle-1366999.jpg"
        excerpt="Bee"
      />
      <User
        username="Will Smith 2"
        avatar="https://images.freeimages.com/images/large-previews/0d6/blue-flowers-with-macro-4-1400913.jpg"
        excerpt="Purple flower"
      />
    </Container>
  )
}