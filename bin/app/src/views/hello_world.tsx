import { h, Component, ComponentChild } from 'preact'

interface Props {

}

interface State {
  message: string
}

export default class HelloWorld extends Component<Props, State> {

  readonly state = {
    message: ''
  }

  public componentDidMount = (): void => {
    this.get()
  }

  private get = async (): Promise<void> => {
    const response = await fetch('api/hello_world')
    if (!response.ok) {
      this.setState({ message: 'Flask server is not running.' })
    }
    else {
      const data = await response.json()
      this.setState({ message: data.message })
    }

  }

  public render = (): ComponentChild => {
    const { message } = this.state
    return (
      <div>
        {message}
      </div>
    )
  }
}
