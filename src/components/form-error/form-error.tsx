import { Error } from './form-error.styled'

export default function FormError(props: any) {
  const { message, ...restProps } = props

  return (
    <Error {...restProps}>
      {message}
    </Error>
  )
}