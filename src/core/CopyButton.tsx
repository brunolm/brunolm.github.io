import Nullstack, { NullstackClientContext } from 'nullstack'

interface Props {
  text: string
  className: string
}
export class CopyButton extends Nullstack<Props> {
  copyButtonText = 'copy'

  render({ className, text }: NullstackClientContext<Props>) {
    return (
      <button
        class={className}
        type="button"
        aria-label="Copy to clipboard"
        title="Copy to clipboard"
        onclick={() => {
          navigator.clipboard.writeText(text)
          this.copyButtonText = 'copied!'
          setTimeout(() => {
            this.copyButtonText = 'copy'
          }, 3000)
        }}
      >
        {this.copyButtonText}
      </button>
    )
  }
}
