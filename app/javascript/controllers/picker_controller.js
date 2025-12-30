import { Controller } from "@hotwired/stimulus"
import AirDatepicker from "air-datepicker"
import ptBR from "air-datepicker/locale/pt-BR"

export default class extends Controller {
  static targets = [ "input" ]

  connect() {
    console.log("Picker controller connected.")

    this.inputTarget.addEventListener("click", this.close)
    this.inputTarget.addEventListener("input", this.close)
  }

  createPicker() {
    this.datepicker = new AirDatepicker(this.inputTarget, {
      locale: ptBR,
      autoClose: true,
      dateFormat: "dd/MM/yyyy",
      showEvent: "",
      isMobile: true
    })
  }

  open() {
    if (!this.datepicker) { this.createPicker() } // Lazy loads.

    const [ day, month, year ] = this.inputTarget.value.trim().split("/")
    const parsed = new Date(year, month - 1, day)

    if (!isNaN(parsed)) {
      this.datepicker.selectDate(parsed)
      this.datepicker.setViewDate(parsed)
    }

    this.inputTarget.focus() // Non mobile will close dialog on outfocus.
    this.datepicker.show()
    this.inputTarget.readOnly = false
  }

  close = () => {
    if (this.datepicker && this.datepicker.visible) { this.datepicker.hide() }

    this.inputTarget.focus() // Looses focus on dialog close.
  }

  disconnect() {
    console.log("Picker controller disconnected.")

    this.close()
    this.inputTarget.removeEventListener("click", this.close)
    this.inputTarget.removeEventListener("input", this.close)
  }
}
