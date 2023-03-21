import {
  Avatar,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  useToast,
  Link,
} from '@chakra-ui/react'
import { useAuthContext } from '@src/feature/auth/provider/AuthProvider'
import { FirebaseError } from '@firebase/util'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from '@src/hooks/useRouter/useRouter'
import NextLink from 'next/link'
import { Navigate } from '../Navigate/Navigate'

export const Header = () => {
  const { user } = useAuthContext()
  const toast = useToast()
  const { push } = useRouter()

  const handleSignOut = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      toast({
        title: 'ログアウトしました',
        status: 'success',
        position: 'top',
      })
      push((path) => path.signin.$url())
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }
  return (
    <chakra.header py={4} bgColor={'blue.600'}>
      <Container maxW={'container.lg'}>
        <Flex>
          <Navigate href={(path) => path.$url()}>
            <Heading color={'white'}>Firebase Realtime Chat</Heading>
          </Navigate>
          <Spacer aria-hidden />
          {user ? (
            <Menu>
              <MenuButton>
                <Avatar flexShrink={0} width={10} height={10} />
              </MenuButton>
              <MenuList py={0}>
                <MenuItem onClick={handleSignOut}>サインアウト</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Navigate href={(path) => path.signin.$url()}>
              <Button colorScheme={'teal'}>サインイン</Button>
            </Navigate>
          )}
        </Flex>
      </Container>
    </chakra.header>
  )
}