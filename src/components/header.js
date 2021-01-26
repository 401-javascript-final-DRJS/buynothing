import { Header, Icon, Grid} from 'semantic-ui-react'
import Avatar from '../components/avatar/avatar.js'

// import Login from '../context/auth/login.js';

export default function HeaderComponent() {

  return (

    <Grid>

      <Grid.Column width={3}></Grid.Column>

      <Grid.Column width={10}>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>BuyNothing</Header.Content>
        </Header>
      </Grid.Column>

      <Grid.Column width={3}>
        <Avatar />
        {/* <Login /> */}
      </Grid.Column>

    </Grid>

  )
}
