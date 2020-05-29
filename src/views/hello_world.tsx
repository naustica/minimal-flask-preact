import { h, Component, ComponentChild } from 'preact'

interface Props {

}

interface State {

}

export default class HelloWorld extends Component<Props, State> {

  public render = (): ComponentChild => {
    return (
      <div>
        Hello World
      </div>
    )
  }
}
