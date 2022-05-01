import Nullstack from 'nullstack'

const key = 'tools__textarea'
export class Textarea extends Nullstack {
  text = ''

  async hydrate() {
    this.text = localStorage[key] || ''
  }

  saveText() {
    localStorage[key] = this.text
  }

  render() {
    return (
      <div>
        <textarea autofocus class="w-full p-4 text-white bg-slate-600" oninput={this.saveText} bind={this.text} />
      </div>
    )
  }
}
