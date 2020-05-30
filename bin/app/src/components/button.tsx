import { h, Component, ComponentChild } from 'preact'

interface Props {

}

interface State {

}

export default class Button extends Component<Props, State> {

  public render = (): ComponentChild => {
    return (
      <button type="button">Click me!</button>
    )
  }
}
